import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterHandle?: string;
  keywords?: string;
}

const SEO = ({
  title,
  description = "Café Dos Tazas - Exploring the world of coffee, one cup at a time.",
  canonical = "https://cafedostazas.com/",
  ogImage = "https://cafedostazas.com/coffeebean.jpg",
  ogType = "website",
  twitterHandle = "@cafedostazas",
  keywords = "coffee, café, dos tazas, specialty coffee, costa rica",
}: SEOProps) => {
  const siteName = "Café Dos Tazas";
  const fullTitle = title.includes("|") ? title : `${title} | ${siteName}`;

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    name: siteName,
    image: ogImage,
    description: description,
    url: canonical,
    telephon: "+1-555-555-5555", // Placeholder
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Coffee Lane",
      addressLocality: "Coffee City",
      addressRegion: "CO",
      postalCode: "12345",
      addressCountry: "CR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.9281, // Placeholder (San Jose, CR)
      longitude: -84.0907,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/dostazascafe",
      "https://www.facebook.com/dostazascafe",
    ],
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
