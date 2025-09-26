import { useParams } from "react-router-dom";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@mui/material";
import { formatUzbekDate } from "../CorruptionMonitoring/CorruptionMonitoringList"; // adjust path if needed
import { useTranslation } from "react-i18next";
import { SingleCard } from "./SingleCard";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { menu6 } from "../../../const/Menu";
import { Corruption_APPEALS_URL } from "../CorruptionURL";

const CorruptionDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  const getData = async () => {
    const response = await fetch(`${Corruption_APPEALS_URL}${id}/`);
    const json = await response.json();
    return json;
  };

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <BackGroundColor>
        <div
          className="container"
          style={{ maxWidth: "100%", padding: "0 16px" }}
        >
          <Breadcrumb
            links={[
              { link: t("menus.menu6.title") },
              { link: t("menus.menu6.title3") },
              { link: data?.title },
            ]}
          />
          <PageTwoMenu menu={menu6}>
            <SingleCard item={data} />
          </PageTwoMenu>
        </div>
      </BackGroundColor>
      <Footer
        showPartners={false}
        showProjects={false}
        showUsefulLinks={false}
      />
    </div>
  );
};

export default CorruptionDetails;
