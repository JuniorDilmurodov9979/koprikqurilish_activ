import { Button } from "@mui/material";
import { LOGO } from "../../../assets/icon";
import { HeadermidleWrapper } from "./HeaderMidleWrapper";
import { useTranslation } from "react-i18next";
import HeaderSearch from "../search/HeaderSearch";
import { Link } from "react-router-dom";

const HeaderMidle = ({ color }) => {
  const { t } = useTranslation();

  return (
    <HeadermidleWrapper color={color}>
      <div className="container">
        <Link to={"/"} className="gerb">
          <img src={LOGO} alt="" />
          {/* <h1 dangerouslySetInnerHTML={{ __html: t("title") }} /> */}
        </Link>
        <div className="search">
          <HeaderSearch />
          <Button
            onClick={() => {
              window.open("https://pm.gov.uz/ru#/", "_blank");
            }}
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
