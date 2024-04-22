import { useTranslation } from "react-i18next";
import { FALLBACK_LANGUAGE_CODE } from "../i18n";

export default (): string => {
  const { i18n } = useTranslation();
  return i18n.resolvedLanguage ?? FALLBACK_LANGUAGE_CODE;
};
