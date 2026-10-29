import { FaLinkedin, FaGithub, FaArrowRight, FaFileDownload } from "react-icons/fa";
import { useContent } from "../../lib/content";
import Terminal from "./Terminal";
import CountUp from "./CountUp";
import HeroPhoto from "./HeroPhoto";

const d = (ms) => ({ "--delay": `${ms}ms` });

const Hero = () => {
  const { profile, stats } = useContent().content;
  const headline = profile.headline || "I break things so your users don't.";
  // Last two words get the gradient treatment.
  const words = headline.split(" ");
  const lead = words.slice(0, -2).join(" ");
  const tail = words.slice(-2).join(" ");

  return (
    <section id="top" className="relative isolate overflow-hidden bg-brand-night pb-16 pt-32 text-brand-cream lg:pb-24 lg:pt-40">
      {/* atmosphere */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_60%_30%,#000_30%,transparent_75%)]" aria-hidden />
      <div className="absolute -right-32 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-blush/25 blur-[120px]" aria-hidden />
      <div className="absolute -right-10 top-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-brand-mint/20 blur-[110px]" aria-hidden />
      <div className="absolute -left-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-teal/35 blur-[120px]" aria-hidden />
      <div className="bg-noise absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" aria-hidden />

      <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div className="min-w-0">
          {profile.availability && (
            <p style={d(0)} className="hero-in inline-flex max-w-full items-center gap-2 rounded-full border border-brand-pass/30 bg-brand-pass/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-brand-pass">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-pass opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-pass" />
              </span>
              {profile.availability}
            </p>
          )}

          <h1 style={d(120)} className="hero-in mt-6 font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]">
            {lead} <span className="text-gradient">{tail}</span>
          </h1>

          <p style={d(260)} className="hero-in mt-6 font-display text-xl font-semibold text-brand-cream sm:text-2xl">
            {profile.name}
            <span className="block font-sans text-base font-medium text-brand-sky sm:text-lg">{profile.title}</span>
          </p>
          <p style={d(360)} className="hero-in mt-4 max-w-xl text-base leading-relaxed text-brand-mist sm:text-lg">{profile.tagline}</p>

          <div style={d(460)} className="hero-in mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-glow">
              See my test suites <FaArrowRight aria-hidden />
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-line">
                <FaFileDownload aria-hidden /> Download CV
              </a>
            )}
            <div className="ml-1 flex items-center gap-1">
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2.5 text-brand-mist transition hover:bg-white/10 hover:text-white">
                  <FaLinkedin size={22} />
                </a>
              )}
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2.5 text-brand-mist transition hover:bg-white/10 hover:text-white">
                  <FaGithub size={22} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div style={d(300)} className="hero-in relative mx-auto w-full min-w-0 max-w-lg lg:max-w-none">
          <div className="absolute -right-2 -top-10 z-10 w-28 animate-float sm:-right-6 sm:-top-14 sm:w-36">
            <HeroPhoto src={profile.photoUrl} name={profile.name} />
          </div>
          <Terminal />
        </div>
      </div>

      {stats?.length > 0 && (
        <div style={d(600)} className="hero-in container-x mt-16 lg:mt-24">
          <div className="grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-4 px-2 py-6 sm:block sm:px-8 sm:first:pl-0">
                <p className="font-display text-5xl font-extrabold text-white tabular-nums lg:text-6xl">
                  <CountUp value={s.value} />
                </p>
                <p className="eyebrow mt-2 text-brand-mist">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
