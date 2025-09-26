import { LeadershipCardWrapper, ModalWrapper } from "./LeadershipCardWrapper";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { LargeText } from "../../const/Wrapper";
import { useTranslation } from "react-i18next";
import { imgUrl } from "../../utils/httpClient";
import { transliterate } from "../../const/ToKrillang";

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

const LeadershipCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const { t } = useTranslation();
  return (
    <LeadershipCardWrapper>
      <div className="leadership__card">
        <div className="left">
          <img src={imgUrl + item?.__file__?.url_1} alt="" />
        </div>
        <div className="rigth">
          <p style={{ color: "#cc5500" }}>{transliterate(item?.data?.title)}</p>
          <p>{transliterate(item?.data?.full_name)}</p>
          <p>
            <LocalPhoneIcon />
            {item?.phone_number}
          </p>
          <p>
            <AccessTimeIcon />
            {item?.data?.reception_days}
          </p>
          {/* <p>
            <Button variant="text" onClick={handleOpen}>
              {t("hol")}
            </Button>
            <Button onClick={handleOpen1} variant="text">
              {t("majburiyat")}
            </Button>
          </p> */}
        </div>
      </div>

      {/* tarjima hol */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container my-scroll">
            <ModalWrapper>
              <LargeText color="true">{t("hol")}</LargeText>
              <Button variant="text" onClick={handleClose}>
                <CloseIcon />
              </Button>
              <span
                dangerouslySetInnerHTML={{
                  __html: transliterate(item?.data?.bio),
                }}
              />
            </ModalWrapper>
          </div>
        </Box>
      </Modal>

      {/* majburyatlari */}
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container my-scroll">
            <ModalWrapper>
              <LargeText color="true">{t("majburiyat")}</LargeText>
              <Button variant="text" onClick={handleClose1}>
                <CloseIcon />
              </Button>
              <span
                dangerouslySetInnerHTML={{
                  __html: item?.data?.job_responsibilities,
                }}
              />
            </ModalWrapper>
          </div>
        </Box>
      </Modal>
    </LeadershipCardWrapper>
  );
};

export default LeadershipCard;
