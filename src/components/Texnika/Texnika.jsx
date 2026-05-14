import { useState } from "react";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import "./Texnika.css";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useTexnikaData } from "./TexnikaData";

const Texnika = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    t("xizmatlar.menu1.filter1"),
  );
  const [statusFilter, setStatusFilter] = useState("all");
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    fullName: "",
    phone: "",
    address: "",
    comment: "",
  });

  const texnikaData = useTexnikaData();

  const categories = [
    t("xizmatlar.menu1.filter1"),
    t("xizmatlar.menu1.filter2"),
    t("xizmatlar.menu1.filter3"),
    t("xizmatlar.menu1.filter4"),
    t("xizmatlar.menu1.filter5"),
    t("xizmatlar.menu1.filter6"),
    t("xizmatlar.menu1.filter7"),
    t("xizmatlar.menu1.filter8"),
  ];

  const filtered = texnikaData.filter((item) => {
    const catMatch =
      activeCategory === t("xizmatlar.menu1.filter1") ||
      item.category === activeCategory;
    const statusMatch = statusFilter === "all" || item.status === statusFilter;
    return catMatch && statusMatch;
  });

  const handleSubmit = async () => {
    const BOT_TOKEN = import.meta.env.VITE_TEXNIKA_TG_TOKEN;
    const CHAT_IDS = [
      import.meta.env.VITE_TEXNIKA_CHAT_ID_1,
      import.meta.env.VITE_TEXNIKA_CHAT_ID_2,
    ];

    const text = `
🚜 *Yangi buyurtma!*

🔧 *Texnika:* ${selected.name} (${selected.category})
📅 *Boshlanish:* ${form.startDate}
📅 *Tugash:* ${form.endDate}
👤 *Ism:* ${form.fullName}
📞 *Telefon:* ${form.phone}
📍 *Manzil:* ${form.address}
💬 *Izoh:* ${form.comment || "—"}
  `.trim();

    try {
      await Promise.all(
        CHAT_IDS.map((chat_id) =>
          fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id, text, parse_mode: "Markdown" }),
          }),
        ),
      );
      toast.success("Buyurtma muvaffaqiyatli yuborildi! ✅");
    } catch (err) {
      toast.error("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
      console.error(err);
    }

    setForm({
      startDate: "",
      endDate: "",
      fullName: "",
      phone: "",
      address: "",
      comment: "",
    });
    setSelected(null);
  };

  console.log(activeCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&display=swap');

        .texnika-page {
          font-family: 'Barlow', sans-serif;
          background: linear-gradient(180deg, #f8f6f3 0%, #f3eee8 100%);
          min-height: 100vh;
          color: #1a1a1a;
        }
        .page-hero {
          background: linear-gradient(135deg, #ffffff 0%, #f8f4ef 55%, #fffaf5 100%);
          border-bottom: 1px solid #ece3d8;
          padding: 56px 48px 40px;
          position: relative;
          overflow: hidden;
        }
        .page-hero::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #ff6b00;
          margin-bottom: 12px;
        }
        .hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 64px;
          font-weight: 800;
          line-height: 1;
          color: #111;
          letter-spacing: -1px;
          margin-bottom: 8px;
        }
        .hero-title span { color: #ff6b00; }
        .hero-sub {
          color: #7b746d;
          font-size: 15px;
          margin-bottom: 32px;
        }
        .filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }
        .filter-pill {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 999px;
          border: 1px solid #e5ddd3;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          color: #7c746d;
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-pill:hover { border-color: #ff6b00; color: #ff6b00; }
        .filter-pill.active {
          background: linear-gradient(135deg, #ff6b00 0%, #ff8a33 100%);
          border-color: #ff6b00;
          color: #fff;
          box-shadow: 0 8px 24px rgba(255,107,0,0.25);
        }
        .divider { width: 1px; height: 28px; background: #ddd; margin: 0 4px; }
        .status-select {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 999px;
          border: 1px solid #e5ddd3;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          color: #5f5851;
          cursor: pointer;
          outline: none;
        }
        .grid-section {
          padding: 40px 48px 80px;
        }
        .count-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #616060;
          margin-bottom: 28px;
          font-weight: 600;
        }
        .equipment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 16px;
        }
        .eq-card {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 20px;
          overflow: hidden;
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.22s;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 35px rgba(17,17,17,0.06);
        }
        .eq-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,107,0,0.35);
          box-shadow: 0 18px 45px rgba(255,107,0,0.16);
        }
        .eq-card:hover .card-img { transform: scale(1.04); }
        .img-wrap {
          overflow: hidden;
          height: 300px;
          border-bottom: 1px solid rgba(0,0,0,0.04);
          position: relative;
        }
        .card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .status-badge {
          position: absolute;
          top: 14px; left: 14px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }
        .badge-available { background: #e8f5e9; color: #2e7d32; border: 1px solid #a5d6a7; }
        .badge-busy { background: #ffebee; color: #c62828; border: 1px solid #ef9a9a; }
        .price-tag {
          position: absolute;
          bottom: 0; right: 0;
          background: linear-gradient(135deg, #ff6b00 0%, #ff8a33 100%);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          padding: 6px 14px;
          line-height: 1;
          border-top-left-radius: 4px;
        }
        .price-tag span { font-size: 10px; font-weight: 400; opacity: 0.85; }
        .card-body {
          padding: 20px 22px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .card-cat {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ff6b00;
          margin-bottom: 6px;
        }
        .card-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #111;
          line-height: 1.1;
          margin-bottom: 8px;
          text-decoration: none;
          display: block;
          transition: color 0.2s;
        }
        .card-name:hover { color: #ff6b00; }
        .card-desc {
          font-size: 13px;
          color: #6f6962;
          line-height: 1.6;
          margin-bottom: 16px;
          flex: 1;
        }
        .specs-row {
          display: flex;
          border: 1px solid #ece5dc;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 16px;
          background: linear-gradient(180deg, #faf7f3 0%, #f6f0e8 100%);
        }
        .spec-item {
          flex: 1;
          padding: 8px 10px;
          border-right: 1px solid #ece8e2;
          text-align: center;
        }
        .spec-item:last-child { border-right: none; }
        .spec-val {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #222;
          line-height: 1;
        }
        .spec-lbl {
          font-size: 10px;
          color: #bbb;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 2px;
        }
        .card-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .btn-detail {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 10px;
          border: 1.5px solid #ddd;
          background: #fff;
          color: #777;
          border-radius: 12px;
          text-decoration: none;
          text-align: center;
          transition: all 0.2s;
          cursor: pointer;
          display: block;
        }
        .btn-detail:hover { border-color: #aaa; color: #222; }
        .btn-order {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 10px;
          border: none;
          background: linear-gradient(135deg, #ff6b00 0%, #ff8a33 100%);
          color: #fff;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s, transform 0.18s, box-shadow 0.18s;
        }
        .btn-order:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(255,107,0,0.25);
        }
        .btn-order:disabled { background: #eee; color: #bbb; cursor: not-allowed; }

        /* MODAL */
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex; justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(3px);
        }
        .modal-box {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #fff;
          border: 1.5px solid #e8e0d6;
          width: 100%; max-width: 500px;
          height: fit-content;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.12);
        }
        .modal-header {
          background: #ff6b00;
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .modal-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #fff;
        }
        .modal-close {
          background: rgba(255,255,255,0.2);
          border: none;
          color: #fff;
          width: 30px; height: 30px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 15px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .modal-close:hover { background: rgba(255,255,255,0.35); }
        .modal-body { padding: 22px 24px 8px; }
        .form-group { margin-bottom: 14px; }
        .form-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #aaa;
          display: block;
          margin-bottom: 5px;
        }
        .form-input {
          width: 100%; box-sizing: border-box;
          background: #faf8f5;
          border: 1.5px solid #e0dbd4;
          border-radius: 3px;
          padding: 10px 14px;
          color: #1a1a1a;
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .form-input:focus { border-color: #ff6b00; background: #fff; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .modal-footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 16px 24px 24px;
        }
        .btn-cancel {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 12px;
          border: 1.5px solid #ddd;
          background: #fff;
          color: #999;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-cancel:hover { color: #333; border-color: #aaa; }
        .btn-submit {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 12px;
          border: none;
          background: #ff6b00;
          color: #fff;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-submit:hover { background: #e05e00; }

        @media (max-width: 768px) {
          .page-hero { padding: 36px 20px 28px; }
          .hero-title { font-size: 46px; }
          .grid-section { padding: 28px 20px 60px; }
          .equipment-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <Header />
      <div className="texnika-page">
        {/* Hero */}
        <div className="page-hero">
          <div className="hero-label">{t("xizmatlar.menu1_title")}</div>
          <h1 className="hero-title">
            {t("xizmatlar.menu1.title1")}
            <span className="ml-1">{t("xizmatlar.menu1.title2")}</span>
          </h1>
          <p className="hero-sub">{t("xizmatlar.menu1.sub")}</p>

          <div className="filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
            <div className="divider" />
            <select
              className="status-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">{t("xizmatlar.menu1.filter1")}</option>
              <option value="available">
                {t("xizmatlar.menu1.filter_menu1")}
              </option>
              <option value="busy">{t("xizmatlar.menu1.filter_menu2")}</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid-section">
          <div className="count-label">
            {filtered.length} {t("xizmatlar.menu1.count_label")}
          </div>
          <div className="equipment-grid">
            {filtered.map((item) => (
              <div className="eq-card" key={item.id}>
                <div className="img-wrap">
                  <img src={item.image} alt={item.name} className="card-img" />
                  <span
                    className={`status-badge ${item.status === "available" ? "badge-available" : "badge-busy"}`}
                  >
                    {item.status === "available"
                      ? "● " + t("xizmatlar.menu1.filter_menu1")
                      : "● " + t("xizmatlar.menu1.filter_menu2")}
                  </span>
                  {/* <div className="price-tag">
                    ${item.price}
                    <span>/kun</span>
                  </div> */}
                </div>

                <div className="card-body">
                  <div className="card-cat">
                    {item.category} · {item.year}
                  </div>

                  <Link
                    to={`/xizmatlar/texnika/${item.id}`}
                    className="card-name"
                  >
                    {item.name}
                  </Link>

                  <p className="card-desc">{item.description}</p>

                  <div className="specs-row">
                    <div className="spec-item">
                      <div className="spec-val">{item.weight}</div>
                      <div className="spec-lbl">
                        {t("xizmatlar.menu1.vazn")}
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-val">{item.power}</div>
                      <div className="spec-lbl">
                        {t("xizmatlar.menu1.quvvat")}
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-val">{item.year}</div>
                      <div className="spec-lbl">
                        {t("xizmatlar.menu1.year")}
                      </div>
                    </div>
                  </div>

                  <div className="card-actions">
                    <Link
                      to={`/xizmatlar/texnika/${item.id}`}
                      className="btn-detail"
                    >
                      {t("batafsil_btn")}
                    </Link>
                    <button
                      disabled={item.status === "busy"}
                      onClick={() => setSelected(item)}
                      className="btn-order"
                    >
                      {item.status === "busy"
                        ? t("xizmatlar.menu1.filter_menu2")
                        : t("xizmatlar.menu1.buyurtma")}
                    </button>
                    {/* <a className="text-center btn-order" href="tel:712032626">Buyurtma berish</a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        className="order-modal"
        open={!!selected}
        onCancel={() => setSelected(null)}
        footer={null}
        centered
        width={620}
        title={
          <div>
            <h2 className="order-modal-title">{selected?.name}</h2>
            <p className="order-modal-subtitle">
              {t("xizmatlar.menu1.buyurtma_name")}
            </p>
          </div>
        }
        closeIcon={<div className="order-close-btn">✕</div>}
      >
        {selected && (
          <>
            <div className="order-modal-body">
              {/* DATE */}
              <div className="order-grid">
                <div className="order-group">
                  <label className="order-label">
                    <span>🗓</span>
                    {t("xizmatlar.menu1.start_date")}
                  </label>

                  <input
                    type="date"
                    className="order-input"
                    value={form.startDate}
                    onChange={(e) =>
                      setForm({ ...form, startDate: e.target.value })
                    }
                  />
                </div>

                <div className="order-group">
                  <label className="order-label">
                    <span>🗓</span>
                    {t("xizmatlar.menu1.end_date")}
                  </label>

                  <input
                    type="date"
                    className="order-input"
                    value={form.endDate}
                    onChange={(e) =>
                      setForm({ ...form, endDate: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* FULL NAME */}
              <div className="order-group">
                <label className="order-label">
                  <span>👤</span>
                  {t("xizmatlar.menu1.full_name")}
                </label>

                <input
                  type="text"
                  required
                  placeholder={t("xizmatlar.menu1.fullName_placeholder")}
                  className="order-input"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                />
              </div>

              {/* PHONE */}
              <div className="order-group">
                <label className="order-label">
                  <span>📞</span>
                  {t("xizmatlar.menu1.phone")}
                </label>

                <input
                  type="number"
                  required
                  placeholder="+998 XX XXX XX XX"
                  className="order-input"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              {/* ADDRESS */}
              <div className="order-group">
                <label className="order-label">
                  <span>🏢</span>
                  {t("xizmatlar.menu1.address")}
                </label>

                <input
                  type="text"
                  required
                  placeholder={t("xizmatlar.menu1.address_placeholder")}
                  className="order-input"
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
              </div>

              {/* COMMENT */}
              <div className="order-group">
                <label className="order-label">
                  <span>📝</span>
                  {t("xizmatlar.menu1.izoh")}
                </label>

                <textarea
                  rows={4}
                  placeholder={t("xizmatlar.menu1.izoh_placeholder")}
                  className="order-textarea"
                  value={form.comment}
                  onChange={(e) =>
                    setForm({ ...form, comment: e.target.value })
                  }
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="order-footer">
              <button
                className="order-btn-cancel"
                onClick={() => setSelected(null)}
              >
                {t("xizmatlar.menu1.cancel")}
              </button>

              <button
                type="submit"
                className="order-btn-submit"
                onClick={handleSubmit}
              >
                {t("xizmatlar.menu1.tasdiqlash")}
              </button>
            </div>
          </>
        )}
      </Modal>
      <Footer />
    </>
  );
};

export default Texnika;
