import { useEffect, useMemo, useState } from "react";
import { useContent } from "../../lib/content";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// A fake Playwright run whose "tests" are built from the portfolio content.
const Terminal = () => {
  const { experience, stats, profile, skills } = useContent().content;
  const learningGroup = skills.find((g) => /learning/i.test(g.group));
  const aiGroup = skills.find((g) => /\bAI\b/.test(g.group));

  const lines = useMemo(() => {
    const tests = [
      ...experience.slice(0, 3).map((job) => ({
        text: `${job.role} › ${job.company}`,
        time: `${job.start} → ${job.end}`,
      })),
      ...(aiGroup ? [{ text: aiGroup.group, time: aiGroup.items.slice(0, 2).join(" + ") }] : []),
      ...stats.slice(0, 3).map((s) => ({ text: `${s.label}`, time: s.value })),
    ];
    const learning = learningGroup ? learningGroup.items.slice(0, 2) : [];
    return [
      { kind: "cmd", text: "npx playwright test career.spec.ts" },
      { kind: "info", text: `Running ${tests.length} tests using 1 worker · ${profile.shortName || "yidne"}@qa` },
      ...tests.map((t) => ({ kind: "pass", ...t })),
      ...learning.map((t) => ({ kind: "learning", text: t })),
      {
        kind: "summary",
        text: `${tests.length} passed`,
        time: learning.length ? `${learning.length} in progress · 0 flaky` : "0 flaky · 0 skipped",
      },
    ];
  }, [experience, stats, profile.shortName, aiGroup, learningGroup]);

  const [shown, setShown] = useState(() => (prefersReducedMotion() ? lines.length : 0));

  useEffect(() => {
    if (shown >= lines.length) return undefined;
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 500 : shown === 1 ? 700 : 420);
    return () => clearTimeout(t);
  }, [shown, lines.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#071012]/90 font-mono text-[12.5px] leading-relaxed shadow-[0_30px_80px_-20px_rgba(31,143,166,0.55)] backdrop-blur sm:text-[13px]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-xs text-brand-mist">~/yidne/qa — career.spec.ts</span>
      </div>
      <div className="min-h-[280px] space-y-1.5 p-4 sm:p-5" aria-label="Career summary as test results">
        {lines.slice(0, shown).map((line, i) => {
          if (line.kind === "cmd") {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i} className="text-brand-cream">
                <span className="text-brand-sky">❯</span> {line.text}
              </p>
            );
          }
          if (line.kind === "info") {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i} className="pb-1 text-brand-muted">
                {line.text}
              </p>
            );
          }
          if (line.kind === "learning") {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i} className="flex gap-2">
                <span className="text-brand-sky">◌</span>
                <span className="min-w-0 flex-1 truncate text-brand-sky">{line.text}</span>
                <span className="shrink-0 text-brand-muted">(learning)</span>
              </p>
            );
          }
          if (line.kind === "summary") {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i} className="mt-2 border-t border-white/10 pt-3">
                <span className="rounded bg-brand-pass/15 px-1.5 py-0.5 font-bold text-brand-pass">{line.text}</span>
                <span className="ml-2 text-brand-muted">{line.time}</span>
              </p>
            );
          }
          return (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i} className="flex gap-2">
              <span className="text-brand-pass">✓</span>
              <span className="min-w-0 flex-1 truncate text-[#dfe6e8]">{line.text}</span>
              <span className="shrink-0 text-brand-muted">({line.time})</span>
            </p>
          );
        })}
        {shown < lines.length ? (
          <span className="inline-block h-4 w-2 animate-blink bg-brand-sky align-middle" />
        ) : (
          <p className="pt-1 text-brand-cream">
            <span className="text-brand-sky">❯</span> <span className="inline-block h-4 w-2 animate-blink bg-brand-cream align-middle" />
          </p>
        )}
      </div>
      {/* scanning line */}
      <div className="pointer-events-none absolute inset-x-0 top-10 h-16 animate-scan bg-gradient-to-b from-transparent via-brand-sky/10 to-transparent" aria-hidden />
    </div>
  );
};

export default Terminal;
