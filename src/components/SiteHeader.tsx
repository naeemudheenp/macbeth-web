/**
 * Sticky product nav — 52px, translucent white, 1000px column.
 * Links follow the page's question order.
 */
export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav">
        <a className="nav-brand" href="#top">
          bckup
        </a>
        <div className="nav-links">
          <a href="#storage">Storage</a>
          <a href="#studio">Studio</a>
          <a className="is-accent" href="#join">
            Join waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}
