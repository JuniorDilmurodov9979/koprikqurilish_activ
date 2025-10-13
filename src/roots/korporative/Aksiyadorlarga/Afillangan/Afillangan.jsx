import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../../const/Wrapper";
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";

const Afillangan = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const data = [
        {
            id: 1,
            name: t("xidoyatovSherzod"),
            lavozim: t("ministerConstruction"),
        },
        {
            id: 2,
            name: t("chorievJasurbek"),
            lavozim: t("deputyTransport"),
        },
        {
            id: 3,
            name: t("sadullaevSamandar"),
            lavozim: t("deputyEconomy"),
        },
        {
            id: 4,
            name: t("zokirovBatir"),
            lavozim: "...",
        },
        {
            id: 5,
            name: t("mamatovOdiljon"),
            lavozim: t("headStateAssets"),
        },
        {
            id: 6,
            name: t("maxamatovZafar"),
            lavozim: t("chairKoPrik"),
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900 tracking-wide leading-relaxed">
            {/* Header */}
            <Header />

            {/* Content */}
            <BackGroundColor>
                <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
                    {/* Breadcrumb */}
                    <Breadcrumb
                        links={[
                            { link: t("menus.menu7.title5") },
                            { link: t("aliflangan") },
                        ]}
                    />

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center sm:text-left uppercase">
                        {t("aliflangan")}
                    </h1>

                    {/* Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200">
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                            <h2 className="text-2xl font-bold text-yellow-600 leading-snug">
                                {t("affiliatedPersonsList")}
                            </h2>
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-lg shadow-md transition"
                            >
                                {t("back")}
                            </button>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-gray-900">
                                <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-left font-medium">#</th>
                                    <th className="px-4 py-3 text-left font-medium">{t("Ism")}</th>
                                    <th className="px-4 py-3 text-left font-medium">{t("Lavozim")}</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className={`border-b hover:bg-gray-50 ${
                                            index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                        }`}
                                    >
                                        <td className="px-4 py-3 font-medium">{item.id}</td>
                                        <td className="px-4 py-3">{item.name}</td>
                                        <td className="px-4 py-3">{item.lavozim}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Yuridik Shaxslar */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-yellow-600 leading-snug mb-2">
                                {t("affiliatedLegalEntitiesList")}                            </h2>
                            <ul className="list-disc ml-5 space-y-2 text-gray-900">
                                <li>{t("affillanganShaxslar")}</li>
                                <li>{t("affillanganShaxslar2")}</li>
                            </ul>
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

export default Afillangan;
