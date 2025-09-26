import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu3 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { IMG1, IMG2, IMG3, IMG4 } from "../../../assets/imags";
import { VedioGaleryWrapper } from "./VedioGaleryWrapper";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useEffect, useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ModalWrapper } from "../photoGallery/PhotoGalleryIdWrapper";
import http, { imgUrl } from "../../../utils/httpClient";
import { langLocal } from "../../../const/LangLocal";
import Pagenation from "../../../components/pagenation/Pagenation";

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
const VideoData = [
  {
    id: "1",
    video_link: "https://www.youtube.com/embed/GojxEbQl-tU?si=6Oda6DncyDUSkaqP",
    create_at: "2023.11.02 11:09",
    update_at: "2023.11.02 11:09",
    __file__: {
      id: "00b4274b-38c4-4ec2-9998-6ba7d1e6283b",
      name_1: "1698905368838.png",
      url_1: "/files/2023-11-02/1698905368838.png",
      name_2: "1698905368844.webp",
      url_2: "/files/2023-11-02/1698905368844.webp",
      fileStorageStatus: "DRAFT",
      created_at: "2023-11-02T06:09:28.861Z",
      updated_at: "2023-11-02T06:09:28.861Z",
    },
    data: {
      id: "7b1322f7-b064-4d85-97bf-a77ea2fc49cc",
      name: "Deformatsion shov 3d modeli",
      language: "UZ",
    },
  },
  {
    id: "2",
    video_link: "https://youtube.com/embed/watch?v=CwEvjpD4JnI",
    create_at: "2023.11.02 11:09",
    update_at: "2023.11.02 11:09",
    __file__: {
      id: "00b4274b-38c4-4ec2-9998-6ba7d1e6283b",
      name_1: "1698905368838.png",
      url_1: "/files/2023-11-02/1698905368838.png",
      name_2: "1698905368844.webp",
      url_2: "/files/2023-11-02/1698905368844.webp",
      fileStorageStatus: "DRAFT",
      created_at: "2023-11-02T06:09:28.861Z",
      updated_at: "2023-11-02T06:09:28.861Z",
    },
    data: {
      id: "7b1322f7-b064-4d85-97bf-a77ea2fc49cc",
      name: "test video",
      language: "UZ",
    },
  },
];

const VedioGalery = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [imgUrl2, setimgUrl2] = useState("");
  const getEmbedUrl = (url) => {
    if (!url) {
      alert("Invalid URL");
      return "";
    }

    try {
      const parsedUrl = new URL(url);
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // If already embed format
      if (parsedUrl.pathname.startsWith("/embed/")) {
        return url;
      }

      return "";
    } catch (e) {
      return "";
    }
  };

  const handleOpen = (url) => {
    const safeEmbed = getEmbedUrl(url);
    if (!safeEmbed) {
      alert("Xatolik: noto‘g‘ri video havola!");
      return;
    }

    setimgUrl2(safeEmbed);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [video, setvideo] = useState([]);

  const getNews = () => {
    http
      .get(`find/all/video?page=${count}&limit=9&language=${langLocal()}`)
      .then((res) => {
        setvideo(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };
  useEffect(() => {
    getNews();
  }, [count]);

  console.log(video);

  return (
    <>
      <Header />
      <BackGroundColor>
        <>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu3.title") },
                { link: t("menus.menu3.title2") },
              ]}
            />
            <PageTwoMenu menu={menu3}>
              <>
                <LargeText color="true">{t("menus.menu3.title2")}</LargeText>
                <VedioGaleryWrapper>
                  {video?.map((item) => (
                    <div
                      key={item?.id}
                      onClick={() => handleOpen(item?.video_link)}
                      className="card__video"
                    >
                      <p className="card__text">{item?.data?.name}</p>
                      <div className="card__icon">
                        <PlayCircleIcon />
                      </div>
                      <img src={imgUrl + item?.__file__?.url_1} alt="" />
                    </div>
                  ))}
                </VedioGaleryWrapper>
                <Pagenation number={number} setcount={setcount} />
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="container">
                      <ModalWrapper>
                        <Button variant="contained" onClick={handleClose}>
                          <CloseIcon />
                        </Button>
                        <iframe
                          src={imgUrl2}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
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

export default VedioGalery;
