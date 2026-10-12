"use client";

import { useEffect, useId, useRef, useState } from "react";
import BoxProduct from "@/components/BoxProduct";

/**
 * "What happens when it fills up?" — the Box seen from above with one port and
 * one cable to a hub that feeds up to four hard drives, pooled into a single
 * library. The library stays the same size; every drive you connect adds 2 TB,
 * so the platters empty out and there are still no storage fees. Numbers are
 * illustrative, not product specs.
 *
 * Driven by scroll, not buttons: the card is sticky inside a tall track, and
 * how far you've scrolled through the track is how many drives are plugged
 * in. Scrolling back up unplugs them again.
 */
const MAX_BAYS = 4;
const DRIVE_TB = 2;
const LIBRARY_TB = 1.84;

/* scene geometry, in the 660×300 viewBox */
const SLOTS = [292, 384, 476, 568];
const DRIVE_Y = 46;
const DRIVE_W = 76;
const DRIVE_H = 111; // keeps the disk's 100:146 ratio
const BRACE_Y = 30;
const HUB_X = 420;
const HUB_W = 96;
const HUB_Y = 236;
const TRUNK_Y = HUB_Y + 14;
const HUB_PORTS = [438, 458, 478, 498];
/* how high each branch turns towards its drive — nested, so none cross */
const ELBOWS = [196, 178, 178, 196];

/** Up from a hub port, across, then up into the drive, with rounded corners. */
function branchPath(fromX: number, toX: number, elbowY: number) {
  const R = 8;
  const d = toX > fromX ? 1 : -1;
  return `M${fromX} ${HUB_Y + 4} V ${elbowY + R} Q ${fromX} ${elbowY} ${fromX + d * R} ${elbowY} H ${toX - d * R} Q ${toX} ${elbowY} ${toX} ${elbowY - R} V ${DRIVE_Y + DRIVE_H + 6}`;
}

/* fraction of the scroll track at which drives 2, 3 and 4 plug in */
const THRESHOLDS = [0.18, 0.45, 0.72];

const tb = (n: number) => `${n.toFixed(2).replace(/\.?0+$/, "")} TB`;

