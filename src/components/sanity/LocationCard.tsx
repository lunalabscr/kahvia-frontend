import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import { MapPin, Phone, Globe } from "lucide-react";
import type { PointOfSale } from "@/interfaces/pos";

interface LocationCardProps {
  location: PointOfSale;
}

export default function LocationCard({ location }: LocationCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group bg-[#791216] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {location.imageUrl && (
        <div className="h-48 overflow-hidden relative">
          <Image
            src={location.imageUrl}
            alt={location.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col grow bg-[#b82324]">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold px-2 py-1 bg-[#f6e7d2] text-[#791216] rounded uppercase tracking-wider">
            {t.locations.filters[location.type] || location.type}
          </span>
          {location.city && (
            <span className="text-sm font-medium text-[#f6e7d2]/80">
              {location.city}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3 font-gotham text-[#f6e7d2] group-hover:text-primary-700 transition-colors line-clamp-2">
          {location.name}
        </h3>

        {location.description && (
          <p className="text-[#f6e7d2]/90 text-sm mb-4 line-clamp-3">
            {location.description}
          </p>
        )}

        {location.address && (
          <div className="flex items-start text-[#f6e7d2] text-sm mb-2">
            <MapPin className="w-4 h-4 mr-2 shrink-0 mt-0.5" />
            <span>{location.address}</span>
          </div>
        )}

        {location.phone && (
          <div className="flex items-center text-[#f6e7d2] text-sm mb-2">
            <Phone className="w-4 h-4 mr-2 shrink-0" />
            <a href={`tel:${location.phone}`} className="hover:underline">
              {location.phone}
            </a>
          </div>
        )}

        <div className="mt-auto pt-4 flex flex-col gap-3">
          {location.website && (
            <a
              href={location.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#f6e7d2] hover:text-white transition-colors text-sm font-medium"
            >
              <Globe className="w-4 h-4 mr-2" />
              {t.locations.visitWebsite}
            </a>
          )}

          {location.googleMapsUrl && (
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2 px-4 rounded-lg bg-[#f6e7d2] text-[#791216] font-bold hover:bg-white transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2" />
              {t.locations.getDirections}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
