import type { Metadata } from "next";
import { Spectral, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Macbeth — A private memory cloud",
  description:
    "Macbeth is a small device that keeps every photo you take — at home, on storage you own. No subscription. No one else's cloud.",
  openGraph: {
    title: "Macbeth — A private memory cloud",
    description:
      "Every photo you take, kept at home on storage you own. No subscription. No one else's cloud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spectral.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
