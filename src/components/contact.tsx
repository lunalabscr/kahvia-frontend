"use client";

import ContactButton from "./ContactButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-doto font-bold mb-6">{t.contact.title}</h2>
        <p className="text-neutral-400 mb-8 max-w-2xl mx-auto font-roboto">
          {t.contact.description}
        </p>

        <ContactButton message={t.contact.buttonMessage} />
      </div>
    </section>
  );
}
