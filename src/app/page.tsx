import SiteHeader from "@/components/SiteHeader";
import Waitlist from "@/components/Waitlist";

/**
 * Ported 1:1 from the Claude Design file "bckup Site.dc.html".
 * Section order: hero → floating pill → why → stat grid → how → join → footer.
 */
export default function Home() {
  return (
    <div className="page">
      <SiteHeader />

      {/* ── hero ─────────────────────────────────────────────────────── */}
      <section className="hero" id="what">
        <h1>All your photos, backed up at home.</h1>
      </section>

      {/* ── floating pill ────────────────────────────────────────────── */}
      <section className="pill-band">
        <div className="pill-band-inner">
          <div className="pill">
            <span>You buy it once. There is no plan.</span>
            <a href="#join">Join waitlist</a>
          </div>
        </div>
      </section>

      {/* ── why ──────────────────────────────────────────────────────── */}
      <section className="why" id="why">
        <h2>Own your memories. Don&apos;t rent them.</h2>
        <p>
          No subscriptions. No someone else&apos;s cloud. Just your photos, on
          your own storage, in your own home.
        </p>
      </section>

      {/* ── stat grid ────────────────────────────────────────────────── */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-label">Cost</div>
            <div className="stat-value">$0 a month</div>
            <p>Buy it once. There is no plan to renew.</p>
          </div>
          <div className="stat">
            <div className="stat-label">Privacy</div>
            <div className="stat-value">Zero servers</div>
            <p>Photos go from your phone straight to your device.</p>
          </div>
          <div className="stat">
            <div className="stat-label">Ownership</div>
            <div className="stat-value">No expiry</div>
            <p>Your library never downgrades or locks you out.</p>
          </div>
        </div>
      </section>

      {/* ── how ──────────────────────────────────────────────────────── */}
      <section className="how" id="how">
        <div className="how-label">How it works</div>
        <h2>Three steps, then you forget it exists.</h2>

        <div className="steps">
          <div className="step">
            <IconPlug />
            <div className="step-label">Step 1</div>
            <h3>Plug it in</h3>
            <p>
              Power it anywhere at home. It wakes and waits — no computer, no
              cables.
            </p>
          </div>

          <div className="step">
            <IconWifi />
            <div className="step-label">Step 2</div>
            <h3>Open the app</h3>
            <p>
              It instantly finds your device on the network — like pairing
              AirPods. No codes, no setup.
            </p>
          </div>

          <div className="step">
            <IconLibrary />
            <div className="step-label">Step 3</div>
            <h3>Then never again</h3>
            <p>
              Every photo you take backs up the moment you&apos;re home. Years
              pass. You never think about it again.
            </p>
          </div>
        </div>
      </section>

      {/* ── join ─────────────────────────────────────────────────────── */}
      <section className="join" id="join">
        <h2>Bring them home.</h2>
        <p>Be first in line when bckup ships.</p>
        <Waitlist source="join" cta="Join" />
      </section>

      {/* ── footer ───────────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>© 2026 bckup · a Macbeth company</span>
          <div className="site-footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="mailto:hello@bckup.net">hello@bckup.net</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── step icons — copied verbatim from the design file ─────────────────── */

const stroke = {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "#2c6a4b",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function IconPlug() {
  return (
    <svg {...stroke}>
      <path d="M15 4v8M25 4v8" />
      <path d="M10 12h20v6a10 10 0 0 1-10 10 10 10 0 0 1-10-10z" />
      <path d="M20 28v8" />
    </svg>
  );
}

function IconWifi() {
  return (
    <svg {...stroke}>
      <circle cx="20" cy="28" r="2.2" />
      <path d="M13.5 22.5a9 9 0 0 1 13 0" />
      <path d="M8.5 17.5a16 16 0 0 1 23 0" />
      <path d="M4 12.5a23 23 0 0 1 32 0" />
    </svg>
  );
}

function IconLibrary() {
  return (
    <svg {...stroke}>
      <path d="M12 10h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" />
      <path d="M10 25l6-6 5 5 4-4 9 9" />
      <circle cx="17" cy="16" r="1.8" />
      <path d="M6 14v18a2 2 0 0 0 2 2h20" />
    </svg>
  );
}
