import { Breadcrumbs, Typography } from "@mui/material";
import { BreadcrumbWrapper } from "./BreadcrumbWrapper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Breadcrumb = ({ links }) => {
  const { t } = useTranslation();
  return (
    <BreadcrumbWrapper>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">
          <Link to={"/"}>{t("head")}</Link>
        </Typography>
        {links?.map((e, i) => (
          <Typography key={i} color="text.primary">
            {e.link}
          </Typography>
        ))}
      </Breadcrumbs>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
