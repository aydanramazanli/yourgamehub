import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json"
import geTranslation from './ge.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ge: {
        translation: geTranslation,
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
