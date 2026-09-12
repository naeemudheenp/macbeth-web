import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
