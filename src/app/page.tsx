import Waitlist from "@/components/Waitlist";
import SiteHeader from "@/components/SiteHeader";
import {
  DoodleForever,
  DoodleLock,
  DoodlePlug,
  DoodleSleep,
  DoodleHomeHeart,
} from "@/components/Doodles";

export default function Home() {
  return (
    <>
      {/* nav */}
      <SiteHeader />

      {/* WHAT · hero */}
      <section className="fold hero" id="what">
        <div className="hero-body">
          <div className="container center">
            <div className="fade-in-up">
              <span className="sticker">No subscription, ever</span>
            </div>
            <h1 className="stagger-1">
              All your photos, backed up <em>at home.</em>
            </h1>
            <p className="hero-lead stagger-2">
              A little device that plugs in at home and{" "}
              <b>
                automatically backs up every photo and video on your phone.
              </b>{" "}
              You own the storage. No cloud, no monthly fee.
            </p>
            <div className="stagger-3">
              <Waitlist source="hero" cta="Join the waitlist" />
            </div>
            <p className="hero-note stagger-4">
              Shipping 2026 ·{" "}
              <a className="quiet-link" href="#how">
                See how it works ↓
              </a>
            </p>
          </div>
        </div>
      </section>


      {/* WHY · premium bento layout */}
      <section className="why-section" id="why">
        <div className="why-container">
          <div className="why-header">
            <span className="why-pill">Why bckup</span>
            <h2 className="why-title">
              Own your memories.
              <br />
              <em>Don&apos;t rent them.</em>
            </h2>
            <p className="why-desc">
              No subscriptions. No someone else&apos;s cloud. Just your photos,
              on your own storage, in your own home.
            </p>
          </div>
          <div className="why-cards">
            <div className="why-card">
              <div className="why-card-icon why-card-icon--forever">
                <DoodleForever className="why-card-svg" />
              </div>
              <div className="why-card-content">
                <h3>Yours forever</h3>
                <p>
                  Set it up once. Your library never expires, downgrades, or gets
                  held hostage by a missed payment.
                </p>
              </div>
              <span className="why-card-tag">No expiry</span>
            </div>
            <div className="why-card">
              <div className="why-card-icon why-card-icon--private">
                <DoodleLock className="why-card-svg" />
              </div>
              <div className="why-card-content">
                <h3>Truly private</h3>
                <p>
                  Photos go from your phone directly to your device — never
                  through our servers. Your memories stay yours.
                </p>
              </div>
              <span className="why-card-tag">Zero servers</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW · each step is its own slide */}
      <section className="fold step-slide" id="how">
        <div className="container">
          <p className="eyebrow">How · Step 1 / 3</p>
          <div className="step-main">
            <DoodlePlug className="step-doodle" />
            <div className="step-text">
              <h2>Plug it in</h2>
              <p>
                Power it anywhere at home. It wakes and waits — no computer, no
                cables.
              </p>
              <span className="dur">~10 seconds</span>
            </div>
          </div>
        </div>
      </section>
      <section className="fold step-slide">
        <div className="container">
          <p className="eyebrow">How · Step 2 / 3</p>
          <div className="step-main">
            <DoodlePlug className="step-doodle" />
            <div className="step-text">
              <h2>Open the app</h2>
              <p>
                Just open the bckup app on your phone. It instantly finds your
                device on the network — like pairing AirPods. No codes, no setup.
              </p>
              <span className="dur">Instant</span>
            </div>
          </div>
        </div>
      </section>
      <section className="fold step-slide">
        <div className="container">
          <p className="eyebrow">How · Step 3 / 3</p>
          <div className="step-main">
            <DoodleSleep className="step-doodle" />
            <div className="step-text">
              <h2>Then never again</h2>
              <p>
                Every photo you take backs up the moment you&apos;re home. Years
                pass. You never think about it again.
              </p>
              <span className="dur">Forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="fold join center" id="join">
        <div className="container">
          <DoodleHomeHeart className="join-doodle" />
          <p className="eyebrow">Join the waitlist</p>
          <h2>
            Bring them <em>home.</em>
          </h2>
          <p className="join-sub">
            Be first in line when bckup ships. No spam — one note when
            it&apos;s ready.
          </p>
          <Waitlist source="join" cta="Join the waitlist" />
          <footer>
            <span>© 2026 bckup · a Macbeth company</span>
            <span>
              <a href="#">Privacy</a> · <a href="#">Terms</a> ·{" "}
              <a href="mailto:hello@bckup.net">hello@bckup.net</a>
            </span>
          </footer>
        </div>
      </section>
    </>
  );
}
