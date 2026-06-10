import Image from "next/image";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <>
      {/* masthead */}
      <header className="mast">
        <div className="wrap mast-in">
          <a className="wordmark" href="#top">
            Macbeth<i>.</i>
          </a>
          <nav>
            <a href="#why">Why</a>
            <a href="#ritual">How it works</a>
            <a href="#route">Privacy</a>
            <a href="#object">The object</a>
          </nav>
          <span className="gap" />
          <a className="order-link" href="#order">
            Join the waitlist
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="hero wrap" id="top">
        <div className="hero-meta">
          <span className="mono">A private memory cloud · est. 2026</span>
          <span className="mono">No. 001 — The Photo Device</span>
        </div>
        <h1>
          Your memories, <em>always</em> in your hands.
        </h1>
        <div className="hero-cols">
          <div>
            <p className="hero-lede">
              Macbeth is a small device that keeps every photo and video you
              take — <b>at home, on storage you own.</b> It backs up your phone
              the moment you walk in the door, and asks for nothing monthly in
              return.
            </p>
            <Waitlist source="hero" cta="Join the waitlist" />
            <p className="hero-note">
              Shipping 2026 · 30-day returns · no account required to browse at
              home.{" "}
              <a className="quiet-link" href="#ritual">
                How it works ↓
              </a>
            </p>
          </div>
          <figure className="hero-fig" style={{ margin: 0 }}>
            <div className="fig-slot">
              <Image
                src="/device-on-shelf.svg"
                alt="The Macbeth device resting on a bookshelf at home"
                fill
                sizes="(max-width: 880px) 100vw, 432px"
                priority
                unoptimized
              />
            </div>
            <figcaption className="figcap">
              <span>Fig. 1 — the device itself</span>
              <span>anodised · palm-sized</span>
            </figcaption>
          </figure>
        </div>
        <div className="hero-base">
          <span className="mono">
            <b>512 GB / 1 TB</b> — upgradeable
          </span>
          <span className="mono">
            <b>Works offline</b> — your network, not ours
          </span>
          <span className="mono">
            <b>₹0 / month</b> — forever
          </span>
        </div>
      </section>

      {/* 01 · why */}
      <section className="chapter wrap" id="why">
        <div className="ch-head">
          <span className="ch-no">№ 01</span>
          <span className="ch-title">The argument</span>
        </div>
        <div className="ch-body argument">
          <h2>
            Somewhere along the way, your photos became{" "}
            <em>someone else&apos;s business.</em> We&apos;d like to give them
            back.
          </h2>
          <div className="arg-grid">
            <div className="arg">
              <span className="no">a.</span>
              <h3>Owned, not rented</h3>
              <p>
                Stop paying a cloud and it starts forgetting you. Macbeth is
                bought once. Your library never expires, downgrades, or holds
                originals hostage.
              </p>
            </div>
            <div className="arg">
              <span className="no">b.</span>
              <h3>Private, by route</h3>
              <p>
                Photos travel from your phone to your shelf over your own Wi-Fi.
                There is no server in the middle to breach, subpoena, or train
                on.
              </p>
            </div>
            <div className="arg">
              <span className="no">c.</span>
              <h3>Quiet, on purpose</h3>
              <p>
                No feed, no upsell, no storage-full panic. A device that does
                one thing — keep what&apos;s irreplaceable — and then leaves you
                alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · ritual */}
      <section className="chapter wrap" id="ritual">
        <div className="ch-head">
          <span className="ch-no">№ 02</span>
          <span className="ch-title">
            The ritual — set up once, forget forever
          </span>
        </div>
        <div className="ch-body ritual">
          <div className="ritual-side">
            <p>
              There is no installer, no cables to your computer, no account
              creation maze. Macbeth pairs the way headphones do now — you show
              it your phone, and it understands.
            </p>
            <p className="aside">
              The whole ceremony takes about as long as a kettle. After that,
              backup is something that happens to you, not something you do.
            </p>
          </div>
          <div className="rsteps">
            <div className="rstep">
              <span className="t">Step i</span>
              <h3>Plug it in</h3>
              <span className="dur">~10 sec</span>
              <p>
                Power, anywhere in the house. A bookshelf is traditional. It
                wakes and waits.
              </p>
            </div>
            <div className="rstep">
              <span className="t">Step ii</span>
              <h3>Scan the code</h3>
              <span className="dur">~30 sec</span>
              <p>
                Open the app, point it at the small code on the device. It finds
                itself on your network and joins your Wi-Fi.
              </p>
            </div>
            <div className="rstep">
              <span className="t">Step iii</span>
              <h3>
                That&apos;s <i>it</i>
              </h3>
              <span className="dur">forever</span>
              <p>
                Every photo you take backs up the moment you&apos;re home. Years
                pass. You never think about it again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · the route */}
      <section
        className="chapter route"
        id="route"
        style={{ marginTop: 84, paddingBottom: 84 }}
      >
        <div className="wrap">
          <div className="ch-head">
            <span className="ch-no">№ 03</span>
            <span className="ch-title">The route your photos take</span>
          </div>
          <div className="ch-body">
            <p className="route-big">
              From your phone, to your shelf. <em>Not</em> through{" "}
              <span className="strike">their data centre</span>, ever.
            </p>
            <div className="route-path">
              <span>
                <b>01 · your phone</b> — the moment
              </span>
              <span>→</span>
              <span>
                <b>02 · your wi-fi</b> — the living room
              </span>
              <span>→</span>
              <span>
                <b>03 · your macbeth</b> — kept, encrypted
              </span>
              <span className="route-cloud">
                <span style={{ opacity: 0.7 }}>∅</span>
                <span style={{ opacity: 0.45 }}>
                  <b>the cloud</b> — not invited
                </span>
              </span>
            </div>
            <p className="route-foot">
              Away from home, Macbeth opens one private, end-to-end encrypted
              door for your devices alone — so the library is always with you,
              and only you.
            </p>
          </div>
        </div>
      </section>

      {/* 04 · the object */}
      <section className="chapter wrap" id="object">
        <div className="ch-head">
          <span className="ch-no">№ 04</span>
          <span className="ch-title">The object — a quiet spec sheet</span>
        </div>
        <div className="ch-body object">
          <figure className="object-fig" style={{ margin: 0 }}>
            <div className="fig-slot">
              <Image
                src="/device-detail.svg"
                alt="Detail of the Macbeth device — anodised texture, ports, pairing code"
                fill
                sizes="(max-width: 880px) 100vw, 560px"
                unoptimized
              />
            </div>
            <figcaption className="figcap" style={{ marginTop: 10 }}>
              <span>Fig. 2 — detail</span>
              <span>shown at actual temperament</span>
            </figcaption>
          </figure>
          <div>
            <div className="spec-table">
              <div className="spec-row">
                <span className="k">Storage</span>
                <span className="v">
                  512 GB or 1 TB <i>— user-upgradeable, standard drives</i>
                </span>
              </div>
              <div className="spec-row">
                <span className="k">Backup</span>
                <span className="v">Automatic, the moment you&apos;re home</span>
              </div>
              <div className="spec-row">
                <span className="k">Formats</span>
                <span className="v">
                  JPEG · HEIC · RAW · ProRes · MP4 <i>— originals, untouched</i>
                </span>
              </div>
              <div className="spec-row">
                <span className="k">Network</span>
                <span className="v">Wi-Fi 6 &amp; gigabit ethernet</span>
              </div>
              <div className="spec-row">
                <span className="k">Apps</span>
                <span className="v">
                  iOS · Android · web <i>— light &amp; dark, nested albums</i>
                </span>
              </div>
              <div className="spec-row">
                <span className="k">Exit</span>
                <span className="v">
                  Export everything, anytime{" "}
                  <i>— it&apos;s a drive, it&apos;s yours</i>
                </span>
              </div>
              <div className="spec-row">
                <span className="k">Subscription</span>
                <span className="v">
                  None. <i>That&apos;s the point.</i>
                </span>
              </div>
            </div>
            <p className="object-note">
              Runs silent and cool. Draws less power than a nightlight. Survives
              the internet going out — that&apos;s when it&apos;s most at home.
            </p>
          </div>
        </div>
      </section>

      {/* 05 · letters */}
      <section className="chapter wrap">
        <div className="ch-head">
          <span className="ch-no">№ 05</span>
          <span className="ch-title">Letters from early owners</span>
        </div>
        <div className="ch-body">
          <div className="letters">
            <div className="letter">
              <p>
                &ldquo;Set it up while the kettle boiled. Thirty thousand photos
                now just… live at home. I cancelled the cloud the same
                week.&rdquo;
              </p>
              <div className="sig">
                <b>Meera N.</b> — Bengaluru
              </div>
            </div>
            <div className="letter">
              <p>
                &ldquo;My kids&apos; whole childhood is no longer one missed
                payment away from disappearing. It&apos;s a little box on the
                shelf, and it&apos;s ours.&rdquo;
              </p>
              <div className="sig">
                <b>Tom B.</b> — Bristol
              </div>
            </div>
            <div className="letter">
              <p>
                &ldquo;Genuinely AirPods-easy. Scanned the code, it found
                itself, done. The future, minus the creepiness.&rdquo;
              </p>
              <div className="sig">
                <b>Diego R.</b> — Lisbon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 · order / waitlist */}
      <section className="chapter wrap colophon" id="order">
        <div className="ch-head">
          <span className="ch-no">№ 06</span>
          <span className="ch-title">Colophon &amp; waitlist</span>
        </div>
        <div className="ch-body">
          <h2>
            Bring them <em>home.</em>
          </h2>
          <div className="colophon-row">
            <div className="price">
              One device · every photo you&apos;ll ever take
              <b>
                ₹24,900 <i>— once</i>
              </b>
            </div>
            <Waitlist source="order" cta="Join the waitlist" />
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <span className="mono">© 2026 Macbeth Computer Co.</span>
          <span className="mono">
            Made for the things you can&apos;t replace
          </span>
          <span className="mono">
            <a href="#">Privacy</a> · <a href="#">Terms</a> ·{" "}
            <a href="mailto:hello@macbeth.photos">hello@macbeth.photos</a>
          </span>
        </div>
      </footer>
    </>
  );
}
