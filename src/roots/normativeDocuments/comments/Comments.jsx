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
import { CommentsWrapper } from "./CommentsWrapper";
import { langLocal } from "../../../const/LangLocal";

const Comments = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [documents, setDocuments] = useState([]);
  const getTechnicalDecisions = () => {
    http
      .get(
        `find/all/regulatory-doc?page=${count}&limit=10&language=${langLocal()}`
      )
      .then((res) => {
        setDocuments(res?.data?.items);
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
        <CommentsWrapper>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu2.title") },
                { link: t("menus.menu2.title8") },
              ]}
            />
            <PageTwoMenu menu={menu2}>
              <>
                <LargeText color="true">{t("menus.menu2.title8")}</LargeText>
                <div className="laws">
                  {documents.map((item, index) => {
                    return <LawsCard item={item} key={index} />;
                  })}
                </div>
                <Pagenation number={number} setcount={setcount} />
              </>
            </PageTwoMenu>
          </div>
        </CommentsWrapper>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Comments;
