import SEO from "./components/SEO";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Products from "./components/products";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./index.css";

export function App() {
  return (
    <div className="bg-white min-h-screen text-neutral-900 font-sans selection:bg-primary-100 selection:text-primary-900">
      <SEO
        title="Café Dos Tazas - Coffee Project"
        description="Dos Tazas is a family project to dive deeper in the coffee realm."
        canonical="http://cafedostazas.com/"
        keywords="coffee, café, dos tazas, coffee project, specialty coffee, coffee culture, brewing methods, coffee recipes, costa rica coffee, coffee reviews, coffee blog"
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
