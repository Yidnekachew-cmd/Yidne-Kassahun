import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaArrowRight,
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useContent } from "../../lib/content";
import Reveal from "./Reveal";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const SectionHeader = ({ index, label, title, light = false, children }) => (
  <Reveal className="max-w-3xl">
    <p className={`eyebrow ${light ? "text-brand-sky" : "text-brand-tealdark"}`}>
      <span className="opacity-60">{"// "}</span>
      {index} — {label}
    </p>
    <h2 className={`mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl ${light ? "text-white" : "text-brand-ink"}`}>
      {title}
    </h2>
    {children && <p className={`mt-4 text-lg ${light ? "text-brand-mist" : "text-brand-sea"}`}>{children}</p>}
  </Reveal>
);

SectionHeader.propTypes = {
  index: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  light: PropTypes.bool,
  children: PropTypes.node,
};

/* ---------- Tool marquee ---------- */

// A skill group named like "Currently learning" is shown as in progress, not passed.
const isLearningGroup = (name) => /learning/i.test(name || "");

export const ToolMarquee = () => {
  const { skills } = useContent().content;
  const items = skills.filter((g) => !isLearningGroup(g.group)).flatMap((g) => g.items);
  const row = [...items, ...items];
  return (
    <div className="gradient_bg-2 relative overflow-hidden border-y border-white/10 py-4" aria-hidden>
      <div className="mask-fade-x">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm text-brand-cream/90">
          {row.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={i} className="flex items-center gap-10">
              {item}
              <span className="text-brand-sky">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------- About ---------- */

export const About = () => {
  const { profile, about, principles } = useContent().content;
  const [first, ...rest] = about.paragraphs;
  return (
    <section id="about" className="section-y relative isolate overflow-hidden bg-brand-paper">
      <div className="bg-grid-light absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,#000,transparent_80%)]" aria-hidden />
      <div className="absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-brand-blush/50 blur-[100px]" aria-hidden />
      <div className="absolute -left-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand-mint/70 blur-[100px]" aria-hidden />

      <div className="container-x">
        <SectionHeader index="01" label="about" title="Quality is a habit, not a phase." />
        <div className="section-body grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start lg:gap-16">
          {profile.aboutPhotoUrl && (
            <Reveal className="group relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 -z-10 rotate-[-4deg] rounded-[2rem] bg-gradient-to-br from-brand-teal to-brand-sage opacity-90 transition duration-500 group-hover:rotate-[-2deg]" aria-hidden />
              <img src={profile.aboutPhotoUrl} alt={`${profile.shortName || profile.name} portrait`} className="w-full rounded-[1.75rem] object-cover shadow-2xl" loading="lazy" />
              <div className="absolute -bottom-5 left-6 rounded-full bg-brand-ink px-4 py-2 font-mono text-xs text-brand-cream shadow-xl">
                📍 {profile.location}
              </div>
            </Reveal>
          )}
          <div>
            {first && (
              <Reveal as="p" className="font-display text-2xl font-semibold leading-snug text-brand-ink sm:text-3xl">
                {first}
              </Reveal>
            )}
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-brand-slate lg:text-lg">
              {rest.map((p, i) => (
                <Reveal as="p" key={p.slice(0, 32)} delay={i * 120}>
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {principles?.length > 0 && (
          <div className="mt-20 lg:mt-28">
            <Reveal as="p" className="eyebrow text-brand-tealdark">
              <span className="opacity-60">{"// "}</span>how I work
            </Reveal>
            <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((pr, i) => (
                <Reveal
                  as="li"
                  key={pr.title}
                  delay={i * 100}
                  className="group relative overflow-hidden rounded-3xl border border-brand-slate/10 bg-white/75 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:bg-white hover:shadow-[0_24px_50px_-28px_rgba(31,143,166,0.6)]"
                >
                  <span className="font-mono text-sm font-bold text-brand-tealdark">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-xl font-bold leading-tight text-brand-ink">{pr.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-slate">{pr.body}</p>
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-teal via-brand-sky to-brand-blush transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
                </Reveal>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------- Skills ---------- */

export const Skills = () => {
  const { skills } = useContent().content;
  return (
    <section id="skills" className="section-y relative isolate overflow-hidden bg-brand-night">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-teal/25 blur-[120px]" aria-hidden />
      <div className="container-x">
        <SectionHeader index="02" label="toolkit" title="What's in the test bench." light>
          What I use on real projects today, and what I'm learning next.
        </SectionHeader>
        <div className="section-body grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const ai = /\bAI\b/.test(group.group);
            const learning = isLearningGroup(group.group);
            let card = "border-white/10 bg-white/[0.03] hover:border-brand-sky/50 hover:bg-white/[0.06]";
            if (ai) card = "sm:col-span-2 border-brand-sky/30 bg-gradient-to-br from-brand-sky/[0.12] via-white/[0.03] to-brand-blush/[0.10] hover:border-brand-sky/60";
            if (learning) card = "sm:col-span-2 lg:col-span-3 border-dashed border-brand-sky/40 bg-brand-sky/[0.04] hover:border-brand-sky/70";
            return (
              <Reveal
                key={group.group}
                delay={(i % 3) * 90}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${card}`}
              >
                {ai && <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-blush/20 blur-3xl transition duration-500 group-hover:bg-brand-blush/30" aria-hidden />}
                <div className="relative flex items-center justify-between gap-3">
                  <p className="min-w-0 truncate font-mono text-xs text-brand-sky">
                    {ai && <span className="mr-1 text-brand-blush">✦</span>}
                    {slug(group.group)}.spec.ts
                  </p>
                  <span className={`shrink-0 font-mono text-[11px] ${learning ? "text-brand-sky" : "text-brand-pass"}`}>
                    {group.items.length} {learning ? "in progress" : "passed"}
                  </span>
                </div>
                <h3 className={`relative mt-3 font-display font-bold text-white ${ai ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                  {group.group}
                  {ai && <span className="ml-3 align-middle font-mono text-[11px] font-medium uppercase tracking-wider text-brand-blush">focus</span>}
                </h3>
                <ul className="relative mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm transition duration-300 ${
                        learning
                          ? "border-dashed border-brand-sky/30 text-[#bfe2f8]"
                          : "border-white/10 bg-black/20 text-brand-cream group-hover:border-white/20"
                      }`}
                    >
                      {learning ? (
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-sky" aria-hidden />
                      ) : (
                        <FaCheck className="text-brand-pass" size={10} aria-hidden />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-sky to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- Experience ---------- */

export const Experience = () => {
  const { experience } = useContent().content;
  return (
    <section id="experience" className="gradient_bg relative isolate overflow-hidden section-y">
      <div className="bg-noise absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay" aria-hidden />
      <div className="container-x">
        <SectionHeader index="04" label="release log" title="Where I've shipped quality." light />
        <ol className="section-body space-y-4">
          {experience.map((job, i) => {
            const current = /present/i.test(job.end);
            return (
              <Reveal
                as="li"
                key={job.id}
                delay={i * 80}
                className="grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-brand-night/60 p-6 backdrop-blur sm:p-8 md:grid-cols-[200px_1fr] md:gap-10"
              >
                <div>
                  <p className="font-mono text-sm text-brand-cream">
                    {job.start} → {job.end}
                  </p>
                  <p className="mt-1 text-sm text-brand-mist">{job.location}</p>
                  <p
                    className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
                      current ? "bg-brand-sky/15 text-brand-sky" : "bg-brand-pass/10 text-brand-pass"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${current ? "animate-pulse bg-brand-sky" : "bg-brand-pass"}`} />
                    {current ? "Running" : "Passed"}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{job.role}</h3>
                  <p className="mt-1 font-semibold text-brand-sky">{job.company}</p>
                  <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-[#cdd5d7]">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-0.5 font-mono text-brand-pass">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

/* ---------- Projects ---------- */

const StatusBadge = ({ status, dark = false }) => {
  const label = status || "Passed";
  const running = /progress|running|active/i.test(label);
  let tone = running ? "bg-brand-sky/15 text-[#1d6fa8]" : "bg-emerald-500/15 text-emerald-700";
  if (dark) tone = running ? "bg-brand-sky/20 text-[#9fd3f7]" : "bg-brand-pass/15 text-brand-pass";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider ${tone}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${running ? "animate-pulse bg-brand-sky" : "bg-emerald-500"}`} />
      {label}
    </span>
  );
};

StatusBadge.propTypes = { status: PropTypes.string, dark: PropTypes.bool };

// Release pipeline for the featured project: its tags as completed stages, then launch.
const Pipeline = ({ steps, running }) => {
  const stages = [...steps.map((s) => ({ label: s, done: true })), { label: running ? "Launch" : "Released", done: !running }];
  const doneCount = stages.filter((s) => s.done).length;
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-brand-cream/70">
        <span>release pipeline</span>
        <span>
          {doneCount}/{stages.length} stages
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-brand-pass via-brand-mint to-brand-sky" style={{ width: `${(doneCount / stages.length) * 100}%` }} />
      </div>
      <ol className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
        {stages.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-sm">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                s.done ? "bg-brand-pass/20 text-brand-pass" : "border border-dashed border-brand-sky text-brand-sky"
              }`}
            >
              {s.done ? "✓" : <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-sky" />}
            </span>
            <span className={s.done ? "text-brand-cream" : "text-brand-sky"}>{s.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

Pipeline.propTypes = { steps: PropTypes.arrayOf(PropTypes.string).isRequired, running: PropTypes.bool };

export const Projects = () => {
  const { projects, devProjects } = useContent().content;
  return (
    <section id="projects" className="relative isolate overflow-hidden bg-brand-paper section-y">
      <div className="absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-brand-mint/70 blur-[110px]" aria-hidden />
      <div className="absolute -right-20 bottom-40 -z-10 h-96 w-96 rounded-full bg-brand-blush/50 blur-[110px]" aria-hidden />
      <div className="container-x">
        <SectionHeader index="05" label="test suites" title="Products I've put through their paces.">
          Banking, payments and education platforms, tested end to end before real users ever touched them.
        </SectionHeader>

        <div className="section-body grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.id}
              delay={(i % 3) * 90}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 shadow-[0_20px_50px_-30px_rgba(16,34,38,0.5)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(31,143,166,0.55)] ${
                i === 0
                  ? "gradient_bg-2 border-white/10 md:col-span-2 lg:row-span-2 lg:p-10"
                  : "border-brand-slate/10 bg-white/80 backdrop-blur"
              }`}
            >
              <span
                className={`pointer-events-none absolute font-display font-extrabold leading-none transition ${
                  i === 0
                    ? "-bottom-10 -right-4 text-[14rem] text-white/[0.06] group-hover:text-white/[0.1]"
                    : "-right-2 -top-6 text-[7rem] text-brand-teal/[0.07] group-hover:text-brand-teal/[0.14]"
                }`}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={p.status} dark={i === 0} />
                  <span className={`font-mono text-xs uppercase tracking-wider ${i === 0 ? "text-brand-cream/70" : "text-brand-muted"}`}>{p.domain}</span>
                </div>
                {i === 0 && <p className="eyebrow mt-6 text-brand-mint lg:mt-10">Featured · current</p>}
                <h3 className={`font-display font-bold ${i === 0 ? "mt-2 text-4xl text-white sm:text-5xl lg:text-6xl" : "mt-4 text-2xl text-brand-ink"}`}>{p.name}</h3>
                <p className={`mt-3 leading-relaxed ${i === 0 ? "max-w-lg text-lg text-brand-cream/85" : "text-brand-slate"}`}>{p.description}</p>
              </div>
              <div className="relative mt-6">
                {i === 0 && <Pipeline steps={p.tags || []} running={/progress|running|active/i.test(p.status || "")} />}
                {i !== 0 && p.tags?.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${i === 0 ? "border border-white/15 bg-white/10 text-brand-cream" : "bg-brand-teal/10 text-brand-tealdark"}`}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition ${i === 0 ? "bg-white/10 text-white hover:bg-white/20" : "bg-brand-teal/10 text-brand-tealdark hover:bg-brand-teal/20"}`}>
                    {p.linkLabel || "View project"} <FaExternalLinkAlt size={10} aria-hidden />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {devProjects?.length > 0 && (
          <div className="mt-24">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-brand-tealdark">
                  <span className="opacity-60">{"// "}</span>microverse builds
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-brand-ink">I&apos;ve built software too.</h3>
              </div>
              <p className="max-w-md text-brand-sea">
                Projects I built while learning full-stack development at Microverse. Building software myself is why I can read code and write bug reports developers can act on.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {devProjects.map((p, i) => (
                <Reveal as="article" key={p.id} delay={i * 80} className="group overflow-hidden rounded-2xl bg-brand-ink shadow-xl">
                  <div className="relative overflow-hidden">
                    {p.image && (
                      <img src={p.image} alt={`${p.name} screenshot`} className="h-44 w-full object-cover object-top opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" loading="lazy" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent" aria-hidden />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-lg font-bold text-white">{p.name}</h4>
                    <p className="mt-1 text-sm text-brand-mist">{p.description}</p>
                    <div className="mt-4 flex gap-4 text-sm font-semibold">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-cream hover:text-brand-sky">
                          <FaGithub aria-hidden /> Code
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-brand-cream hover:text-brand-sky">
                          <FaExternalLinkAlt size={11} aria-hidden /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------- Credentials ---------- */

export const Credentials = () => {
  const { certifications, education } = useContent().content;
  const Row = ({ title, sub, meta, url }) => (
    <li className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-white/10 py-5">
      <div>
        <p className="font-display text-lg font-bold text-white">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-sky">
              {title} ↗
            </a>
          ) : (
            title
          )}
        </p>
        <p className="text-sm text-brand-mist">{sub}</p>
      </div>
      <p className="font-mono text-xs text-brand-sky">{meta}</p>
    </li>
  );
  Row.propTypes = { title: PropTypes.string, sub: PropTypes.string, meta: PropTypes.string, url: PropTypes.string };

  return (
    <section id="credentials" className="section-y relative isolate overflow-hidden bg-brand-night">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(0deg,#000,transparent)]" aria-hidden />
      <div className="container-x">
        <SectionHeader index="06" label="credentials" title="Certified & still learning." light />
        <div className="section-body grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-brand-cream/60">Certifications</p>
            <ul className="mt-2">
              {certifications.map((c) => (
                <Row key={c.name} title={c.name} sub={c.issuer} meta={c.date} url={c.url} />
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-brand-cream/60">Education</p>
            <ul className="mt-2">
              {education.map((e) => (
                <Row key={e.degree} title={e.degree} sub={e.school} meta={e.years} />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ---------- Contact ---------- */

export const Contact = () => {
  const { profile } = useContent().content;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-brand-night px-3 pb-24 pt-8 sm:px-4 lg:pb-32">
      <Reveal className="gradient_bg-2 relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12 lg:py-24">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-blush/30 blur-[90px]" aria-hidden />
        <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-brand-mint/25 blur-[90px]" aria-hidden />
        <div className="relative">
          <p className="eyebrow text-brand-cream/80">
            <span className="opacity-60">{"// "}</span>07 — contact
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl">
            Shipping soon? Let&apos;s make it <span className="text-gradient">boring.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-cream/85">
            Boring releases are the best kind. If you&apos;re hiring for QA, I&apos;d love to hear from you.
          </p>

          {profile.email && (
            <div className="mx-auto mt-10 flex max-w-xl flex-col items-stretch gap-2 rounded-3xl border border-white/15 bg-black/25 p-2 backdrop-blur sm:flex-row sm:items-center sm:rounded-full">
              <a href={`mailto:${profile.email}`} className="flex min-w-0 flex-1 items-center justify-center gap-3 px-4 py-3 text-brand-cream hover:text-white sm:justify-start">
                <FaEnvelope className="shrink-0 text-brand-sky" aria-hidden />
                <span className="truncate font-mono text-sm sm:text-base">{profile.email}</span>
              </a>
              <button type="button" onClick={copy} className="btn-glow justify-center !py-2.5">
                {copied ? <FaCheck aria-hidden /> : <FaCopy aria-hidden />}
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-line">
                <FaLinkedin aria-hidden /> LinkedIn
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-line">
                <FaGithub aria-hidden /> GitHub
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

/* ---------- AI workflow ---------- */

const isAiTool = (tool) => /claude|copilot|\bAI\b/i.test(tool || "");

export const AIWorkflow = () => {
  const { aiWorkflow } = useContent().content;
  if (!aiWorkflow?.length) return null;
  return (
    <section id="ai-workflow" className="section-y relative isolate overflow-hidden bg-brand-ink">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_50%_40%,#000_20%,transparent_70%)]" aria-hidden />
      <div className="absolute left-1/4 top-10 -z-10 h-80 w-80 rounded-full bg-brand-blush/20 blur-[120px]" aria-hidden />
      <div className="absolute bottom-0 right-1/4 -z-10 h-80 w-80 rounded-full bg-brand-sky/20 blur-[120px]" aria-hidden />
      <div className="container-x">
        <SectionHeader index="03" label="automation journey" title={<>Building toward <span className="text-gradient">AI-powered automation.</span></>} light>
          What I've already built and automated, and the next steps I'm learning right now.
        </SectionHeader>

        <ol className="section-body relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiWorkflow.map((step, i) => {
            const ai = isAiTool(step.tool);
            const learning = step.status === "learning";
            return (
              <Reveal
                as="li"
                key={step.title}
                delay={(i % 3) * 100}
                className="pipeline-step relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
                style={{ "--step": i, "--steps": aiWorkflow.length }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="pipeline-dot flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-brand-night font-mono text-sm font-bold text-brand-cream">
                    {i + 1}
                  </span>
                  <span
                    className={`min-w-0 truncate rounded-full px-3 py-1 font-mono text-[11px] ${
                      ai ? "bg-gradient-to-r from-brand-sky/25 to-brand-blush/25 text-white" : "bg-white/5 text-brand-mist"
                    }`}
                  >
                    {ai && <span className="mr-1 text-brand-blush">✦</span>}
                    {step.tool}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{step.title}</h3>
                <p
                  className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider ${
                    learning ? "border border-dashed border-brand-sky/40 text-brand-sky" : "bg-brand-pass/10 text-brand-pass"
                  }`}
                >
                  {learning ? <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-sky" /> : "✓"}
                  {learning ? "Learning now" : "Done"}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-mist">{step.body}</p>
                {i < aiWorkflow.length - 1 && (
                  <span className="absolute -bottom-3 left-1/2 hidden h-6 w-px -translate-x-1/2 bg-gradient-to-b from-brand-sky/60 to-transparent max-sm:block" aria-hidden />
                )}
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs text-brand-mist">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
            <span className="text-brand-blush">✦</span> uses AI (Claude)
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-pass" /> step running in the pipeline
          </span>
        </Reveal>
      </div>
    </section>
  );
};
