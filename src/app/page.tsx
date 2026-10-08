import SiteHeader from "@/components/SiteHeader";
import Waitlist from "@/components/Waitlist";

/**
 * The page reads like an FAQ: the hero asks the photographer's questions,
 * each section below answers one. Order:
 * hero (questions) → Q1 storage → storage solved → Q2 studio → FAQ → join → footer.
 */
export default function Home() {
  return (
    <div className="page">
      <SiteHeader />

      {/* ── hero: the questions ──────────────────────────────────────── */}
      <section className="hero" id="top">
        <div className="eyebrow">For photographers</div>
        <h1>You&apos;re a great photographer.</h1>
        <p className="hero-sub">
          And we know what gets in the way of the work. So let&apos;s go
          through it — one question at a time.
        </p>

        <ol className="q-index">
          <li>
            <a href="#storage">
              <span className="q-num">01</span>
              <span className="q-text">
                Where is every shoot supposed to live?
              </span>
              <span className="q-arrow" aria-hidden>
                ↓
              </span>
            </a>
          </li>
          <li>
            <a href="#studio">
              <span className="q-num">02</span>
              <span className="q-text">
                Why does the rest of the studio still take all evening?
              </span>
              <span className="q-arrow" aria-hidden>
                ↓
              </span>
            </a>
          </li>
        </ol>
      </section>

      {/* ── Q1: storage ──────────────────────────────────────────────── */}
      <section className="qa" id="storage">
        <div className="qa-label">Question 01 · Storage</div>
        <h2>Where is every shoot supposed to live?</h2>

        <div className="pain">
          <p>
            Cards full on Saturday. The laptop full by Monday. A stack of hard
            drives in a drawer, and a quiet worry that the one shoot you forgot
            to copy is the one a client asks for.
          </p>
        </div>

        <div className="answer">
          <div className="answer-tag">The answer</div>
          <h3>The bckup box.</h3>
          <p className="answer-lead">
            Plug your hard disk into the bckup box. From then on, every photo
            is backed up to it — automatically. No dragging folders, no
            remembering, no subscription.
          </p>

          <div className="box-figure">
            <BoxIllustration />
          </div>

          <div className="steps">
            <div className="step">
              <IconDrive />
              <div className="step-label">Step 1</div>
              <h4>Connect your drive</h4>
              <p>
                Use the hard disk you already own. It plugs straight into the
                box.
              </p>
            </div>
            <div className="step">
              <IconPlug />
              <div className="step-label">Step 2</div>
              <h4>Plug in the box</h4>
              <p>
                Power it anywhere in the studio or at home. It joins your
                network and waits.
              </p>
            </div>
            <div className="step">
              <IconCheck />
              <div className="step-label">Step 3</div>
              <h4>It backs up. Always.</h4>
              <p>
                New photos land on your drive on their own. You get back to
                shooting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── storage solved ───────────────────────────────────────────── */}
      <section className="solved">
        <div className="solved-inner">
          <div className="solved-mark" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M7 14.5l4.5 4.5L21 9.5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2>Storage: solved.</h2>
          <p>
            Every shoot, backed up automatically, on drives you own. Now for
            the part that eats your evenings.
          </p>
          <ul className="solved-list">
            <li>Automatic backup</li>
            <li>Your own hard disks</li>
            <li>Buy once, no plan</li>
          </ul>
        </div>
      </section>

      {/* ── Q2: studio ───────────────────────────────────────────────── */}
      <section className="qa" id="studio">
        <div className="qa-label">Question 02 · The studio</div>
        <h2>Why does the rest of the studio still take all evening?</h2>

        <div className="pain">
          <p>
            Importing, renaming, sorting, exporting, uploading, sending
            links. The shoot took two hours — the admin takes the rest of the
            night.
          </p>
        </div>

        <div className="answer">
          <div className="answer-tag">The answer</div>
          <h3>A studio that runs itself.</h3>
          <p className="answer-lead">
            Once your photos are safe, the box keeps working for you.
          </p>

          <div className="features">
            <article className="feature">
              <IconAuto />
              <h4>Automation</h4>
              <p>
                Shoots sorted into folders by date and client, files renamed
                your way, the busywork handled before you sit down.
              </p>
            </article>
            <article className="feature">
              <IconGallery />
              <h4>Better gallery UX</h4>
              <p>
                Browse thousands of frames without the lag, and share
                client galleries that look as good as your work.
              </p>
            </article>
            <article className="feature">
              <IconCamera />
              <h4>Camera integration</h4>
              <p>
                Photos move from your camera to the box without a card reader
                in between. Shoot, and it&apos;s already home.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── quick FAQ ────────────────────────────────────────────────── */}
      <section className="faq" id="faq">
        <div className="qa-label">Still wondering</div>
        <h2>A few more questions.</h2>
        <div className="faq-list">
          <details>
            <summary>Do I need a subscription?</summary>
            <p>
              No. You buy the box once. Your photos live on your own drives,
              not someone else&apos;s cloud.
            </p>
          </details>
          <details>
            <summary>Can I use the hard disks I already have?</summary>
            <p>
              Yes — that&apos;s the point. Plug your existing drive into the
              box and it becomes your backup.
            </p>
          </details>
          <details>
            <summary>Does my computer need to be on?</summary>
            <p>
              No. The box does the backing up on its own, so your laptop can
              stay closed.
            </p>
          </details>
          <details>
            <summary>When can I get one?</summary>
            <p>
              We&apos;re building it now. Join the waitlist and you&apos;ll be
              first to know when it ships.
            </p>
          </details>
        </div>
      </section>

      {/* ── join ─────────────────────────────────────────────────────── */}
      <section className="join" id="join">
        <h2>Shoot more. Worry less.</h2>
        <p>Be first in line when the bckup box ships.</p>
        <Waitlist source="join" cta="Join waitlist" />
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

