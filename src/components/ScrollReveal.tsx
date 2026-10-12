"use client";

import { useEffect } from "react";

/**
 * Fades each message of the conversation in as it scrolls into view, so the
 * page reads one exchange at a time instead of as one long wall. Content is
 * only hidden once this has run (`html.reveal-ready`), so without JS — or with
 * reduced motion — everything is simply visible.
 */
const SELECTOR = ".chat > .you, .chat > .ask, .interlude-inner, .interlude .shot, .cta";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll(SELECTOR));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    els.forEach((el) => io.observe(el));
    root.classList.add("reveal-ready");
    return () => {
      io.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
