"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "err";

export default function Waitlist({
  source = "site",
  cta = "Join the waitlist",
  placeholder = "you@email.com",
  id,
}: {
  source?: string;
  cta?: string;
  placeholder?: string;
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
        <button
          type="submit"
          className="btn-ink"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining…" : cta}
        </button>
      </div>
      <p
        className={`msg${status === "ok" ? " ok" : ""}${status === "err" ? " err" : ""}`}
        role="status"
        aria-live="polite"
      >
        {message ||
          "No account, no spam — one note when it ships, that's all."}
      </p>
    </form>
  );
}
