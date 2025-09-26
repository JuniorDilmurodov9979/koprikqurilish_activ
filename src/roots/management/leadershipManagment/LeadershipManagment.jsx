import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import LeadershipCard from "../../../components/leadershipCard/LeadershipCard";
import { menu1 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { LeadershipManagmentWrapper } from "./LeadershipManagmentWrapper";
import { useEffect, useState } from "react";
import http from "../../../utils/httpClient";
import { langLocal } from "../../../const/LangLocal";

const LeadershipManagment = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [management, setManagement] = useState([]);

  const getLeadershipManagement = () => {
    http
      .get(`find/all/management?page=${count}&limit=10&language=${langLocal()}`)
      .then((res) => {
        setManagement(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    getLeadershipManagement();
  }, [count]);
  return (
    <>
      <Header />
      <BackGroundColor>
        <LeadershipManagmentWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu1.title") },
                { link: t("menus.menu1.title4") },
              ]}
            />
            <PageTwoMenu menu={menu1}>
              <>
                <LargeText color="true">{t("menus.menu1.title4")}</LargeText>
                {management.map((item, index) => {
                  return <LeadershipCard item={item} key={index} />;
                })}
              </>
            </PageTwoMenu>
          </div>
        </LeadershipManagmentWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default LeadershipManagment;
