import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import he from "./locales/he.json";
import ar from "./locales/ar.json";

const resources = {
  en: { translation: en },
  he: { translation: he },
  ar: { translation: ar },
};

export function applyDir(lang) {
  const dir = lang === "ar" || lang === "he" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lang);
  
  // CORE i18n is being used - this will show in console
  console.log("🎯 TABLY CORE i18n is active! Language:", lang, "Direction:", dir);
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "he",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  })
  .then(() => applyDir(i18n.language));

i18n.on("languageChanged", applyDir);

export default i18n;
