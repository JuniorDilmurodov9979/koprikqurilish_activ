import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../../const/Wrapper";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Download, FileText, ArrowLeft } from "lucide-react";

const BoshqaruvKodeksi = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // document file
  const documentFile = "/korporativ_qoidalar.pdf";

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fb]">
      <Header />

      <BackGroundColor>
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
          {/* Breadcrumb */}
          <Breadcrumb
            links={[
              { link: t("internalDocuments.title") },
              { link: t("internalDocuments.menus.internalRegulations") },
            ]}
          />

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-6 mb-10">
            <div>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-fit mb-5 text-sm"
              >
                <ArrowLeft size={18} />
                {t("back")}
              </button>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t("internalDocuments.menus.codeOfGovernance")}
              </h1>

              <p className="text-gray-500 mt-2 max-w-2xl">
                {t("boshqaruv_kodeksi.download_desc")}
              </p>
            </div>
          </div>

          {/* Document Card */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left */}
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center shrink-0">
                  <FileText className="text-yellow-600" size={30} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {t("boshqaruv_kodeksi.title")}
                  </h2>

                  <p className="text-gray-500 text-sm leading-6">
                    {t("boshqaruv_kodeksi.download_desc1")}
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <a
                href={documentFile}
                download
                className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg min-w-[180px]"
              >
                <Download size={18} />
                {t("boshqaruv_kodeksi.download_text")}
              </a>
            </div>
          </div>
        </div>
      </BackGroundColor>

      <div className="mt-12"></div>

      <Footer
        showPartners={false}
        showProjects={false}
        showUsefulLinks={false}
      />
    </div>
  );
};

export default BoshqaruvKodeksi;
