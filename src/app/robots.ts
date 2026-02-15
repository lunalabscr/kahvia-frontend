import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://cafedostazas.com/sitemap.xml",
    host: "https://cafedostazas.com",
  };
}
