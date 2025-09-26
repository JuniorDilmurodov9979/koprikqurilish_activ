import { Button } from "@mui/material";
import { BackGroundColor, LargeText } from "../../const/Wrapper";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import { ContactsWrapper } from "./ContactsWrapper";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import http from "../../utils/httpClient";

const Contacts = () => {
  const key = "6LdzVDgnAAAAAE-elxqxUITwqyXNqvVV5fb_TZat";
  const { t } = useTranslation();
  const [data, setdata] = useState(false);

  const contactData = (e) => {
    e.preventDefault();

    let data = {
      full_name: e.target.name.value.trim(),
      email: e.target.telphone.value.trim(),
      desc: e.target.bigtext.value.trim(),
    };

    http
      .post("create", data)
      .then((res) => {
        setdata(false);
        toast.success("malumot yuborildi", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        e.target.reset();
      })
      .catch((err) => {
        setdata(false);
        toast.error("malumot yuborilmadi", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error(err);
      });
  };
  function onChange(value) {
    if (value) setdata(false);
  }
  return (
    <>
      <Header />
      <BackGroundColor>
        <ContactsWrapper>
          <div className="container">
            <ToastContainer />
            <Breadcrumb links={[{ link: t("menus.menu5.title") }]} />
            <LargeText color="true">{t("menus.menu5.title")}</LargeText>
            <div className="boxs">
              <div className="contact">
                <div className="location">
                  <p>{t("footer.loc")}:</p>
                  <a href="">Toshkent, Bog'iston ko'chasi, 10A</a>
                </div>
                <div className="location">
                  <p>{t("footer.tel")}:</p>
                  <a href="tel:+998(71)203-26-26">+998(71)203-26-26</a>
                  {/* <a href="tel:+998(71)203-26-26">+998(71)203-26-26</a> */}
                </div>
                <div className="location">
                  <p>{t("footer.mail")}:</p>
                  <a href="mailto:koprikqurilishaj2@gmail.com">
                    koprikqurilishaj2@gmail.com
                  </a>
                </div>
              </div>
              <div className="form">
                <form onSubmit={contactData} className="parent">
                  <div className="div1">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("contact.ims")}
                    />
                  </div>
                  <div className="div2">
                    <input
                      type="tel"
                      name="telphone"
                      placeholder={t("contact.tel")}
                    />
                  </div>
                  <div className="div3">
                    <textarea
                      style={{ resize: "none" }}
                      cols="30"
                      rows="10"
                      name="bigtext"
                      placeholder={t("contact.text")}
                    ></textarea>
                  </div>
                  <div className="div4">
                    {data ? (
                      <ReCAPTCHA sitekey={key} onChange={onChange} />
                    ) : (
                      <Button
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: "#FFA800" }}
                      >
                        {t("contact.yubor")}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.0844214837093!2d69.1985591264998!3d41.299165062635616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3eca4a2283%3A0x44e4d5b98dca4355!2z0KLRgNC10YHRgiDCq9Ca0YPQv9GA0LjQutC60YPRgNC40LvQuNGIwrs!5e0!3m2!1sru!2s!4v1697091034353!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </ContactsWrapper>
      </BackGroundColor>
      <Footer
        showPartners={false}
        showProjects={false}
        showUsefulLinks={false}
      />
    </>
  );
};

export default Contacts;
