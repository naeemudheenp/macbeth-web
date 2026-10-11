/**
 * The money conversation. There is one plan — bckup Studio Basic at ₹399 a
 * month — and no free tier. Storage isn't a plan at all: the space is the
 * user's own drives, so there are no storage fees. Stopping never costs a
 * photo — they sit on the drives in plain folders (plus the drive's own
 * RECOVERY/ index), readable on any computer.
 */
const STUDIO_FEATURES = [
  "⌘K search across every shoot",
  "Nested albums and auto-import",
  "Client galleries with favourites",
  "Automations that file photos for you",
  "Your library from anywhere",
];

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="card plan">
        <div className="plan-main">
          <div className="plan-head">
            <span className="eyebrow">bckup Studio</span>
            <span className="plan-badge">Basic</span>
          </div>
          <div className="price">
            <span className="price-amount">₹399</span>
            <span className="price-per">/ month</span>
          </div>
          <p className="muted-2">
            The Studio app that runs on your Box and turns a pile of drives into
            a studio.
          </p>
        </div>
        <ul className="price-list">
          {STUDIO_FEATURES.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="plan-storage">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <path d="M7 14h.01M11 14h6" />
          </svg>
          <p>
            <strong>No storage fees.</strong> The space is your own hard drives —
            add another whenever you need more.
          </p>
        </div>
      </div>

      <div className="no-lock">
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 7.5-2" />
        </svg>
        <p>
          <strong>No lock-in.</strong> Stop paying for Studio and your photos
          stay right where they are — on your drives, in{" "}
          <u>plain folders you can open on any computer</u>. Always yours,
          always accessible.
        </p>
      </div>
    </div>
  );
}
