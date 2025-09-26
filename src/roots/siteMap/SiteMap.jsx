import { SiteMapWrapper } from "./SiteMapWrapper";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import { BackGroundColor, LargeText } from "../../const/Wrapper";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { menu1, menu2, menu3, menu4, menu5, menu6 } from "../../const/Menu";
import { Link, useNavigate } from "react-router-dom";

const SiteMap = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <SiteMapWrapper>
        <BackGroundColor>
          <div className="container">
            <Breadcrumb links={[{ link: t("map") }]} />
            <div className="munus">
              <LargeText color={true}>{t("map")}</LargeText>
              <div className="card__link">
                <p>{t(menu1?.title)}</p>
                <ul>
                  {menu1?.menus?.map((e) => (
                    <li key={e.id}>
                      <Link to={e.path}>{t(e.title)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card__link">
                <p>{t(menu2?.title)}</p>
                <ul>
                  {menu2?.menus?.map((e) => (
                    <li key={e.id}>
                      <Link to={e.path}>{t(e.title)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card__link">
                <p>{t(menu3?.title)}</p>
                <ul>
                  {menu3?.menus?.map((e) => (
                    <li key={e.id}>
                      <Link to={e.path}>{t(e.title)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card__link">
                <p
                  onClick={() => {
                    navigate("/news");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {t(menu4?.title)}
                </p>
              </div>
              <div className="card__link">
                <p
                  onClick={() => {
                    navigate("/contacts");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {t(menu5?.title)}
                </p>
              </div>
              <div className="card__link">
                <p>{t(menu6?.title)}</p>
                <ul>
                  {menu6?.menus?.map((e) => (
                    <li key={e.id}>
                      <Link to={e.path}>{t(e.title)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </BackGroundColor>
      </SiteMapWrapper>
      <Footer />
    </>
  );
};

export default SiteMap;
