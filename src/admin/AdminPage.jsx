import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowUp, FaArrowDown, FaTrash, FaPlus, FaChevronDown } from "react-icons/fa";
import Logo from "../components/Logo";
import { supabase } from "../lib/supabase";
import { fetchContent, saveContent, mergeContent } from "../lib/content";
import defaultContent from "../content/defaultContent";
import schema, { emptyItem } from "./schema";
import { Field, iconBtn, move } from "./fields";

const DRAFT_KEY = "portfolio-admin-draft";

const readDraft = () => {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const writeDraft = (content) => {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(content));
  } catch {
    /* storage unavailable: draft just isn't remembered */
  }
};

/* ---------- Login ---------- */

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    if (err) setError(err.message);
    setBusy(false);
  };

  return (
    <div className="gradient_bg flex min-h-screen items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl">
        <Logo className="mx-auto h-20 w-auto" />
        <h1 className="mt-4 text-center text-xl font-bold text-brand-slate">Portfolio admin</h1>
        <label className="mt-6 block text-xs font-semibold uppercase tracking-wide text-brand-muted" htmlFor="admin-email">
          Email
        </label>
        <input
          id="admin-email"
          type="email"
          autoComplete="username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-teal focus:outline-none"
        />
        <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-brand-muted" htmlFor="admin-password">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-teal focus:outline-none"
        />
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        <button type="submit" disabled={busy} className="btn-brand mt-6 w-full justify-center">
          {busy ? "Signing in…" : "Sign in"}
        </button>
        <Link to="/" className="mt-4 block text-center text-sm text-brand-sea hover:underline">
          ← Back to site
        </Link>
      </form>
    </div>
  );
};

/* ---------- Section editors ---------- */

const ObjectEditor = ({ section, value, onChange }) => (
  <div className="grid gap-5 sm:grid-cols-2">
    {section.fields.map((f) => (
      <div key={f.name} className={f.type === "textarea" || f.type === "strings" || f.type === "image" || f.type === "file" ? "sm:col-span-2" : ""}>
        <Field field={f} value={value?.[f.name]} onChange={(v) => onChange({ ...value, [f.name]: v })} />
      </div>
    ))}
  </div>
);

ObjectEditor.propTypes = {
  section: PropTypes.object.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

const ListEditor = ({ section, value = [], onChange }) => {
  const [openId, setOpenId] = useState(null);
  const keyOf = (item, i) => item.id || `${section.key}-${i}`;

  const add = () => {
    const item = emptyItem(section);
    onChange([...value, item]);
    setOpenId(item.id);
  };

  return (
    <div className="space-y-3">
      {value.map((item, i) => {
        const k = keyOf(item, i);
        const open = openId === k;
        return (
          <div key={k} className="rounded-2xl border border-gray-200 bg-white">
            <div className="flex items-center gap-2 p-3">
              <button
                type="button"
                className="flex min-w-0 flex-1 items-center gap-2 text-left font-semibold text-brand-slate"
                onClick={() => setOpenId(open ? null : k)}
                aria-expanded={open}
              >
                <FaChevronDown className={`shrink-0 text-brand-muted transition ${open ? "" : "-rotate-90"}`} size={12} />
                <span className="truncate">{section.itemTitle(item)}</span>
              </button>
              <button type="button" className={iconBtn} disabled={i === 0} onClick={() => onChange(move(value, i, i - 1))} aria-label="Move up">
                <FaArrowUp size={11} />
              </button>
              <button type="button" className={iconBtn} disabled={i === value.length - 1} onClick={() => onChange(move(value, i, i + 1))} aria-label="Move down">
                <FaArrowDown size={11} />
              </button>
              <button
                type="button"
                className={`${iconBtn} hover:text-red-600`}
                aria-label="Delete"
                onClick={() => {
                  // eslint-disable-next-line no-alert
                  if (window.confirm(`Delete "${section.itemTitle(item)}"?`)) onChange(value.filter((_, j) => j !== i));
                }}
              >
                <FaTrash size={11} />
              </button>
            </div>
            {open && (
              <div className="border-t border-gray-100 p-4">
                <ObjectEditor section={section} value={item} onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))} />
              </div>
            )}
          </div>
        );
      })}
      <button type="button" onClick={add} className="btn-ghost !py-2">
        <FaPlus size={11} aria-hidden /> Add {section.label.replace(/s$/, "").toLowerCase()}
      </button>
    </div>
  );
};

