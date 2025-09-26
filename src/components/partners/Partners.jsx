import { BackGroundColor, LargeText } from "../../const/Wrapper";
import { PartnersWrapper } from "./PartnersWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <>
      <BackGroundColor>
        <div className="container">
          <PartnersWrapper>
            <LargeText>{t("bizning_hamkorlar")}</LargeText>
            <Swiper
              slidesPerView={window.innerWidth > 576 ? 4 : 2}
              spaceBetween={30}
              speed={4000}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="carusel-box">
                  <img src={"https://mc.uz/images/64.png"} alt="partners" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carusel-box">
                  <img
                    src={
                      "https://www.tashkent.uz/uploads/pages/2c6eca9acc24854275ac4a0d3b21a757.png"
                    }
                    alt="partners"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carusel-box">
                  <img src={"https://mintrans.uz/favicon.png"} alt="partners" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carusel-box">
                  <img
                    src={
                      "https://railway.uz/local/templates/main_v2/img/logo.webp"
                    }
                    alt="partners"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carusel-box">
                  <img
                    src={
                      "https://www.uzbairports.uz/assets/front/img/header_logo_16374080502106317601.svg"
                    }
                    alt="partners"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </PartnersWrapper>
        </div>
      </BackGroundColor>
    </>
  );
};

export default Partners;
