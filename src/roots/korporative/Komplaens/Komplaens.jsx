import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import { useTranslation } from "react-i18next";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { menu7 } from "../../../const/Menu";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { KomplaensWrapper } from "./KomplaensWrapper";

const Komplaens = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const data_hujjatlar = [
    {
      id: 1,
      name: t("menus.menu7.title6_desc"),
      link: "/9-сонлибуйруқ.pdf",
    },
    {
      id: 2,
      name: t("menus.menu7.title6_desc1"),
      link: "/1-ilova.pdf",
    },
    {
      id: 3,
      name: t("menus.menu7.title6_desc2"),
      link: "/2-ilova.pdf",
    },
    {
      id: 4,
      name: t("menus.menu7.title6_desc3"),
      link: "/3-ilova.pdf",
    },
  ];

  const data = [
    {
      id: 1,
      name: t("menus.menu7.komplaens_desc1"),
      link: "https://lex.uz/docs/6518381",
    },
    {
      id: 2,
      name: t("menus.menu7.komplaens_desc2"),
      link: "https://lex.uz/docs/4887654",
    },
    {
      id: 3,
      name: t("menus.menu7.komplaens_desc3"),
      link: "https://lex.uz/docs/5317558",
    },
    {
      id: 4,
      name: t("menus.menu7.komplaens_desc4"),
      link: "https://lex.uz/docs/6907023",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <Header />

      {/* Content */}
      <BackGroundColor>
        <div className="container max-w-[1300px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <Breadcrumb
            links={[
              { link: t("menus.menu7.title") },
              { link: t("menus.menu7.title6") },
            ]}
          />

          {/* Chap tomondagi menu bar */}
          <PageTwoMenu menu={menu7}>
            <div>
              <h2 className="text-2xl mb-3">{t("menus.menu7.title6_title")}</h2>
              <KomplaensWrapper>
                <section>
                  {data_hujjatlar?.map((item) => (
                    <a
                      key={item.id}
                      className="cursor-pointer"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      // download
                    >
                      <SimCardDownloadIcon className="icon" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </section>
              </KomplaensWrapper>
              <div>
                <h3 className="text-2xl mt-3 ">
                  {t("menus.menu7.komplaens_title")}
                </h3>

                <ol className="flex flex-col gap-3 mt-3">
                  {data.map((item) => (
                    <li key={item.id} className="flex ">
                      <p>
                        {item.name}
                        <a
                          className="underline hover:text-blue-500 ml-1"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("menus.menu7.batafsil_btn")}
                        </a>
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </PageTwoMenu>
        </div>
      </BackGroundColor>

      {/* Footer */}
      <div className="mt-12"></div>
      <Footer
        showPartners={false}
        showProjects={false}
        showUsefulLinks={false}
      />
    </div>
  );
};

export default Komplaens;
