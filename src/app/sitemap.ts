import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]{slug, language, publishedAt}`;
const PRODUCTS_QUERY = `*[_type == "product" && defined(slug.current)]{slug, language}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://cafedostazas.com";

  // Static routes for each language
  const staticRoutes = [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  // Fetch posts
  const posts =
    await client.fetch<
      { slug: { current: string }; language: string; publishedAt: string }[]
    >(POSTS_QUERY);
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/${post.language}/post/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Fetch products
  const products =
    await client.fetch<{ slug: { current: string }; language: string }[]>(
      PRODUCTS_QUERY,
    );
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/${product.language}/product/${product.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes, ...productRoutes];
}
