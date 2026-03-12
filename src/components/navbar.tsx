"use client";

import Image from "next/image";
import logoNavbar from "@/assets/images/brand/LOGO-NAVBAR.svg";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Coffee,
  Phone,
  Instagram,
  Facebook,
  Info,
  Globe,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide navbar if scrolling down past 50px
    if (latest > previous && latest > 50) {
      setNavHidden(true);
    } else {
      // Show navbar if scrolling up
      setNavHidden(false);
    }
  });

  // Automatically close sidebar if resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const navLinks = [
    { name: t.nav.home, href: "#", icon: Home },
    { name: t.nav.about, href: "#about", icon: Info },
    { name: t.nav.products, href: "#products", icon: Coffee },
    { name: t.nav.contact, href: "#contact", icon: Phone },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
    setIsOpen(false);
  };

  const getHref = (linkHref: string) => {
    const prefix = `/${language}`;

    if (linkHref.startsWith("#")) {
      const isHome =
        pathname === `/${language}` || pathname === `/${language}/`;

      if (isHome) {
        return linkHref;
      }
      return `${prefix}/${linkHref}`;
    }

    return `${prefix}/${linkHref.replace(/^\//, "")}`;
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    linkHref: string,
  ) => {
    const targetId = linkHref.replace("#", "");

    // If we are on home and purely scrolling, prevent default
    const isHome = pathname === `/${language}` || pathname === `/${language}/`;

    if (isHome) {
      e.preventDefault();
      setIsOpen(false);

      if (targetId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 0);
        }
      }
    } else {
      e.preventDefault();
      setIsOpen(false);
      const prefix = `/${language}`;
      if (targetId === "") {
        router.push(`${prefix}/`);
      } else {
        router.push(`${prefix}/#${targetId}`);
      }
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={navHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 bg-[#b82324]/90 backdrop-blur-md border-b border-[#791216]/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            {/* Logic for Logo: If on Home, scroll top. If not, go Home. */}
            <a
              href={`/${language}/`}
              aria-label={t.nav.home}
              onClick={(e) => {
                const isHome =
                  pathname === `/${language}` || pathname === `/${language}/`;
                if (isHome) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  e.preventDefault();
                  router.push(`/${language}/`);
                }
              }}
              className="flex-shrink-0 flex items-center group cursor-pointer"
            >
              <Image
                src={logoNavbar}
                alt="Dos Tazas Logo"
                width={320}
                height={120}
                className="h-30 w-auto p-2 group-hover:opacity-80 transition-opacity"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={getHref(link.href)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#f6e7d2] hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="text-[#f6e7d2] hover:text-primary-600 transition-colors duration-200 flex items-center gap-1 font-bold text-lg"
                aria-label="Toggle language"
              >
                <Globe size={20} />
                <span>{language === "en" ? "ES" : "EN"}</span>
              </button>
              <a
                href="https://www.instagram.com/dostazascafe/"
                target="_blank"
                rel="noreferrer"
                className="text-[#f6e7d2] hover:text-pink-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588219114974"
                target="_blank"
                rel="noreferrer"
                className="text-[#f6e7d2] hover:text-blue-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="text-[#f6e7d2] hover:text-primary-600 p-2 focus:outline-none"
                aria-label="Toggle language"
              >
                <span className="font-extrabold text-xl">
                  {language === "en" ? "ES" : "EN"}
                </span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#f6e7d2] hover:text-primary-600 p-2 focus:outline-none transition-transform duration-200 active:scale-95"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay & Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#f6e7d2] shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="p-4 flex justify-between items-center border-b border-[#b82324]">
                <span className="font-titan text-xl font-bold text-[#b82324]">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#b82324] hover:text-primary-600 p-2 focus:outline-none transition-transform duration-200 active:scale-95"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={getHref(link.href)}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#b82324] hover:text-primary-600 hover:bg-primary-50 px-4 py-3 rounded-xl text-lg font-medium flex items-center gap-4 cursor-pointer transition-colors"
                  >
                    <div className="bg-primary-100 p-2 rounded-lg text-primary-600">
                      <link.icon size={20} />
                    </div>
                    {link.name}
                  </a>
                ))}

                <div className="my-6 border-t border-[#b82324]"></div>

                <a
                  href="https://www.instagram.com/dostazascafe/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b82324] hover:text-pink-600 hover:bg-pink-50 px-4 py-3 rounded-xl text-lg font-medium flex items-center gap-4 transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Instagram"
                >
                  <div className="p-2 rounded-lg text-[#b82324]">
                    <Instagram size={20} />
                  </div>
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61588219114974"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b82324] hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-xl text-lg font-medium flex items-center gap-4 transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Facebook"
                >
                  <div className="p-2 rounded-lg text-[#b82324]">
                    <Facebook size={20} />
                  </div>
                  Facebook
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#b82324] border-t border-[#b82324] z-40 pb-safe">
        <div className="flex justify-around items-center h-16">
          <a
            href={getHref("#")}
            onClick={(e) => handleNavClick(e, "#")}
            className="flex flex-col items-center justify-center w-full h-full text-[#f6e7d2] hover:text-primary-600 cursor-pointer"
          >
            <Home size={24} />
            <span className="text-xs mt-1">{t.nav.home}</span>
          </a>
          <a
            href={getHref("#products")}
            onClick={(e) => handleNavClick(e, "#products")}
            className="flex flex-col items-center justify-center w-full h-full text-[#f6e7d2] hover:text-primary-600 cursor-pointer"
          >
            <Coffee size={24} />
            <span className="text-xs mt-1">{t.nav.products}</span>
          </a>
          <a
            href={getHref("#contact")}
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex flex-col items-center justify-center w-full h-full text-[#f6e7d2] hover:text-primary-600 cursor-pointer"
          >
            <Phone size={24} />
            <span className="text-xs mt-1">{t.nav.contact}</span>
          </a>
        </div>
      </div>
    </>
  );
}
