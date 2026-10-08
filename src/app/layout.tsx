import type { Metadata, Viewport } from "next";
import "./globals.css";

/**
 * The design file sets type in the system stack (SF Pro on Apple hardware,
 * Helvetica Neue elsewhere), so no webfont is loaded.
 */
export const metadata: Metadata = {
  title: "bckup — For photographers",
  description:
    "The bckup box plugs into your hard disk and backs up every shoot automatically. Then it runs the rest of the studio: automation, better galleries, camera integration. A Macbeth company.",
  openGraph: {
    title: "bckup — For photographers",
    description:
      "Plug your hard disk into the bckup box and every shoot backs up automatically. No subscription.",
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
