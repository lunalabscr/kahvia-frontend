import SEO from "./components/SEO";
import "./index.css";

export function App() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <SEO
        title="Café Dos Tazas - Coffee Project"
        description="Dos Tazas is a family project to dive deeper in the coffee realm."
        canonical="http://cafedostazas.com/"
        keywords="coffee, café, dos tazas, coffee project, specialty coffee, coffee culture, brewing methods, coffee recipes, costa rica coffee, coffee reviews, coffee blog"
      />
      <h1 className="text-5xl font-bold font-doto my-4 leading-tight">
        Dos Tazas Coffee
      </h1>
      <p className="font-roboto">Coffee project</p>
    </div>
  );
}

export default App;
