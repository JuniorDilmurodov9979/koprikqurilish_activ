import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import {BackGroundColor} from "../../../../const/Wrapper";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const UstavFondi = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
            {/* Header */}
            <Header/>

            {/* Content */}
            <BackGroundColor>
                <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                    {/* Breadcrumb */}
                    <Breadcrumb
                        links={[
                            {link: t("menus.menu7.title5")},
                            {link: t("ustavFondi")},
                        ]}
                    />

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center sm:text-left uppercase tracking-wide">
                        {t("jamiyatUstavFondi")}
                    </h1>

                    {/* Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <h2 className="text-2xl font-bold text-yellow-600 leading-snug uppercase">
                                {t("jamiyatUstavFondi")}
                            </h2>
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
                            >
                                {t("back")}
                            </button>
                        </div>

                        <ul className="space-y-6 text-gray-800 mt-6">
                            <li>
                                <p className="font-medium text-lg leading-relaxed">
                                    {t("ustavKapital").split("1 445 258 000").map((part, index, arr) => (
                                        <>
                                            {part}
                                            {index < arr.length - 1 && (
                                                <span className="font-bold text-yellow-600">
                  1 445 258 000
                </span>
                                            )}
                                        </>
                                    ))}
                                </p>
                            </li>
                        </ul>
                        {/* Download Button */}
                        <div className="mt-10 text-center sm:text-left">
                            <a
                                href="/ustavfondi.pdf"
                                download="Ustav_Fondi.pdf"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition font-semibold"
                            >
                                {t("downloadUstavFondi")}
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

export default UstavFondi;
