import { Link } from "react-router-dom";
import { FooterWrapper } from "./FooterWrapper";
import { useTranslation } from "react-i18next";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import UsefulLinks from "../../components/usefulLinks/UsefulLinks";
import { menu1, menu2 } from "../../const/Menu";
import Partners from "../../components/partners/Partners";
import OurProjects from "../../components/ourProjects/OurProjects";
import { LOGOWHITE } from "../../assets/icon";

const Footer = ({
  showProjects = true,
  showPartners = true,
  showUsefulLinks = true,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {showProjects && <OurProjects />}
      {showPartners && <Partners />}
      {showUsefulLinks && <UsefulLinks />}
      <FooterWrapper>
        <footer className="face__color">
          <h1 className="container">
            <div className="footer__content">
              <div className="footer__box">
                  <div className="footer__box">
                      <h6>Ko‘prikqurilish AJ</h6>
                      <a aria-disabled>Ma’lumotlar</a>
                      <a href="#">
                          Manzil: Toshkent, Bog‘iston ko‘chasi, 10A
                      </a>
                      <a className="tel">
                          Telefon:
                          <span>
                    <a href="tel:+998(71)203-26-26">+998(71)203-26-26</a>
                  </span>
                      </a>
                      <a href="mailto:koprikqurilishaj2@gmail.com">
                          Email: <b>koprikqurilishaj2@gmail.com</b>
                      </a>
                  </div>
              </div>
              <div className="footer__box menu">
                <p>{t(menu1?.title)}</p>
                {menu1?.menus?.map((e) => (
                  <Link key={e.id} to={e.path}>
                    {t(e.title)}
                  </Link>
                ))}
              </div>
              <div className="footer__box menu">
                <p>{t(menu2?.title)}</p>
                {menu2?.menus?.map((e) => (
                  <Link key={e.id} to={e.path}>
                    {t(e.title)}
                  </Link>
                ))}
              </div>
            </div>
          </h1>
          <div className="footer__bottom">
            <div className="container">
              <div className="bottom__flex">
                <div className="sotsial__network">
                  <a
                    target="blank"
                    href="https://www.instagram.com/kuprikqurilish/"
                  >
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
                  <a
                    target="blank"
                    href="https://www.facebook.com/kuprikqurilish"
                  >
                    <FacebookIcon />
                  </a>
                </div>
                <a
                  href="https://uct-org.uz/"
                  target="_blank"
                  className="uct_team"
                  rel="noreferrer"
                >
                  <img src={LOGOWHITE} alt="uct logo" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
