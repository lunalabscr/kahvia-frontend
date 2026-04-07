"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, ArrowLeft } from "lucide-react";
import logo from "@/assets/images/brand/LOGO-FOOTER.svg";
import { useEffect, useState } from "react";

export default function SocialsPage() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "1234567890";
  const whatsappMessage = encodeURIComponent(t.socials.whatsappMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const links = [
    {
      name: t.socials.whatsapp,
      url: whatsappUrl,
      icon: MessageCircle,
      color: "bg-[#25D366] text-white hover:bg-[#1da851]",
      highlight: true,
    },
    {
      name: t.socials.instagram,
      url: "https://www.instagram.com/dostazascafe/",
      icon: Instagram,
      color: "bg-[#f6e7d2] text-pink-600 hover:bg-pink-50",
    },
    {
      name: t.socials.facebook,
      url: "https://www.facebook.com/profile.php?id=61588219114974",
      icon: Facebook,
      color: "bg-[#f6e7d2] text-blue-600 hover:bg-blue-50",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-1rem)] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-6 left-6 md:top-8 md:left-12 z-10"
      >
        <Link 
          href={`/${language}/`}
          className="flex items-center gap-2 text-[#f6e7d2] hover:text-white transition-colors bg-black/20 p-2 md:px-4 md:py-2 rounded-full backdrop-blur-sm shadow-md"
        >
          <ArrowLeft size={20} />
          <span className="font-gotham text-sm hidden md:inline">{t.socials.backHome}</span>
        </Link>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-12 mt-8 md:mt-12 flex flex-col items-center"
      >
        <Image
          src={logo}
          alt="Dos Tazas Logo"
          width={320}
          height={140}
          className="h-40 w-auto drop-shadow-2xl"
          priority
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[#f6e7d2]/90 mt-4 font-gotham text-center max-w-xs"
        >
          {t.home.hero.subtitle}
        </motion.p>
      </motion.div>

      {/* Links */}
      <div className="w-full max-w-sm space-y-4">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative flex items-center justify-center w-full p-3 sm:p-4 rounded-2xl shadow-xl transition-all duration-300 ${link.color} ${link.highlight ? 'ring-4 ring-[#25D366]/50 shadow-[0_0_30px_rgba(37,211,102,0.6)]' : ''}`}
          >
            <div className="absolute left-4 sm:left-6 flex items-center">
              <link.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${link.highlight ? "text-white" : ""}`} />
            </div>
            <span className="w-full text-center font-gotham font-bold text-sm sm:text-base px-10 sm:px-12 leading-snug">
              {link.name}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
