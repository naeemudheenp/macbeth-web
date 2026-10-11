import { useId } from "react";

/**
 * The Box seen from directly above: a thin, square, Mac-mini-like unit in
 * white with the wordmark engraved in the middle and a status
 * light glowing at the front edge. Pure SVG, so it works as a hero shot, a
 * diagram icon, or nested inside another SVG (pass x/y/width/height).
 * An illustration, not a render of final hardware.
 */
export default function BoxProduct({
  className,
  title = "The bckup Box, seen from above",
  x,
  y,
  width,
  height,
  decorative = false,
}: {
  className?: string;
  title?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  /** Hide from assistive tech when the surrounding scene already labels it. */
  decorative?: boolean;
}) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="0 0 240 256"
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": title })}
    >
      <defs>
        <linearGradient id={`body-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#f3f4ef" />
          <stop offset="1" stopColor="#e2e4dc" />
        </linearGradient>
        <radialGradient id={`sheen-${id}`} cx="0.32" cy="0.25" r="0.75">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`edge-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="1" stopColor="#c9ccc2" stopOpacity="0.9" />
        </linearGradient>
        <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#0B1F17" floodOpacity="0.22" />
        </filter>
        <filter id={`glow-${id}`} x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* body, with a slim lip on the front edge so it reads as thin */}
      <g filter={`url(#shadow-${id})`}>
        <rect x="16" y="20" width="208" height="208" rx="44" fill="#c4c7bd" />
        <rect x="16" y="14" width="208" height="208" rx="44" fill={`url(#body-${id})`} />
      </g>
      <rect x="16" y="14" width="208" height="208" rx="44" fill={`url(#sheen-${id})`} />
      <rect
        x="16.75"
        y="14.75"
        width="206.5"
        height="206.5"
        rx="43.25"
        fill="none"
        stroke={`url(#edge-${id})`}
        strokeWidth="1.5"
      />

      {/* engraved wordmark */}
      <text
        x="120"
        y="126"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontWeight="600"
        fontSize="30"
        letterSpacing="-1"
        fill="#ffffff"
        fillOpacity="1"
      >
        bckup
      </text>
      <text
        x="120"
        y="125"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontWeight="600"
        fontSize="30"
        letterSpacing="-1"
        fill="#9aa093"
        fillOpacity="0.55"
      >
        bckup
      </text>

      {/* status light on the front edge */}
      <circle cx="120" cy="220" r="5" fill="#C6F36B" opacity="0.8" filter={`url(#glow-${id})`} />
      <rect x="113" y="219" width="14" height="3" rx="1.5" fill="#7ccf3a" />
    </svg>
  );
}
