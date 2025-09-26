import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import CorruptionMonitoringList from "./CorruptionMonitoringList";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { menu6 } from "../../../const/Menu";

const CorruptionMonitoring = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <BackGroundColor>
        <div className="container">
          <Breadcrumb
            links={[
              { link: t("menus.menu6.title") },
              { link: t("menus.menu6.title3") },
            ]}
          />
          <PageTwoMenu menu={menu6}>
            <LargeText color="true">{t("menus.menu6.title3")}</LargeText>
            <CorruptionMonitoringList />
          </PageTwoMenu>
        </div>
      </BackGroundColor>
      <Footer
        showPartners={false}
        showProjects={false}
        showUsefulLinks={false}
      />
    </div>
  );
};

export default CorruptionMonitoring;
