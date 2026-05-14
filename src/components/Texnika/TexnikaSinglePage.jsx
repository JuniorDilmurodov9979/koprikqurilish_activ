import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import { toast } from "react-toastify";
import { useTexnikaSingleData } from "./TexnikaData";
import { useTranslation } from "react-i18next";

const TexnikaSinglePage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const texnikaSingleData = useTexnikaSingleData();

  const item =
    texnikaSingleData.find((m) => m.id === Number(id)) || texnikaSingleData[0];

  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState("specs");
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    name: "",
    phone: "",
    address: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const daysDiff =
    formData.startDate && formData.endDate
      ? Math.max(
          0,
          Math.ceil(
            (new Date(formData.endDate) - new Date(formData.startDate)) /
              (1000 * 60 * 60 * 24),
          ),
        )
      : 0;

  const BOT_TOKEN = import.meta.env.VITE_TEXNIKA_TG_TOKEN;
  const CHAT_IDS = [
    import.meta.env.VITE_TEXNIKA_CHAT_ID_1,
    import.meta.env.VITE_TEXNIKA_CHAT_ID_2,
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
🚜 *Yangi buyurtma!*

📋 *Texnika:* ${item.name}
📅 *Boshlanish:* ${formData.startDate}
📅 *Tugash:* ${formData.endDate}
⏱ *Kunlar soni:* ${daysDiff} kun
👤 *Ism:* ${formData.name}
📞 *Telefon:* ${formData.phone}
📍 *Manzil:* ${formData.address || "Ko'rsatilmagan"}
📝 *Izoh:* ${formData.note || "Yo'q"}
  `.trim();

    try {
      await Promise.all(
        CHAT_IDS.map((chatId) =>
          fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: "Markdown",
            }),
          }),
        ),
      );

      setSubmitted(true);
      toast.success(t("xizmatlar.menu1.buyurtma_success"));

      setTimeout(() => setSubmitted(false), 4000);

      setFormData({
        startDate: "",
        endDate: "",
        name: "",
        phone: "",
        address: "",
        note: "",
      });
    } catch (error) {
      console.error("Telegram xatolik:", error);
      toast.error(t("xizmatlar.menu1.buyurtma_error"));
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&display=swap');

        .single-page {
          font-family: 'Barlow', sans-serif;
          background: #f7f4f0;
          min-height: 100vh;
          color: #1a1a1a;
        }

        /* Breadcrumb */
        .breadcrumb {
          padding: 16px 48px;
          border-bottom: 1px solid #e8e0d6;
          background: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #aaa;
        }
        .breadcrumb a {
          color: #aaa;
          text-decoration: none;
          transition: color 0.2s;
        }
        .breadcrumb a:hover { color: #ff6b00; }
        .bc-sep { color: #ddd; }
        .bc-active { color: #555; }

        /* Layout */
        .single-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          align-items: start;
        }
        .left-col {
          border-right: 1px solid #e8e0d6;
          padding: 40px 48px;
          background: #fdfaf7;
        }
        .right-col {
          padding: 36px 32px;
          background: #fff;
          position: sticky;
          top: 0;
          border-left: 1px solid #e8e0d6;
          min-height: calc(100vh - 57px);
        }

        /* Gallery */
        .main-img-wrap {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          border-radius: 6px;
          margin-bottom: 10px;
          background: #ede9e3;
          border: 1.5px solid #e8e0d6;
        }
        .main-img {
          width: 100%; height: 100%;
          // object-fit: cover;
          transition: opacity 0.3s;
        }
        .status-chip {
          position: absolute;
          top: 16px; left: 16px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 2px;
        }
        .chip-available { background: #e8f5e9; color: #2e7d32; border: 1px solid #a5d6a7; }
        .chip-busy { background: #ffebee; color: #c62828; border: 1px solid #ef9a9a; }
        .thumb-row {
          display: flex;
          gap: 8px;
        }
        .thumb {
          flex: 1;
          height: 76px;
          object-fit: cover;
          border-radius: 4px;
          cursor: pointer;
          opacity: 0.5;
          border: 2px solid transparent;
          transition: all 0.2s;
        }
        .thumb.active, .thumb:hover { opacity: 1; border-color: #ff6b00; }

        /* Title block */
        .title-block { margin: 28px 0 20px; }
        .cat-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .cat-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ff6b00;
        }
        .year-tag {
          font-size: 11px;
          color: #aaa;
          border: 1px solid #e0dbd4;
          padding: 2px 8px;
          border-radius: 2px;
          background: #faf8f5;
        }
        .eq-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 44px;
          font-weight: 800;
          color: #111;
          line-height: 1;
          letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .eq-desc { font-size: 15px; line-height: 1.75; color: #777; }

        /* Tabs */
        .tab-row {
          display: flex;
          border-bottom: 2px solid #e8e0d6;
          margin: 28px 0 0;
        }
        .tab-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 12px 20px;
          border: none;
          background: transparent;
          color: #bbb;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          transition: all 0.2s;
        }
        .tab-btn:hover { color: #555; }
        .tab-btn.active { color: #ff6b00; border-bottom-color: #ff6b00; }
        .tab-content { padding: 24px 0; }

        /* Specs grid */
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .spec-block {
          background: #fff;
          border: 1.5px solid #e8e0d6;
          border-radius: 4px;
          padding: 18px 16px;
        }
        .spec-val {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #111;
          line-height: 1;
          margin-bottom: 4px;
        }
        .spec-val.accent { color: #ff6b00; }
        .spec-lbl {
          font-size: 10px;
          color: #bbb;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        /* Features */
        .features-list { list-style: none; padding: 0; margin: 0; }
        .features-list li {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #f0ece6;
          font-size: 15px;
          color: #555;
        }
        .features-list li:last-child { border-bottom: none; }
        .features-list li::before {
          content: '';
          width: 7px; height: 7px;
          background: #ff6b00;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Right sidebar */
        .price-block {
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1.5px solid #f0ece6;
        }
        .price-lbl {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 4px;
        }
        .price-big {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 50px;
          font-weight: 800;
          color: #ff6b00;
          line-height: 1;
        }
        .price-big sub {
          font-size: 16px;
          color: #bbb;
          font-weight: 400;
        }
        .form-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 17px;
          font-weight: 800;
          color: #111;
          letter-spacing: 0.5px;
          margin-bottom: 18px;
          text-transform: uppercase;
        }
        .s-form-group { margin-bottom: 13px; }
        .s-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #bbb;
          display: block;
          margin-bottom: 5px;
        }
        .s-input {
          width: 100%; box-sizing: border-box;
          background: #faf8f5;
          border: 1.5px solid #e0dbd4;
          border-radius: 3px;
          padding: 10px 12px;
          color: #1a1a1a;
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .s-input:focus { border-color: #ff6b00; background: #fff; }
        .date-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .cost-preview {
          background: #fff8f3;
          border: 1.5px solid #ff6b00;
          border-radius: 4px;
          padding: 12px 16px;
          margin-bottom: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cost-text { font-size: 13px; color: #999; }
        .cost-amount {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #ff6b00;
        }
        .btn-book {
          width: 100%;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 15px;
          border: none;
          background: #ff6b00;
          color: #fff;
          border-radius: 3px;
          cursor: pointer;
          transition: background 0.2s;
          margin-bottom: 10px;
        }
        .btn-book:hover:not(:disabled) { background: #e05e00; }
        .btn-book:disabled { background: #eee; color: #bbb; cursor: not-allowed; }
        .success-banner {
          background: #e8f5e9;
          border: 1px solid #a5d6a7;
          color: #2e7d32;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: center;
          padding: 12px;
          border-radius: 3px;
          margin-bottom: 12px;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .note-text {
          font-size: 12px;
          color: #ccc;
          text-align: center;
          line-height: 1.6;
          margin-top: 4px;
        }

        @media (max-width: 1024px) {
          .single-layout { grid-template-columns: 1fr; }
          .left-col { padding: 24px 20px; border-right: none; }
          .right-col {
            position: static;
            min-height: auto;
            border-left: none;
            border-top: 1.5px solid #e8e0d6;
            padding: 28px 20px;
          }
          .breadcrumb { padding: 14px 20px; }
          .main-img-wrap { height: 260px; }
          .eq-title { font-size: 34px; }
          .specs-grid { grid-template-columns: repeat(2, 1fr); }
          .date-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <Header />

      <div className="single-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">{t("head")}</Link>
          <span className="bc-sep">›</span>
          <Link to="/xizmatlar/texnika">{t("xizmatlar.menu1.title2")}</Link>
          <span className="bc-sep">›</span>
          <span className="bc-active">{item.name}</span>
        </div>

        <div className="single-layout">
          <div className="left-col">
            <div className="main-img-wrap">
              <img
                src={item.images[activeImg]}
                alt={item.name}
                className="main-img object-contain"
              />
              <span
                className={`status-chip ${item.status === "available" ? "chip-available" : "chip-busy"}`}
              >
                {item.status === "available"
                  ? t("xizmatlar.menu1.filter_menu1")
                  : t("xizmatlar.menu1.filter_menu2")}
              </span>
            </div>
            {/* <div className="thumb-row">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`thumb${activeImg === i ? " active" : ""}`}
                  onClick={() => setActiveImg(i)}
                />
              ))}
            </div> */}

            <div className="title-block">
              <div className="cat-row">
                <span className="cat-tag">{item.category}</span>
                <span className="year-tag">{item.year}</span>
              </div>
              <h1 className="eq-title">{item.name}</h1>
              <p className="eq-desc">{item.description}</p>
            </div>

            <div className="tab-row">
              <button
                className={`tab-btn${tab === "specs" ? " active" : ""}`}
                onClick={() => setTab("specs")}
              >
                {t("xizmatlar.menu1.xususiyat")}
              </button>
              <button
                className={`tab-btn${tab === "features" ? " active" : ""}`}
                onClick={() => setTab("features")}
              >
                {t("xizmatlar.menu1.imkoniyatlar")}
              </button>
            </div>

            <div className="tab-content">
              {tab === "specs" && (
                <div className="specs-grid">
                  {[
                    {
                      label: t("xizmatlar.menu1.weight"),
                      val: item.weight,
                      accent: false,
                    },
                    {
                      label: t("xizmatlar.menu1.power"),
                      val: item.power,
                      accent: true,
                    },
                    {
                      label: t("xizmatlar.menu1.year"),
                      val: item.year,
                      accent: false,
                    },
                    {
                      label: t("xizmatlar.menu1.max"),
                      val: item.maxReach,
                      accent: false,
                    },
                    {
                      label: t("xizmatlar.menu1.sigim"),
                      val: item.bucketCapacity,
                      accent: true,
                    },
                    {
                      label: t("xizmatlar.menu1.depth"),
                      val:
                        item.maxDepth !== "—" ? item.maxDepth : item.fuelTank,
                      accent: false,
                    },
                  ].map((s) => (
                    <div className="spec-block" key={s.label}>
                      <div className={`spec-val${s.accent ? " accent" : ""}`}>
                        {s.val}
                      </div>
                      <div className="spec-lbl">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
              {tab === "features" && (
                <ul className="features-list">
                  {item.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="right-col">
            {/* <div className="price-block">
              <div className="price-lbl">Ijara narxi</div>
              <div className="price-big">
                ${item.price}
                <sub>/kun</sub>
              </div>
            </div> */}

            <div className="form-heading">{t("xizmatlar.menu1.buyurtma")}</div>

            {/* {submitted && (
              <div className="success-banner">✓ Buyurtma tasdiqlandi!</div>
            )} */}

            <form onSubmit={handleSubmit}>
              <div className="date-row">
                <div className="s-form-group">
                  <label className="s-label">
                    {t("xizmatlar.menu1.start_date")}
                  </label>
                  <input
                    type="date"
                    className="s-input"
                    required
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                  />
                </div>
                <div className="s-form-group">
                  <label className="s-label">
                    {t("xizmatlar.menu1.end_date")}
                  </label>
                  <input
                    type="date"
                    className="s-input"
                    required
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="s-form-group">
                <label className="s-label">
                  {t("xizmatlar.menu1.full_name")}
                </label>
                <input
                  type="text"
                  placeholder={t("xizmatlar.menu1.fullName_placeholder")}
                  className="s-input"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="s-form-group">
                <label className="s-label">{t("xizmatlar.menu1.phone")}</label>
                <input
                  type="number"
                  placeholder="+998 XX XXX XX XX"
                  className="s-input"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="s-form-group">
                <label className="s-label">
                  {t("xizmatlar.menu1.address")}
                </label>
                <input
                  type="text"
                  placeholder={t("xizmatlar.menu1.address_placeholder")}
                  className="s-input"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>

              <div className="s-form-group">
                <label className="s-label">{t("xizmatlar.menu1.izoh")}</label>
                <textarea
                  placeholder={t("xizmatlar.menu1.izoh_placeholder")}
                  className="s-input"
                  rows={3}
                  style={{ resize: "vertical" }}
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                />
              </div>

              {/* {daysDiff > 0 && (
                <div className="cost-preview">
                  <div className="cost-text">
                    {daysDiff} kun × ${item.price}
                  </div>
                  <div className="cost-amount">${daysDiff * item.price}</div>
                </div>
              )} */}

              <button
                type="submit"
                className="btn-book"
                disabled={item.status === "busy"}
              >
                {item.status === "busy"
                  ? t("xizmatlar.menu1.buyurtma_empty")
                  : t("xizmatlar.menu1.buyurtma_tasdiqlash")}
              </button>
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-[#e8e0d6] bg-gradient-to-br from-[#fff8f3] to-white p-4 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff6b00] text-lg text-black shadow-[0_8px_20px_rgba(255,107,0,0.18)]">
                  ☎
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
                    {t("xizmatlar.menu1.contact")}
                  </span>
                  <a
                    href="tel:+998712032626"
                    className="text-base font-bold text-[#111] transition-colors duration-200 hover:text-[#ff6b00]"
                  >
                    +998 71 203-26-26 (1024)
                  </a>
                </div>
              </div>
            </form>

            {/* <p className="note-text">
              Jamoamiz 2 soat ichida siz bilan bog'lanib, mavjudligini
              tasdiqlaydi.
            </p> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TexnikaSinglePage;
