import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/** A plain reading page for /privacy and /terms (2026-11-26). */
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="page">
      <SiteHeader />
      <main className="legal">
        <p className="eyebrow">Last updated {updated}</p>
        <h1 className="display">{title}</h1>
        <div className="legal-body">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
