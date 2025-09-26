import { HeaderTopWrapper } from "./HeaderTopWrapper";
import { useDispatch } from "react-redux";
import { colorF, faceColorF, zoomF } from "../../../redux/action/darkmode";
import { BAYROG2, BGCOLOR, GERB2, MUSIC2 } from "../../../assets/icon";
import Language from "../../language/Language";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HeaderTop = ({ color, setmenuChange }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <HeaderTopWrapper color={color}>
      <div className="container">
        <div className="header__left">
          <p className="davlat-ramzi">
            <img onClick={() => navigate("/flag")} src={BAYROG2} alt="flag" />
            <img onClick={() => navigate("/gerb")} src={GERB2} alt="flag" />
            <img onClick={() => navigate("/madhiya")} src={MUSIC2} alt="flag" />
          </p>
          <a href="tel:+998(71)203-26-26">
            <CallIcon />
            <span>+998(71)203-26-26</span>
          </a>
          <p className="position__top">
            <VisibilityIcon />
            <span>{t("eye")}</span>
            <div className="position__bottom">
              <div className="position__bg">
                <p
                  onClick={() => {
                    dispatch(colorF());
                  }}
                >
                  <span className="color">A</span>
                </p>
                <p
                  onClick={() => {
                    dispatch(faceColorF());
                  }}
                >
                  <img src={BGCOLOR} alt="" />
                </p>
              </div>
              <div className="position__text">
                <p
                  className="a1"
                  onClick={() => {
                    dispatch(zoomF(1));
                  }}
                >
                  A
                </p>
                <p
                  className="a2"
                  onClick={() => {
                    dispatch(zoomF(1.02));
                  }}
                >
                  A
                </p>
                <p
                  className="a3"
                  onClick={() => {
                    dispatch(zoomF(1.04));
                  }}
                >
                  A
                </p>
              </div>
            </div>
          </p>
          <p
            onClick={() => {
              navigate("/site-map");
            }}
          >
            <AddLocationAltIcon />
            <span>{t("map")}</span>
          </p>
        </div>
        <div className="header__right">
          <Language color={color} />
        </div>
        <div className="menu">
          <Button
            variant="text"
            onClick={() => {
              setmenuChange((item) => !item);
              // document.querySelector("body").style.overflowY = "hidden";
            }}
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </HeaderTopWrapper>
  );
};

export default HeaderTop;
