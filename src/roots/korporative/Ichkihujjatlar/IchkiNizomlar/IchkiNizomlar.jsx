import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../../const/Wrapper";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, FileText, Download, ShieldCheck } from "lucide-react";

const IchkiNizomlar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const nizomlar = [
    {
      id: 1,
      title: t("ichki_nizom.file1"),
      file: "/1_ichki_nizom.pdf",
    },
    {
      id: 2,
      title: t("ichki_nizom.file2"),
      file: "/2_ichki_nizom.pdf",
    },
    {
      id: 3,
      title: t("ichki_nizom.file3"),
      file: "/3_ichki_nizom.pdf",
    },
    {
      id: 4,
      title: t("ichki_nizom.file4"),
      file: "/4_ichki_nizom.pdf",
    },
    {
      id: 5,
      title: t("ichki_nizom.file5"),
      file: "/5_ichki_nizom.pdf",
    },
    {
      id: 6,
      title: t("ichki_nizom.file6"),
      file: "/6_ichki_nizom.pdf",
    },
    {
      id: 7,
      title: t("ichki_nizom.file7"),
      file: "/7_ichki_nizom.pdf",
    },
    {
      id: 8,
      title: t("ichki_nizom.file8"),
      file: "/8_ichki_nizom.pdf",
    },
    {
      id: 9,
      title: t("ichki_nizom.file9"),
      file: "/9_ichki_nizom.pdf",
    },
    {
      id: 10,
      title: t("ichki_nizom.file10"),
      file: "/10_ichki_nizom.pdf",
    },
    {
      id: 11,
      title: t("ichki_nizom.file11"),
      file: "/11_ichki_nizom.pdf",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7]">
      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <BackGroundColor>
        <div className="container max-w-[1250px] mx-auto px-4 sm:px-6 py-8">
          {/* BREADCRUMB */}
          <Breadcrumb
            links={[
              { link: t("internalDocuments.title") },
              {
                link: t("internalDocuments.menus.internalRegulations"),
              },
            ]}
          />

          {/* PAGE TITLE */}
          <div className="mb-8 mt-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#d97706] tracking-tight">
              {t("internalDocuments.menus.internalRegulations")}
            </h1>

            <div className="w-24 h-1 bg-yellow-500 rounded-full mt-3"></div>
          </div>

          {/* MAIN CARD */}
          <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            {/* TOP SECTION */}

            {/* BACK BUTTON */}
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl w-fit m-5 mb-0"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition"
              />

              <span className="font-medium">{t("back")}</span>
            </button>
            <div className="relative px-5 sm:px-10 py-8  sm:py-10 border-b border-gray-100 bg-gradient-to-br from-white via-[#fffdf8] to-[#fff8ed]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* LEFT */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                    <ShieldCheck size={16} />
                    {t("ichki_nizom.hujjatlar")}
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
                    {t("internalDocuments.menus.internalRegulations")}
                  </h2>

                  <p className="text-gray-500 mt-3 text-base sm:text-lg max-w-2xl">
                    {t("ichki_nizom.sub")}
                  </p>
                </div>
              </div>
            </div>

            {/* FILES SECTION */}
            <div className="px-5 sm:px-10 py-10">
              {/* SECTION TITLE */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
                  <FileText className="text-yellow-600" size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("ichki_nizom.ruyhat")}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {t("ichki_nizom.ruyhat_desc")}
                  </p>
                </div>
              </div>

              {/* FILE CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {nizomlar.map((item) => (
                  <a
                    key={item.id}
                    href={item.file}
                    download
                    className="group bg-[#fcfcfc] hover:bg-white border border-gray-100 hover:border-yellow-300 rounded-3xl p-5 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-5">
                      {/* LEFT */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
                          <FileText className="text-yellow-600" size={24} />
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-gray-900 leading-snug">
                            {item.title}
                          </h4>

                          <p className="text-sm text-gray-500 mt-1">
                            {t("ichki_nizom.pdf")}
                          </p>
                        </div>
                      </div>

                      {/* DOWNLOAD */}
                      <div className="min-w-[48px] px-3 py-2 rounded-2xl bg-yellow-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition">
                        <Download size={20} />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* EMPTY STATE IF NO FILES */}
              {nizomlar.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-5">
                    <FileText className="text-yellow-600" size={36} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Hozircha hujjatlar mavjud emas
                  </h3>

                  <p className="text-gray-500">
                    Keyinroq qayta tekshirib ko‘ring.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </BackGroundColor>

      {/* FOOTER */}
      <div className="mt-10"></div>

      <Footer
        showPartners={false}
        showProjects={false}
        showUsefulLinks={false}
      />
    </div>
  );
};

export default IchkiNizomlar;
