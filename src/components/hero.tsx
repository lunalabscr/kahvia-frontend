import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://placehold.co/1920x1080?text=Coffee+Shop+Background"
          alt="Coffee Shop Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-doto text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Cafe Dos Tazas
        </h1>
        <p className="font-roboto text-xl md:text-2xl mb-8 text-neutral-200 max-w-2xl mx-auto">
          Specialty Coffee
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#products"
            className="group bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
          >
            Shop Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
