import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollHandler from "@/components/ScrollHandler";
import { Inter, Roboto, Doto } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});
const doto = Doto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-doto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Café Dos Tazas",
  description: "Dos Tazas Coffee Shop",
  metadataBase: new URL("https://cafedostazas.com"),
  icons: "https://cafedostazas.com/logo.svg",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
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

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${roboto.variable} ${doto.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <div className="bg-white min-h-screen text-neutral-900 font-sans selection:bg-primary-100 selection:text-primary-900 flex flex-col">
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
