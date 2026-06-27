"use client";

import { useEffect, useState } from "react";

/**
 * Sticky nav that is transparent (and inverted to read on the violet hero)
 * while the hero is in view, then fades to its solid dark bar once the hero
 * scrolls away. Driven by an IntersectionObserver on the hero section.
 */
export default function SiteHeader() {
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("what");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        setOverHero(entry.isIntersecting && entry.intersectionRatio >= 0.55),
      { threshold: [0, 0.55, 1] },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav${overHero ? " over-hero" : ""}`}>
      <div className="nav-in">
        <a className="brand" href="#what">
          bckup<i>.</i>
        </a>
        <nav>
          <a href="#what">What</a>
          <a href="#why">Why</a>
          <a href="#how">How</a>
        </nav>
        <span className="gap" />
        <a className="order-link" href="#join">
          Join
        </a>
      </div>
    </header>
  );
}
