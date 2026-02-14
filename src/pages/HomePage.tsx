import { SanityBlog } from "../components/sanity/SanityBlogs";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import { useLanguage } from "@/context/LanguageContext";

export const HomePage = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={t.home.seo.title}
        description={t.home.seo.description}
        canonical={`http://cafedostazas.com/${language}/`}
        keywords={t.home.seo.keywords}
      />
      <Hero />
      <About />
      <Products />
      <SanityBlog />
      <Contact />
    </>
  );
};
