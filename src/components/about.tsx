import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-doto font-bold text-neutral-900 mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-lg text-neutral-600 font-roboto">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square">
              <img
                src="https://placehold.co/800x800?text=Coffee+Process"
                alt="Coffee Brewing Process"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
