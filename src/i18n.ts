import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import sv from "./locales/sv.json";

i18n.use(initReactI18next).init({
  resources: { en, fr, sv },
  lng: "sv",
  fallbackLng: "en",
});

export default i18n;
