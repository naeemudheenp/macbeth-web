"use client";

import { useEffect } from "react";

/**
 * Page-wide scroll effects, no wrappers needed:
 * - `[data-reveal]` gets `.is-in` the first time it scrolls into view.
 * - `[data-count]` counts up from 0 to its value when it scrolls into view.
 * The `fx` class on <html> gates the hidden start state, so the page reads
 * fine without JS.
 */
export default function ScrollFx() {
  useEffect(() => {
    document.documentElement.classList.add("fx");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (reduce) {
        el.textContent = target.toLocaleString("en-US");
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1600);
        el.textContent = Math.round(target * (1 - (1 - p) ** 3)).toLocaleString(
          "en-US",
        );
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.count) countUp(el);
          io.unobserve(el);
        }
      },
      { threshold: 0.25 },
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal], [data-count]")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
