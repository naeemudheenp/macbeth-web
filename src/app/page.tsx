import ScrollFx from "@/components/ScrollFx";
import SiteHeader from "@/components/SiteHeader";
import Waitlist from "@/components/Waitlist";

/**
 * The page reads like an FAQ told through a camera: the hero is a viewfinder
 * and a film strip of the photographer's questions; each section answers one.
 * Order: hero → Q1 storage → storage solved → Q2 studio → FAQ → join → footer.
 */
export default function Home() {
  return (
    <div className="page">
      <ScrollFx />
      <SiteHeader />

      {/* ── hero: viewfinder + film strip of questions ───────────────── */}
      <section className="hero" id="top">
        <div className="vf">
          <div className="vf-scene" aria-hidden>
            <div className="vf-sun" />
            <div className="vf-ridge vf-ridge-back" />
            <div className="vf-ridge vf-ridge-front" />
          </div>
          <span className="vf-corner tl" aria-hidden />
          <span className="vf-corner tr" aria-hidden />
          <span className="vf-corner bl" aria-hidden />
          <span className="vf-corner br" aria-hidden />
          <span className="vf-focus" aria-hidden />

          <div className="vf-readout vf-readout-top" aria-hidden>
            <span>
              <i className="rec" /> Auto backup on
            </span>
            <span className="hide-sm">RAW + JPG</span>
          </div>

          <div className="vf-copy">
            <div className="eyebrow">For photographers</div>
            <h1>
              You&apos;re a <em>great</em> photographer.
            </h1>
            <p>
              And we know what gets in the way of the work. Let&apos;s go
              through it — one question at a time.
            </p>
          </div>

          <div className="vf-readout vf-readout-bottom" aria-hidden>
            <span>1/250</span>
            <span>F2.8</span>
            <span className="hide-sm">ISO 400</span>
            <span className="meter hide-sm">
              <i />
            </span>
            <span className="vf-frames">
              <b data-count="2481">2,481</b> backed up
            </span>
          </div>
        </div>

        <div className="strip">
          <div className="strip-track">
            <a className="frame" href="#storage">
              <span className="frame-top">
                <span>01</span>
                <span>Storage</span>
              </span>
              <span className="frame-q">Where is every shoot supposed to live?</span>
              <span className="frame-go">See the answer ↓</span>
            </a>
            <a className="frame" href="#studio">
              <span className="frame-top">
                <span>02</span>
                <span>Studio</span>
              </span>
              <span className="frame-q">
                Why does the rest of the studio still take all evening?
              </span>
              <span className="frame-go">See the answer ↓</span>
            </a>
            <a className="frame" href="#join">
              <span className="frame-top">
                <span>03</span>
                <span>Waitlist</span>
              </span>
              <span className="frame-q">So when can I get one?</span>
              <span className="frame-go">Join the waitlist ↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Q1: storage ──────────────────────────────────────────────── */}
      <section className="qa" id="storage">
        <div className="qa-head" data-reveal>
          <div>
            <div className="qa-label">
              <span className="qa-num">01</span> Storage
            </div>
            <h2>Where is every shoot supposed to live?</h2>
          </div>
          <p className="pain">
            Cards full on Saturday. The laptop full by Monday. A stack of hard
            drives in a drawer — and a quiet worry that the one shoot you forgot
            to copy is the one a client asks for.
          </p>
        </div>

        <div className="answer-head" data-reveal>
          <div className="answer-tag">The answer</div>
          <h3>Meet the bckup box.</h3>
          <p>
            Plug your hard disk into it. From then on, every photo is backed up
            — automatically. No dragging folders, no remembering, no
            subscription.
          </p>
        </div>

        <div className="stage" data-reveal>
          <BoxStage />
          <div className="stage-stats">
            <div>
              <b data-count="12408">12,408</b>
              <span>photos backed up this month</span>
            </div>
            <div>
              <b>0</b>
              <span>folders you had to drag</span>
            </div>
            <div>
              <b>$0</b>
              <span>a month, forever</span>
            </div>
          </div>
        </div>

        <ol className="timeline" data-reveal>
          <li>
            <span className="tl-dot" />
            <span className="tl-num">01</span>
            <h4>Connect your drive</h4>
            <p>The hard disk you already own plugs straight into the box.</p>
          </li>
          <li>
            <span className="tl-dot" />
            <span className="tl-num">02</span>
            <h4>Plug in the box</h4>
            <p>Anywhere in the studio or at home. It joins your network.</p>
          </li>
          <li>
            <span className="tl-dot" />
            <span className="tl-num">03</span>
            <h4>Never think about it</h4>
            <p>New photos land on your drive on their own. Back to shooting.</p>
          </li>
        </ol>
      </section>

      {/* ── storage solved ───────────────────────────────────────────── */}
      <section className="solved">
        <ul className="struck" data-reveal>
          <li>
            <span>Cards full on Saturday.</span>
          </li>
          <li>
            <span>Laptop full by Monday.</span>
          </li>
          <li>
            <span>Drives in a drawer.</span>
          </li>
          <li>
            <span>The shoot you forgot to copy.</span>
          </li>
        </ul>
        <h2 className="solved-word" data-reveal>
          <span className="solved-pre">Storage:</span>{" "}
          <span className="solved-done">
            solved.
            <svg viewBox="0 0 48 48" aria-hidden className="solved-tick">
              <path d="M10 25l9 9 19-20" />
            </svg>
          </span>
        </h2>
        <p className="solved-next">Now for the part that eats your evenings.</p>
      </section>

      {/* ── Q2: studio ───────────────────────────────────────────────── */}
      <section className="studio" id="studio">
        <div className="studio-inner">
          <div className="qa-head" data-reveal>
            <div>
              <div className="qa-label">
                <span className="qa-num">02</span> The studio
              </div>
              <h2>Why does the rest of the studio still take all evening?</h2>
            </div>
            <p className="pain">
              Importing, renaming, sorting, exporting, uploading, sending
              links. The shoot took two hours — the admin takes the rest of
              the night.
            </p>
          </div>

          <div className="answer-head" data-reveal>
            <div className="answer-tag">The answer</div>
            <h3>A studio that runs itself.</h3>
            <p>Once your photos are safe, the box keeps working for you.</p>
          </div>

          <div className="bento">
            {/* automation */}
            <article className="tile tile-wide" data-reveal>
              <div className="tile-copy">
                <div className="tile-kicker">Automation</div>
                <h4>The busywork, done before you sit down.</h4>
                <p>
                  Shoots sorted into folders by date and client, files renamed
                  your way.
                </p>
              </div>
              <div className="mock mock-files" aria-hidden>
                <div className="mock-bar">
                  <i />
                  <i />
                  <i />
                  <span>Rahman Wedding / Ceremony</span>
                </div>
                {[
                  ["DSC_0412.ARW", "2026-10-08_Rahman-Wedding_0412.ARW"],
                  ["DSC_0413.ARW", "2026-10-08_Rahman-Wedding_0413.ARW"],
                  ["DSC_0414.ARW", "2026-10-08_Rahman-Wedding_0414.ARW"],
                  ["IMG_2201.CR3", "2026-10-07_Studio-Portraits_2201.CR3"],
                ].map(([from, to]) => (
                  <div className="file-row" key={from}>
                    <span className="file-from">{from}</span>
                    <span className="file-arrow">→</span>
                    <span className="file-to">{to}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* gallery */}
            <article className="tile" data-reveal>
              <div className="tile-copy">
                <div className="tile-kicker">Better gallery UX</div>
                <h4>Galleries as good as the work.</h4>
                <p>
                  Thousands of frames without the lag. Client galleries
                  they&apos;ll actually enjoy picking from.
                </p>
              </div>
              <div className="mock mock-gallery" aria-hidden>
                <div className="g-grid">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <span
                      key={n}
                      className={`ph ph-${((n - 1) % 6) + 1}${
                        n === 2 || n === 7 ? " picked" : ""
                      }`}
                    />
                  ))}
                </div>
                <div className="g-bar">
                  <span>♥ Client picked 42 of 380</span>
                  <span className="g-share">Share</span>
                </div>
              </div>
            </article>

            {/* camera */}
            <article className="tile" data-reveal>
              <div className="tile-copy">
                <div className="tile-kicker">Camera integration</div>
                <h4>Shoot, and it&apos;s already home.</h4>
                <p>
                  Photos move from your camera to the box — no card reader in
                  between.
                </p>
              </div>
              <div className="mock mock-camera" aria-hidden>
                <div className="cam-row">
                  <svg viewBox="0 0 40 40" className="cam-icon">
                    <path d="M6 14a3 3 0 0 1 3-3h4l2.5-4h9L27 11h4a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" />
                    <circle cx="20" cy="21" r="6" />
                  </svg>
                  <span className="waves">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="mini-box">bckup</span>
                </div>
                <div className="cam-progress">
                  <div className="cam-label">
                    <span>Sending DSC_0118.ARW</span>
                    <span>118 / 240</span>
                  </div>
                  <div className="cam-track">
                    <i />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── quick FAQ ────────────────────────────────────────────────── */}
      <section className="faq" id="faq">
        <div className="faq-side">
          <div className="qa-label">Still wondering</div>
          <h2>A few more questions.</h2>
        </div>
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
        <div className="join-vf">
          <span className="vf-corner tl" aria-hidden />
          <span className="vf-corner tr" aria-hidden />
          <span className="vf-corner bl" aria-hidden />
          <span className="vf-corner br" aria-hidden />
          <h2>
            Shoot more.
            <br />
            Worry less.
          </h2>
          <p>Be first in line when the bckup box ships.</p>
          <Waitlist source="join" cta="Join waitlist" />
        </div>
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

