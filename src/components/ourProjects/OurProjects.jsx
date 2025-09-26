import { BackGroundColor, LargeText } from "../../const/Wrapper";
import OurProjectsCard from "../ourProjectsCard/OurProjectsCard";
import { OurProjectsWrapper } from "./OurProjectsWrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper";
import { Fragment, useEffect, useState } from "react";
import { langLocal } from "../../const/LangLocal";
import http from "../../utils/httpClient";
import { useTranslation } from "react-i18next";

const OurProjects = () => {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();
  const getNews = () => {
    http
      .get(`find/all/our-projects?page=1&limit=8000&language=${langLocal()}`)
      .then((res) => {
        setNews(res?.data?.items);
      });
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <BackGroundColor>
        <div className="container">
          <OurProjectsWrapper>
            <div className="text__center">
              <LargeText>{t("bizning_loyihalar")}</LargeText>
            </div>
            <Swiper
              slidesPerView={
                window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1
              }
              speed={4000}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {news?.map((e) => {
                return (
                  <Fragment key={e?.id}>
                    <SwiperSlide>
                      <OurProjectsCard data={e} />
                    </SwiperSlide>
                  </Fragment>
                );
              })}
            </Swiper>
          </OurProjectsWrapper>
        </div>
      </BackGroundColor>
    </>
  );
};

export default OurProjects;
