import Link from "next/link";

/** The footer every page shares; Privacy and Terms are real pages since 2026-11-26. */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>bckup · Your photos. Your drives. Always yours.</span>
      <div className="site-footer-links">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <a href="mailto:hello@bckup.net">hello@bckup.net</a>
      </div>
    </footer>
  );
}
