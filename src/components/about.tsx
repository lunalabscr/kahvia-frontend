"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import bedBg from "@/assets/images/brand/cama_de_cafe.webp";
import pictoAbout from "@/assets/images/brand/decoration-lines/PINTOGRAMA-31.svg";

import { motion } from "framer-motion";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-[#f6e7d2] overflow-hidden relative">
      {/* Decorative Line Art */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        whileInView={{ opacity: 0.2, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -bottom-10 -left-10 md:-left-20 z-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
      >
        <Image
          src={pictoAbout}
          alt="Decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-titan font-bold text-[#b82324] mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-lg text-[#791216] font-gotham">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            {/* Top Right Decorative Element */}

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square">
              <Image
                src={bedBg}
                alt="Coffee Brewing Process"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
