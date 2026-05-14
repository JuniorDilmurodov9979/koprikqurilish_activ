import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import "./InProgressPage.css";

const InProgressPage = () => {
  return (
    <>
      <Header />
      <div className="development-page">
        <div className="development-box">
          <div className="icon">🚧</div>

          <h1>Bu sahifa ishlab chiqish jarayonida</h1>

          <p>
            Ushbu sahifa hozircha tayyor emas. Tez orada yangi imkoniyatlar
            bilan ishga tushadi.
          </p>

          <div className="buttons">
            <button onClick={() => window.history.back()}>Ortga qaytish</button>

            <a href="/">Bosh sahifa</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InProgressPage;
