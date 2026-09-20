import type { Metadata, Viewport } from "next";
import "./globals.css";

/**
 * The design file sets type in the system stack (SF Pro on Apple hardware,
 * Helvetica Neue elsewhere), so no webfont is loaded.
 */
export const metadata: Metadata = {
  title: "bckup — All your photos, backed up at home",
  description:
    "bckup is a little device that keeps every photo you take — at home, on storage you own. No subscription. No one else's cloud. A Macbeth company.",
  openGraph: {
    title: "bckup — All your photos, backed up at home",
    description:
      "Every photo you take, kept at home on storage you own. No subscription, no one else's cloud.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
