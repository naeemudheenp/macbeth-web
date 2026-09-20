"use client";

import { useState } from "react";

/**
 * Email capture → POST /api/waitlist → Neon.
 * Markup and styling match the join form in "bckup Site.dc.html": a pill
 * input beside a dark pill button, with the fine print below doubling as the
 * status line.
 */
type Status = "idle" | "loading" | "ok" | "err";

export default function Waitlist({
  source = "site",
  cta = "Join",
  placeholder = "Email address",
  note = "No account, no spam — one note when it ships, that's all.",
  id,
}: {
  source?: string;
  cta?: string;
  placeholder?: string;
  note?: string;
  id?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("err");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("ok");
      setMessage(data.message ?? "You're on the list.");
      setEmail("");
    } catch {
      setStatus("err");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form className="waitlist" onSubmit={onSubmit} noValidate id={id}>
      <div className="waitlist-row">
        <input
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Joining…" : cta}
        </button>
      </div>
      <div
        className={`msg${status === "ok" ? " ok" : ""}${
          status === "err" ? " err" : ""
        }`}
        role="status"
        aria-live="polite"
      >
        {message || note}
      </div>
    </form>
  );
}
