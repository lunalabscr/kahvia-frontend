import { client } from "@/sanity/client";
import { translations } from "@/i18n/translations";
import type { Metadata } from "next";
import LocationsList from "@/components/sanity/LocationsList";
import type { PointOfSale } from "@/interfaces/pos";

type Props = {
  params: Promise<{ lang: string }>;
};

async function getInitialLocations(lang: string): Promise<PointOfSale[]> {
  const LOCATIONS_QUERY = `*[_type == "pointOfSale" && language == $lang] {
    _id,
    language,
    name,
    slug,
    type,
    description,
    address,
    city,
    googleMapsUrl,
    phone,
    website,
    "imageUrl": image.asset->url
  }`;
  return client.fetch(LOCATIONS_QUERY, { lang });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as "en" | "es"] || translations.en;

  return {
    title: `${t.locations.title} | Dos Tazas`,
    description: t.locations.subtitle,
  };
}

export default async function LocationsPage({ params }: Props) {
  const { lang } = await params;
  const initialLocations = await getInitialLocations(lang);
  const t = translations[lang as "en" | "es"] || translations.en;

  return (
    <div className="min-h-screen bg-[#f6e7d2] pt-32 pb-20 relative overflow-hidden font-gotham">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#b82324] font-titan">
          {t.locations.title}
        </h1>
        <p className="text-center text-[#791216] max-w-2xl mx-auto mb-12">
          {t.locations.subtitle}
        </p>
        <LocationsList initialLocations={initialLocations} />
      </div>
    </div>
  );
}
