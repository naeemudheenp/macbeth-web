/**
 * An automation, drawn as what it does: photos come in, a saved rule picks
 * the ones that match, and they land in an album. The conditions are the ones
 * Studio really offers — capture date, backup date, camera — and you press
 * Run when you want it. Illustrative data, not a screenshot.
 */
const INCOMING = [
  { tone: "#7A5A45", cam: "A7 IV", match: true },
  { tone: "#5B6B57", cam: "iPhone", match: false },
  { tone: "#3F4B5E", cam: "A7 IV", match: true },
  { tone: "#8A6F5A", cam: "A7 IV", match: true },
  { tone: "#6E7A86", cam: "R6", match: false },
  { tone: "#9B7B5B", cam: "A7 IV", match: true },
];

export default function AutomationFlow() {
  return (
    <div className="flow" role="img" aria-label="An automation named Ceremony to Mehta wedding: of the photos taken on 14 September 2026, those shot on a Sony A7 IV are added to the Ceremony album when you press Run">
      {/* 1. what came in */}
      <div className="flow-col">
        <span className="flow-step">Backed up</span>
        <div className="flow-photos">
          {INCOMING.map((p, i) => (
            <span key={i} className={`flow-photo${p.match ? " match" : ""}`} style={{ background: p.tone }}>
              <span>{p.cam}</span>
            </span>
          ))}
        </div>
        <span className="flow-note">6 new photos</span>
      </div>

      <Arrow />

      {/* 2. the saved rule */}
      <div className="flow-col flow-rule">
        <span className="flow-step">Rule</span>
        <div className="rule-card">
          <strong className="rule-name">Ceremony → Mehta wedding</strong>
          <div className="rule-line">
            <span className="rule-key">Taken</span>
            <span className="chip">14 Sep 2026</span>
          </div>
          <div className="rule-line">
            <span className="rule-key">Camera</span>
            <span className="chip">Sony A7 IV</span>
          </div>
          <div className="rule-line">
            <span className="rule-key">Add to</span>
            <span className="chip chip-accent">Mehta wedding › Ceremony</span>
          </div>
          <span className="rule-run" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Run · 4 matches
          </span>
        </div>
      </div>

      <Arrow />

      {/* 3. where they land */}
      <div className="flow-col">
        <span className="flow-step">Filed</span>
        <div className="flow-album">
          <div className="flow-album-grid">
            {INCOMING.filter((p) => p.match).map((p, i) => (
              <span key={i} style={{ background: p.tone }} />
            ))}
          </div>
          <span className="flow-album-name">Ceremony</span>
          <span className="flow-album-path">Mehta wedding</span>
        </div>
        <span className="flow-note">+4 photos</span>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg className="flow-arrow" aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
