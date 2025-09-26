import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import { menu7 } from "../../../const/Menu.jsx";



const OchiqMalumotlar
    = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const menus = [
        { id: 1, path: "TashkiliyTuzulma", title: t("tuzilma") },
        { id: 2, path: "jamiyatUstavi", title: t("ustavi") },
        { id: 3, path: "auditXulosasi", title: t("xulosasi") },
        { id: 4, path: "biznesReja", title: t("reja") },
    ];
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans antialiased">
            {/* Header */}
            <Header />

            {/* Background + Container */}
            <BackGroundColor>
                <div className="container max-w-[1300px] mx-auto px-6">

                    {/* Breadcrumb */}
                    <Breadcrumb links={[{ link: t("menus.menu7.title3") }]} />

                    {/* PageTwoMenu */}
                    <PageTwoMenu menu={menu7}>
                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-500 mb-10 leading-tight tracking-tight text-center lg:text-left">
                            {t("menus.menu7.title3")}
                        </h2>

                        {/* Grid Menus */}
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                            {menus.map((menu) => (
                                <div
                                    key={menu.id}
                                    onClick={() => navigate(menu.path)}
                                    className="bg-yellow-500 text-white rounded-2xl shadow-md hover:shadow-lg
                                     transition-transform transform hover:-translate-y-2 hover:scale-[1.02]
                                     duration-300 cursor-pointer flex items-center justify-center p-8 min-h-[180px]"
                                >
                                    <p className="text-xl sm:text-2xl font-bold tracking-wide text-center">
                                        {t(menu.title)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </PageTwoMenu>
                </div>
            </BackGroundColor>

            {/* Footer */}
            <div className="mt-12"></div>
            <Footer showPartners={false} showProjects={false} showUsefulLinks={false} />
        </div>
    );
};

export default OchiqMalumotlar
;
