import { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../Logo";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Toolkit" },
  { href: "#ai-workflow", label: "AI Testing" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#credentials", label: "Credentials" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const close = () => setOpen(false);

  useEffect(() => {
    let frame;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 24);
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Scrollspy: highlight the section crossing the upper third of the screen.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const ids = [...NAV_LINKS.map((l) => l.href.slice(1)), "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const top = document.getElementById("top");
    const topIo = new IntersectionObserver(([e]) => e.isIntersecting && setActive(""), { rootMargin: "-35% 0px -60% 0px" });
    if (top) topIo.observe(top);
    return () => {
      io.disconnect();
      topIo.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        aria-label="Main"
        className={`relative mx-auto flex h-14 max-w-6xl items-center justify-between overflow-hidden rounded-full border px-3 pl-4 transition-all duration-500 sm:px-4 sm:pl-5 ${
          scrolled || open
            ? "border-white/10 bg-brand-night/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" onClick={close} className="flex items-center" aria-label="Back to top">
          <Logo className="h-11 w-auto" light />
        </a>

        <ul className="hidden items-center gap-1 text-sm md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-3.5 py-2 transition duration-300 ${
                    isActive ? "bg-white/10 text-white" : "text-brand-mist hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className={`hidden rounded-full px-4 py-2 text-sm font-semibold transition duration-300 md:inline-flex ${
            active === "#contact" ? "bg-white text-brand-ink" : "bg-brand-cream text-brand-ink hover:bg-white"
          }`}
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          className="rounded-full p-2 text-brand-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>

        {/* reading progress, styled like a test run bar */}
        <span
          className={`absolute bottom-0 left-0 h-[2px] origin-left bg-gradient-to-r from-brand-pass via-brand-sky to-brand-blush transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "100%", transform: `scaleX(${progress})` }}
          aria-hidden
        />
      </nav>

      {open && (
        <ul className="slide-bottom mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-brand-night/95 p-3 backdrop-blur-xl md:hidden">
          {[...NAV_LINKS, { href: "#contact", label: "Let's talk" }].map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
                  active === link.href ? "bg-white/10 text-white" : "text-brand-cream hover:bg-white/5"
                }`}
              >
                <span className="font-mono text-xs text-brand-sky">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
