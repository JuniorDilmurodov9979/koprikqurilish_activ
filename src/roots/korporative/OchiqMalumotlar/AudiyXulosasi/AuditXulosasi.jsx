import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../../const/Wrapper";
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";

const AuditXulosasi = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
            {/* Header */}
            <Header />

            {/* Content */}
            <BackGroundColor>
                <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
                    {/* Breadcrumb */}
                    <Breadcrumb
                        links={[{ link: t("menus.menu7.title3") }, { link: t("xulosasi") }]}
                    />

                    {/* Title row */}
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                        <h1 className="text-3xl font-bold text-yellow-600 text-center sm:text-left uppercase">
                            {t("xulosasi")}
                        </h1>
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
                        >
                            Ortga
                        </button>
                    </div>

                    {/* Card */}
                    <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-yellow-600 mb-6">
                            {t("auditReport.title")}
                        </h2>

                        <ul className="list-disc pl-6 space-y-3 text-gray-800 text-lg">
                            {t("auditReport.items", { returnObjects: true }).map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>

                        {/* Download Button */}
                        <div className="mt-10 text-center sm:text-left">
                            <a
                                href="/auditxulosasi.pdf"
                                download="Audit_Xulosasi.pdf"
                                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition font-semibold"
                            >
                                {t("auditReport.download")}
                            </a>
                        </div>
                    </div>

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

export default AuditXulosasi;
