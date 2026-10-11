import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Type from the "bckup — a conversation with photographers" design file:
 * Bricolage Grotesque for display, Geist for body, Geist Mono for labels.
 */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});
const sans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "bckup — a box for your drives, a studio for your work",
  description:
    "bckup is a box for your hard drives and a studio for your photography — search, client galleries, automations and Wi‑Fi camera import. Studio Basic is ₹399 a month, with no storage fees on your own drives. No lock‑in.",
  openGraph: {
    title: "bckup — a box for your drives, a studio for your work",
    description:
      "Plug in your drives, join your Wi‑Fi, done. Add a drive when it fills up. No storage fees, and your photos are always yours.",
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
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
