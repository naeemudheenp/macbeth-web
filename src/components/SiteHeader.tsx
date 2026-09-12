"use client";

import { useEffect, useState } from "react";

/**
 * Floating pill navbar inspired by ente.com — white bg, rounded, shadow on scroll.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-pill">
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
          Join waitlist
        </a>
      </div>
    </header>
  );
}
