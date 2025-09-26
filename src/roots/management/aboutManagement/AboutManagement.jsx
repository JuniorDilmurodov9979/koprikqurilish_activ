import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu1 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import DownloadFile from "../../downloadFile/download";
import { AboutManagementWrapper } from "./AboutManagementWrapper";
import { useEffect, useState } from "react";
import http, { imgUrl } from "../../../utils/httpClient";
import { transliterate } from "../../../const/ToKrillang";
import { langLocal } from "../../../const/LangLocal";
const AboutManagement = () => {
  const { t } = useTranslation();
  const [organization, setOrganization] = useState();
  const getOrganizationAbout = () => {
    http
      .get(`find/all/organization-about?language=${langLocal()}`)
      .then((res) => {
        setOrganization(res?.data?.data[0]);
      });
  };
  useEffect(() => {
    getOrganizationAbout();
  }, []);
  return (
    <>
      <Header />
      <BackGroundColor>
        <AboutManagementWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu1.title") },
                { link: t("menus.menu1.title1") },
              ]}
            />
            <PageTwoMenu menu={menu1}>
              <>
                <LargeText color="true">{t("menus.menu1.title1")}</LargeText>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: transliterate(organization?.data?.description),
                  }}
                />
                <img
                  style={{ width: "100%", marginBottom: "20px" }}
                  src={imgUrl + organization?.__photo__?.url_1}
                  alt=""
                />
              </>
              <DownloadFile
                date={organization?.create_at}
                file={organization?.__photo__?.url_1}
              />
            </PageTwoMenu>  
          </div>
        </AboutManagementWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default AboutManagement;
