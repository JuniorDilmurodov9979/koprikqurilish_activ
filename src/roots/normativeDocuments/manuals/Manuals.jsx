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
import { ManualsWrapper } from "./ManualsWrapper";
import { langLocal } from "../../../const/LangLocal";

const Manuals = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [manuals, setManuals] = useState([]);

  const getManuals = () => {
    http
      .get(`find/all/manuals?page=${count}&limit=10&language=${langLocal()}`)
      .then((res) => {
        setManuals(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    getManuals();
  }, [count]);

  return (
    <>
      <Header />
      <BackGroundColor>
        <ManualsWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu2.title") },
                { link: t("menus.menu2.title7") },
              ]}
            />
            <PageTwoMenu menu={menu2}>
              <>
                <LargeText color="true">{t("menus.menu2.title7")}</LargeText>
                <div className="laws">
                  {manuals.map((item, index) => {
                    return <LawsCard item={item} key={index} />;
                  })}
                </div>
                <Pagenation number={number} setcount={setcount} />
              </>
            </PageTwoMenu>
          </div>
        </ManualsWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Manuals;
