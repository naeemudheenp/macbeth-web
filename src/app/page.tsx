import SiteHeader from "@/components/SiteHeader";
import Waitlist from "@/components/Waitlist";
import BoxDemo from "@/components/BoxDemo";
import BoxProduct from "@/components/BoxProduct";
import Screenshot from "@/components/Screenshot";
import AlbumsDemo from "@/components/AlbumsDemo";
import AutomationFlow from "@/components/AutomationFlow";
import Pricing from "@/components/Pricing";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Ported from the Claude Design file "bckup — a conversation with
 * photographers". The page reads as a chat: bckup asks, the photographer
 * answers, and each answer is met with a live demo or a real screenshot of
 * bckup Studio (public/screens/, captured from the local dev stack). The closing CTA is the
 * waitlist (POST /api/waitlist → Neon) rather than a buy button — nothing
 * ships yet.
 */
export default function Home() {
  return (
    <div className="page">
      <SiteHeader />
      <ScrollReveal />

      {/* ── hero ─────────────────────────────────────────────────────── */}
      <section id="top" className="hero">
        <p className="eyebrow">A short conversation with a photographer</p>
        <h1 className="display">
          We know you&apos;re awesome at the photos.
          <br />
          <Mark>Let&apos;s talk about everything after.</Mark>
        </h1>
        <p className="lede">
          bckup is a box for your drives and a studio for your work. Scroll —
          we&apos;ll ask, you answer.
        </p>
        <div className="hero-actions">
          <a href="#waitlist" className="btn btn-dark btn-lg">
            Join waitlist
          </a>
          <a href="#chat" className="btn btn-ghost btn-lg">
            Start the conversation
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── chat: hardware ───────────────────────────────────────────── */}
      <section id="chat" className="chat">
        <Ask>Quick question. Where do all your photos actually live right now?</Ask>
        <You>
          Honestly? A pile of hard drives, my laptop, and a cloud plan I keep
          upgrading. It&apos;s a mess.
        </You>

        <Ask
          id="box"
          extra={
            <>
              <figure className="product-stage">
                <BoxProduct className="product-svg" />
                <figcaption>
                  <span className="product-name">The Box</span>
                  <span className="muted">Thin enough to sit anywhere. Plug in the drives you already own.</span>
                </figcaption>
              </figure>
              <p className="body-lg">
                Setup feels like pairing Bluetooth headphones. No IT degree, no
                terminal, no manual.
              </p>
              <div className="steps">
                <Step n="01" title="Connect your drives" icon={<IconDrive />}>
                  The ones you already own. Plug them into the Box.
                </Step>
                <Step n="02" title="Join your Wi‑Fi" icon={<IconWifi />}>
                  Tap once on your phone, like pairing a headset.
                </Step>
                <Step n="03" title="You're backed up" icon={<IconCheck />}>
                  Every shoot, in one place, reachable from anywhere.
                </Step>
              </div>
            </>
          }
        >
          Then meet <Mark>the Box.</Mark> Plug your drives in, join your Wi‑Fi,
          done.
        </Ask>

        <You>
          Okay, nice. But what happens when it fills up? That&apos;s always
          where they get you.
        </You>
        <Ask extra={<BoxDemo />}>
          You just add another hard drive. <Mark>No storage plan.</Mark> You own
          it.
        </Ask>

        <You>And if I ever want to leave?</You>
        <Ask>
          Unplug your drives and walk. <Mark>No lock‑in. Always yours.</Mark>
        </Ask>
      </section>

      {/* ── interlude ────────────────────────────────────────────────── */}
      <section className="interlude">
        <div className="interlude-inner">
          <h2 className="display">
            Storage, sorted.
            <br />
            <Mark>Now the software.</Mark>
          </h2>
          <p className="body-lg">
            bckup Studio runs on your Box. Search, galleries, client sharing,
            automation and camera import — in one modern app.
          </p>
        </div>
        <Screenshot
          src="/screens/studio-library.jpg"
          alt="bckup Studio library: albums down the side and every photo on the drive in a grid"
          priority
        />
      </section>

      {/* ── chat: studio ─────────────────────────────────────────────── */}
      <section id="studio" className="chat">
        <You>
          Finding one shot from a wedding three years ago takes me twenty
          minutes of folder digging.
        </You>
        <Ask
          extra={
            <Screenshot
              src="/screens/studio-cmdk.jpg"
              alt="The ⌘K command palette in bckup Studio with quick actions and navigation"
            />
          }
        >
          Press <span className="kbd kbd-lg">⌘K</span> and type. Search,
          upload, everything — from one bar.
        </Ask>

        <You>And clients? They always want to pick favorites and leave notes.</You>
        <Ask
          extra={
            <Screenshot
              src="/screens/studio-gallery-wedding.jpg"
              alt="A published client gallery in the Wedding template: cover photo, Studio Lumen, Mehta wedding, 14 September 2026, with QR code and Slideshow buttons"
            />
          }
        >
          Publish a <Mark>client gallery</Mark> with one link. Slideshow,
          QR code and client favorites — all built in.
        </Ask>

        <You>
          And I file everything by client, then the day — haldi, ceremony,
          reception. Folders inside folders.
        </You>
        <Ask extra={<AlbumsDemo />}>
          Nest <Mark>albums</Mark> as deep as you like. Then auto-import pulls a
          whole shoot in by date.
        </Ask>

        <You>I lose every Sunday to sorting, moving and deleting files.</You>
        <Ask
          extra={
            <AutomationFlow />
          }
        >
          Save a rule once. <Mark>Automations</Mark> find the photos that match
          — by date or camera — and file them for you.
        </Ask>

        <You>Last one. Can I skip the card reader?</You>
        <Ask
          extra={
            <>
              <div className="card camera">
                <div className="camera-end">
                  <svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0B1F17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                    <circle cx="12" cy="13" r="3.5" />
                  </svg>
                  <span>Your camera</span>
                </div>
                <div className="camera-link">
                  <span className="dash" />
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
                    <path d="M12 19.5h.01" />
                  </svg>
                  <span className="dash" />
                </div>
                <div className="camera-end">
                  <BoxProduct className="box-mini" title="The bckup Box" />
                  <span>The Box</span>
                </div>
              </div>
              <p className="body-lg">
                Every frame lands on your drives while you&apos;re still
                shooting. Asset management keeps cameras, cards and shoots
                tracked in Studio.
              </p>
            </>
          }
        >
          Connect your camera and back up <Mark>straight over Wi‑Fi.</Mark>
        </Ask>

        <You>Okay. So what does all of this cost me?</You>
        <Ask id="pricing" extra={<Pricing />}>
          One plan: <Mark>Studio Basic, ₹399 a month.</Mark> No storage fees —
          the drives are yours.
        </Ask>
      </section>

      {/* ── waitlist CTA ─────────────────────────────────────────────── */}
      <section id="waitlist" className="cta-wrap">
        <div className="cta">
          <h2 className="display">
            So… shall we <Mark>bckup</Mark> your work?
          </h2>
          <p className="cta-lede">
            Your Box, your drives, and bckup Studio Basic for ₹399 a month. No
            storage fees, and your photos stay yours. Leave your email and we&apos;ll
            tell you the moment it ships.
          </p>
          <Waitlist source="cta" cta="Join waitlist" />
          <a href="#studio" className="btn btn-outline-light">
            See Studio again
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>bckup · Your photos. Your drives. Always yours.</span>
        <div className="site-footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:hello@bckup.net">hello@bckup.net</a>
        </div>
      </footer>
    </div>
  );
}

/* ── conversation primitives ───────────────────────────────────────────── */

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="mark">{children}</span>;
}

function Ask({
  children,
  extra,
  id,
}: {
  children: React.ReactNode;
  extra?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="ask" id={id}>
      <span aria-hidden="true" className="avatar-b">
        b
      </span>
      <div className="ask-body">
        <p className="display ask-text">{children}</p>
        {extra}
      </div>
    </div>
  );
}

function You({ children }: { children: React.ReactNode }) {
  return (
    <div className="you">
      <span className="you-label">You</span>
      <p className="you-bubble">{children}</p>
    </div>
  );
}

function Step({
  n,
  title,
  icon,
  children,
}: {
  n: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="card step">
      <span className="step-n">{n}</span>
      {icon}
      <strong>{title}</strong>
      <span className="muted">{children}</span>
    </div>
  );
}

/* ── icons ─────────────────────────────────────────────────────────────── */

const line = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#0B1F17",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function IconDrive() {
  return (
    <svg {...line}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 14h.01M11 14h6" />
    </svg>
  );
}

function IconWifi() {
  return (
    <svg {...line}>
      <path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a14 14 0 0 1 20 0" />
      <path d="M12 19.5h.01" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg {...line}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
