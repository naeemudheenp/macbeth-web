import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import DemoModal, { BookDemoButton } from "@/components/BookDemo";

/**
 * /compare — bckup against the kinds of tools photographers use today.
 * Compares product *categories*, not individual products, and only on things
 * bckup really does. Guest selfie search and second copies (two drives + the
 * 50 GB cloud copy) were added 2026-11-21 once built. No pricing
 * (removed from the site 2026-11-09). Research behind it: 2026-11-21.
 */
export const metadata: Metadata = {
  title: "How bckup compares — bckup",
  description:
    "bckup next to gallery apps, event photo apps, cloud storage, NAS boxes and loose hard drives: no storage plan, every RAW kept, every shoot searchable, and your photos stay yours.",
};

type Mark = "yes" | "part" | "no";
type Cell = { v: Mark; note?: string };

const COLUMNS = [
  { name: "bckup", sub: "Box + Studio" },
  { name: "Gallery apps", sub: "like Pixieset, wfolio" },
  { name: "Event photo apps", sub: "like Kwikpic, FotoOwl" },
  { name: "Cloud storage", sub: "like Google Drive, Dropbox" },
  { name: "NAS box", sub: "like Synology" },
  { name: "Loose hard drives", sub: "" },
];

const ROWS: { label: string; cells: Cell[] }[] = [
  {
    label: "Storage grows with drives you own — no storage plan",
    cells: [
      { v: "yes" },
      { v: "no", note: "plan limits" },
      { v: "no", note: "plan limits" },
      { v: "no", note: "pay per TB" },
      { v: "yes" },
      { v: "yes" },
    ],
  },
  {
    label: "Keeps every RAW and video, not just the finals",
    cells: [
      { v: "yes" },
      { v: "part", note: "limited space" },
      { v: "no", note: "event delivery" },
      { v: "part", note: "up to your plan" },
      { v: "yes" },
      { v: "yes" },
    ],
  },
  {
    label: "Your photos stay readable if you stop paying",
    cells: [
      { v: "yes", note: "ordinary drives" },
      { v: "no" },
      { v: "no" },
      { v: "part", note: "download first" },
      { v: "yes" },
      { v: "yes" },
    ],
  },
  {
    label: "Search every shoot you've ever done — albums, notes, camera, date",
    cells: [
      { v: "yes" },
      { v: "no", note: "one gallery at a time" },
      { v: "no", note: "one event at a time" },
      { v: "part", note: "file names" },
      { v: "part", note: "general purpose" },
      { v: "no" },
    ],
  },
  {
    label: "Built for photographers — nested albums, automations",
    cells: [
      { v: "yes" },
      { v: "part", note: "delivery only" },
      { v: "part", note: "events only" },
      { v: "no" },
      { v: "no" },
      { v: "no" },
    ],
  },
  {
    label: "Client galleries — one link, slideshow, QR, favourites",
    cells: [
      { v: "yes" },
      { v: "yes" },
      { v: "yes" },
      { v: "part", note: "share links" },
      { v: "part", note: "share links" },
      { v: "no" },
    ],
  },
  {
    label: "Guests find their own photos with a selfie",
    cells: [
      { v: "yes", note: "selfie never kept" },
      { v: "part", note: "some apps" },
      { v: "yes" },
      { v: "no" },
      { v: "no" },
      { v: "no" },
    ],
  },
  {
    label: "A second copy of new work and favourites, without paying per TB",
    cells: [
      { v: "yes", note: "2 drives + 50 GB cloud" },
      { v: "part", note: "finals only" },
      { v: "part", note: "event photos only" },
      { v: "part", note: "pay per TB" },
      { v: "part", note: "RAID, set up yourself" },
      { v: "no", note: "copy by hand" },
    ],
  },
  {
    label: "Set up without IT knowledge",
    cells: [
      { v: "yes" },
      { v: "yes" },
      { v: "yes" },
      { v: "yes" },
      { v: "part" },
      { v: "yes" },
    ],
  },
];

