import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../../const/Wrapper";
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";

const BiznesReja = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
            {/* Header */}
            <Header />

            {/* Content */}
            <BackGroundColor>
                <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                    {/* Breadcrumb */}
                    <Breadcrumb
                        links={[{ link: t("menus.menu7.title3") }, { link: t("reja") }]}
                    />

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center sm:text-left uppercase">
                        {t("reja")}
                    </h1>

                    {/* Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-yellow-600 leading-snug">
                                {t("businessPlan.title")}
                            </h2>
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-lg shadow-md transition"
                            >
                                {t("businessPlan.back")}
                            </button>
                        </div>

                        {/* Asosiy yo‘nalishlar */}
                        <div className="space-y-4 text-gray-800 leading-relaxed">
                            <h3 className="text-xl font-semibold text-gray-700">
                                {t("businessPlan.subtitle")}
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                {t("businessPlan.items", { returnObjects: true }).map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <p>
                                <span className="font-semibold">{t("businessPlan.objectiveTitle")}</span> — {t("businessPlan.objective")}
                            </p>

                            <p>{t("businessPlan.additional")}</p>
                        </div>

                        {/* Download Button */}
                        <div className="mt-10 text-center sm:text-left">
                            <a
                                href="/biznesreja.pdf"
                                download="Biznes_Reja_2025.pdf"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition font-semibold"
                            >
                                {t("businessPlan.download")}
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

export default BiznesReja;
