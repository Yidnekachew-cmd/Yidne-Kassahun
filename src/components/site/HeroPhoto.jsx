import PropTypes from "prop-types";

// Portrait inside the brand's inspection frame: rounded corner marks, a slow scan line,
// a teal tint rising from the bottom, and the check stamped on the open corner.
const HeroPhoto = ({ src, name }) => (
  <div className="relative rotate-6">
    <div className="relative overflow-hidden rounded-[1.6rem] shadow-2xl ring-1 ring-white/15">
      <img src={src} alt={`Portrait of ${name}`} className="aspect-square w-full object-cover" />
      {/* tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-night/70 via-brand-teal/10 to-transparent" aria-hidden />
      {/* scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-photo-scan bg-gradient-to-b from-transparent via-brand-sky/25 to-transparent" aria-hidden />
    </div>

    {/* inspection corners, drawn just outside the photo */}
    <svg className="pointer-events-none absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <g fill="none" stroke="#7fc4dc" strokeWidth="2.2" strokeLinecap="round" vectorEffect="non-scaling-stroke">
        <path d="M1 22 V9 Q1 1 9 1 H22" vectorEffect="non-scaling-stroke" />
        <path d="M78 1 H91 Q99 1 99 9 V22" vectorEffect="non-scaling-stroke" />
        <path d="M1 78 V91 Q1 99 9 99 H22" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>

    {/* check stamp on the open bottom-right corner */}
    <div className="absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink/90 shadow-lg ring-1 ring-white/10 sm:h-12 sm:w-12" aria-hidden>
      <svg viewBox="0 0 40 40" className="h-7 w-7">
        <defs>
          <linearGradient id="hp-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7cc8f5" />
            <stop offset="1" stopColor="#1a7fc4" />
          </linearGradient>
          <linearGradient id="hp-silver" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#9aa4aa" />
            <stop offset="1" stopColor="#f4f6f7" />
          </linearGradient>
        </defs>
        <g fill="none" strokeLinecap="round" strokeWidth="5">
          <path d="M17 27 L31 9" stroke="url(#hp-silver)" />
          <path d="M9 19 L17 27" stroke="url(#hp-blue)" />
        </g>
      </svg>
    </div>
  </div>
);

HeroPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default HeroPhoto;
