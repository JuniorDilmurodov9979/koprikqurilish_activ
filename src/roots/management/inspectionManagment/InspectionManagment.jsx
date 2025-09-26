import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import LeadershipCard from "../../../components/leadershipCard/LeadershipCard";
import { menu1 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { InspectionManagmentWrapper } from "./InspectionManagmentWrapper";
import { useEffect, useState } from "react";
import http from "../../../utils/httpClient";
import Pagenation from "../../../components/pagenation/Pagenation";
import { langLocal } from "../../../const/LangLocal";

const InspectionManagment = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [central, setCentral] = useState([]);

  const getCentral = () => {
    http
      .get(`find/all/central?page=${count}&limit=10&language=${langLocal()}`)
      .then((res) => {
        setCentral(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    getCentral();
  }, [count]);
  return (
    <>
      <Header />
      <BackGroundColor>
        <InspectionManagmentWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu1.title") },
                { link: t("menus.menu1.title5") },
              ]}
            />
            <PageTwoMenu menu={menu1}>
              <>
                <LargeText color="true">{t("menus.menu1.title5")}</LargeText>
                {central.map((item, index) => (
                  <LeadershipCard key={index} item={item} />
                ))}
              </>
              <Pagenation number={number} setcount={setcount} />
            </PageTwoMenu>
          </div>
        </InspectionManagmentWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default InspectionManagment;
