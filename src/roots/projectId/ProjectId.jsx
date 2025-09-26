import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import { NewsIdWrapper } from "./NewsIdWrapper";
import { BackGroundColor, LargeText } from "../../const/Wrapper";
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
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import http, { imgUrl } from "../../utils/httpClient";
import { useParams } from "react-router-dom";
import { langLocal } from "../../const/LangLocal";
import { transliterate } from "../../const/ToKrillang";

const ProjectId = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [newId, setNewId] = useState();
  const ourProjects = {
    id: "62962ad1-3436-42c6-bb14-7cb85358c32b",
    title: "Bunyodkor—Muqimiy chorrahasidagi ko‘prik",
    createdAt: "2023-11-15 14:57",
    description:
      "Toshkentning Bunyodkor va Muqimiy ko‘chalari kesishmasida bunyod etilgan, uzunligi 900 metrga teng yo‘l o‘tkazgich...",
    photos: [
      {
        id: "1",
        url_1: "https://picsum.photos/id/101/800/600",
      },
      {
        id: "2",
        url_1: "https://picsum.photos/id/102/800/600",
      },
      {
        id: "3",
        url_1: "https://picsum.photos/id/103/800/600",
      },
    ],
  };

  const getNewsId = () => {
    http
      .get(`find/all/our-projects?page=1&limit=8000&language=${langLocal()}`)
      .then((res) => {
        let data = res?.data?.items?.filter((e) => e.id == id);
        setNewId(data[0]);
      });
  };
  useEffect(() => {
    getNewsId();
  }, [id]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  console.log(newId);
  console.log("our", ourProjects);

  return (
    <>
      <NewsIdWrapper>
        <Header />
        <BackGroundColor>
          <div className="container">
            <Breadcrumb links={[{ link: transliterate(newId?.data?.title) }]} />
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
                {newId?.photos?.map((item, index) => {
                  return (
                    <SwiperSlide key={item.id}>
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
                  __html: transliterate(newId?.data?.desc),
                }}
              />
              <p className="text">{transliterate(newId?.data?.short_desc)} </p>
              <p className="time">
                <p>
                  <AccessTimeIcon />
                  {moment(newId?.create_at).format("DD MM YYYY")}
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

export default ProjectId;
