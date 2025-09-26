import {useTranslation} from "react-i18next";
import {useState} from "react";
import {BackGroundColor} from "../../../const/Wrapper";
import Footer from "../../../containers/footer/Footer";
import Header from "../../../containers/header/Header";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import {CorruptionAppealsWrapper, LargeTextCorruption,} from "./CorruptionAppealsWrapper";
import {toast} from "react-toastify";
import PageTwoMenu from "../../../containers/pageTwoMenu/PageTwoMenu";
import {menu6} from "../../../const/Menu";
import {CorruptionContact} from "./CorruptionContact";
import {Corruption_BASE_URL} from "../CorruptionURL";

const CorruptionAppeals = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const token = "7322334282:AAFLyMbXVg0MZt8ZHnI5GlnGs5DTJ_VH3u0";
  const chat_id = 7795342218;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error(t("menus.menu6.toast.error"));
      return;
    }

    const fullMessage = `
📝 *Yangi korrupsiya murojaati*
👤 Ism: ${name || "Ko‘rsatilmagan"}
📞 Telefon: ${phone || "Ko‘rsatilmagan"}
✉️ Xabar: ${message}
`;

    try {
      // 1. Send to Telegram bot
      const telegramResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id,
          text: fullMessage,
          parse_mode: "Markdown",
        }),
      });

      // 2. Send to your backend API
      const backendResponse = await fetch(`${Corruption_BASE_URL}korrupsiya/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          description: message,
        }),
      });

      if (telegramResponse.ok && backendResponse.ok) {
        toast.success(t("menus.menu6.toast.success"));
        setName("");
        setPhone("");
        setMessage("");
      } else {
        toast.error(t("menus.menu6.toast.error"));
      }
    } catch (error) {
      toast.error(t("menus.menu6.toast.networkError"));
      console.error("Xatolik:", error);
    }
  };

  return (
    <div>
      <Header />
      <BackGroundColor>
        <div className="container">
          <CorruptionAppealsWrapper>
            <Breadcrumb
              links={[
                { link: t("menus.menu6.title") },
                { link: t("menus.menu6.title2") },
              ]}
            />

            <PageTwoMenu menu={menu6}>
              <LargeTextCorruption color="true">
                {t("menus.menu6.title2")}
              </LargeTextCorruption>

              <div
                className="boxs"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: 0,
                  gap: "20px",
                }}
              >
                <div className="form">
                  <form className="parent" onSubmit={handleSubmit}>
                    <div className="div1">
                      <input
                        type="text"
                        // placeholder={t("menus.menu6.form.name")}
                        placeholder="F.I.O"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="div2">
                      <input
                        type="tel"
                        placeholder={t("menus.menu6.form.phone")}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="div3">
                      <textarea
                        rows={5}
                        maxLength={500}
                        placeholder={t("menus.menu6.form.text")}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="div4">
                      <button type="submit">
                        {t("menus.menu6.form.send")}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="" style={{ width: "100%" }}>
                  <CorruptionContact />
                </div>
              </div>
            </PageTwoMenu>
          </CorruptionAppealsWrapper>
        </div>
      </BackGroundColor>
      <Footer
        showPartners={false}
        showProjects={false}
        showUsefulLinks={false}
      />
    </div>
  );
};

export default CorruptionAppeals;
