import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const detectLang = () => {
  const saved = localStorage.getItem("lang");
  if (saved === "tr" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("tr") ? "tr" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(detectLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (value) =>
    value && typeof value === "object" && !Array.isArray(value) && "en" in value
      ? value[lang]
      : value;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
