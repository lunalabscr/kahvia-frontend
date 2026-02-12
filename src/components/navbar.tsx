import { useState, useRef } from "react";
import { Menu, X, Home, Coffee, Phone, Instagram, Info } from "lucide-react";
import { useClickOutside } from "../hooks/useClickOutside";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false), [buttonRef]);

  const navLinks = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: Info },
    { name: "Products", href: "#products", icon: Coffee },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex-shrink-0 flex items-center group">
              <span className="font-doto text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                Dos Tazas
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.instagram.com/dostazascafe/"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 hover:text-pink-600 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="flex md:hidden">
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
                href={link.href}
                className="text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
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
            href="#"
            className="flex flex-col items-center justify-center w-full h-full text-neutral-600 hover:text-primary-600"
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </a>
          <a
            href="#products"
             className="flex flex-col items-center justify-center w-full h-full text-neutral-600 hover:text-primary-600"
          >
            <Coffee size={24} />
            <span className="text-xs mt-1">Products</span>
          </a>
          <a
            href="#contact"
             className="flex flex-col items-center justify-center w-full h-full text-neutral-600 hover:text-primary-600"
          >
            <Phone size={24} />
            <span className="text-xs mt-1">Contact</span>
          </a>
        </div>
      </div>
    </>
  );
}