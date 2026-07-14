import { BackGroundColor } from "../../const/Wrapper";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import laboratoriya from "/laboratoriya.pdf";

const Laboratoriya = () => {
  return (
    <>
      <Header />
      <BackGroundColor>
        <div className="container">
          <h2 className="text-3xl font-semibold text-yellow-500 text-center ">Laboratoriya hujjatlari</h2>
          <div className="flex justify-center py-10">
            <a
              href={laboratoriya}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-8 py-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-yellow-500"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <SimCardDownloadIcon />
              </div>

              <div>
                <p className="text-sm text-gray-500">PDF Download</p>
                <p className="font-semibold text-gray-800 group-hover:text-yellow-600">
                  Область КСН
                </p>
              </div>
            </a>
          </div>
        </div>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default Laboratoriya;
