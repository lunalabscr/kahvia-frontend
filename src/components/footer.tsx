import { Instagram } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    if (
      location.pathname === `/${language}` ||
      location.pathname === `/${language}/`
    ) {
      const id = targetId.replace("#", "");
      if (id === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${language}/${targetId}`);
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 pb-24 md:pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to={`/${language}/`} className="inline-block group mb-6">
              <span className="font-doto text-3xl font-bold text-white group-hover:text-primary-400 transition-colors">
                Dos Tazas
              </span>
            </Link>
            <p className="font-roboto text-sm max-w-xs mx-auto md:mx-0">
              {t.common.madeWithLove}
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="font-bold text-white mb-4">{t.common.quickLinks}</h4>
            <ul className="space-y-2 font-roboto">
              <li>
                <a
                  href={`/${language}/#`}
                  onClick={(e) => handleNavClick(e, "#")}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href={`/${language}/#about`}
                  onClick={(e) => handleNavClick(e, "#about")}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href={`/${language}/#products`}
                  onClick={(e) => handleNavClick(e, "#products")}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a
                  href={`/${language}/#blog`}
                  onClick={(e) => handleNavClick(e, "#blog")}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.nav.blog}
                </a>
              </li>
              <li>
                <a
                  href={`/${language}/#contact`}
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-white mb-4">{t.common.followUs}</h4>
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
          <p>{t.common.footerText.replace("{year}", currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
}
