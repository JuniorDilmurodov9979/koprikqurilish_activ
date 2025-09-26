import { QabulxonaWrapper } from "./QabulxonaWrapper";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import { BackGroundColor, LargeText } from "../../const/Wrapper";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const Qabulxona = () => {
  const { t } = useTranslation();
  const qabulData = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.location.value);
    console.log(e.target.email.value);
    console.log(e.target.telphone.value);
    console.log(e.target.bigtext.value);
    console.log(e.target.file.value);
  };
  return (
    <>
      <Header />
      <QabulxonaWrapper>
        <BackGroundColor>
          <div className="container">
            <Breadcrumb links={[{ link: t("virtual") }]} />
            <LargeText color={true}>{t("virtual")}</LargeText>
            <form onSubmit={qabulData} className="parent">
              <div className="div1">
                <input type="text" name="name" placeholder={t("vir.name")} />
              </div>
              <div className="div2">
                <input type="text" name="location" placeholder={t("vir.loc")} />
              </div>
              <div className="div3">
                <input type="email" name="email" placeholder={t("vir.mail")} />
              </div>
              <div className="div4">
                <input type="tel" name="telphone" placeholder={t("vir.tel")} />
              </div>
              <div className="div5">
                <textarea
                  cols="30"
                  rows="10"
                  name="bigtext"
                  placeholder={t("vir.text")}
                ></textarea>
              </div>
              <div className="div6">
                <input type="file" name="file" />
              </div>
              <div className="div7">
                <Button type="submit" variant="contained">
                  {t("contact.yubor")}
                </Button>
              </div>
            </form>
          </div>
        </BackGroundColor>
      </QabulxonaWrapper>
      <Footer />
    </>
  );
};

export default Qabulxona;
