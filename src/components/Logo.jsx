import { useId } from "react";
import PropTypes from "prop-types";

// YIDNE QA mark: a check that "passes" and breaks out of an inspection frame.
// Blue short stroke + silver long stroke keep the original brand colours.
const Logo = ({ className = "", showWordmark = true, light = false }) => {
  const uid = useId().replace(/:/g, "");
  const blue = `blue-${uid}`;
  const silver = `silver-${uid}`;
  const frame = `frame-${uid}`;
  const glow = `glow-${uid}`;
  const word = light ? "#d7dcdf" : "#5f656b";

  return (
    <svg
      className={className}
      viewBox={showWordmark ? "0 0 200 150" : "40 -4 124 108"}
      role="img"
      aria-label="Yidne QA logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={blue} x1="62" y1="52" x2="98" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7cc8f5" />
          <stop offset="0.55" stopColor="#3ba3e8" />
          <stop offset="1" stopColor="#1a7fc4" />
        </linearGradient>
        <linearGradient id={silver} x1="92" y1="84" x2="146" y2="8" gradientUnits="userSpaceOnUse">
          {light ? (
            <>
              <stop offset="0" stopColor="#9aa4aa" />
              <stop offset="1" stopColor="#eef1f3" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#4d5358" />
              <stop offset="1" stopColor="#8c949a" />
            </>
          )}
        </linearGradient>
        <linearGradient id={frame} x1="50" y1="6" x2="150" y2="98" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={light ? "#7fb6c6" : "#2d718b"} />
          <stop offset="1" stopColor={light ? "#3ba3e8" : "#3ba3e8"} />
        </linearGradient>
        <filter id={glow} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feColorMatrix in="b" type="matrix" values="0 0 0 0 0.23  0 0 0 0 0.64  0 0 0 0 0.91  0 0 0 0.45 0" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* inspection frame: rounded corners; the top-right one stays open for the check */}
      <g fill="none" stroke={`url(#${frame})`} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M52 30 V18 Q52 6 64 6 H76" />
        <path d="M52 74 V86 Q52 98 64 98 H76" />
        <path d="M124 98 H136 Q148 98 148 86 V74" />
      </g>

      {/* the check */}
      <g filter={`url(#${glow})`} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M90 80 L143 11" stroke={`url(#${silver})`} strokeWidth="14" />
        <path d="M66 56 L90 80" stroke={`url(#${blue})`} strokeWidth="14" />
      </g>
      {/* highlight along the blue stroke for depth */}
      <path d="M68 52.5 L88 72.5" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2.5" strokeLinecap="round" />

      {showWordmark && (
        <text
          x="100"
          y="139"
          textAnchor="middle"
          fontFamily="'Bricolage Grotesque', 'IBM Plex Sans', 'Segoe UI', Arial, sans-serif"
          fontSize="25"
          fontWeight="700"
          letterSpacing="10"
          fill={word}
        >
          YIDNE
        </text>
      )}
    </svg>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  showWordmark: PropTypes.bool,
  light: PropTypes.bool,
};

export default Logo;
