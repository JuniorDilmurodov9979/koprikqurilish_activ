import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../../const/Wrapper";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import http, { imgUrl } from "../../../../utils/httpClient";
import { langLocal } from "../../../../const/LangLocal";
import { transliterate } from "../../../../const/ToKrillang";
import {menu7} from "../../../../const/Menu.jsx";
import PageTwoMenu from "../../../../containers/pageTwoMenu/PageTwoMenu.jsx";
import {useTranslation} from "react-i18next";

const TashkiliyTuzulma = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [structure, setStructure] = useState();

    useEffect(() => {
        http
            .get(`find/all/m-structure?language=${langLocal()}`)
            .then((res) => setStructure(res?.data?.data[0]));
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
            {/* Header */}
            <Header />

            {/* Content */}
            <BackGroundColor>
                <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                    {/* Breadcrumb */}
                    <Breadcrumb links={[{ link: t("menus.menu7.title3") }, { link: t("tuzilma") }]} />

                    {/* Title */}
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                        <h2 className="text-2xl font-bold text-yellow-600 leading-snug">
                            {t("tuzilma")}
                        </h2>
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-lg shadow-md transition"
                        >
                            {t("executiveBoard.back")}
                        </button>
                    </div>

                    {/* Image qismi */}
                    {structure?.data?.__photo__?.url_1 && (
                            <PageTwoMenu menu={menu7}>
                            <img
                                src={`${imgUrl}${structure.data.__photo__.url_1}`}
                                alt={transliterate(structure?.data?.title)}
                            />
                            <div className="text-center text-gray-700 font-medium">
                                {transliterate(structure?.data?.title)}
                            </div>
                            </PageTwoMenu>

                    )}
                </div>
            </BackGroundColor>

            {/* Footer */}
            <div className="mt-12"></div>
            <Footer showPartners={false} showProjects={false} showUsefulLinks={false} />
        </div>
    );
};

export default TashkiliyTuzulma;
