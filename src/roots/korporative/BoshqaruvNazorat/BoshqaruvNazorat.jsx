import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import { menu7 } from "../../../const/Menu.jsx";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu.jsx";



const BoshqaruvNazorat = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const menus = [
        { id: 1, path: "KuzatuvKengashi", title: t("supervisoryBoard") },
        { id: 2, path: "IjroiyaOrgani", title: t("executiveBody") },
        { id: 3, path: "Qomitalar", title: t("committees") },
        { id: 4, path: "IchkiAudit", title: t("internalAudit") },
    ];
    return (
        <div className="flex w-fu flex-col min-h-screen bg-gray-50 font-sans antialiased">
            <Header />

            <BackGroundColor>
                <div className="container mx-auto   px-6 max-w-[1300px]">
                    {/* Breadcrumb */}
                    <Breadcrumb links={[{ link: t("menus.menu7.title2") }]} />
                    {/* PageTwoMenu */}
                    <PageTwoMenu menu={menu7}>
                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-500 mb-10 leading-tight tracking-tight text-center lg:text-left">
                            {t("Boshqaruv va nazorat")}
                        </h2>

                        {/* Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {menus.map((menu) => (
                                <div
                                    key={menu.id}
                                    className="bg-yellow-500 text-white rounded-2xl shadow-md hover:shadow-lg
                                     transition-transform transform hover:-translate-y-2 hover:scale-[1.02] duration-300 cursor-pointer flex items-center justify-center p-8 min-h-[180px]"
                                    onClick={() => navigate(menu.path)}
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

            <div className="mt-12"></div>
            <Footer showPartners={false} showProjects={false} showUsefulLinks={false} />
        </div>
    );
};

export default BoshqaruvNazorat;
