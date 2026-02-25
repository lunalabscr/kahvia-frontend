"use client";

import ContactButton from "./ContactButton";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-[#b82324] text-[#f6e7d2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-titan font-bold mb-6 text-[#f6e7d2]">
          {t.contact.title}
        </h2>
        <p className="text-[#f6e7d2]/80 mb-8 max-w-2xl mx-auto font-montserrat">
          {t.contact.description}
        </p>

        <ContactButton
          message={t.contact.buttonMessage}
          phoneNumber={process.env.NEXT_PUBLIC_PHONE_NUMBER}
        />
      </div>
    </motion.section>
  );
}
