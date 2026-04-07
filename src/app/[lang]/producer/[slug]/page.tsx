import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";
import { translations } from "@/i18n/translations";
import Image from "next/image";
import Link from "next/link";
import PostDecoration from "@/components/PostDecoration";
import ProducerGallery from "@/components/sanity/ProducerGallery";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

async function getProducer(slug: string, lang: string) {
  const PRODUCER_QUERY = `*[_type == "producer" && slug.current == $slug && language == $lang][0]`;

  try {
    const producer = await client.fetch(PRODUCER_QUERY, { slug, lang });
    return producer;
  } catch (error) {
    console.error(`[getProducer] Error fetching producer with slug="${slug}":`, error);
    return null;
  }
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).fit("max").auto("format").url()}
            alt={value.alt || "Producer Content Image"}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <figcaption className="text-center text-gray-500 mt-2 text-sm">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const producer = await getProducer(slug, lang);

  if (!producer) {
    return {
      title: "Producer Not Found",
    };
  }

  const t = translations[lang as "en" | "es"] || translations.en;
  const regularKeywords = t.home.seo.keywords;
  
  const seoKeywords = producer.seo?.keywords;
  const itemKeywords = Array.isArray(seoKeywords)
    ? seoKeywords.join(", ")
    : seoKeywords || "";

  const combinedKeywords = [itemKeywords, regularKeywords]
    .filter(Boolean)
    .join(", ");

  const metaTitle = producer.seo?.metaTitle || `${producer.name} | Dos Tazas`;
  const metaDescription = producer.seo?.metaDescription || `Meet ${producer.name}, one of our dedicated producers in ${producer.location}.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: combinedKeywords,
    alternates: {
      canonical: `/${lang}/producer/${slug}`,
      languages: {
        en: `/en/producer/${slug}`,
        es: `/es/producer/${slug}`,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      url: `/${lang}/producer/${slug}`,
      locale: lang,
      siteName: "Café Dos Tazas",
      images: producer.mainImage
        ? [
            {
              url: urlFor(producer.mainImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: producer.name,
            },
          ]
        : [
            {
              url: "/logo-seo.svg",
              width: 1200,
              height: 630,
              alt: "Café Dos Tazas",
            },
          ],
    },
  };
}

export default async function ProducerPage({ params }: Props) {
  const { lang, slug } = await params;
  const producer = await getProducer(slug, lang);
  const t = translations[lang as "en" | "es"] || translations.en;

  if (!producer) {
    return (
      <div className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 h-screen">
        <h1 className="text-2xl font-bold mb-4">{t.producers.notFound}</h1>
        <Link
          href={`/${lang}/producers`}
          className="text-primary-600 hover:text-primary-700 underline font-bold"
        >
          {t.producers.backHome}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#ebdcc7] min-h-screen pt-32 pb-12 relative overflow-hidden">
      <PostDecoration />

      <article className="container mx-auto px-4 max-w-4xl relative z-10">
        <header className="mb-12 text-center">
          {producer.mainImage && (
            <div className="rounded-xl overflow-hidden mb-8 shadow-lg relative aspect-video w-full max-w-3xl mx-auto">
              <Image
                src={urlFor(producer.mainImage).width(1200).height(675).url()}
                alt={producer.name}
                fill
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[#b82324] text-[#f6e7d2] text-sm font-bold uppercase tracking-wider">
            {producer.location}
          </span>
          <h1 className="text-5xl md:text-6xl font-titan font-bold mb-6 text-[#b82324]">
            {producer.name}
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <div className="prose prose-lg prose-neutral prose-a:text-[#b82324] prose-headings:font-bold prose-headings:text-[#b82324] prose-p:text-[#791216] text-[#791216] prose-strong:text-[#791216] font-gotham wrap-break-word w-full">
            {producer.about ? (
              <PortableText value={producer.about} components={ptComponents} />
            ) : null}
          </div>
          <div className="prose prose-lg prose-neutral prose-a:text-[#b82324] prose-headings:font-bold prose-headings:text-[#b82324] prose-p:text-[#791216] text-[#791216] prose-strong:text-[#791216] font-gotham bg-[#f6e7d2]/50 p-8 rounded-xl border border-[#b82324]/20 wrap-break-word w-full shadow-sm">
            <h3 className="text-2xl font-titan mb-4 mt-0 text-[#b82324]">Dos Tazas & {producer.name}</h3>
            {producer.dosTazasRelationship ? (
              <PortableText value={producer.dosTazasRelationship} components={ptComponents} />
            ) : (
              <p>We are very proud to share a close relationship with {producer.name}.</p>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        {producer.gallery && producer.gallery.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#b82324]/20">
             <h3 className="text-3xl font-titan font-bold text-center mb-8 text-[#b82324]">
               Gallery
             </h3>
             <ProducerGallery images={producer.gallery} />
          </div>
        )}

        <div className="mt-16 text-center">
            <Link
              href={`/${lang}/producers`}
              className="inline-flex items-center gap-2 bg-[#791216] text-[#f6e7d2] px-8 py-3 rounded-full hover:bg-[#b82324] hover:text-white transition-colors font-bold shadow-md"
            >
              {t.producers.backHome}
            </Link>
        </div>
      </article>
    </div>
  );
}
