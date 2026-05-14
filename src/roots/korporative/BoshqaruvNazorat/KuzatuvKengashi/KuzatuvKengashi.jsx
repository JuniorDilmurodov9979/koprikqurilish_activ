import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../../const/Wrapper";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Download, FileText } from "lucide-react";

const KuzatuvKengashi = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const members = t("kuzatuv.members", { returnObjects: true });

  const kuzatuvFiles = [
    {
      id: 1,
      name: t("kuzatuv.download"),
      link: "/kuzatuvkengash.pdf",
    },
    {
      id: 2,
      name: t("kuzatuv.new.hujjat1"),
      link: "/kuzatuv_1.pdf",
    },
    {
      id: 3,
      name: t("kuzatuv.new.hujjat2"),
      link: "/kuzatuv_2.pdf",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
      <Header />

      <BackGroundColor>
        <div className="container max-w-[1250px] mx-auto px-4 sm:px-6 py-8">
          <Breadcrumb
            links={[
              { link: t("menus.menu7.title2") },
              { link: t("supervisoryBoard") },
            ]}
          />

          {/* PAGE TITLE */}
          <div className="mb-8 mt-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#d97706] tracking-tight">
              {t("supervisoryBoard")}
            </h1>

            <div className="w-24 h-1 bg-yellow-500 rounded-full mt-3"></div>
          </div>

          {/* MAIN CARD */}
          <div className="bg-white border border-gray-100 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* TOP SECTION */}
            <div className="relative px-5 sm:px-10 py-8 sm:py-10 border-b border-gray-100 bg-gradient-to-br from-white via-[#fffdf8] to-[#fff7e8]">
              {/* BACK BUTTON */}
              <button
                onClick={() => navigate(-1)}
                className="group inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition"
                />
                <span className="font-medium">{t("kuzatuv.back")}</span>
              </button>

              {/* TITLE */}
              <div className="mt-8 max-w-4xl">
                <h2 className="text-2xl sm:text-4xl font-extrabold leading-snug text-gray-900">
                  {t("kuzatuv.subtitle")}
                </h2>

                <p className="mt-3 text-lg sm:text-xl text-yellow-600 font-semibold">
                  {t("kuzatuv.sub")}
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 sm:px-10 py-10">
              {/* MEMBERS */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center">
                    <FileText className="text-yellow-600" size={22} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t("kuzatuv.sub")}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {t("kuzatuv.new.aksiyadorlik")}
                    </p>
                  </div>
                </div>

                <ul className="space-y-5">
                  {members.map((member, index) => (
                    <li
                      key={index}
                      className="group bg-[#fcfcfc] hover:bg-white border border-gray-100 hover:border-yellow-200 rounded-3xl p-5 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="min-w-[48px] px-3 py-1 rounded-2xl bg-yellow-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                          {index + 1}
                        </div>

                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                            {member.name}
                          </h4>

                          {member.desc && (
                            <p className="text-gray-600 leading-relaxed">
                              {member.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FILES */}
              <div>
                <div className="sticky top-24">
                  <div className="bg-[#fffaf1] border border-yellow-100 rounded-3xl p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t("kuzatuv.download")}
                    </h3>

                    <p className="text-gray-500 text-sm mb-6">
                      {t("kuzatuv.new.qaror")}
                    </p>

                    <div className="space-y-4">
                      {kuzatuvFiles.map((file) => (
                        <a
                          key={file.id}
                          href={file.link}
                          download={file.name}
                          className="group flex items-center justify-between gap-4 bg-white border border-gray-100 hover:border-yellow-300 rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-yellow-100 flex items-center justify-center">
                              <FileText className="text-yellow-600" size={22} />
                            </div>

                            <span className="font-medium text-gray-800 leading-snug">
                              {file.name}
                            </span>
                          </div>

                          <div className="p-3 rounded-xl bg-yellow-500 text-white flex items-center justify-center group-hover:scale-110 transition">
                            <Download size={18} />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackGroundColor>

      <div className="mt-10"></div>

      <Footer
        showPartners={false}
        showProjects={false}
        showUsefulLinks={false}
      />
    </div>
  );
};

export default KuzatuvKengashi;
