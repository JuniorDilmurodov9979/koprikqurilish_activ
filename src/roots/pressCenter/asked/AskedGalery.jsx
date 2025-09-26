import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { menu3 } from "../../../const/Menu";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { useEffect, useState } from "react";
import http from "../../../utils/httpClient";
import { AskedGaleryWrapper } from "./AskedGaleryWrapper";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { langLocal } from "../../../const/LangLocal";
import { transliterate } from "../../../const/ToKrillang";

const AskedGalery = () => {
  const { t } = useTranslation();
  const [count, setcount] = useState(1);
  const [number, setNumber] = useState(1);
  const [faq, setfaq] = useState([]);
  const lang = localStorage.getItem("i18nextLng");
  const getfaq = () => {
    http
      .get(`find/all/faq?page=${count}&limit=10&language=${langLocal()}`)
      .then((res) => {
        setfaq(res?.data?.items);
        setNumber(res?.data?.meta?.totalPages);
      });
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getfaq();
  }, [count, lang]);
  return (
    <>
      <Header />
      <BackGroundColor>
        <>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu3.title") },
                { link: t("menus.menu3.title3") },
              ]}
            />
            <PageTwoMenu menu={menu3}>
              <>
                <LargeText color="true">{t("menus.menu3.title3")}</LargeText>

                <AskedGaleryWrapper>
                  {faq?.map((item) => (
                    <Accordion
                      key={item.id}
                      expanded={expanded === item.id}
                      onChange={handleChange(item.id)}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                      >
                        <Typography sx={{ width: "100%", flexShrink: 0 }}>
                          {transliterate(item?.data?.question)}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: transliterate(item?.data?.answer),
                            }}
                          />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </AskedGaleryWrapper>
              </>
            </PageTwoMenu>
          </div>
        </>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default AskedGalery;
