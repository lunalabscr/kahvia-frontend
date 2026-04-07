"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

interface ProducerGalleryProps {
  images: Array<{
    _key?: string;
    asset: any;
    alt?: string;
  }>;
}

export default function ProducerGallery({ images }: ProducerGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

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

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden my-12" ref={emblaRef}>
      <div className="flex -ml-4">
        {images.map((img, index) => {
          if (!img?.asset?._ref) return null;
          return (
            <div
              key={img._key || index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
            >
              <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={urlFor(img).width(600).height(450).url()}
                  alt={img.alt || "Producer Gallery Image"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {images.length > 1 && hasScroll && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#791216]/80 text-[#ebdcc7] hover:bg-[#b82324] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#791216]/80 text-[#ebdcc7] hover:bg-[#b82324] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}
