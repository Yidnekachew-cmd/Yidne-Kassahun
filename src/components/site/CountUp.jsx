import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// Animates the number inside a value like "17" or "3+" once it scrolls into view.
const CountUp = ({ value, duration = 1400 }) => {
  const match = String(value).match(/^(\D*)(\d+)(.*)$/);
  const target = match ? Number(match[2]) : null;
  const ref = useRef(null);
  const [n, setN] = useState(target ?? 0);

  useEffect(() => {
    if (target === null) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setN(target);
      return undefined;
    }
    setN(0);
    let raf;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        setN(Math.round(target * (1 - (1 - t) ** 3)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  if (target === null) return <span>{value}</span>;
  return (
    <span ref={ref} aria-label={value}>
      {match[1]}
      {n}
      {match[3]}
    </span>
  );
};

CountUp.propTypes = { value: PropTypes.string.isRequired, duration: PropTypes.number };

export default CountUp;
