import Header from "../../../../containers/header/Header";
import Footer from "../../../../containers/footer/Footer";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import { BackGroundColor } from "../../../../const/Wrapper";
import { useNavigate } from "react-router-dom";

const Afillangan = () => {
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            name: "Xidoyatov Sherzod Saidjonovich",
            lavozim: "O‘zbekiston Respublikasi Qurilish va uy-joy kommunal xo‘jaligi vaziri",
        },
        {
            id: 2,
            name: "Choriev Jasurbek Ergashovich",
            lavozim: "O‘zbekiston Respublikasi Transport vaziri o‘rinbosari",
        },
        {
            id: 3,
            name: "Sadullaev Samandar Asadovich",
            lavozim: "O‘zbekiston Respublikasi Iqtisodiyot va moliya vaziri o‘rinbosari",
        },
        {
            id: 4,
            name: "Zokirov Batir Irkinovich",
            lavozim: "...",
        },
        {
            id: 5,
            name: "Mamatov Odiljon Abdug‘aprovich",
            lavozim: "O‘zbekiston Respublikasi Davlat aktivlarini boshqarish agentligi boshqarma boshlig‘i",
        },
        {
            id: 6,
            name: "Maxamatov Zafar Ergashboyevich",
            lavozim: "“Ko‘prikqurilish” aksiyadorlik jamiyati Boshqaruv raisi",
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
                            { link: "Aksiyadorlarga" },
                            { link: "Afillangan Shaxslar" },
                        ]}
                    />

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center sm:text-left uppercase">
                        Afillangan Shaxslar
                    </h1>

                    {/* Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200">
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                            <h2 className="text-2xl font-bold text-yellow-600 leading-snug">
                                “Ko‘prikqurilish” aksiyadorlik jamiyatining affillangan shaxslar ro‘yxati (Jismoniy shaxslar)
                            </h2>
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-lg shadow-md transition"
                            >
                                Ortga
                            </button>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-gray-900">
                                <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-left font-medium">#</th>
                                    <th className="px-4 py-3 text-left font-medium">Ism Familiya</th>
                                    <th className="px-4 py-3 text-left font-medium">Lavozim</th>
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
                                “Ko‘prikqurilish” aksiyadorlik jamiyatining affillangan shaxslar ro‘yxati (Yuridik shaxslar)
                            </h2>
                            <ul className="list-disc ml-5 space-y-2 text-gray-900">
                                <li>O‘zbekiston Respublikasi Davlat aktivlarini boshqarish agentligi;</li>
                                <li>O‘zbekiston Respublikasi Davlat aktivlarini boshqarish agentligining 20 foiz va undan ortiq foiz aksiyalariga egalik qiluvchi yuridik shaxslar.</li>
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
