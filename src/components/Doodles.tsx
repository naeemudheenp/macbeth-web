/**
 * Hand-drawn doodle set. Strokes use `currentColor`, so the accent color is
 * set via CSS (`color: var(--accent)`) on a wrapping element. Intentionally
 * loose / wobbly for a marker-doodle feel.
 */
type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 4.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/* Hero — a phone tossing little photos over to a home/box */
export function DoodlePhoneHome({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 150 110" {...base}>
      {/* phone */}
      <rect x="8" y="26" width="40" height="66" rx="8" />
      <line x1="22" y1="84" x2="34" y2="84" />
      <circle cx="20" cy="40" r="3.4" fill="currentColor" stroke="none" />
      <path d="M12 58 l8 -10 l6 7 l7 -8 l9 11" />
      {/* flying photos */}
      <rect x="62" y="30" width="16" height="14" rx="3" transform="rotate(-12 70 37)" />
      <rect x="84" y="52" width="14" height="12" rx="3" transform="rotate(10 91 58)" />
      {/* dashed toss arc */}
      <path d="M50 50 q26 -26 52 -6" strokeDasharray="1 8" />
      {/* home */}
      <path d="M104 92 v-30 l19 -15 l19 15 v30 z" />
      <path d="M116 92 v-16 h14 v16" />
    </svg>
  );
}

/* Why 01 — forever (infinity + heart) */
export function DoodleForever({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 100 100" {...base}>
      <path d="M22 56 c-12 0 -12 -18 0 -18 c10 0 14 18 26 18 c12 0 12 -18 0 -18 c-10 0 -14 18 -26 18 z" />
      <path d="M58 70 a5 5 0 0 1 9 0 a5 5 0 0 1 9 0 q0 7 -9 12 q-9 -5 -9 -12 z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Why 02 — private (padlock) */
export function DoodleLock({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 100 100" {...base}>
      <rect x="26" y="46" width="48" height="40" rx="8" />
      <path d="M36 46 v-10 a14 14 0 0 1 28 0 v10" />
      <circle cx="50" cy="64" r="4.5" fill="currentColor" stroke="none" />
      <line x1="50" y1="68" x2="50" y2="76" />
    </svg>
  );
}

/* Why 03 — works offline (a cloud, crossed out) */
export function DoodleNoCloud({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 100 100" {...base}>
      <path d="M32 70 a14 14 0 0 1 2 -27 a18 18 0 0 1 34 4 a12 12 0 0 1 -2 23 z" />
      <line x1="24" y1="34" x2="78" y2="78" />
    </svg>
  );
}

/* How 1 — plug it in */
export function DoodlePlug({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 100 100" {...base}>
      <path d="M34 30 v12 a16 16 0 0 0 32 0 v-12" />
      <line x1="42" y1="20" x2="42" y2="34" />
      <line x1="58" y1="20" x2="58" y2="34" />
      <path d="M50 58 v8 q0 14 -16 16" strokeDasharray="1 0" />
      <path d="M28 80 q-8 2 -10 10" />
    </svg>
  );
}

/* How 2 — scan the code (phone + QR) */
export function DoodleScan({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 100 100" {...base}>
      <rect x="24" y="16" width="52" height="68" rx="9" />
      <rect x="36" y="32" width="12" height="12" rx="2" />
      <rect x="52" y="32" width="12" height="12" rx="2" />
      <rect x="36" y="48" width="12" height="12" rx="2" />
      <path d="M52 50 h12 v12" />
      <line x1="32" y1="70" x2="68" y2="70" stroke-opacity="0.55" />
    </svg>
  );
}

/* How 3 — forget it (sleepy device, zzz) */
export function DoodleSleep({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 100 100" {...base}>
      <rect x="16" y="40" width="56" height="40" rx="11" />
      <path d="M28 60 q5 5 10 0" />
      <path d="M44 60 q5 5 10 0" />
      <path d="M70 36 h12 l-12 12 h12" />
      <path d="M82 20 h8 l-8 8 h8" />
    </svg>
  );
}

/* Join — bring them home (house + heart) */
export function DoodleHomeHeart({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 100 100" {...base}>
      <path d="M22 86 v-34 l28 -22 l28 22 v34 z" />
      <path d="M40 62 a6 6 0 0 1 10 0 a6 6 0 0 1 10 0 q0 8 -10 15 q-10 -7 -10 -15 z" fill="currentColor" stroke="none" />
    </svg>
  );
}
