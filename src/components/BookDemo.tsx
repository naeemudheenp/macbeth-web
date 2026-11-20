"use client";

import { useEffect, useRef, useState } from "react";

/**
 * "Book a demo": every button on the page opens one modal that asks for a
 * mobile number and nothing else — we call back and learn the rest on the call.
 *
 * Posts straight from the browser to {Core}/api/public/demo-requests, not via a
 * Next route, so Core's per-IP rate limit sees the visitor rather than one
 * shared server address. The site's origin therefore has to be in Core's
 * CORS_ORIGINS. The operator works the leads in the admin console.
 */
const CORE = (process.env.NEXT_PUBLIC_CORE_URL ?? "http://localhost:3000").replace(/\/+$/, "");
const OPEN_EVENT = "bckup:book-demo";

/** Mirrors Core's normalisePhone: 10 digits on their own are Indian (+91). */
function normalisePhone(raw: string): string | null {
  let s = raw.replace(/[\s().\-]/g, "");
  if (s.startsWith("00")) s = `+${s.slice(2)}`;
  if (/^0?[6-9]\d{9}$/.test(s)) return `+91${s.slice(-10)}`;
  if (/^91[6-9]\d{9}$/.test(s)) return `+${s}`;
  if (/^\+\d{8,15}$/.test(s)) return s;
  return null;
}

/** Any "Book a demo" button. `source` records which one was pressed. */
export function BookDemoButton({
  source,
  className,
  children = "Book a demo",
}: {
  source: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { source } }))}
    >
      {children}
    </button>
  );
}

type Status = "idle" | "loading" | "ok" | "err";

/** Mounted once per page. */
export default function DemoModal() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [source, setSource] = useState("site");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState("");

  useEffect(() => {
    const open = (e: Event) => {
      setSource((e as CustomEvent<{ source?: string }>).detail?.source ?? "site");
      if (status === "ok") {
        setStatus("idle");
        setPhone("");
      }
      setError("");
      dialog.current?.showModal();
      requestAnimationFrame(() => input.current?.focus());
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, [status]);

  const close = () => dialog.current?.close();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    const normalised = normalisePhone(phone);
    if (!normalised) {
      setStatus("err");
      setError("That doesn't look like a mobile number. Try 98765 43210.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(`${CORE}/api/public/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalised, source, website }),
      });
      if (!res.ok) {
        setStatus("err");
        setError(
          res.status === 429
            ? "You've already asked a few times — we'll call you soon."
            : res.status === 400
              ? "That doesn't look like a mobile number. Try 98765 43210."
              : "Something went wrong. Please try again.",
        );
        return;
      }
      setSentTo(normalised.startsWith("+91") ? `+91 ${normalised.slice(3, 8)} ${normalised.slice(8)}` : normalised);
      setStatus("ok");
    } catch {
      setStatus("err");
      setError("Couldn't reach us. Check your connection, or write to hello@bckup.net.");
    }
  }

  return (
    <dialog
      ref={dialog}
      className="book-demo"
      aria-labelledby="book-demo-title"
      // A click on the backdrop lands on the <dialog> itself.
      onClick={(e) => e.target === dialog.current && close()}
    >
      <div className="book-demo-body">
        <button type="button" className="book-demo-close" onClick={close} aria-label="Close">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {status === "ok" ? (
          <div role="status" aria-live="polite">
            <h2 id="book-demo-title" className="book-demo-title">
              We&apos;ll call you.
            </h2>
            <p className="book-demo-lede">
              Expect a call on <strong>{sentTo}</strong> within a day to set up your demo.
            </p>
            <button type="button" className="book-demo-submit" onClick={close}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <h2 id="book-demo-title" className="book-demo-title">
              Book a demo
            </h2>
            <p className="book-demo-lede">Leave your mobile number and we&apos;ll call you back.</p>
            <label className="book-demo-field">
              <span className="sr-only">Mobile number</span>
              <span className="book-demo-cc" aria-hidden="true">
                +91
              </span>
              <input
                ref={input}
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel-national"
                placeholder="98765 43210"
                maxLength={20}
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-invalid={status === "err"}
                aria-describedby="book-demo-msg"
              />
            </label>
            {/* Honeypot — off-screen for people, irresistible to form bots. */}
            <input
              className="book-demo-hp"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <p id="book-demo-msg" className={`book-demo-msg${status === "err" ? " err" : ""}`} aria-live="polite">
              {error || "No spam. We only use it to call you about bckup."}
            </p>
            <button type="submit" className="book-demo-submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Call me back"}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
