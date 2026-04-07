"use client";

import { useEffect, useState, useCallback } from "react";
import { client } from "@/sanity/client";
import ProductCard from "./ProductCard";
import type { Product } from "@/interfaces/product";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import pictoProducts from "@/assets/images/brand/decoration-color/PINTOGRAMA-20.svg";
import pictoNoProducts1 from "@/assets/images/brand/decoration-color/PINTOGRAMA-03.svg";
import pictoNoProducts2 from "@/assets/images/brand/decoration-color/PINTOGRAMA-05.svg";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [hasScroll, setHasScroll] = useState(false);

  // Update scroll buttons state
  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setHasScroll(api.scrollSnapList().length > 1);
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
    let isMounted = true;
    const fetchProducts = async () => {
      setLoading(true);
      // Filter by language. Assuming the field in Sanity is named 'language'
      const query = `*[_type == "product" && language == $lang]{
        _id,
        name,
        price,
        image,
        slug,
        producer
      }`;
      try {
        const data = await client.fetch(query, { lang: language });
        if (isMounted) setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, [language]);

  if (loading) {
    return (
      <section
        className="py-20 bg-[#791216] min-h-[400px]"
        id="products"
      ></section>
    );
  }

  if (products.length === 0) {
    return (
      <motion.section
        id="products"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-20 bg-[#ebdcc7] overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <div className="flex justify-center items-center gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={pictoNoProducts1}
                alt="Coffee Decoration"
                width={120}
                height={120}
                className="object-contain drop-shadow-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src={pictoNoProducts2}
                alt="Coffee Decoration"
                width={120}
                height={120}
                className="object-contain drop-shadow-md"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-titan font-bold text-[#b82324] mb-4">
              {t.home.products.noProductsTitle}
            </h2>
            <p className="text-[#791216] max-w-2xl mx-auto font-gotham text-lg">
              {t.home.products.noProductsSubtitle}
            </p>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="products"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-[#ebdcc7] overflow-hidden relative"
    >
      {/* Decorative colored art */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-0 md:-right-20 z-0 w-48 h-48 md:w-80 md:h-80 pointer-events-none"
      >
        <Image
          src={pictoProducts}
          alt="Decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-titan font-bold text-[#b82324] mb-4">
            {t.home.products.title}
          </h2>
          <p className="text-[#791216] max-w-2xl mx-auto font-gotham">
            {t.home.products.subtitle}
          </p>
        </div>

        <div className="relative">
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
          {products.length > 0 && hasScroll && (
            <>
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-[#791216] text-[#ebdcc7] hover:bg-[#b82324] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-[#791216] text-[#ebdcc7] hover:bg-[#b82324] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Mobile Navigation Arrows (visible only on small screens) */}
          {products.length > 0 && hasScroll && (
            <div className="flex justify-center gap-4 mt-8 lg:hidden">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#791216] text-[#ebdcc7] hover:bg-[#b82324] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#791216] text-[#ebdcc7] hover:bg-[#b82324] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