/* ── illustration: box with a drive plugged in ─────────────────────────── */

function BoxIllustration() {
  return (
    <svg
      viewBox="0 0 520 200"
      role="img"
      aria-label="A hard disk connected to the bckup box"
      className="box-svg"
    >
      {/* drive */}
      <rect x="24" y="62" width="150" height="96" rx="12" className="ill-soft" />
      <circle cx="148" cy="138" r="4" className="ill-dot" />
      <text x="99" y="116" textAnchor="middle" className="ill-text">
        Your drive
      </text>

      {/* cable */}
      <path
        d="M174 110 C 220 110, 240 110, 290 110"
        className="ill-line"
        fill="none"
      />

      {/* box */}
      <rect x="290" y="40" width="200" height="140" rx="22" className="ill-box" />
      <circle cx="390" cy="152" r="5" className="ill-led" />
      <text x="390" y="104" textAnchor="middle" className="ill-text-inv">
        bckup
      </text>

      {/* photos flowing in */}
      <g className="ill-photos">
        <rect x="318" y="8" width="26" height="20" rx="4" />
        <rect x="378" y="2" width="26" height="20" rx="4" />
        <rect x="438" y="10" width="26" height="20" rx="4" />
      </g>
    </svg>
  );
}

/* ── icons ─────────────────────────────────────────────────────────────── */

const stroke = {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "icon",
};

function IconDrive() {
  return (
    <svg {...stroke}>
      <rect x="6" y="11" width="28" height="18" rx="3" />
      <path d="M6 22h28" />
      <circle cx="28" cy="25.5" r="1.2" />
    </svg>
  );
}

function IconPlug() {
  return (
    <svg {...stroke}>
      <path d="M15 4v8M25 4v8" />
      <path d="M10 12h20v6a10 10 0 0 1-10 10 10 10 0 0 1-10-10z" />
      <path d="M20 28v8" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg {...stroke}>
      <circle cx="20" cy="20" r="14" />
      <path d="M13.5 20.5l4.5 4.5 8.5-9" />
    </svg>
  );
}

function IconAuto() {
  return (
    <svg {...stroke}>
      <path d="M8 14a13 13 0 0 1 23-4" />
      <path d="M31 4v6h-6" />
      <path d="M32 26a13 13 0 0 1-23 4" />
      <path d="M9 36v-6h6" />
      <path d="M17 17l6 3-6 3z" />
    </svg>
  );
}

function IconGallery() {
  return (
    <svg {...stroke}>
      <rect x="5" y="7" width="13" height="11" rx="2" />
      <rect x="22" y="7" width="13" height="11" rx="2" />
      <rect x="5" y="22" width="13" height="11" rx="2" />
      <rect x="22" y="22" width="13" height="11" rx="2" />
    </svg>
  );
}

function IconCamera() {
  return (
    <svg {...stroke}>
      <path d="M6 14a3 3 0 0 1 3-3h4l2.5-4h9L27 11h4a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" />
      <circle cx="20" cy="21" r="6" />
    </svg>
  );
}
