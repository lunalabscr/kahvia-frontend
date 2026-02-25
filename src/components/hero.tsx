"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/images/raised_drying_beds_rivense.webp";
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

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Coffee Shop Background"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          placeholder="blur"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center text-[#f6e7d2] px-4 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="font-titan text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          {t.home.hero.title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="font-montserrat text-xl md:text-2xl mb-8 text-[#f6e7d2] max-w-2xl mx-auto"
        >
          {t.home.hero.subtitle}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          <a
            href="#products"
            className="group bg-primary-600 hover:bg-primary-700 text-[#f6e7d2] font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
          >
            {t.home.hero.cta}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
