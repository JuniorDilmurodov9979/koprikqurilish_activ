import { useTranslation } from "react-i18next";
import { BackGroundColor, LargeText } from "../../const/Wrapper";
import { Breadcrumb } from "antd";
import PageTwoMenu from "../../containers/pageTwoMenu/PageTwoMenu";
import Footer from "../../containers/footer/Footer";
import { menu6 } from "../../const/Menu";
import { LawsCardWrapper } from "../normativeDocuments/globalCard/CardWrapper";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import Header from "../../containers/header/Header";

const CorruptionHisobot = () => {
  const { t } = useTranslation();
  const hisobotData = [
    {
      id: 1,
      title: t("menus.menu6.title5_desc"),
      file: "/umumiy_hisobot.PDF",
    },
  ];
  return (
    <div>
      <Header />
      <BackGroundColor>
        <div className="container">
          <Breadcrumb
            links={[
              { link: t("menus.menu6.title") },
              { link: t("menus.menu6.title5") },
            ]}
          />
          <PageTwoMenu menu={menu6}>
            <LargeText
              style={{ textAlign: "centr", marginBottom: "15px" }}
              color="true"
            >
              {t("menus.menu6.title5")}
            </LargeText>
            <LawsCardWrapper>
              <section>
                {hisobotData.map((item) => (
                  <a
                    key={item.id}
                    href={item?.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <SimCardDownloadIcon className="icon m-0" />
                    <span>{item?.title}</span>
                  </a>
                ))}
              </section>
            </LawsCardWrapper>
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

export default CorruptionHisobot;
