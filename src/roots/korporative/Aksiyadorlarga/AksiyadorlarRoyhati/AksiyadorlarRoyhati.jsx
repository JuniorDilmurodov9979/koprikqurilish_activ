import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import {BackGroundColor} from "../../../../const/Wrapper";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const AksiyadorlarRoyhati = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const table = t("shareholdersTable", {returnObjects: true});
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
                            {link: t("royhat")},
                        ]}
                    />

                    {/* Title va Back */}
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-yellow-600 text-center sm:text-left">
                            {t("royhat")}
                        </h1>
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-lg shadow-md transition"
                        >
                            {t("back")}
                        </button>
                    </div>

                    {/* Card with Table */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200">
                        <h2 className="text-2xl font-bold text-yellow-600 mb-6">
                            {t("royhat")}
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                                <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-3 text-left w-[50px]">{table.number}</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left">{table.name}</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left">{table.shares}</th>
                                </tr>
                                </thead>
                                <tbody>
                                {table.rows.map((row) => (
                                    <tr key={row.id} className="hover:bg-gray-50 transition">
                                        <td className="border border-gray-300 px-4 py-3 font-medium">{row.id}</td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {row.name.split("\n").map((line, idx) => (
                                                <span key={idx}>
                    {line} <br/>
                  </span>
                                            ))}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {row.shares.split("\n").map((line, idx) => (
                                                <span key={idx}>
                    {line} <br/>
                  </span>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Download Button */}
                        <div className="mt-8 text-center sm:text-left">
                            <a
                                href="/aksiyadorlargaroyhat.pdf"
                                download="Aksiyadorlar_Royhati.pdf"
                                className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition font-semibold"
                            >
                                {t("downloadShareholdersList")}
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

export default AksiyadorlarRoyhati;
