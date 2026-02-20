import { translations } from "@/i18n/translations";

import { SanityBlog } from "@/components/sanity/SanityBlogs";

import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Contact from "@/components/contact";

type Props = {
  params: Promise<{ lang: "en" | "es" }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

  return {
    title: t.home.seo.title,
    description: t.home.seo.description,
    keywords: t.home.seo.keywords,
    alternates: {
      canonical: `/${lang}`,
    },
    icons: "/logo.ico",
    openGraph: {
      title: t.home.seo.title,
      description: t.home.seo.description,
      locale: lang,
      type: "website",
      url: `/${lang}`,
      images: [
        {
          url: "/coffeebean.jpg",
          width: 1200,
          height: 630,
          alt: "Café Dos Tazas",
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  // We can also pass lang to client components if needed, or they can use useLanguage context/hook
  // But for initial server render, this is good.

  return (
    <>
      <Hero />
      <About />
      <Products />
      <SanityBlog />
      <Contact />
    </>
  );
}
