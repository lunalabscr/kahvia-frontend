"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
// import bedBg from "@/assets/images/brand/cama_de_cafe.webp";
import djiArbarDosTazas from "@/assets/images/brand/DJI_ARBAR_DOS_TAZAS.webp";
import coffeeProcess from "@/assets/images/brand/FOTO_DE_PROCESOS.webp";
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
            <div className="relative h-[300px] md:h-[500px] w-full">
              {/* Photo 1 (Main/Back) */}
              <div className="absolute top-0 right-4 w-2/3 h-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f6e7d2] rotate-2 bg-[#e5d5c1] flex items-center justify-center hover:rotate-0 transition-transform duration-500">
                <Image
                  src={coffeeProcess}
                  alt="Producer"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Photo 2 (Front Left) */}
              <div className="absolute bottom-4 left-0 w-3/5 h-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f6e7d2] -rotate-3 bg-[#d9c4aa] flex items-center justify-center hover:-translate-y-2 transition-transform duration-500 hover:rotate-0 hover:z-20">
                <Image
                  src={djiArbarDosTazas}
                  alt="Producer"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
