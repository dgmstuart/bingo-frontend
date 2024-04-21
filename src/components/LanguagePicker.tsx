import React from "react";
import { useTranslation } from "react-i18next";
import useLanguage from "../hooks/useLanguage";
import useOpenState from "../hooks/useOpenState";
import "./LanguagePicker.css";
import classNames from "classnames";
import type { SupportedLanguageCode } from "../i18n";
import type { ClickHandler } from "../clickHandler";

type MenuClickHandler = ClickHandler<HTMLDivElement>;
type LanguageData = { text: string; flagCode: string };

const languages: { [key in SupportedLanguageCode]: LanguageData } = {
  en: { text: "English", flagCode: "GB" },
  fr: { text: "Francais", flagCode: "FR" },
  sv: { text: "Svenska", flagCode: "SE" },
};

const LanguagePicker: React.FC = () => {
  const currentCode = useLanguage();
  const currentLanguage: LanguageData =
    languages[currentCode as SupportedLanguageCode];
  const languageCodes = Object.keys(languages);

  const { isOpen, toggle, close } = useOpenState(false);
  const toggleOpen: MenuClickHandler = toggle;

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
        <Flag language={currentLanguage} aspectRatio={"1x1"} />
      </div>
    </div>
  );
};

const LanguageOption: React.FC<{
  languageCode: string;
  isCurrent: boolean;
  closeMenu: () => void;
}> = ({ languageCode, isCurrent, closeMenu }) => {
  const language = languages[languageCode as SupportedLanguageCode];
  const { text } = language;
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
      className={classNames("menuItem", { currentMenuItem: isCurrent })}
      onClick={clickHandler}
    >
      <span className="text">{text}</span>{" "}
      <Flag language={language} aspectRatio={"3x2"} />
    </li>
  );
};

type AspectRatio = "1x1" | "3x2";
const Flag: React.FC<{ language: LanguageData; aspectRatio: AspectRatio }> = ({
  language,
  aspectRatio,
}) => {
  const { flagCode, text } = language;
  const flagUrl = `http://purecatamphetamine.github.io/country-flag-icons/${aspectRatio}/${flagCode}.svg`;

  return <img className="Flag" alt={text} src={flagUrl} />;
};

export default LanguagePicker;