const LABEL: Record<Mark, string> = { yes: "Yes", part: "Partly", no: "No" };

export default function Compare() {
  return (
    <div className="page">
      <SiteHeader />

      <section className="hero compare-hero">
        <p className="eyebrow">How bckup compares</p>
        <h1 className="display">
          Every other tool rents you a shelf.
          <br />
          <span className="mark">bckup is your archive.</span>
        </h1>
        <p className="lede">
          Gallery apps deliver the finals. Cloud plans charge you more every
          year. A pile of drives can&apos;t be searched. bckup keeps every shoot
          you&apos;ve ever done on drives you own — and lets you find any of it
          in seconds.
        </p>
      </section>

      <section className="compare-wins" aria-label="What bckup does differently">
        <Win n="01" title="No storage plan. Ever.">
          Your space is your drives. When one fills up, plug in another — no
          upgrade, no monthly bill that grows with your career.
        </Win>
        <Win n="02" title="Every RAW, every video.">
          Not just the edited JPEGs a gallery app keeps. Ten years of originals,
          in one library.
        </Win>
        <Win n="03" title="Find any shot in seconds.">
          Search across every shoot by album, client note, camera or date —
          not one gallery or one event at a time.
        </Win>
        <Win n="04" title="Yours if you ever leave.">
          Photos sit on ordinary drives with an index any computer can open.
          Unplug them and walk.
        </Win>
      </section>

      <section className="compare-wrap" aria-labelledby="compare-title">
        <h2 id="compare-title" className="display compare-title">
          Side by side
        </h2>
        <p className="compare-swipe" aria-hidden="true">Swipe the table to compare →</p>
        <div className="compare-scroll" tabIndex={0} role="region" aria-label="Comparison table, scrolls sideways">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col" className="compare-feature">
                  <span className="sr-only">Feature</span>
                </th>
                {COLUMNS.map((c, i) => (
                  <th key={c.name} scope="col" className={i === 0 ? "is-us" : undefined}>
                    <span className="compare-col-name">{c.name}</span>
                    {c.sub ? <span className="compare-col-sub">{c.sub}</span> : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className="compare-feature">
                    {r.label}
                  </th>
                  {r.cells.map((cell, i) => (
                    <td key={i} className={i === 0 ? "is-us" : undefined}>
                      <span className={`compare-mark is-${cell.v}`} aria-label={LABEL[cell.v]}>
                        <Glyph v={cell.v} />
                      </span>
                      {cell.note ? <span className="compare-note">{cell.note}</span> : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="compare-foot">
          Compares kinds of tools, not every product in them — individual apps
          and plans differ. Product names are their owners&apos; trademarks and
          are shown only as examples. November 2026.
        </p>
      </section>

      <section className="interlude">
        <div className="interlude-inner">
          <h2 className="display">
            Already love your gallery app?
            <br />
            <span className="mark">Keep it.</span>
          </h2>
          <p className="body-lg">
            Keep sending finals with the tools your clients know. bckup holds
            everything behind them — every original, every shoot, on your own
            drives.
          </p>
        </div>
      </section>

      <section id="demo" className="cta-wrap">
        <div className="cta">
          <h2 className="display">
            See it with <span className="mark">your</span> work.
          </h2>
          <p className="cta-lede">
            Book a demo and we&apos;ll walk you through bckup, then set your Box
            up for you.
          </p>
          <div className="cta-actions">
            <BookDemoButton source="compare" className="btn btn-mark btn-lg" />
            <Link href="/" className="btn btn-outline-light">
              Back to the home page
            </Link>
          </div>
        </div>
      </section>

      <DemoModal />

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

function Win({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="card compare-win">
      <span className="step-n">{n}</span>
      <strong>{title}</strong>
      <span className="muted">{children}</span>
    </div>
  );
}

function Glyph({ v }: { v: Mark }) {
  const p = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (v === "yes") return <svg {...p}><path d="M20 6 9 17l-5-5" /></svg>;
  if (v === "part") return <svg {...p}><path d="M6 12h12" /></svg>;
  return <svg {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>;
}
