import Header from "../../../containers/header/Header";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import Footer from "../../../containers/footer/Footer";
import { StructureManagmentWrapper } from "./StructureManagmentWrapper";
import { menu1 } from "../../../const/Menu";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import http, { imgUrl } from "../../../utils/httpClient";
import DownloadFile from "../../downloadFile/download";
import { langLocal } from "../../../const/LangLocal";
import { transliterate } from "../../../const/ToKrillang";

const StructureManagment = () => {
  const { t } = useTranslation();
  const [structure, setStructure] = useState();
  const getStructure = () => {
    http.get(`find/all/m-structure?language=${langLocal()}`).then((res) => {
      setStructure(res?.data?.data[0]);
    });
  };
  useEffect(() => {
    getStructure();
  }, []);
  return (
    <>
      <Header />
      <BackGroundColor>
        <StructureManagmentWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu1.title") },
                { link: t("menus.menu1.title3") },
              ]}
            />
            <PageTwoMenu menu={menu1}>
              <>
                <LargeText color="true">{t("menus.menu1.title3")}</LargeText>
                <div className="text">
                  {transliterate(structure?.data?.title)}
                </div>
                <img
                  style={{ width: "100%", marginBottom: "20px" }}
                  src={`${imgUrl}${structure?.data?.__photo__?.url_1}`}
                  alt=""
                />
                <DownloadFile
                  date={structure?.create_at}
                  file={structure?.data?.__photo__?.url_1}
                />
              </>
            </PageTwoMenu>
          </div>
        </StructureManagmentWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default StructureManagment;
