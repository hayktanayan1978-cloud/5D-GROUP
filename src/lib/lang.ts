import { useState, useEffect } from "react";

export function useLang(): "en" | "ru" {
  const [lang, setLang] = useState<"en" | "ru">("en");

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem("app_lang") as "en" | "ru";
      if (saved === "ru" || saved === "en") {
        setLang(saved);
      }
    };

    handleStorage();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return lang;
}
