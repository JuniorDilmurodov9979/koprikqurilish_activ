import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu1 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { StatuteManagementWrapper } from "./StatuteManagementWrapper";
import { useEffect, useState } from "react";
import http, { imgUrl } from "../../../utils/httpClient";
import DownloadFile from "../../downloadFile/download";
import { langLocal } from "../../../const/LangLocal";
import { transliterate } from "../../../const/ToKrillang";

const StatuteManagement = () => {
  const { t } = useTranslation();
  const [statusManagement, setStatusManagement] = useState();

  const getStatusManagement = () => {
    http.get(`find/all/charter?language=${langLocal()}`).then((res) => {
      setStatusManagement(res?.data?.data[0]);
      console.log(res?.data?.data[0]);
    });
  };
  useEffect(() => {
    getStatusManagement();
  }, []);
  return (
    <>
      <Header />
      <BackGroundColor>
        <StatuteManagementWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu1.title") },
                { link: t("menus.menu1.title2") },
              ]}
            />
            <PageTwoMenu menu={menu1}>
              <>
                <LargeText color="true">{t("menus.menu1.title2")}</LargeText>
                <div className="text">
                  {transliterate(statusManagement?.data?.title)}
                </div>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: transliterate(statusManagement?.data?.description),
                  }}
                />
                <img
                  style={{ width: "100%", marginBottom: "20px" }}
                  src={imgUrl + statusManagement?.__photo__?.url_1}
                  alt=""
                />
              </>
              <DownloadFile
                date={statusManagement?.create_at}
                file={statusManagement?.__photo__?.url_1}
              />
            </PageTwoMenu>
          </div>
        </StatuteManagementWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default StatuteManagement;
