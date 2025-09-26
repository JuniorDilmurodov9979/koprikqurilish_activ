import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="page_not_found">
          <img
            style={{ width: "100%" }}
            src="https://4kwallpapers.com/images/wallpapers/404-error-404-not-6016x3384-9410.jpg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
