/**
 * Sticky product nav — 52px, translucent white, 1000px column.
 * Ported from "bckup Site.dc.html".
 */
export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav">
        <a className="nav-brand" href="#what">
          bckup
        </a>
        <div className="nav-links">
          <a href="#why">Why</a>
          <a href="#how">How</a>
          <a className="is-accent" href="#join">
            Join waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}
