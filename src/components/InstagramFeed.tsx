"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Script from "next/script";

// TODO: Replace this with your actual Elfsight Widget ID
const ELFSIGHT_WIDGET_ID = "aa2d17b5-9490-4214-bcfa-05e90fcb894c";

export const InstagramFeed = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      className="py-20 bg-[#791216] relative overflow-hidden"
      id="instagram"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 bg-[#b82324] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <Instagram className="text-[#f6e7d2]" size={32} />
          </motion.div>

          <h2 className="text-4xl font-bold mb-4 text-[#f6e7d2] font-titan">
            {t.home.instagram.title}
          </h2>
          <p className="text-lg text-[#f6e7d2]/80 font-gotham max-w-2xl mx-auto">
            {t.home.instagram.subtitle}
          </p>
        </div>

        <motion.div
          className="bg-[#f6e7d2] rounded-2xl p-4 md:p-8 shadow-2xl relative min-h-[400px] flex items-center justify-center -mx-4 sm:mx-0 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Elfsight script and widget container */}
          {/* Using Next.js Script for the widget logic */}
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            strategy="lazyOnload"
          />

          {ELFSIGHT_WIDGET_ID !== "aa2d17b5-9490-4214-bcfa-05e90fcb894c" ? (
            <div
              className={`elfsight-app-${ELFSIGHT_WIDGET_ID} w-full`}
              data-elfsight-app-lazy
            ></div>
          ) : (
            <div className="text-center p-8 border-2 border-dashed border-[#791216]/20 rounded-xl w-full">
              <p className="text-[#791216] font-gotham font-bold mb-4">
                Instagram Widget Placeholder
              </p>
              <p className="text-[#791216]/70 text-sm mb-4">
                Please sign up at Elfsight or similar service to get an
                Instagram Feed widget ID.
              </p>
              <p className="text-[#791216]/70 text-sm">
                Once you have your ID, replace{" "}
                <code className="bg-[#791216]/10 px-2 py-1 rounded">
                  YOUR_ELFSIGHT_WIDGET_ID_HERE
                </code>{" "}
                in <code>src/components/InstagramFeed.tsx</code>.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};
