import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu3 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { NewspapersWrapper } from "../newspapers/NewspapersWrapper";
import PhotoCard from "../../../components/photoCard/PhotoCard";
import { useEffect, useState } from "react";
import Pagenation from "../../../components/pagenation/Pagenation";
import http from "../../../utils/httpClient";
import { langLocal } from "../../../const/LangLocal";

const PhotoGallery = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [pictures, setpictures] = useState([]);

  const getNews = () => {
    http
      .get(`find/all/pictures?page=${count}&limit=9&language=${langLocal()}`)
      .then((res) => {
        setpictures(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    getNews();
  }, [count]);
  return (
    <>
      <Header />
      <BackGroundColor>
        <>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu3.title") },
                { link: t("menus.menu3.title1") },
              ]}
            />
            <PageTwoMenu menu={menu3}>
              <>
                <LargeText color="true">{t("menus.menu3.title1")}</LargeText>
                <NewspapersWrapper>
                  {pictures?.map((item) => (
                    <PhotoCard key={item?.id} data={item} />
                  ))}
                </NewspapersWrapper>
                <Pagenation number={number} setcount={setcount} />
              </>
            </PageTwoMenu>
          </div>
        </>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default PhotoGallery;
