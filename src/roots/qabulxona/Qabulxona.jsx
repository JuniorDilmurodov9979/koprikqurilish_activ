import { useState, useEffect, useRef } from "react";
import { QabulxonaWrapper } from "./QabulxonaWrapper";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import { BackGroundColor, LargeText } from "../../const/Wrapper";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import axios from "axios";
import { toast } from "react-toastify";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const API = "https://korrupsiya.kuprikqurilish.uz/api";
const CHAT_ID = import.meta.env.VITE_MUROJAAT_CHAT_ID_1;

const Qabulxona = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);
  const [formData, setFormData] = useState({
    phone_number: "",
    address: "",
    content: "",
  });
  const [stats, setStats] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAttachmentFile(file);
    setErrors((prev) => ({ ...prev, attachment: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.phone_number.trim()) newErrors.phone_number = "Majburiy";
    if (!formData.address.trim()) newErrors.address = "Majburiy";
    if (!formData.content.trim()) newErrors.content = "Majburiy";
    if (!attachmentFile) newErrors.attachment = "Majburiy";
    if (!captchaToken) newErrors.captcha = "Iltimos, captchani tasdiqlang";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fetchStats = async () => {
    try {
      const { data } = await axios.get(`${API}/murojaatlar/statistics`);
      setStats(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.warning("Barcha maydonlarni to'ldiring");
      return;
    }
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("phone_number", formData.phone_number);
      fd.append("address", formData.address);
      fd.append("content", formData.content);
      fd.append("attachment", attachmentFile);
      fd.append("assigned_telegram_chat_id", CHAT_ID);
      fd.append("recaptcha_token", captchaToken);

      await axios.post(`${API}/murojaatlar`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Murojaatingiz yuborildi!");
      setFormData({ phone_number: "", address: "", content: "" });
      setAttachmentFile(null);
      setCaptchaToken(null);
      setErrors({});
      recaptchaRef.current?.resetCaptcha();

      fetchStats();
    } catch (err) {
      console.error(err);
      recaptchaRef.current?.resetCaptcha();

      setCaptchaToken(null);
      toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = (field) =>
    `w-full px-3 py-2 rounded-lg border text-sm outline-none transition-colors focus:ring-2 focus:ring-yellow-400 bg-white dark:bg-gray-900 ${
      errors[field]
        ? "border-red-400 focus:ring-red-300"
        : "border-gray-200 focus:border-gray-400"
    }`;

  const statCards = stats
    ? [
        { label: "Jami", value: stats.total, color: "text-gray-800" },
        { label: "Yangi", value: stats.new, color: "text-blue-600" },
        {
          label: "Tushuntirildi",
          value: stats.tushuntirildi,
          color: "text-yellow-600",
        },
        {
          label: "Qoniqtirildi",
          value: stats.qoniqtirildi,
          color: "text-green-600",
        },
        { label: "Rad etildi", value: stats.rad_etildi, color: "text-red-500" },
        {
          label: "Telegram yuborildi",
          value: stats.telegram_sent,
          color: "text-green-600",
        },
      ]
    : [];

  return (
    <>
      <Header />
      <QabulxonaWrapper>
        <BackGroundColor>
          <div className="container py-6">
            <Breadcrumb links={[{ link: t("virtual") }]} />
            <LargeText color={true}>{t("virtual")}</LargeText>

            {stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mt-6 mb-8">
                {statCards.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm"
                  >
                    <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                    <p className={`text-2xl font-medium ${s.color}`}>
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
                Murojaat yuborish
              </p>
              <form
                onSubmit={submitForm}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500">
                    Telefon raqam
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="+998 90 123 45 67"
                    className={inputCls("phone_number")}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-xs">
                      {errors.phone_number}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500">
                    Manzil
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Shahar, tuman..."
                    className={inputCls("address")}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs">{errors.address}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-xs font-medium text-gray-500">
                    Mazmun
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Murojaat mazmunini kiriting..."
                    rows={5}
                    className={inputCls("content")}
                  />
                  {errors.content && (
                    <p className="text-red-500 text-xs">{errors.content}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-xs font-medium text-gray-500">
                    Fayl
                  </label>
                  <label
                    className={`inline-flex items-center gap-2 w-fit px-4 py-2 rounded-lg border cursor-pointer text-sm transition-colors ${
                      attachmentFile
                        ? "border-green-400 text-green-600"
                        : errors.attachment
                          ? "border-red-400 text-red-500"
                          : "border-dashed border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                    {attachmentFile ? attachmentFile.name : "Fayl tanlang"}
                    <input type="file" hidden onChange={handleFileChange} />
                  </label>
                  {errors.attachment && (
                    <p className="text-red-500 text-xs">{errors.attachment}</p>
                  )}
                </div>

                {/* reCAPTCHA */}
                <div className="md:col-span-2 flex flex-col gap-1">
                  <HCaptcha
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
                    onVerify={(token) => {
                      setCaptchaToken(token);
                      setErrors((prev) => ({ ...prev, captcha: "" }));
                    }}
                    onExpire={() => setCaptchaToken(null)}
                  />
                  {errors.captcha && (
                    <p className="text-red-500 text-xs">{errors.captcha}</p>
                  )}
                </div>

                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-lg text-white text-sm font-medium transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#FFA800" }}
                  >
                    {loading && (
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                    )}
                    {t("contact.yubor")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </BackGroundColor>
      </QabulxonaWrapper>
      <Footer />
    </>
  );
};

export default Qabulxona;
