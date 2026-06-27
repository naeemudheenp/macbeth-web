import Waitlist from "@/components/Waitlist";
import SiteHeader from "@/components/SiteHeader";
import {
  DoodlePhoneHome,
  DoodleForever,
  DoodleLock,
  DoodleNoCloud,
  DoodlePlug,
  DoodleScan,
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
            <DoodlePhoneHome className="hero-doodle" />
            <span className="sticker">No subscription, ever</span>
            <h1>
              All your photos, backed up <em>at home.</em>
            </h1>
            <p className="hero-lead">
              A little device that plugs in at home and{" "}
              <b>
                automatically backs up every photo and video on your phone.
              </b>{" "}
              You own the storage. No cloud, no monthly fee.
            </p>
            <Waitlist source="hero" cta="Join the waitlist" />
            <p className="hero-note">
              Shipping 2026 ·{" "}
              <a className="quiet-link" href="#how">
                See how it works
              </a>
            </p>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((dup) => (
              <span key={dup} style={{ display: "inline-flex" }}>
                {[
                  "Own your memories",
                  "No cloud",
                  "No subscription",
                  "Storage you own",
                  "Backs up at home",
                  "Set it & forget it",
                ].map((t) => (
                  <span key={t}>{t} ✦</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY · full-height 3-column split */}
      <section className="fold split why" id="why">
        <div className="split-head">
          <p className="eyebrow">Why</p>
          <h2>
            Own your memories. <em>Don&apos;t rent them.</em>
          </h2>
        </div>
        <div className="split-cols">
          <div className="col">
            <DoodleForever className="col-doodle" />
            <div className="col-body">
              <h3>Yours forever</h3>
              <p>
                Set it up once. Your library never expires, downgrades, or gets
                held hostage by a missed payment.
              </p>
            </div>
          </div>
          <div className="col">
            <DoodleLock className="col-doodle" />
            <div className="col-body">
              <h3>Private by design</h3>
              <p>
                Photos go from your phone to your device over your own Wi-Fi —
                never through anyone&apos;s servers.
              </p>
            </div>
          </div>
          <div className="col">
            <DoodleNoCloud className="col-doodle" />
            <div className="col-body">
              <h3>Works offline</h3>
              <p>
                Your network, not ours. It keeps backing up even when the
                internet is down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW · each step is its own full-screen slide */}
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
            <DoodleScan className="step-doodle" />
            <div className="step-text">
              <h2>Scan the code</h2>
              <p>
                Open the app and scan the code on the device. It finds itself on
                your network and joins your Wi-Fi.
              </p>
              <span className="dur">~30 seconds</span>
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
          <p className="eyebrow">Join the wishlist</p>
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
