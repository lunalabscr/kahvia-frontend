"use client";

import { useEffect, useState, useCallback } from "react";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";
import ContactButton from "@/components/ContactButton";
import ProductCard from "@/components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/interfaces/product";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";
import pictoProduct from "@/assets/images/brand/decoration-color/PINTOGRAMA-20.svg";
import RelatedProducts from "@/components/RelatedProducts";

interface ProductViewProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductView({
  product,
  relatedProducts,
}: ProductViewProps) {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedImageIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Combine main image and additional images
  const allImages = [
    product.image,
    ...(product.images || []).map((img) => img),
  ].filter(Boolean);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <div className="bg-[#f6e7d2] min-h-screen pt-20 pb-20 font-gotham relative overflow-hidden">
      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, rotate: 15 }}
        animate={{ opacity: 0.15, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -bottom-10 right-0 md:right-10 z-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
      >
        <Image
          src={pictoProduct}
          alt="Decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image Carousel */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg relative group">
              {/* Embla Viewport */}
              <div
                ref={emblaRef}
                className="overflow-hidden rounded-lg aspect-square"
              >
                <div className="flex h-full">
                  {allImages.map((img, index) => (
                    <div
                      className="flex-[0_0_100%] min-w-0 relative"
                      key={index}
                    >
                      <Image
                        src={urlFor(img).width(800).height(800).url()}
                        alt={`${product.name} - View ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#791216]/80 p-2 rounded-full shadow hover:bg-[#791216] transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#791216]/80 p-2 rounded-full shadow hover:bg-[#791216] transition-colors z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx
                        ? "border-primary-600 ring-2 ring-primary-100"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={urlFor(img).width(100).height(100).url()}
                      alt={`View ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-4xl font-titan font-bold text-[#b82324] mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-[#791216] mb-6">
              {formattedPrice}
            </p>

            <div className="prose prose-neutral max-w-none mb-8 font-gotham text-[#791216] prose-p:text-[#791216] prose-headings:text-[#b82324] prose-li:text-[#791216] prose-li:marker:text-[#b82324] prose-ul:text-[#791216] prose-ol:text-[#791216] prose-blockquote:text-[#791216] prose-blockquote:border-[#b82324] prose-strong:text-[#791216]">
              {product.body && <PortableText value={product.body} />}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8 text-sm">
              {product.process && (
                <div>
                  <span className="block text-[#b82324] font-medium mb-1">
                    {t.product.process}
                  </span>
                  <span className="font-semibold text-[#791216]">
                    {product.process}
                  </span>
                </div>
              )}
              {product.roastLevel && (
                <div>
                  <span className="block text-[#b82324] font-medium mb-1">
                    {t.product.roastLevel}
                  </span>
                  <span className="font-semibold text-[#791216]">
                    {product.roastLevel}
                  </span>
                </div>
              )}
              {product.producer && (
                <div>
                  <span className="block text-[#b82324] font-medium mb-1">
                    {t.product.producer}
                  </span>
                  <span className="font-semibold text-[#791216]">
                    {product.producer}
                  </span>
                </div>
              )}
              {product.altitude && (
                <div>
                  <span className="block text-[#b82324] font-medium mb-1">
                    {t.product.altitude}
                  </span>
                  <span className="font-semibold text-[#791216]">
                    {product.altitude}
                  </span>
                </div>
              )}
            </div>

            <ContactButton
              className="w-full justify-center"
              message={t.product.interestMessage.replace("{productName}", product.name)}
              phoneNumber={process.env.NEXT_PUBLIC_PHONE_NUMBER}
            />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts
            products={relatedProducts}
            title={t.product.related}
          />
        )}
      </div>
    </div>
  );
}
