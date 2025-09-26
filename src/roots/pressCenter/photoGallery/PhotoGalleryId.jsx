import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu3 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { useParams } from "react-router-dom";
import { ModalWrapper, PhotoGalleryIdWrapper } from "./PhotoGalleryIdWrapper";
import { IMG1, IMG2, IMG3, IMG4 } from "../../../assets/imags";
import { useEffect, useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import http, { imgUrl } from "../../../utils/httpClient";
import { langLocal } from "../../../const/LangLocal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  higth: "100%",
  bgcolor: "transparet",
  border: "0px",
  p: 4,
};

const PhotoGalleryId = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [imgUrl2, setimgUrl2] = useState("");
  const handleOpen = (img) => {
    setOpen(true);
    setimgUrl2(img);
  };
  const handleClose = () => setOpen(false);
  const [pictures, setpictures] = useState({});

  const getNews = () => {
    http.get(`find/all/pictures?&language=${langLocal()}`).then((res) => {
      res?.data?.items?.forEach((item) => {
        if (item.id === id) setpictures(item);
      });
    });
  };
  useEffect(() => {
    getNews();
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
                { link: pictures?.data?.name },
              ]}
            />
            <PageTwoMenu menu={menu3}>
              <>
                <LargeText color="true">{pictures?.data?.name}</LargeText>
                <PhotoGalleryIdWrapper>
                  {pictures?.photos?.map((item) => (
                    <img
                      key={item.id}
                      onClick={() => handleOpen(imgUrl + item?.url_1)}
                      src={imgUrl + item?.url_1}
                      alt="rasm"
                      loading="lazy"
                    />
                  ))}
                </PhotoGalleryIdWrapper>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="container">
                      <ModalWrapper>
                        <Button variant="text" onClick={handleClose}>
                          <CloseIcon />
                        </Button>
                        <img src={imgUrl2} alt="" />
                      </ModalWrapper>
                    </div>
                  </Box>
                </Modal>
              </>
            </PageTwoMenu>
          </div>
        </>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default PhotoGalleryId;
