import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";
import { translations } from "@/i18n/translations";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

async function getPost(slug: string, lang: string) {
  const POST_QUERY = `*[_type == "post" && slug.current == $slug && language == $lang][0]`;
  console.log(`[getPost] Fetching post: slug="${slug}", lang="${lang}"`);
  try {
    const post = await client.fetch(POST_QUERY, { slug, lang });
    console.log(
      `[getPost] Fetch result for slug="${slug}":`,
      post ? "Found" : "Not Found (null)",
    );
    return post;
  } catch (error) {
    console.error(`[getPost] Error fetching post with slug="${slug}":`, error);
    // Don't throw, return null so 404 can be handled gracefully if it's just a fetch error
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  console.log(`[generateMetadata] Params resolved: lang=${lang}, slug=${slug}`);
  const post = await getPost(slug, lang);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Dos Tazas`,
    description: post.excerpt,
    alternates: {
      canonical: `/${lang}/post/${slug}`,
    },
    openGraph: {
      images: post.image
        ? [urlFor(post.image).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = await getPost(slug, lang);
  const t = translations[lang as "en" | "es"] || translations.en;

  if (!post) {
    return (
      <div className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-2xl font-bold mb-4">{t.product.notFound}</h1>
        <Link
          href={`/${lang}/`}
          className="text-primary-600 hover:text-primary-700"
        >
          {t.product.backHome}
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <header className="mb-8 text-center">
        {post.image && (
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg relative aspect-video">
            <Image
              src={urlFor(post.image).width(1200).height(600).url()}
              alt={post.title}
              fill
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
          {post.title}
        </h1>
        <p className="text-neutral-500 mb-6">
          {new Date(post.publishedAt).toLocaleDateString(lang, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      <div className="prose prose-lg prose-neutral mx-auto prose-a:text-primary-700 prose-headings:font-bold prose-headings:text-neutral-900">
        {post.body ? <PortableText value={post.body} /> : null}
      </div>
    </article>
  );
}
