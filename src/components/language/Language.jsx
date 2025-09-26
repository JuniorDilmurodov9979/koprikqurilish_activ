import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getLocale } from "../../utils/locales/getLocale";
import { LanguageWrapper } from "./LanguageWrapper";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const Language = ({ color }) => {
  const { i18n } = useTranslation();
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    window.location.reload();
  };
  const [lang, setlang] = useState([
    { lang: "O'z", text: "UZ" },
    { lang: "Уз", text: "УЗ" },
    { lang: "En", text: "EN" },
    { lang: "Ру", text: "RU" },
  ]);
  return (
    <LanguageWrapper color={color}>
      <div className="sotsial__network">
        <a target="blank" href="https://www.instagram.com/kuprikqurilish/">
          <InstagramIcon />
        </a>
        <a target="blank" href="https://t.me/kuprikqurilish">
          <TelegramIcon />
        </a>
        <a
          target="blank"
          href="https://www.youtube.com/channel/UChfQkUg5Xe_KmIwkoNnv7Xw"
        >
          <YouTubeIcon />
        </a>
        <a target="blank" href="https://www.facebook.com/kuprikqurilish">
          <FacebookIcon />
        </a>
      </div>
      {lang.map((e, i) => (
        <p
          key={i}
          className={getLocale() == e.text ? "active" : ""}
          onClick={() => changeLang(e.text)}
        >
          {e.lang}
        </p>
      ))}
    </LanguageWrapper>
  );
};

export default Language;
