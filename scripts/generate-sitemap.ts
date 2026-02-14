import { createClient } from "@sanity/client";
import { writeFileSync } from "fs";
import { resolve } from "path";

// 1. Setup Sanity Client (Needs to match your project config)
// You might need to load env vars if they are not picked up automatically by Bun
const client = createClient({
  projectId: process.env.BUN_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.BUN_PUBLIC_SANITY_DATASET || "production",
  useCdn: false, // We want fresh data for sitemap
  apiVersion: "2024-02-13",
});

const BASE_URL = "https://cafedostazas.com";
const LANGUAGES = ["en", "es"];

const staticRoutes = ["", "/about", "/products", "/blog", "/contact"];

async function generateSitemap() {
  console.log("Generating sitemap...");
  console.log("Config:", {
    projectId: process.env.BUN_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.BUN_PUBLIC_SANITY_DATASET,
  });

  try {
    // Debug: fetch any documents
    const anyDocs = await client.fetch(`*[][0...5]{_type, _id}`);
    console.log("Sample docs:", anyDocs);

    // 2. Fetch Dynamic Data
    // Get all products raw
    const productsRaw = await client.fetch(`*[_type == "product"]`);
    console.log(`Found ${productsRaw.length} raw products`);
    if (productsRaw.length > 0)
      console.log("First product:", JSON.stringify(productsRaw[0], null, 2));

    const products = productsRaw
      .map((p: any) => ({ slug: p.slug?.current }))
      .filter((p: any) => p.slug);
    console.log(`Mapped ${products.length} valid product slugs`);

    // Get all posts raw
    const postsRaw = await client.fetch(`*[_type == "post"]`);
    console.log(`Found ${postsRaw.length} raw posts`);
    if (postsRaw.length > 0)
      console.log("First post:", JSON.stringify(postsRaw[0], null, 2));

    const posts = postsRaw
      .map((p: any) => ({ slug: p.slug?.current }))
      .filter((p: any) => p.slug);
    console.log(`Mapped ${posts.length} valid post slugs`);

    // 3. Build URL List
    let urls: string[] = [];

    // Static Routes for each language
    LANGUAGES.forEach((lang) => {
      staticRoutes.forEach((route) => {
        // Handle root specially if needed, but usually just /en or /en/about
        const url = `${BASE_URL}/${lang}${route}`;
        urls.push(url);
      });
    });

    // Dynamic Product Routes
    // Assuming products are available in both languages logic, or we point to same slug
    // If you have localized slugs, you'd need to fetch them.
    // For now, assuming slug is shared or valid for both prefix.
    products.forEach((product: { slug: string }) => {
      LANGUAGES.forEach((lang) => {
        urls.push(`${BASE_URL}/${lang}/product/${product.slug}`);
      });
    });

    // Dynamic Post Routes
    posts.forEach((post: { slug: string }) => {
      LANGUAGES.forEach((lang) => {
        urls.push(`${BASE_URL}/${lang}/post/${post.slug}`);
      });
    });

    // 4. Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    return `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

    // 5. Write to File
    // We write to public/sitemap.xml so it gets served
    const publicDir = resolve(process.cwd(), "public");
    const sitemapPath = resolve(publicDir, "sitemap.xml");

    writeFileSync(sitemapPath, sitemap);
    console.log(`Sitemap generated at: ${sitemapPath}`);
    console.log(`Total URLs: ${urls.length}`);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
}

generateSitemap();
