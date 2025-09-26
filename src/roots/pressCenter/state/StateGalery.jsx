import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu3 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";

const StateGalery = () => {
  let text = "<h1>bu yerda text buladi<h1/>";
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <BackGroundColor>
        <>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu3.title") },
                { link: t("menus.menu3.title4") },
              ]}
            />
            <PageTwoMenu menu={menu3}>
              <>
                <LargeText color="true">{t("menus.menu3.title4")}</LargeText>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </>
            </PageTwoMenu>
          </div>
        </>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default StateGalery;
