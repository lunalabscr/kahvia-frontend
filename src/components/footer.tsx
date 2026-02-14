import { Instagram } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    linkHref: string,
  ) => {
    const targetId = linkHref.replace("#", "");
    e.preventDefault();

    if (location.pathname === "/") {
      if (targetId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      if (targetId === "") {
        navigate("/");
      } else {
        navigate({ pathname: "/", hash: targetId });
      }
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 pb-24 md:pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-doto text-2xl font-bold text-white mb-4">
              Dos Tazas
            </h3>
            <p className="font-roboto text-sm max-w-xs mx-auto md:mx-0">
              A project dedicated to exploring and sharing the world of
              specialty coffee.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 font-roboto">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, "#")}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleNavClick(e, "#products")}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://www.instagram.com/dostazascafe/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm font-roboto">
          <p>
            &copy; {currentYear} Dos Tazas Coffee Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
