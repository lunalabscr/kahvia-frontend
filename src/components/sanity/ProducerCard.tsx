"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { ProducerCardProps } from "@/interfaces/producer";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function ProducerCard({ producer }: ProducerCardProps) {
  const { language, t } = useLanguage();

  return (
    <Link
      href={`/${language}/producer/${producer.slug.current}`}
      className="group bg-[#f6e7d2] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-transparent hover:border-neutral-100"
    >
      <div className="aspect-4/3 bg-neutral-50 relative overflow-hidden">
        {producer.mainImage && (
          <Image
            src={urlFor(producer.mainImage).width(600).height(450).url()}
            alt={producer.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="p-6 flex flex-col grow bg-[#b82324]">
        <div className="mb-2">
          <span className="text-xs font-bold tracking-wider text-[#f6e7d2] uppercase line-clamp-1">
            {producer.location}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-titan font-black text-[#f6e7d2] mb-2 leading-tight group-hover:text-white transition-colors">
          {producer.name}
        </h3>

        <div className="mt-auto pt-4 flex justify-between items-end border-t border-[#f6e7d2]/50">
          <div className="flex items-center gap-1 text-sm font-medium text-[#f6e7d2] group-hover:text-white transition-colors">
            {t.producers.viewDetails}
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
