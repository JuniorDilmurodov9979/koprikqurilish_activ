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
import Pagenation from "../../../components/pagenation/Pagenation";
import { DemonstradeWrapper } from "./DemonstadeWrapper";
import { langLocal } from "../../../const/LangLocal";
const Demonstrative = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [demonstrade, setDemonstrade] = useState([]);

  const getTechnicalDecisions = () => {
    http
      .get(
        `find/all/visual-promotional-materials?page=${count}&limit=10&language=${langLocal()}`
      )
      .then((res) => {
        setDemonstrade(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    getTechnicalDecisions();
  }, [count]);
  return (
    <>
      <Header />
      <BackGroundColor>
        <DemonstradeWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu2.title") },
                { link: t("menus.menu2.title10") },
              ]}
            />
            <PageTwoMenu menu={menu2}>
              <>
                <LargeText color="true">{t("menus.menu2.title10")}</LargeText>
                <div className="laws">
                  {demonstrade.map((item, index) => {
                    return <LawsCard item={item} key={index} />;
                  })}
                </div>
                <Pagenation number={number} setcount={setcount} />
              </>
            </PageTwoMenu>
          </div>
        </DemonstradeWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Demonstrative;
