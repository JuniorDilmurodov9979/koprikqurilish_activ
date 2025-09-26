import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../../const/Wrapper";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IjroiyaOrgani = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const items = t("executiveBoard.items", { returnObjects: true });


    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans tracking-wide leading-relaxed text-gray-900">
            {/* Header */}
            <Header />

            {/* Content */}
            <BackGroundColor>
                <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                    {/* Breadcrumb */}
                    <Breadcrumb
                        links={[
                            { link: t("menus.menu7.title2") },
                            { link: t("executiveBoard.title") },
                        ]}
                    />

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center sm:text-left uppercase">
                        {t("executiveBoard.title")}
                    </h1>

                    {/* Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <h2 className="text-2xl font-bold text-yellow-600 uppercase">
                                {t("executiveBoard.subtitle")}
                            </h2>
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
                            >
                                {t("executiveBoard.back")}
                            </button>
                        </div>

                        <ul className="list-disc list-inside space-y-4 mt-6 text-lg">
                            {t("executiveBoard.items", { returnObjects: true }).map((item, idx) => (
                                <li
                                    key={idx}
                                    className={item.bold ? "font-bold text-black text-xl" : ""}
                                >
                                    {item.text}
                                </li>
                            ))}
                        </ul>

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

export default IjroiyaOrgani;
