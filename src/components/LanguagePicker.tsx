import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useLanguage from "../hooks/useLanguage";
import "./LanguagePicker.css";
import classNames from "classnames";
import type { SupportedLanguageCode } from "../i18n";
import type { ClickHandler } from "../clickHandler";

type MenuClickHandler = ClickHandler<HTMLDivElement>;
type LanguageData = { text: string; emoji: string };

const languages: { [key in SupportedLanguageCode]: LanguageData } = {
  en: { text: "English", emoji: "🇬🇧" },
  fr: { text: "Francais", emoji: "🇫🇷" },
  sv: { text: "Svenska", emoji: "🇸🇪" },
};

const LanguagePicker: React.FC = () => {
  const currentCode = useLanguage();
  const currentLanguage: LanguageData =
    languages[currentCode as SupportedLanguageCode];
  const languageCodes = Object.keys(languages);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen: MenuClickHandler = () => {
    return setIsOpen(!isOpen);
  };

  const close = () => setIsOpen(false);

  return (
    <div className="LanguagePicker">
      <ul className={classNames("menu", { open: isOpen })}>
        {languageCodes.map((languageCode) => (
          <LanguageOption
            languageCode={languageCode}
            isCurrent={languageCode === currentCode}
            closeMenu={close}
            key={languageCode}
          />
        ))}
      </ul>
      <div className="current" onClick={toggleOpen}>
        {currentLanguage.emoji}
      </div>
    </div>
  );
};

const LanguageOption: React.FC<{
  languageCode: string;
  isCurrent: boolean;
  closeMenu: () => void;
}> = ({ languageCode, isCurrent, closeMenu }) => {
  const { text, emoji } = languages[languageCode as SupportedLanguageCode];
  const { i18n } = useTranslation();

  const setLanguage = async (language: string | undefined) => {
    if (i18n.language != language) {
      await i18n.changeLanguage(language);
    }
  };

  const clickHandler: ClickHandler<HTMLLIElement> = () => {
    setLanguage(languageCode);
    closeMenu();
  };

  return (
    <li
      className={classNames({ currentMenuItem: isCurrent })}
      onClick={clickHandler}
    >
      <span className="text">{text}</span> {emoji}
    </li>
  );
};

export default LanguagePicker;
