import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu2 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { useEffect, useState } from "react";
import http from "../../../utils/httpClient";
import Pagenation from "../../../components/pagenation/Pagenation";
import LawsCard from "../globalCard/Card";
import { DecisionsWrapper } from "./DecisionsWrapper";
import { langLocal } from "../../../const/LangLocal";
const Decisions = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [laws, setLaws] = useState([]);

  const getDecisions = () => {
    http
      .get(
        `find/all/president-law?page=${count}&limit=10&language=${langLocal()}`
      )
      .then((res) => {
        setLaws(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    getDecisions();
  }, [count]);
  return (
    <>
      <Header />
      <BackGroundColor>
        <DecisionsWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu2.title") },
                { link: t("menus.menu2.title2") },
              ]}
            />
            <PageTwoMenu menu={menu2}>
              <>
                <LargeText color="true">{t("menus.menu2.title2")}</LargeText>
                <div className="laws">
                  {laws.map((item, index) => {
                    return <LawsCard item={item} key={index} />;
                  })}
                </div>
                <Pagenation number={number} setcount={setcount} />
              </>
            </PageTwoMenu>
          </div>
        </DecisionsWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Decisions;
