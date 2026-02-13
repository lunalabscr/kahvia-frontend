import { SanityBlog } from "../components/sanity/SanityBlogs";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
export const HomePage = () => {
  return (
    <>
      <SEO
        title="Café Dos Tazas - Coffee Project"
        description="Dos Tazas is a family project to dive deeper in the coffee realm."
        canonical="http://cafedostazas.com/"
        keywords="coffee, café, dos tazas, coffee project, specialty coffee, coffee culture, brewing methods, coffee recipes, costa rica coffee, coffee reviews, coffee blog"
      />
      <Hero />
      <About />
      <Products />
      <SanityBlog />
      <Contact />
    </>
  );
};
