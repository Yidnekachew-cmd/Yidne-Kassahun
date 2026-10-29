import { useId, useState } from "react";
import PropTypes from "prop-types";
import { FaArrowUp, FaArrowDown, FaTrash, FaPlus, FaUpload } from "react-icons/fa";
import { supabase } from "../lib/supabase";
import { uploadMedia } from "../lib/content";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-brand-slate focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30";

export const iconBtn =
  "inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-brand-sea hover:bg-gray-100 disabled:opacity-30";

export const move = (arr, from, to) => {
  const next = [...arr];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
};

const UploadButton = ({ accept, onUploaded }) => {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  if (!supabase) return null;

  const onChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      onUploaded(await uploadMedia(file));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  };

  return (
    <span className="flex items-center gap-2">
      <label className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-brand-sea hover:bg-gray-50">
        <FaUpload aria-hidden /> {busy ? "Uploading…" : "Upload"}
        <input type="file" accept={accept} className="sr-only" onChange={onChange} disabled={busy} />
      </label>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </span>
  );
};

UploadButton.propTypes = { accept: PropTypes.string, onUploaded: PropTypes.func.isRequired };

const StringList = ({ value = [], onChange, multiline }) => (
  <div className="space-y-2">
    {value.map((item, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={i} className="flex items-start gap-2">
        {multiline ? (
          <textarea
            className={`${inputClass} min-h-[64px]`}
            value={item}
            onChange={(e) => onChange(value.map((v, j) => (j === i ? e.target.value : v)))}
          />
        ) : (
          <input
            className={inputClass}
            value={item}
            onChange={(e) => onChange(value.map((v, j) => (j === i ? e.target.value : v)))}
          />
        )}
        <div className="flex shrink-0 gap-1">
          <button type="button" className={iconBtn} disabled={i === 0} onClick={() => onChange(move(value, i, i - 1))} aria-label="Move up">
            <FaArrowUp size={11} />
          </button>
          <button type="button" className={iconBtn} disabled={i === value.length - 1} onClick={() => onChange(move(value, i, i + 1))} aria-label="Move down">
            <FaArrowDown size={11} />
          </button>
          <button type="button" className={`${iconBtn} hover:text-red-600`} onClick={() => onChange(value.filter((_, j) => j !== i))} aria-label="Remove">
            <FaTrash size={11} />
          </button>
        </div>
      </div>
    ))}
    <button type="button" onClick={() => onChange([...value, ""])} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal hover:underline">
      <FaPlus size={10} aria-hidden /> Add
    </button>
  </div>
);

StringList.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  multiline: PropTypes.bool,
};

export const Field = ({ field, value, onChange }) => {
  const id = useId();
  let control;
  if (field.type === "strings") {
    control = <StringList value={value} onChange={onChange} multiline={field.multiline} />;
  } else if (field.type === "textarea") {
    control = <textarea id={id} className={`${inputClass} min-h-[88px]`} value={value || ""} onChange={(e) => onChange(e.target.value)} />;
  } else if (field.type === "image" || field.type === "file") {
    control = (
      <div className="space-y-2">
        <div className="flex flex-col gap-2 sm:flex-row">
          <input id={id} className={inputClass} value={value || ""} placeholder="https://…" onChange={(e) => onChange(e.target.value)} />
          <UploadButton accept={field.type === "image" ? "image/*" : ".pdf,application/pdf"} onUploaded={onChange} />
        </div>
        {field.type === "image" && value && <img src={value} alt="" className="h-20 w-20 rounded-lg border object-cover" />}
      </div>
    );
  } else {
    control = <input id={id} className={inputClass} value={value || ""} onChange={(e) => onChange(e.target.value)} />;
  }

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-semibold uppercase tracking-wide text-brand-muted">
        {field.label}
      </label>
      {control}
    </div>
  );
};

Field.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    multiline: PropTypes.bool,
  }).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onChange: PropTypes.func.isRequired,
};
