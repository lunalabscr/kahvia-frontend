import { LanguageProvider } from "@/context/LanguageContext";

import ScrollHandler from "@/components/ScrollHandler";
import { Titan_One, Montserrat } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const titan = Titan_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-titan",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Café Dos Tazas",
  description: "Dos Tazas Coffee Shop",
  metadataBase: new URL("https://cafedostazas.com"),
  icons: "/logo.ico",
  alternates: {
    // We remove the global canonical and languages so that
    // dynamic pages don't all say they are '/' in other languages.
  },
  openGraph: {
    type: "website",
    siteName: "Café Dos Tazas",
    images: [
      {
        url: "https://cafedostazas.com/coffeebean.jpg",
        width: 1200,
        height: 630,
        alt: "Café Dos Tazas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${titan.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        <LanguageProvider>
          <div className="bg-[#791216] min-h-screen text-neutral-900 font-sans selection:bg-primary-100 selection:text-primary-900 flex flex-col">
            <Suspense fallback={null}>
              <ScrollHandler />
            </Suspense>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