/* ── product stage: drive → cable → box, photos flying in ──────────────── */

const PHOTO_PATH = "M150 40 C 340 -20, 600 20, 760 210";
const PHOTO_TINTS = ["#f2a65a", "#5fa8d3", "#7fb069", "#e07a5f", "#c9b6e4"];

function BoxStage() {
  return (
    <svg
      viewBox="0 0 1000 420"
      className="stage-svg"
      role="img"
      aria-label="A hard disk plugged into the bckup box, with photos flowing into it"
    >
      <defs>
        <linearGradient id="g-box" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbfbfd" />
          <stop offset="1" stopColor="#d2d2d7" />
        </linearGradient>
        <linearGradient id="g-drive" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a3e" />
          <stop offset="1" stopColor="#1f1f22" />
        </linearGradient>
        <radialGradient id="g-glow">
          <stop offset="0" stopColor="#4cd38a" stopOpacity="0.9" />
          <stop offset="1" stopColor="#4cd38a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-shadow">
          <stop offset="0" stopColor="#000" stopOpacity="0.6" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* shadows */}
      <ellipse cx="190" cy="318" rx="130" ry="14" fill="url(#g-shadow)" />
      <ellipse cx="760" cy="372" rx="190" ry="20" fill="url(#g-shadow)" />

      {/* drive */}
      <rect x="80" y="180" width="220" height="128" rx="18" fill="url(#g-drive)" stroke="rgba(255,255,255,0.12)" />
      <rect x="100" y="270" width="60" height="4" rx="2" fill="rgba(255,255,255,0.18)" />
      <circle cx="276" cy="284" r="4" fill="#4cd38a" className="blink" />
      <text x="100" y="222" className="st-label">
        YOUR DRIVE
      </text>
      <text x="100" y="250" className="st-cap">
        4 TB
      </text>

      {/* cable */}
      <path d="M300 244 C 420 244, 480 260, 600 260" stroke="#3a3a3e" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M300 244 C 420 244, 480 260, 600 260" className="flow" fill="none" />

      {/* box */}
      <rect x="600" y="140" width="320" height="226" rx="44" fill="url(#g-box)" />
      <rect x="600" y="140" width="320" height="226" rx="44" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <text x="760" y="262" textAnchor="middle" className="st-brand">
        bckup
      </text>
      <circle cx="760" cy="326" r="22" fill="url(#g-glow)" className="pulse" />
      <circle cx="760" cy="326" r="5" fill="#2fbf71" />

      {/* photos flying into the box */}
      <g className="flyers">
        {PHOTO_TINTS.map((tint, i) => (
          <g key={tint}>
            <rect x="-22" y="-16" width="44" height="32" rx="5" fill={tint} stroke="#fff" strokeWidth="3" opacity="0">
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </rect>
            <animateMotion path={PHOTO_PATH} dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </g>
        ))}
      </g>
    </svg>
  );
}
