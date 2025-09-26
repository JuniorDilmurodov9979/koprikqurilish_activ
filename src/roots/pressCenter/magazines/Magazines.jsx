import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu3 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { NewspapersWrapper } from "../newspapers/NewspapersWrapper";
import NewspaperCard from "../../../components/newspaperCard/NewspaperCard";

const Magazines = () => {
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
                { link: t("menus.menu3.title6") },
              ]}
            />
            <PageTwoMenu menu={menu3}>
              <>
                <LargeText color="true">{t("menus.menu3.title6")}</LargeText>
                <NewspapersWrapper>
                  <NewspaperCard />
                  <NewspaperCard />
                  <NewspaperCard />
                  <NewspaperCard />
                </NewspapersWrapper>
              </>
            </PageTwoMenu>
          </div>
        </>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Magazines;
