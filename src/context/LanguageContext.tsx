"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import { translations, type Language } from "../i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)["en"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const lang = params?.lang as string;

  // Validate language from URL, default to 'en' if invalid
  const initialLang: Language = lang === "es" || lang === "en" ? lang : "en";

  const [language, setLanguageState] = useState<Language>(initialLang);

  // Sync state if URL changes directly (e.g. user types in URL)
  useEffect(() => {
    const currentLang = lang === "es" || lang === "en" ? lang : "en";
    if (currentLang !== language) {
      setLanguageState(currentLang);
    }
  }, [lang, language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (newLang: Language) => {
    // Logic to switch URL
    // If we are at /en/about and switch to es, go to /es/about
    // We need to strip the current lang prefix and replace it
    if (!pathname) return;

    const segments = pathname.split("/"); // ["", "en", "about"]

    // Replace the second segment (index 1) which is the language
    if (segments[1] === "en" || segments[1] === "es") {
      segments[1] = newLang;
    } else {
      // Should not happen given routing, but handle safe insertion
      segments.splice(1, 0, newLang);
    }

    const newPath = segments.join("/");
    router.push(newPath);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
