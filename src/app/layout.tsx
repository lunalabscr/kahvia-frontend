import { LanguageProvider } from "@/context/LanguageContext";

import ScrollHandler from "@/components/ScrollHandler";
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import backgroundImg from "@/assets/images/brand/BACKGROUND.png";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Script from "next/script";

const titan = localFont({
  src: [
    {
      path: "../../public/fonts/Titan_One/TitanOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-titan",
  display: "swap",
});
const gotham = localFont({
  src: [
    {
      path: "../../public/fonts/Gotham/GothamBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham/GothamMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham/GothamBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Café Dos Tazas",
  description: "Dos Tazas Coffee Shop",
  metadataBase: new URL("https://www.cafedostazas.com"),
  icons: "/favicon.svg",
  alternates: {
    // We remove the global canonical and languages so that
    // dynamic pages don't all say they are '/' in other languages.
  },
  openGraph: {
    type: "website",
    siteName: "Café Dos Tazas",
    images: [
      {
        url: "/og-logo.svg",
        width: 1200,
        height: 630,
        alt: "Café Dos Tazas",
      },
    ],
  },
  facebook: {
    appId: "1306645701665827",
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
        className={`${titan.variable} ${gotham.variable} font-sans antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <Analytics />
        <SpeedInsights />
        <LanguageProvider>
          <div
            className="bg-[#791216] min-h-screen text-neutral-900 font-sans selection:bg-primary-100 selection:text-primary-900 flex flex-col"
            style={{
              // backgroundImage: `url(${backgroundImg.src})`,
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
            }}
          >
            <Suspense fallback={null}>
              <ScrollHandler />
            </Suspense>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <FloatingWhatsApp />
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
