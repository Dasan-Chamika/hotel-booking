import React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Haven Hotel | Luxury Boutique Accommodation",
  description:
    "Experience refined elegance and exceptional comfort at Haven Hotel. Book your perfect room for an unforgettable stay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
