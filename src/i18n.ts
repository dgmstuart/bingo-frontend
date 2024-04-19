import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import sv from "./locales/sv.json";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: { en, fr, sv },
  fallbackLng: "en",
});
