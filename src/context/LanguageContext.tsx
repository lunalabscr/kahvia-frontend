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
    // Always redirect to home page with new language to avoid 404s on localized slugs
    router.push(`/${newLang}`);
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
