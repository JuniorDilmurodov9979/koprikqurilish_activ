import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu1 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { RequirementsManagementWrapper } from "./RequirementsManagementWrapper";
import { useEffect, useState } from "react";
import http from "../../../utils/httpClient";
import { langLocal } from "../../../const/LangLocal";
import { transliterate } from "../../../const/ToKrillang";

const RequirementsManagement = () => {
  const { t } = useTranslation();
  let text = "<h1>bu yerda text buladiooooooo<h1/>";
  const [requirments, setRequirments] = useState();

  const getRequirments = () => {
    http.get(`find/all/qualification?language=${langLocal()}`).then((res) => {
      setRequirments(res?.data?.data[0]);
      console.log(res?.data?.data[0]);
    });
  };
  useEffect(() => {
    getRequirments();
  }, []);
  return (
    <>
      <Header />
      <BackGroundColor>
        <RequirementsManagementWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu1.title") },
                { link: t("menus.menu1.title6") },
              ]}
            />
            <PageTwoMenu menu={menu1}>
              <>
                <LargeText color="true">{t("menus.menu1.title6")}</LargeText>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: transliterate(text) }}
                />
              </>
            </PageTwoMenu>
          </div>
        </RequirementsManagementWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default RequirementsManagement;
