import { BookDemoButton } from "@/components/BookDemo";

/**
 * Top nav from the conversation design. The pill CTA opens the Book a demo
 * modal. "Sign in" goes to bckup Studio for customers we've already set up —
 * shown only when NEXT_PUBLIC_STUDIO_URL is configured.
 */
const STUDIO = process.env.NEXT_PUBLIC_STUDIO_URL?.replace(/\/+$/, "");

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-name">bckup</span>
      </a>
      <nav aria-label="Main" className="nav-links">
        <a href="#box">The Box</a>
        <a href="#studio">bckup Studio</a>
        {STUDIO ? <a href={`${STUDIO}/signin`}>Sign in</a> : null}
        <BookDemoButton source="header" className="btn btn-dark" />
      </nav>
    </header>
  );
}
