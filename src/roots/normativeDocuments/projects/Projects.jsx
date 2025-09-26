import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu2 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";

const Projects = () => {
  const { t } = useTranslation();
  let text = "<h1>bu yerda text buladi<h1/>";
  return (
    <>
      <Header />
      <BackGroundColor>
        <>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu2.title") },
                { link: t("menus.menu2.title6") },
              ]}
            />
            <PageTwoMenu menu={menu2}>
              <>
                <LargeText color="true">{t("menus.menu2.title6")}</LargeText>
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

export default Projects;
