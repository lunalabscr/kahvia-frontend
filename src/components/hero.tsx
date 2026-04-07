"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/images/brand/cafe_desde_ariba.jpg";
import dosTazasCata from "@/assets/images/brand/dos_tazas_cata.webp";
import coffeeCherry from "@/assets/images/brand/coffee_cherry.webp";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const { t } = useLanguage();

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] pt-24 pb-12 flex items-center justify-center overflow-hidden bg-[#f6e7d2] md:bg-[#f6e7d2]"
    >
      {/* Mobile Background Image with Overlay */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src={heroBg}
          alt="Coffee Cherry Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: CTAs and Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="font-titan text-5xl md:text-7xl font-extralight mb-6 tracking-tight text-[#f6e7d2] md:text-[#b82324]"
          >
            {t.home.hero.title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="font-gotham text-xl md:text-2xl mb-8 text-[#f6e7d2] md:text-[#791216]"
          >
            {t.home.hero.subtitle}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#products"
              onClick={(e) => handleScrollTo(e, "products")}
              className="group bg-[#b82324] hover:bg-[#791216] text-[#f6e7d2] font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              {t.home.hero.cta}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, "about")}
              className="group bg-transparent border-2 border-[#f6e7d2] md:border-[#b82324] text-[#f6e7d2] md:text-[#b82324] hover:bg-[#b82324] hover:text-[#f6e7d2] font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              {(t.home.hero as any).secondaryCta || "Our Story"}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Creative Image Placeholders */}
        <motion.div
          className="relative h-full min-h-[400px] w-full hidden md:block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Photo 1 (Back) */}
          <motion.div
            variants={itemVariants}
            className="absolute top-10 right-0 w-2/3 aspect-square rounded-2xl shadow-xl border-4 border-[#f6e7d2] overflow-hidden rotate-3 z-0 hover:rotate-0 transition-transform duration-500 bg-[#e5d5c1]"
          >
            <Image
              src={coffeeCherry}
              alt="Coffee Cherry"
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Photo 2 (Front) */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-0 w-3/5 aspect-4/5 rounded-2xl shadow-xl border-4 border-[#f6e7d2] overflow-hidden -rotate-6 z-10 hover:-translate-y-2 hover:rotate-0 transition-transform duration-500 bg-[#d9c4aa]"
          >
            <Image
              src={dosTazasCata}
              alt="Coffee Tasting"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
