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
  canonical,
  ogImage = "http://cafedostazas.com/coffeebean.jpg",
  ogType = "website",
  twitterHandle = "@cafedostazas",
  keywords,
}: SEOProps) => {
  const siteName = "Café Dos Tazas";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />{" "}
      {/* 3. Rendered the tag here */}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
