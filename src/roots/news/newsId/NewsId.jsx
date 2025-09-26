import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import { NewsIdWrapper } from "./NewsIdWrapper";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import moment from "moment";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import http, { imgUrl } from "../../../utils/httpClient";
import { useParams } from "react-router-dom";
import { langLocal } from "../../../const/LangLocal";
import { transliterate } from "../../../const/ToKrillang";

const NewsId = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [newId, setNewId] = useState();

  const getNewsId = () => {
    http.get(`find-one/article/${id}?language=${langLocal()}`).then((res) => {
      setNewId(res?.data?.data);
    });
  };
  useEffect(() => {
    getNewsId();
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NewsIdWrapper>
        <Header />
        <BackGroundColor>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu4.title") },
                { link: transliterate(newId?.data?.title) },
              ]}
            />
            <LargeText color={true}>
              {transliterate(newId?.data?.title)}
            </LargeText>
            <>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
              >
                {newId?.photos.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={imgUrl + item?.url_1} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
            <div className="boxs">
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: transliterate(newId?.data?.description),
                }}
              />
              <p className="text">{transliterate(newId?.data?.author)} </p>
              <p className="time">
                <p>
                  <AccessTimeIcon />
                  {moment(newId?.date ? newId?.date : newId?.create_at).format(
                    "DD MM YYYY"
                  )}
                </p>
                <p>
                  <RemoveRedEyeIcon />
                  {newId?.view_count}
                </p>
              </p>
            </div>
          </div>
        </BackGroundColor>
      </NewsIdWrapper>
      <Footer />
    </>
  );
};

export default NewsId;
