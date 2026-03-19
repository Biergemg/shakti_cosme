import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import type { ReactNode } from "react";

import { siteMetadata } from "@/lib/seo/metadata";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${jost.variable} bg-[var(--color-page)] text-[var(--color-text)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
