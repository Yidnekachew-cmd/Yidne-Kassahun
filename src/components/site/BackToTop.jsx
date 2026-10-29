import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

// Appears after the first screenful; returns to the top (instantly for reduced-motion users).
const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("top")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-brand-night/85 text-brand-cream shadow-xl backdrop-blur transition duration-300 hover:bg-brand-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FaArrowUp aria-hidden />
    </button>
  );
};

export default BackToTop;
