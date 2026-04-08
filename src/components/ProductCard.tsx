"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { ProductCardProps } from "@/interfaces/product";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();
  const hasPresentations = Array.isArray(product.presentations) && product.presentations.length > 0;
  const currentPrice = hasPresentations ? (product.presentations?.[0]?.price || 0) : (product.price || 0);

  const formattedPrice = new Intl.NumberFormat(
    language === "es" ? "es-CR" : "en-US",
    {
      style: "currency",
      currency: language === "es" ? "CRC" : "USD",
    },
  ).format(currentPrice);

  return (
    <Link
      href={`/${language}/product/${product.slug.current}`}
      className="group bg-[#f6e7d2] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-transparent hover:border-neutral-100"
    >
      <div className="aspect-square bg-neutral-50 relative overflow-hidden">
        {product.image && (
          <Image
            src={urlFor(product.image).width(400).height(400).url()}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="p-6 flex flex-col grow bg-[#b82324]">
        <div className="mb-2">
          <span className="text-xs font-bold tracking-wider text-[#f6e7d2] uppercase line-clamp-1">
            {product.producer || t.product.singleOrigin}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-gotham font-black text-[#f6e7d2] mb-2 leading-tight group-hover:text-white transition-colors">
          {product.name}
        </h3>

        <div className="mt-auto pt-4 flex justify-between items-end border-t border-[#f6e7d2]/50">
          <span className="text-[#f6e7d2] font-bold text-lg">
            {formattedPrice}
          </span>
          <div className="flex items-center gap-1 text-sm font-medium text-[#f6e7d2] group-hover:text-primary-600 transition-colors">
            {t.product.details}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
