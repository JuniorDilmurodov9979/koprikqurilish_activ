import { useEffect, useState } from "react";
import NewsCard from "../../../components/newsCard/NewsCard";
import Pagenation from "../../../components/pagenation/Pagenation";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import { NewsWrapper } from "./NewsWrapper";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import http from "../../../utils/httpClient";
import { langLocal } from "../../../const/LangLocal";
const News = () => {
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [news, setNews] = useState([]);
  const { t } = useTranslation();
  const getNews = () => {
    http
      .get(`find/all/articles?page=${count}&limit=8&language=${langLocal()}`)
      .then((res) => {
        setNews(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    getNews();
  }, [count]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <NewsWrapper>
      <Header />
      <BackGroundColor>
        <div className="container ">
          <Breadcrumb links={[{ link: t("menus.menu4.title") }]} />
          <div className="news">
            <LargeText color={true}>{t("menus.menu4.title")}</LargeText>
            <div className="news__card">
              {news.map((item, index) => {
                return <NewsCard item={item} key={index} />;
              })}
            </div>
            <Pagenation number={number} setcount={setcount} />
          </div>
        </div>
      </BackGroundColor>
      <Footer />
    </NewsWrapper>
  );
};

export default News;
