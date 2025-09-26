import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu2 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { useEffect, useState } from "react";
import http from "../../../utils/httpClient";
import LawsCard from "../globalCard/Card";
import { DepartmentalWrapper } from "./DepartmentalWrapper";
import Pagenation from "../../../components/pagenation/Pagenation";
import { langLocal } from "../../../const/LangLocal";
const Departmental = () => {
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [laws, setLaws] = useState([]);

  const getDepartmental = () => {
    http
      .get(
        `find/all/departmental-law?page=${count}&limit=10&language=${langLocal()}`
      )
      .then((res) => {
        setLaws(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    getDepartmental();
  }, [count]);
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <BackGroundColor>
        <DepartmentalWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu2.title") },
                { link: t("menus.menu2.title4") },
              ]}
            />
            <PageTwoMenu menu={menu2}>
              <>
                <LargeText color="true">{t("menus.menu2.title4")}</LargeText>
                <div className="laws">
                  {laws.map((item, index) => {
                    return <LawsCard item={item} key={index} />;
                  })}
                </div>
                <Pagenation number={number} setcount={setcount} />
              </>
            </PageTwoMenu>
          </div>
        </DepartmentalWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Departmental;
