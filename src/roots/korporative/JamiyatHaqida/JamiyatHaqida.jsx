import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import { menu7 } from "../../../const/Menu.jsx";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu.jsx";

const KorporativDocs = () => {
    const { t } = useTranslation();

    // Eski bo‘linmalar ro‘yxati
    const oldUnits = [
        "oldUnits.unit1",
        "oldUnits.unit2",
        "oldUnits.unit3",
        "oldUnits.unit4",
        "oldUnits.unit5",
    ];

    const currentUnits = t("currentUnits", { returnObjects: true });


    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans antialiased">
            <Header />

            <BackGroundColor>
                <div className="container mx-auto px-6 max-w-[1300px]">
                    {/* Breadcrumb */}
                    <Breadcrumb links={[{ link: t("menus.menu7.title1") }]} />

                    {/* Main Section */}
                    <PageTwoMenu menu={menu7}>
                        <div className="bg-white rounded-3xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 shadow-lg">
                            {/* Text (Chap tomonda) */}
                            <div className="space-y-6">
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-600 mb-6 text-center lg:text-left">
                                    {t("menus.menu7.title1")}
                                </h2>

                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {t("menus.menu7.desc1")}
                                </p>

                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {t("menus.menu7.desc2")}

                                </p>

                                <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                                    {t("menus.menu7.desc3")}

                                </p>

                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    {oldUnits.map((unit, idx) => (
                                        <li key={idx}>{t(unit)}</li>
                                    ))}
                                </ul>

                                <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                                    {t("presidentDecision")}
                                </p>

                                <p className="text-gray-700 text-lg font-semibold leading-relaxed">
                                    {t("currentCompanies")}
                                </p>

                                <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                                    {currentUnits.map((unit, idx) => (
                                        <li key={idx}>{unit}</li>
                                    ))}
                                </ul>

                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {t("reorganizationNotice")}
                                </p>
                            </div>

                            {/* Image (O‘ng tomonda) */}
                            <div className="w-full">
                                <div className="w-full rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://kuprikqurilish.uz/files/files/2023-10-26/1698298805840.jpg"
                                        alt="Ko‘prikqurilish"
                                        className="w-full h-auto lg:h-[400px] object-cover rounded-3xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </PageTwoMenu>
                </div>
            </BackGroundColor>

            <div className="mt-16"></div>
            <Footer
                showPartners={false}
                showProjects={false}
                showUsefulLinks={false}
            />
        </div>
    );
};

export default KorporativDocs;
