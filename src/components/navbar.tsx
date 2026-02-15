"use client";

import { useState, useRef } from "react";
import {
  Menu,
  X,
  Home,
  Coffee,
  Phone,
  Instagram,
  Info,
  Globe,
} from "lucide-react";
import { useClickOutside } from "../hooks/useClickOutside";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();

  useClickOutside(menuRef, () => setIsOpen(false), [buttonRef]);

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
    // Always prepend language
    if (pathname === `/${language}/` || pathname === `/${language}`) {
      return linkHref;
    }
    return `/${language}/${linkHref}`;
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    linkHref: string,
  ) => {
    const targetId = linkHref.replace("#", "");

    // If we are on home and purely scrolling, prevent default
    const isHome = pathname === `/${language}/` || pathname === `/${language}`;

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
      if (targetId === "") {
        router.push(`/${language}/`);
      } else {
        router.push(`/${language}/#${targetId}`);
      }
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            {/* Logic for Logo: If on Home, scroll top. If not, go Home. */}
            <a
              href={`/${language}/`}
              aria-label={t.nav.home}
              onClick={(e) => {
                if (
                  pathname === `/${language}/` ||
                  pathname === `/${language}`
                ) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  e.preventDefault();
                  router.push(`/${language}/`);
                }
              }}
              className="flex-shrink-0 flex items-center group cursor-pointer"
            >
              <span className="font-doto text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                Dos Tazas
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={getHref(link.href)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-neutral-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 flex items-center gap-1 font-medium"
                aria-label="Toggle language"
              >
                <Globe size={20} />
                <span>{language === "en" ? "ES" : "EN"}</span>
              </button>
              <a
                href="https://www.instagram.com/dostazascafe/"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 hover:text-pink-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="text-neutral-600 hover:text-primary-600 p-2 focus:outline-none"
                aria-label="Toggle language"
              >
                <span className="font-bold">
                  {language === "en" ? "ES" : "EN"}
                </span>
              </button>
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-600 hover:text-primary-600 p-2 focus:outline-none transition-transform duration-200 active:scale-95"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu (controlled by Hamburger) */}
        <div
          ref={menuRef}
          className={`md:hidden bg-white border-t border-neutral-100 absolute w-full shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={getHref(link.href)}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 cursor-pointer"
              >
                <link.icon size={18} />
                {link.name}
              </a>
            ))}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-600 hover:text-pink-600 hover:bg-neutral-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              onClick={() => setIsOpen(false)}
              aria-label="Instagram"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 z-50 pb-safe">
        <div className="flex justify-around items-center h-16">
          <a
            href={getHref("#")}
            onClick={(e) => handleNavClick(e, "#")}
            className="flex flex-col items-center justify-center w-full h-full text-neutral-600 hover:text-primary-600 cursor-pointer"
          >
            <Home size={24} />
            <span className="text-xs mt-1">{t.nav.home}</span>
          </a>
          <a
            href={getHref("#products")}
            onClick={(e) => handleNavClick(e, "#products")}
            className="flex flex-col items-center justify-center w-full h-full text-neutral-600 hover:text-primary-600 cursor-pointer"
          >
            <Coffee size={24} />
            <span className="text-xs mt-1">{t.nav.products}</span>
          </a>
          <a
            href={getHref("#contact")}
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex flex-col items-center justify-center w-full h-full text-neutral-600 hover:text-primary-600 cursor-pointer"
          >
            <Phone size={24} />
            <span className="text-xs mt-1">{t.nav.contact}</span>
          </a>
        </div>
      </div>
    </>
  );
}
