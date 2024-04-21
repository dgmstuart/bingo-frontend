import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import sv from "./locales/sv.json";

const SUPPORTED_LANGAUGE_CODES = ["en", "fr", "sv"] as const;
export const FALLBACK_LANGUAGE_CODE: SupportedLanguageCode = "en" as const;
export type SupportedLanguageCode = (typeof SUPPORTED_LANGAUGE_CODES)[number];

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: { en, fr, sv },
  fallbackLng: FALLBACK_LANGUAGE_CODE,
  supportedLngs: SUPPORTED_LANGAUGE_CODES,
  nonExplicitSupportedLngs: true,
});

export default i18n;
