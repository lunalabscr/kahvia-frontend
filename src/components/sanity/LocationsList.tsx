"use client";

import { useState } from "react";
import { PointOfSale } from "@/interfaces/pos";
import { useLanguage } from "@/context/LanguageContext";
import LocationCard from "./LocationCard";

interface LocationsListProps {
  initialLocations: PointOfSale[];
}

export default function LocationsList({ initialLocations }: LocationsListProps) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | PointOfSale["type"]>("all");

  const filteredLocations = filter === "all" 
    ? initialLocations
    : initialLocations.filter(loc => loc.type === filter);

  const filterOptions: Array<"all" | PointOfSale["type"]> = [
    "all", "coffee-shop", "supermarket", "restaurant", "online"
  ];

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
              filter === option
                ? "bg-[#791216] text-[#f6e7d2] shadow-md"
                : "bg-white/50 text-[#791216] hover:bg-white hover:shadow-sm"
            }`}
          >
            {t.locations.filters[option as keyof typeof t.locations.filters]}
          </button>
        ))}
      </div>

      {/* Grid List */}
      {filteredLocations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((location) => (
            <LocationCard key={location._id} location={location} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 px-4 bg-white/30 rounded-2xl border border-[#b82324]/20">
          <h3 className="text-2xl font-bold text-[#b82324] mb-2 font-titan">
            {t.locations.emptyTitle}
          </h3>
          <p className="text-[#791216]/80 max-w-md mx-auto">
            {t.locations.emptySubtitle}
          </p>
          <button
            onClick={() => setFilter("all")}
            className="mt-6 px-6 py-2 bg-[#b82324] text-[#f6e7d2] rounded-full font-bold hover:bg-[#791216] transition-colors"
          >
            {t.locations.filters.all}
          </button>
        </div>
      )}
    </div>
  );
}
