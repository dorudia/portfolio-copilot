import type { Metadata } from "next";
import { JetBrains_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Doru Dia",
  description: "Full-stack developer portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          @media print {
            .no-print {
              display: none !important;
            }
            @page {
              margin: 0.5cm;
            }
            body {
              margin: 0;
              padding: 0;
            }
          }
        `}</style>
      </head>
      <body
        className={`${jetbrainsMono.variable} ${greatVibes.variable} font-mono antialiased bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
