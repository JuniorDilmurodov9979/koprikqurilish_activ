import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu2 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import http from "../../../utils/httpClient";
import { useEffect, useState } from "react";
import LawsCard from "../globalCard/Card";
import Pagenation from "../../../components/pagenation/Pagenation";
import { LawsWrapper } from "./LawsWrapper";
import { langLocal } from "../../../const/LangLocal";
const Laws = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [laws, setLaws] = useState([]);

  const getLaws = () => {
    http
      .get(`find/all/laws?page=${count}&limit=10&language=${langLocal()}`)
      .then((res) => {
        setLaws(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    getLaws();
  }, [count]);
  return (
    <>
      <Header />
      <BackGroundColor>
        <LawsWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu2.title") },
                { link: t("menus.menu2.title1") },
              ]}
            />
            <PageTwoMenu menu={menu2}>
              <>
                <LargeText color="true">{t("menus.menu2.title1")}</LargeText>
                <div className="laws">
                  {laws.map((item, index) => {
                    return <LawsCard item={item} key={index} />;
                  })}
                </div>
                <Pagenation number={number} setcount={setcount} />
              </>
            </PageTwoMenu>
          </div>
        </LawsWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Laws;