ListEditor.propTypes = {
  section: PropTypes.object.isRequired,
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

/* ---------- Editor shell ---------- */

const Editor = ({ session }) => {
  const [content, setContent] = useState(null);
  const [savedJson, setSavedJson] = useState("");
  const [active, setActive] = useState(schema[0].key);
  const [status, setStatus] = useState({ kind: "", text: "" });
  const fileInput = useRef(null);
  const connected = Boolean(supabase);

  useEffect(() => {
    fetchContent().then(({ content: c, source }) => {
      const start = connected ? c : mergeContent(readDraft() || c);
      setContent(start);
      // Nothing stored in Supabase yet: leave it unsaved so the first save is possible.
      if (connected && source !== "supabase") setSavedJson("");
      else setSavedJson(JSON.stringify(connected ? c : readDraft() || c));
    });
  }, [connected]);

  const dirty = content && JSON.stringify(content) !== savedJson;

  useEffect(() => {
    if (!connected && content) writeDraft(content);
  }, [connected, content]);

  useEffect(() => {
    const warn = (e) => {
      if (dirty && connected) e.preventDefault();
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty, connected]);

  if (!content) return <p className="p-8 text-brand-sea">Loading content…</p>;

  const section = schema.find((s) => s.key === active);

  const save = async () => {
    setStatus({ kind: "busy", text: "Saving…" });
    try {
      await saveContent(content);
      setSavedJson(JSON.stringify(content));
      setStatus({ kind: "ok", text: "Saved. Your site is updated." });
    } catch (err) {
      setStatus({ kind: "error", text: `Save failed: ${err.message}` });
    }
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "portfolio-content.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importJson = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      setContent(mergeContent(JSON.parse(await file.text())));
      setStatus({ kind: "ok", text: "Imported. Review, then save." });
    } catch {
      setStatus({ kind: "error", text: "That file isn't valid portfolio JSON." });
    }
  };

  const resetDefaults = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm("Replace everything in the editor with the built-in default content?")) {
      setContent(defaultContent);
      setStatus({ kind: "", text: "" });
    }
  };

  const statusColor = { ok: "text-emerald-700", error: "text-red-600", busy: "text-brand-sea" }[status.kind] || "";

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="gradient_bg sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
          <Logo className="h-11 w-auto" light showWordmark />
          <span className="text-sm font-semibold text-brand-cream">Admin</span>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            <Link to="/" target="_blank" className="rounded-full px-3 py-1.5 text-sm text-brand-mist hover:text-brand-cream">
              View site ↗
            </Link>
            {connected ? (
              <button type="button" onClick={save} disabled={!dirty || status.kind === "busy"} className="btn-brand !py-1.5 disabled:opacity-50">
                {dirty ? "Save changes" : "Saved"}
              </button>
            ) : (
              <button type="button" onClick={exportJson} className="btn-brand !py-1.5">
                Export JSON
              </button>
            )}
            {session && (
              <button type="button" onClick={() => supabase.auth.signOut()} className="rounded-full px-3 py-1.5 text-sm text-brand-mist hover:text-brand-cream">
                Sign out
              </button>
            )}
          </div>
        </div>
      </header>

      {!connected && (
        <div className="mx-auto mt-4 max-w-6xl px-4">
          <p className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Not connected to Supabase.</strong> Edits are kept only in this browser. Use <em>Export JSON</em> to
            back them up. Once you add your Supabase keys, sign in here and your changes go live for everyone.
          </p>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[200px_1fr]">
        <nav aria-label="Sections" className="md:sticky md:top-20 md:self-start">
          <label htmlFor="section-select" className="sr-only">
            Section
          </label>
          <select
            id="section-select"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 md:hidden"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
            {schema.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
          <ul className="hidden space-y-1 md:block">
            {schema.map((s) => (
              <li key={s.key}>
                <button
                  type="button"
                  onClick={() => setActive(s.key)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium ${
                    active === s.key ? "gradient_bg-2 text-brand-cream" : "text-brand-slate hover:bg-white"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 hidden space-y-2 border-t border-gray-200 pt-4 text-sm md:block">
            {connected && (
              <button type="button" onClick={exportJson} className="block text-brand-sea hover:underline">
                Export JSON backup
              </button>
            )}
            <button type="button" onClick={() => fileInput.current?.click()} className="block text-brand-sea hover:underline">
              Import JSON
            </button>
            <button type="button" onClick={resetDefaults} className="block text-brand-sea hover:underline">
              Reset to defaults
            </button>
          </div>
          <input ref={fileInput} type="file" accept="application/json" className="sr-only" onChange={importJson} />
        </nav>

        <main className="min-w-0 rounded-3xl bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h1 className="text-xl font-bold text-brand-slate">{section.label}</h1>
              {section.help && <p className="mt-1 text-sm text-brand-muted">{section.help}</p>}
            </div>
            {status.text && <p className={`text-sm ${statusColor}`} role="status">{status.text}</p>}
          </div>
          {section.type === "object" ? (
            <ObjectEditor section={section} value={content[section.key]} onChange={(v) => setContent({ ...content, [section.key]: v })} />
          ) : (
            <ListEditor section={section} value={content[section.key]} onChange={(v) => setContent({ ...content, [section.key]: v })} />
          )}
          <div className="mt-8 flex flex-wrap gap-4 border-t border-gray-100 pt-4 text-sm md:hidden">
            {connected && (
              <button type="button" onClick={exportJson} className="text-brand-sea hover:underline">
                Export JSON
              </button>
            )}
            <button type="button" onClick={() => fileInput.current?.click()} className="text-brand-sea hover:underline">
              Import JSON
            </button>
            <button type="button" onClick={resetDefaults} className="text-brand-sea hover:underline">
              Reset to defaults
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

Editor.propTypes = { session: PropTypes.object };

/* ---------- Page ---------- */

const AdminPage = () => {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    if (!supabase) return undefined;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    document.title = "Admin · Portfolio";
  }, []);

  if (!supabase) return <Editor session={null} />;
  if (session === undefined) return <div className="gradient_bg min-h-screen" />;
  if (!session) return <Login />;
  return <Editor session={session} />;
};

export default AdminPage;
