/** Top nav from the conversation design. The pill CTA jumps to the waitlist. */
export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-name">bckup</span>
      </a>
      <nav aria-label="Main" className="nav-links">
        <a href="#box">The Box</a>
        <a href="#studio">bckup Studio</a>
        <a href="#pricing">Pricing</a>
        <a href="#waitlist" className="btn btn-dark">
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
