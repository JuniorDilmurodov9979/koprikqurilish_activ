import { useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { LOGO } from "../../../assets/icon";
import { HeadermidleWrapper } from "./HeaderMidleWrapper";
import { useTranslation } from "react-i18next";
import HeaderSearch from "../search/HeaderSearch";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BOT_TOKEN = import.meta.env.VITE_MUROJAT_TG_BOT_TOKEN;
const CHAT_ID = "7605884028";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const HeaderMidle = ({ color }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <HeadermidleWrapper color={color}>
      <div className="container">
        <Link to={"/"} className="gerb">
          <img src={LOGO} alt="" />
        </Link>
        <div className="search">
          <HeaderSearch />
          <Button
            onClick={() => navigate("/virtual")}
            variant="contained"
            style={{ borderRadius: "20px", backgroundColor: "#FFA800" }}
          >
            {t("virtual")}
          </Button>
        </div>
      </div>
    </HeadermidleWrapper>
  );
};

export default HeaderMidle;