export default function BoxDemo() {
  const [drives, setDrives] = useState(1);
  const [justAdded, setJustAdded] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const drivesRef = useRef(1);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const track = trackRef.current;
      const card = cardRef.current;
      if (!track || !card) return;
      const stickyTop = parseFloat(getComputedStyle(card).top) || 0;
      const travel = track.offsetHeight - card.offsetHeight;
      if (travel <= 0) return;
      const p = Math.min(1, Math.max(0, (stickyTop - track.getBoundingClientRect().top) / travel));
      setProgress(p);
      const n = 1 + THRESHOLDS.filter((t) => p >= t).length;
      if (n !== drivesRef.current) {
        setJustAdded(n > drivesRef.current ? n - 1 : null);
        drivesRef.current = n;
        setDrives(n);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const capacity = drives * DRIVE_TB;
  const pct = Math.round((LIBRARY_TB / capacity) * 100);
  const hot = pct > 80;
  const perDrive = LIBRARY_TB / drives / DRIVE_TB; // spread evenly across disks

  const hint =
    drives === 1
      ? "Almost full. Keep scrolling to plug another drive into the hub."
      : drives < MAX_BAYS
        ? "Still one library — just more room. Nothing to upgrade, nothing to renew."
        : "Four drives connected — 8 TB, and still no storage fees.";

  return (
    <div className="box-track" ref={trackRef}>
      <div className="card demo-box" ref={cardRef}>
        <div className="demo-box-head">
          <span className="eyebrow">Scroll to add drives</span>
          <span className={`fill-chip${hot ? " hot" : ""}`}>
            {hot ? "Almost full" : "Plenty of room"} · {pct}%
          </span>
        </div>

        {/* the Box from above: one port, one cable to a hub, the hub feeds
            every drive — and however many you add, they read as one library */}
        <div className="scene">
          <svg
            viewBox="0 0 660 300"
            className="scene-svg"
            role="group"
            aria-label={`The Box with ${drives} of ${MAX_BAYS} hard drives connected through one hub, pooled into one ${tb(capacity)} library`}
          >
            {/* one library, across every connected drive */}
            <g className="pool" aria-hidden="true">
              <path
                d={`M${SLOTS[0]} ${BRACE_Y + 8} V ${BRACE_Y} H ${SLOTS[drives - 1] + DRIVE_W} V ${BRACE_Y + 8}`}
              />
              <text x={(SLOTS[0] + SLOTS[drives - 1] + DRIVE_W) / 2} y={BRACE_Y - 8} textAnchor="middle">
                {drives === 1 ? `One library · ${tb(capacity)}` : `${drives} drives · one library · ${tb(capacity)}`}
              </text>
            </g>

            <BoxProduct x={6} y={34} width={234} height={250} decorative />

            {/* the Box's single port, the cable and the hub */}
            <rect x="222" y={TRUNK_Y - 5} width="10" height="10" rx="2.5" fill="#2b2f2a" />
            <path d={`M232 ${TRUNK_Y} H ${HUB_X}`} className="cable" />
            <g aria-hidden="true">
              <rect x={HUB_X} y={HUB_Y} width={HUB_W} height="28" rx="9" className="hub" />
              {HUB_PORTS.map((hx, i) => (
                <rect
                  key={`${hx}-${i < drives}`}
                  x={hx - 5}
                  y={HUB_Y + 4}
                  width="10"
                  height="6"
                  rx="1.5"
                  className={i < drives ? `hub-port on${justAdded === i ? " in" : ""}` : "hub-port"}
                />
              ))}
              <circle cx={HUB_X + HUB_W - 12} cy={HUB_Y + 19} r="2.5" fill="#22c55e" />
            </g>

            {SLOTS.map((sx, i) => {
              const on = i < drives;
              const next = i === drives;
              const plugX = sx + DRIVE_W / 2;
              const branch = branchPath(HUB_PORTS[i], plugX, ELBOWS[i]);
              if (on) {
                const fresh = justAdded === i;
                return (
                  <g key={`${sx}-on`}>
                    <path d={branch} pathLength={1} className={`cable branch${fresh ? " in" : ""}`} />
                    <rect x={plugX - 7} y={DRIVE_Y + DRIVE_H - 2} width="14" height="9" rx="2" fill="#2b2f2a" />
                    <g className={`drive-g${fresh ? " in" : ""}`}>
                      <Hdd
                        x={sx}
                        y={DRIVE_Y}
                        width={DRIVE_W}
                        height={DRIVE_H}
                        fill={perDrive}
                        hot={hot}
                        label={`Drive ${i + 1}`}
                      />
                    </g>
                    {fresh && (
                      <text x={plugX} y={DRIVE_Y + 58} textAnchor="middle" className="plus-tb" aria-hidden="true">
                        +{DRIVE_TB} TB
                      </text>
                    )}
                  </g>
                );
              }
              return (
                <g key={`${sx}-off`}>
                  {next && <path d={branch} className="cable ghost" />}
                  <g className={`slot-empty${next ? " next" : ""}`} aria-hidden="true">
                    <rect x={sx} y={DRIVE_Y} width={DRIVE_W} height={DRIVE_H} rx="7" />
                    <text x={sx + DRIVE_W / 2} y={DRIVE_Y + DRIVE_H / 2 + 9} textAnchor="middle">
                      +
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* capacity — one pool, however many drives */}
        <div className="cap">
          <div className="cap-row">
            <span>
              <strong>{tb(LIBRARY_TB)}</strong> of {tb(capacity)} used
            </span>
            <span className="mono">{pct}%</span>
          </div>
          <div className="cap-track" aria-hidden="true">
            <span className="cap-seg">
              <span className={`cap-fill${hot ? " hot" : ""}`} style={{ width: `${pct}%` }} />
            </span>
          </div>
        </div>

        <dl className="box-stats">
          <div>
            <dt>Your library</dt>
            <dd>{tb(LIBRARY_TB)}</dd>
          </div>
          <div>
            <dt>Free space</dt>
            <dd>{tb(capacity - LIBRARY_TB)}</dd>
          </div>
          <div>
            <dt>Storage fees</dt>
            <dd className="accent">₹0</dd>
          </div>
        </dl>

        <div className="demo-actions">
          <ol className="drive-dots" aria-hidden="true">
            {Array.from({ length: MAX_BAYS }, (_, i) => (
              <li key={i} className={i < drives ? "on" : ""} />
            ))}
          </ol>
          <span className="muted" aria-live="polite">
            {hint}
          </span>
          <span className="scroll-meter" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress})` }} />
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * A 3.5″ hard disk from above: brushed casing, platter, spindle, read arm and
 * a label. The coloured arc on the platter is how full this disk is.
 */
function Hdd({
  fill,
  hot,
  label,
  x,
  y,
  width,
  height,
}: {
  fill: number;
  hot: boolean;
  label: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}) {
  const id = useId().replace(/:/g, "");
  const r = 31; // data-ring radius
  const circ = 2 * Math.PI * r;
  const used = Math.max(0.02, Math.min(1, fill));

  return (
    <svg className="hdd" x={x} y={y} width={width} height={height} viewBox="0 0 100 146" role="img" aria-label={`${label}, ${DRIVE_TB} TB, ${Math.round(used * 100)}% full`}>
      <defs>
        <linearGradient id={`case-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2f3ef" />
          <stop offset="0.55" stopColor="#d9dbd4" />
          <stop offset="1" stopColor="#c2c5bc" />
        </linearGradient>
        <radialGradient id={`platter-${id}`} cx="0.42" cy="0.38" r="0.7">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#d7dad2" />
          <stop offset="0.8" stopColor="#a9ada3" />
          <stop offset="1" stopColor="#8f948a" />
        </radialGradient>
        <linearGradient id={`sheen-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0.3" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.7" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* casing */}
      <rect x="1" y="1" width="98" height="144" rx="6" fill={`url(#case-${id})`} stroke="#9ea398" strokeWidth="1" />
      <rect x="6" y="6" width="88" height="104" rx="4" fill="none" stroke="#b5b9ae" strokeWidth="0.8" />
      {[[6.5, 6.5], [93.5, 6.5], [6.5, 103.5], [93.5, 103.5]].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="2.4" fill="#aeb2a7" stroke="#8d9287" strokeWidth="0.5" />
          <path d={`M${cx - 1.2} ${cy}h2.4M${cx} ${cy - 1.2}v2.4`} stroke="#7d8277" strokeWidth="0.5" />
        </g>
      ))}

      {/* platter */}
      <circle cx="50" cy="52" r="40" fill="#6f746a" />
      <circle cx="50" cy="52" r="39" fill={`url(#platter-${id})`} />
      {[34, 27, 20].map((rr) => (
        <circle key={rr} cx="50" cy="52" r={rr} fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="0.5" />
      ))}
      {/* how full this disk is */}
      <circle
        cx="50"
        cy="52"
        r={r}
        fill="none"
        stroke={hot ? "#C2410C" : "#0E5A3A"}
        strokeOpacity="0.85"
        strokeWidth="6"
        strokeDasharray={`${used * circ} ${circ}`}
        transform="rotate(-90 50 52)"
        className="hdd-data"
      />
      <circle cx="50" cy="52" r="39" fill={`url(#sheen-${id})`} />
      {/* spindle */}
      <circle cx="50" cy="52" r="9" fill="#c9ccc4" stroke="#8d9287" strokeWidth="0.8" />
      <circle cx="50" cy="52" r="3.2" fill="#9ea398" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <circle
          key={a}
          cx={50 + 6 * Math.cos((a * Math.PI) / 180)}
          cy={52 + 6 * Math.sin((a * Math.PI) / 180)}
          r="0.9"
          fill="#7d8277"
        />
      ))}

      {/* read arm */}
      <g className="hdd-arm">
        <path d="M84 98 L57 66 L54 68.5 L80 101 Z" fill="#7f857a" />
        <path d="M57 66 L53 61.5 L51.5 63 L54 68.5 Z" fill="#5c6157" />
        <circle cx="83" cy="99" r="8" fill="#a3a89c" stroke="#7d8277" strokeWidth="0.8" />
        <circle cx="83" cy="99" r="2.6" fill="#7d8277" />
      </g>

      {/* label */}
      <rect x="9" y="114" width="82" height="25" rx="2.5" fill="#0B1F17" />
      <text x="15" y="125" fontSize="7" fontFamily="var(--font-code), monospace" fill="#C6F36B">
        {DRIVE_TB} TB
      </text>
      <text x="15" y="134" fontSize="5.5" fontFamily="var(--font-code), monospace" fill="#ffffff" fillOpacity="0.6">
        {label.toUpperCase()}
      </text>
      <rect x="70" y="119" width="15" height="15" rx="1.5" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="0.6" />
      <path d="M73 122h3v3h-3zM79 128h3v3h-3zM73 128h2M80 122v2" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="0.8" />
    </svg>
  );
}
