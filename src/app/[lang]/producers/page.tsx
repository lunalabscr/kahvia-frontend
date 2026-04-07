import { client } from "@/sanity/client";
import ProducerCard from "@/components/sanity/ProducerCard";
import { translations } from "@/i18n/translations";
import type { Metadata } from "next";
import type { Producer } from "@/interfaces/producer";
import PostDecoration from "@/components/PostDecoration";

type Props = {
  params: Promise<{ lang: string }>;
};

async function getProducers(lang: string): Promise<Producer[]> {
  const query = `*[_type == "producer" && language == $lang]{
    _id,
    name,
    location,
    mainImage,
    slug
  }`;
  return client.fetch(query, { lang });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as "en" | "es"] || translations.en;

  return {
    title: `${t.producers.title} | Dos Tazas`,
    description: t.producers.subtitle,
    alternates: {
      canonical: `/${lang}/producers`,
      languages: {
        en: `/en/producers`,
        es: `/es/producers`,
      },
    },
    openGraph: {
      title: `${t.producers.title} | Dos Tazas`,
      description: t.producers.subtitle,
      type: "website",
      url: `/${lang}/producers`,
      locale: lang,
      siteName: "Café Dos Tazas",
      images: ["/logo-seo.svg"],
    },
  };
}

export default async function ProducersPage({ params }: Props) {
  const { lang } = await params;
  const producers = await getProducers(lang);
  const t = translations[lang as "en" | "es"] || translations.en;

  return (
    <div className="bg-[#ebdcc7] min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Decorative element (optional from existing codebase) */}
      <PostDecoration />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-titan font-bold mb-4 text-[#b82324]">
            {t.producers.title}
          </h1>
          <p className="text-lg text-[#791216] max-w-2xl mx-auto font-gotham">
            {t.producers.subtitle}
          </p>
        </header>

        {producers.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4 text-[#791216]">
              {t.producers.notFound}
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {producers.map((producer: Producer) => (
              <div key={producer._id} className="h-full">
                <ProducerCard producer={producer} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
