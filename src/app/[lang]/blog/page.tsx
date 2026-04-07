import { client } from "@/sanity/client";
import { translations } from "@/i18n/translations";

import type { Metadata } from "next";
import BlogList from "@/components/sanity/BlogList";

type Props = {
  params: Promise<{ lang: string }>;
};

async function getInitialPosts(lang: string) {
  const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
    && language == $lang
  ]|order(publishedAt desc)[0...9]{_id, title, slug, publishedAt, image, body, excerpt}`;
  return client.fetch(POSTS_QUERY, { lang });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as "en" | "es"] || translations.en;

  return {
    title: `${t.nav.blog} | Dos Tazas`,
    description: t.home.seo.description,
  };
}

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;
  const initialPosts = await getInitialPosts(lang);
  const t = translations[lang as "en" | "es"] || translations.en;

  return (
    <div className="min-h-screen bg-[#f6e7d2] pt-32 pb-20 relative overflow-hidden font-gotham">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#b82324] font-titan">
          {t.home.blog.title}
        </h1>
        <BlogList initialPosts={initialPosts} lang={lang} />
      </div>
    </div>
  );
}
