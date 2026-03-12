import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";
import { translations } from "@/i18n/translations";
import Image from "next/image";
import Link from "next/link";
import PostDecoration from "@/components/PostDecoration";
import RelatedProducts from "@/components/RelatedProducts";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

async function getPost(slug: string, lang: string) {
  const POST_QUERY = `*[_type == "post" && slug.current == $slug && language == $lang][0]`;

  try {
    const post = await client.fetch(POST_QUERY, { slug, lang });
    return post;
  } catch (error) {
    console.error(`[getPost] Error fetching post with slug="${slug}":`, error);
    // Don't throw, return null so 404 can be handled gracefully if it's just a fetch error
    return null;
  }
}

async function getRecentProducts(lang: string) {
  const query = `*[_type == "product" && language == $lang][0...4]{
    _id,
    name,
    price,
    image,
    slug
  }`;
  try {
    return await client.fetch(query, { lang });
  } catch (error) {
    console.error(
      `[getRecentProducts] Error fetching recent products for lang="${lang}":`,
      error,
    );
    return [];
  }
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      // 'value' is the data for this specific block (the image object)

      // If no image is uploaded, don't render anything
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <figure className="my-8">
          <img
            // Use urlFor to generate the actual URL
            src={urlFor(value)
              .width(800) // You can resize on the fly!
              .fit("max")
              .auto("format")
              .url()}
            alt={value.alt || "Blog Post Image"}
            className="w-full h-auto rounded-lg"
          />
          {/* Render caption if it exists */}
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
      languages: {
        en: `/en/post/${slug}`,
        es: `/es/post/${slug}`,
      },
    },
    openGraph: {
      title: `${post.title} | Dos Tazas`,
      description: post.excerpt,
      type: "article",
      url: `/${lang}/post/${slug}`,
      locale: lang,
      siteName: "Café Dos Tazas",
      images: post.image
        ? [
            {
              url: urlFor(post.image).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: post.title,
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

export default async function PostPage({ params }: Props) {
  const { lang, slug } = await params;

  // Fetch post and products simultaneously
  const [post, recentProducts] = await Promise.all([
    getPost(slug, lang),
    getRecentProducts(lang),
  ]);

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
    <div className="bg-[#f6e7d2] min-h-screen pt-32 pb-12 relative overflow-hidden">
      {/* Decorative element */}
      <PostDecoration />

      <article className="container mx-auto px-4 max-w-3xl relative z-10">
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
          <h1 className="text-4xl md:text-5xl font-titan font-bold mb-4 text-[#b82324]">
            {post.title}
          </h1>
          <p className="text-[#791216] font-gotham mb-6">
            {new Date(post.publishedAt).toLocaleDateString(lang, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        <div className="prose prose-lg prose-neutral mx-auto prose-a:text-[#b82324] prose-headings:font-bold prose-headings:text-[#b82324] prose-p:text-[#791216] text-[#791216] prose-strong:text-[#791216] prose-li:text-[#791216] prose-li:marker:text-[#b82324] prose-ul:text-[#791216] prose-ol:text-[#791216] prose-blockquote:text-[#791216] prose-blockquote:border-[#b82324] font-gotham">
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : null}
        </div>

        {/* Related / Recent Products */}
        {recentProducts && recentProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#b82324]/20">
            <RelatedProducts
              products={recentProducts}
              title={t.product.related}
            />
          </div>
        )}
      </article>
    </div>
  );
}
