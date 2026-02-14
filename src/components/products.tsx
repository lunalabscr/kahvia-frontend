import { useEffect, useState, useCallback } from "react";
import { client } from "@/sanity/client";
import ProductCard from "./ProductCard";
import type { Product } from "@/interfaces/product";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const { language, t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Update scroll buttons state
  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const fetchProducts = async () => {
      // Filter by language. Assuming the field in Sanity is named 'language'
      const query = `*[_type == "product" && language == $lang]{
        _id,
        name,
        price,
        image,
        slug
      }`;
      try {
        const data = await client.fetch(query, { lang: language });
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [language]);

  if (products.length === 0) {
    return null;
  }

  return (
    <section id="products" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-doto font-bold text-neutral-900 mb-4">
            {t.home.products.title}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-roboto">
            {t.home.products.subtitle}
          </p>
        </div>

        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-8">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-8"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons for Desktop */}
          {/* {products.length > 0 && (
            <>
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )} */}

          {/* Mobile Navigation Arrows (visible only on small screens) */}
          {products.length > 0 && (
            <div className="flex justify-center gap-4 mt-8 lg:hidden">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 hover:text-primary-600 hover:border-primary-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
