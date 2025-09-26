import { Button } from "@mui/material";
import { HeadermidleWrapper } from "./HeaderSearchWrapper";
import { SEARCH } from "../../../assets/icon";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const HeaderSearch = () => {
  const search = useRef();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const sendSearch = () => {
    if (search.current.value.length > 1) {
      navigate(`/search/${search.current.value}`);
    } else {
      search.current.focus();
    }
  };
  return (
    <HeadermidleWrapper>
      <div className="search__bar">
        <input ref={search} type="text" placeholder={t("search")} />
        <Button variant="text" onClick={sendSearch}>
          <img src={SEARCH} alt="" />
        </Button>
      </div>
    </HeadermidleWrapper>
  );
};

export default HeaderSearch;
