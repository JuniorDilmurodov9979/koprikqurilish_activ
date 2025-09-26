import { Button } from "@mui/material";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import { HomeWrapper } from "./HomeWrapper";
import { BackGroundColor, LargeText } from "../../const/Wrapper";
import { Link, useNavigate } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
import { BRIDGE2, IMG, IMG1, IMG2, IMG3, IMG4, IMG5 } from "../../assets/imags";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper";
import { useTranslation } from "react-i18next";
import http from "../../utils/httpClient";
import { useEffect, useState } from "react";
import { langLocal } from "../../const/LangLocal";
import PhotoCard from "../../components/photoCard/PhotoCard";
import { BULL, WORKERS, BRIDGE, CONSTRUCTION, DOTS } from "../../assets/icon";
import OurProjectsCard from "../../components/ourProjectsCard/OurProjectsCard";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const [pictures, setpictures] = useState([]);
  let images = [
    { ulr: IMG1 },
    { ulr: IMG2 },
    { ulr: IMG3 },
    { ulr: IMG4 },
    { ulr: IMG5 },
  ];

  const getNews = () => {
    http
      .get(`find/all/articles?page=1&limit=8&language=${langLocal()}`)
      .then((res) => {
        setNews(res?.data?.items);
      });
  };

  const getPhoto = () => {
    http
      .get(`find/all/pictures?page=1&limit=4&language=${langLocal()}`)
      .then((res) => {
        setpictures(res?.data?.items);
      });
  };
  useEffect(() => {
    getNews();
    getPhoto();
  }, []);

  return (
    <>
      <HomeWrapper>
        <div className="bg__image">
          <div className="carusel__bg">
            <Swiper
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <video src={BRIDGE2} muted autoPlay loop></video>
              </SwiperSlide>
              {/* {images?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.ulr} />
                </SwiperSlide>
              ))} */}
            </Swiper>
          </div>
          <div className="parda">
            <Header color="true" />
            <div className="container">
              <marquee>{t("test")}</marquee>
              <div className="parda-text">
                <h4 dangerouslySetInnerHTML={{ __html: t("title") }} />
                <h1 dangerouslySetInnerHTML={{ __html: t("title2") }} />
                <h5 dangerouslySetInnerHTML={{ __html: t("title3") }} />
              </div>
            </div>
          </div>
        </div>
        <BackGroundColor>
          <div className="container">
            <div className="xizmatlarmiz">
              <div className="text">
                <h5>{t("yangi-kuprik")}</h5>
                <p>{t("biz-yul")}</p>
                <Link to="/">{t("xizmatlarimiz")}</Link>
              </div>
              <div className="images">
                <div className="round"></div>
                <div className="round-2"></div>
                <div className="dots">
                  <img src={DOTS} alt="" />
                </div>
                <div className="dots-2">
                  <img src={DOTS} alt="" />
                </div>
                <img className="img" src={IMG} alt="xizmatlarmiz" />
              </div>
            </div>
            <div className="biz-haqimizda">
              <div className="card">
                <img src={CONSTRUCTION} alt="" />
                <div className="flex">
                  <p>{t("yillik")}</p>
                  <span>{t("sifati")}</span>
                </div>
              </div>
              <div className="card">
                <img src={WORKERS} alt="" />
                <div className="flex">
                  <p>{t("xodimlar")}</p>
                  <span>{t("boy-tajriba")}</span>
                </div>
              </div>
              <div className="card">
                <img src={BRIDGE} alt="" />
                <div className="flex">
                  <p>{t("yondashuv")}</p>
                  <span>{t("mijozlarimizga")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="boxs-card-img">
            <div className="boxs-card-pard">
              <div className="container">
                <div className="boxs-card">
                  <div className="card">
                    <div className="border"></div>
                    <img src={CONSTRUCTION} alt="" />
                    <h3>{t("qurilyotgan")}</h3>
                    <p>400</p>
                  </div>
                  <div className="card">
                    <div className="border"></div>
                    <img src={BRIDGE} alt="" />
                    <h3>{t("kupriklar")}</h3>
                    <p>1800</p>
                  </div>
                  <div className="card">
                    <div className="border"></div>
                    <img src={WORKERS} alt="" />
                    <h3>{t("xodimlar-soni")}</h3>
                    <p>5000</p>
                  </div>
                  <div className="card">
                    <div className="border"></div>
                    <img src={BULL} alt="" />
                    <h3>{t("texnikalar")}</h3>
                    <p>550</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="news">
              <LargeText>{t("menus.menu4.title")}</LargeText>
              <div className="news__card">
                {news.map((item, index) => {
                  return <NewsCard item={item} key={index} />;
                })}
              </div>
              <Button
                className="more"
                onClick={() => navigate("/news")}
                variant="outlined"
              >
                {t("more")}
              </Button>
            </div>
            <div className="news">
              <LargeText>{t("menus.menu3.title1")}</LargeText>
              <div className="news__card">
                {pictures?.map((item) => (
                  <PhotoCard key={item?.id} data={item} />
                ))}
              </div>
              <Button
                className="more"
                onClick={() => navigate("/press-center/gallery")}
                variant="outlined"
              >
                {t("menus.menu3.title1")}
              </Button>
            </div>
          </div>
        </BackGroundColor>
        <Footer />
      </HomeWrapper>
    </>
  );
};

export default Home;
