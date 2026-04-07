"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import pictoProducers from "@/assets/images/brand/decoration-lines/PINTOGRAMA-31.svg"; // Reusing an existing decoration

export default function HomeProducersSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 bg-[#b82324] relative overflow-hidden">
      {/* Decorative Line Art */}
      <motion.div
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 0.1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -top-10 -right-10 md:right-10 z-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none text-[#ebdcc7]"
      >
        <Image
          src={pictoProducers}
          alt="Decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-titan font-bold text-[#f6e7d2] mb-6">
            {t.producers.homeTitle || "Families We Work With"}
          </h2>
          <p className="text-xl text-[#f6e7d2] font-gotham mb-10 opacity-90">
            {t.producers.subtitle || "The families behind your coffee."}
          </p>
          
          <Link
            href={`/${language}/producers`}
            className="inline-flex items-center gap-2 bg-[#f6e7d2] text-[#b82324] px-8 py-4 rounded-full font-gotham font-bold hover:bg-white transition-colors duration-300 shadow-lg group"
          >
            <span className="text-lg">{t.producers.title || "Our Producers"}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
