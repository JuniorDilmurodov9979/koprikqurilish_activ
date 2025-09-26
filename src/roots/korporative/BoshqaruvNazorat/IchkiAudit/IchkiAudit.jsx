import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import {BackGroundColor} from "../../../../const/Wrapper";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const IchkiAudit = () => {
    const navigate = useNavigate();
    const  {t} = useTranslation();
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
                            {link: t("menus.menu7.title2")},
                            {link: t("internalAudit")},
                        ]}
                    />

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center sm:text-left">
                        {t("internalAudit")}
                    </h1>

                    {/* Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-yellow-600 mb-8 text-left leading-snug">
                                {t("internalAudit")}
                            </h2>
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-lg shadow-md transition"
                            >
                                {t("back")}
                            </button>
                        </div>

                        <ul className="space-y-6 text-gray-800">
                            <li>
                                <p className="font-semibold text-lg">
                                    {/*Xidoyatov Sherzod Saidjonovich*/}
                                </p>
                                <p className="text-base text-gray-600">
                                    {/*O‘zbekiston Respublikasi Qurilish va uy-joy kommunal xo‘jaligi vaziri*/}
                                </p>
                            </li>

                        </ul>

                        {/* Download Button */}
                        {/*<div className="mt-8 text-center sm:text-left">*/}
                        {/*    <a*/}
                        {/*        href="/kuzatuvkengash.pdf"*/}
                        {/*        download="Kuzatuv_Kengashi.pdf"*/}
                        {/*        className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition font-semibold"*/}
                        {/*    >*/}
                        {/*        📄 ichki audit xizmat faylini yuklab olish*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </BackGroundColor>

            {/* Footer */}
            <div className="mt-12"></div>
            <Footer showPartners={false} showProjects={false} showUsefulLinks={false}/>
        </div>
    );
};

export default IchkiAudit;
