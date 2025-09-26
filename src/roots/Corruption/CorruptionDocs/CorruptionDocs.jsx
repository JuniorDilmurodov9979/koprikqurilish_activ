import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor, LargeText } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import { useEffect, useState } from "react";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { menu6 } from "../../../const/Menu";
import CorruptionLaw from "./CorruptionLaw";
import { Corruption_DOCS_URL } from "../CorruptionURL";
import { Box, CircularProgress, Typography } from "@mui/material";

const CorruptionDocs = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Loading state

  const getDocs = async () => {
    try {
      const response = await fetch(Corruption_DOCS_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching documents:", error);
    } finally {
      setLoading(false); // Stop loading after fetch
    }
  };

  useEffect(() => {
    getDocs();
  }, []);

  return (
    <div>
      <Header />
      <BackGroundColor>
        <div className="container">
          <Breadcrumb
            links={[
              { link: t("menus.menu6.title") },
              { link: t("menus.menu6.title1") },
            ]}
          />
          <PageTwoMenu menu={menu6}>
            <LargeText color="true">{t("menus.menu6.title1")}</LargeText>

            {loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                minHeight="200px"
              >
                <CircularProgress />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  {t("loading")}{" "}
                  {/* You can also write plain text: "Maʼlumotlar yuklanmoqda..." */}
                </Typography>
              </Box>
            ) : data.length === 0 ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="200px"
              >
                <Typography variant="h6" color="text.secondary">
                  Maʼlumotlar topilmadi
                </Typography>
              </Box>
            ) : (
              data.map((item) => <CorruptionLaw key={item.id} item={item} />)
            )}
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

export default CorruptionDocs;
