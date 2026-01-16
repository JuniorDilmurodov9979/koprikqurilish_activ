import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button, Tag, Divider, Card, Modal, Form, Input, Upload } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  ArrowLeftOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  UploadOutlined,
  ScheduleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../containers/header/Header";
import { BackGroundColor } from "../../const/Wrapper";
import Footer from "../../containers/footer/Footer";
import vacancies from "./vacancy.json";

const VacancyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [education, setEducation] = useState("");
  const [form] = Form.useForm();

  // Find the specific vacancy by ID
  const vacancy = vacancies.find((v) => v.id === parseInt(id));

  if (!vacancy) {
    return <div className="p-20 text-center">Vakansiya topilmadi...</div>;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEducation("");
    form.resetFields();
  };

  const sendToTelegram = async (values) => {
    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
    const CHAT_IDS = [
      import.meta.env.VITE_CHAT_ID_1,
      import.meta.env.VITE_CHAT_ID_2,
      import.meta.env.VITE_CHAT_ID_3,
    ];

    try {
      // Prepare text message
      const message = `
🆕 Yangi Ariza - ${vacancy.title}

👤 Ism: ${values.first_name}
👤 Familiya: ${values.last_name}
📅 Tug'ilgan sana: ${values.birth_date || ""}
📞 Telefon: ${values.phone_number}
🎓 Ma'lumoti: ${values.education || ""}
💼 Vakansiya: ${vacancy.title}
🏢 Kompaniya: ${vacancy.company || "Kompaniya nomi kiritilmagan"}
📍 Joylashuv: ${vacancy.location || "Aniqlanmagan"}
    `.trim();

      // Send to all chat IDs
      for (const CHAT_ID of CHAT_IDS) {
        // Send text message
        const textResponse = await fetch(
          `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: CHAT_ID,
              text: message,
              parse_mode: "HTML",
            }),
          }
        );

        if (!textResponse.ok) {
          console.error(`Failed to send message to ${CHAT_ID}`);
        }

        // Send CV file if exists
        if (values.resume && values.resume.length > 0) {
          const file = values.resume[0].originFileObj;
          const formData = new FormData();
          formData.append("chat_id", CHAT_ID);
          formData.append("document", file);
          formData.append(
            "caption",
            `📄 ${values.first_name} ${values.last_name} - CV`
          );

          const fileResponse = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (!fileResponse.ok) {
            console.error(`Failed to send document to ${CHAT_ID}`);
          }
        }
      }

      return true;
    } catch (error) {
      console.error("Telegram error:", error);
      throw error;
    }
  };

  const handleSubmit = async (values) => {
    // Validate education field
    if (!education) {
      toast.error("Iltimos, ma'lumotingizni tanlang!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    setLoading(true);

    // Merge education into form values
    const formData = {
      ...values,
      education: education,
    };

    try {
      await sendToTelegram(formData);

      toast.success(
        "Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      setIsModalOpen(false);
      setEducation("");
      form.resetFields();
    } catch (error) {
      toast.error(
        "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring yoki biz bilan bog'laning.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  // Helper functions for displaying data
  const getDescription = () => {
    if (vacancy.description) return vacancy.description;

    if (vacancy.positions && vacancy.positions.length > 0) {
      return vacancy.positions.map((p) => `${p.count} ta ${p.name}`).join("\n");
    }

    return "Vakansiya tafsilotlari mavjud emas.";
  };

  const formatWorkType = () => {
    if (vacancy.type) return vacancy.type;
    if (vacancy.workDaysPerMonth)
      return `Oyiga ${vacancy.workDaysPerMonth} kun`;
    return "Aniqlanmagan";
  };

  const formatWorkHours = () => {
    if (vacancy.workHours) return vacancy.workHours;
    if (vacancy.contact) return vacancy.contact;
    return "Kelishiladi";
  };

  const formatSalary = () => {
    if (vacancy.salary) return vacancy.salary;
    if (vacancy.salaryPayment)
      return `${vacancy.salary} (${vacancy.salaryPayment})`;
    return "Kelishuv asosida";
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <BackGroundColor>
        <div className="container mx-auto py-6">
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            <div className="">
              <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-6">
                {/* Job Description Column */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white h-full p-8 rounded-2xl shadow-sm border border-gray-100">
                    <Button
                      icon={<ArrowLeftOutlined />}
                      type="text"
                      onClick={() => navigate(-1)}
                      className="mb-4 text-gray-400 hover:text-blue-600 p-0 px-1"
                    >
                      Orqaga qaytish
                    </Button>

                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                      {vacancy.title}
                    </h1>

                    {vacancy.company && (
                      <p className="text-lg text-gray-600 mb-4">
                        {vacancy.company}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-3 mb-8">
                      <Tag color="blue" className="rounded-md px-3 py-1">
                        <ScheduleOutlined className="mr-1" />
                        {formatWorkType()}
                      </Tag>
                      {vacancy.location && (
                        <Tag
                          icon={<EnvironmentOutlined />}
                          className="border-none bg-gray-100 p-1 px-1.5"
                        >
                          {vacancy.location}
                        </Tag>
                      )}
                      <Tag
                        className="p-1 px-2"
                        color={vacancy.status === "Ochiq" ? "green" : "red"}
                        icon={<CheckCircleOutlined />}
                      >
                        {vacancy.status}
                      </Tag>
                      {vacancy.experience && (
                        <Tag color="purple" className="rounded-md px-3 py-1">
                          <TeamOutlined className="mr-1" />
                          {vacancy.experience}
                        </Tag>
                      )}
                    </div>

                    {/* Positions Section */}
                    {vacancy.positions && vacancy.positions.length > 0 && (
                      <>
                        <div className="prose max-w-none mb-6">
                          <h3 className="text-lg font-bold mb-3">
                            Bo'sh ish o'rinlari
                          </h3>
                          <ul className="space-y-2">
                            {vacancy.positions.map((position, index) => (
                              <li key={index} className="text-gray-700">
                                <span className="font-semibold">
                                  {position.name}
                                </span>{" "}
                                - {position.count} ta
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Divider />
                      </>
                    )}

                    {/* Description Section */}
                    {vacancy.description && (
                      <>
                        <div className="prose max-w-none mb-6">
                          <h3 className="text-lg font-bold mb-3">
                            Ish tavsifi
                          </h3>
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line text-base">
                            {vacancy.description}
                          </p>
                        </div>
                        <Divider />
                      </>
                    )}

                    {/* Requirements Section */}
                    {vacancy.requirements &&
                      vacancy.requirements.length > 0 && (
                        <>
                          <div className="prose max-w-none mb-6">
                            <h3 className="text-lg font-bold mb-3">Talablar</h3>
                            <ul className="space-y-2">
                              {vacancy.requirements.map((req, index) => (
                                <li key={index} className="text-gray-600">
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Divider />
                        </>
                      )}

                    {/* Responsibilities Section */}
                    {vacancy.responsibilities &&
                      vacancy.responsibilities.length > 0 && (
                        <>
                          <div className="prose max-w-none mb-6">
                            <h3 className="text-lg font-bold mb-3">
                              Majburiyatlar
                            </h3>
                            <ul className="space-y-2">
                              {vacancy.responsibilities.map((resp, index) => (
                                <li key={index} className="text-gray-600">
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Divider />
                        </>
                      )}

                    {/* Languages Section */}
                    {vacancy.languages && vacancy.languages.length > 0 && (
                      <>
                        <div className="prose max-w-none mb-6">
                          <h3 className="text-lg font-bold mb-3">Tillar</h3>
                          <ul className="space-y-2">
                            {vacancy.languages.map((lang, index) => (
                              <li key={index} className="text-gray-600">
                                {lang}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Divider />
                      </>
                    )}

                    {/* Conditions Section */}
                    {vacancy.conditions && vacancy.conditions.length > 0 && (
                      <>
                        <div className="prose max-w-none mb-6">
                          <h3 className="text-lg font-bold mb-3">
                            Ish sharoitlari
                          </h3>
                          <ul className="space-y-2">
                            {vacancy.conditions.map((cond, index) => (
                              <li key={index} className="text-gray-600">
                                {cond}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Divider />
                      </>
                    )}

                    {/* Work Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                          Ish tartibi
                        </h4>
                        <div className="flex items-center gap-1 text-gray-800 font-medium">
                          <ClockCircleOutlined className="w-4 h-4 text-blue-500" />
                          {formatWorkHours()}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                          Maosh
                        </h4>
                        <div className="flex items-center text-gray-800 font-medium">
                          <DollarOutlined className="mr-2 text-green-500" />
                          {formatSalary()}
                        </div>
                      </div>
                      {vacancy.employment && (
                        <div>
                          <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                            Bandlik turi
                          </h4>
                          <div className="text-gray-800 font-medium">
                            {vacancy.employment}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Sticky Sidebar */}
                <div className="lg:col-span-1 h-full">
                  <div className="sticky flex flex-col gap-5 top-6 space-y-4 h-full">
                    <Card className="rounded-2xl flex-1 shadow-sm border-none bg-blue-50">
                      <h3 className="text-lg font-bold text-blue-900 mb-2">
                        Ariza topshirish
                      </h3>
                      <p className="text-blue-700 text-sm mb-6">
                        Ushbu vakansiya bo'yicha hujjat topshirish uchun tugmani
                        bosing yoki biz bilan bog'laning.
                      </p>

                      <div className="space-y-3 lg:mt-14">
                        <Button
                          type="primary"
                          size="large"
                          block
                          onClick={showModal}
                          disabled={vacancy.status !== "Ochiq"}
                          className={`rounded-xl h-12 font-bold shadow-lg transition-all
    ${
      vacancy.status === "Ochiq"
        ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200 cursor-pointer"
        : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
    }
  `}
                        >
                          {vacancy.status === "Ochiq"
                            ? "Ariza topshirish"
                            : "Vakansiya yopiq"}
                        </Button>
                        <Link
                          to="tel:+998712032626"
                          target="_blank"
                          size="large"
                          className="block w-full text-center py-3 border rounded-xl h-12 border-blue-500 text-blue-600"
                        >
                          Bog'lanish
                        </Link>
                      </div>
                    </Card>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                      <div className="flex items-center text-gray-400 text-xs">
                        <CalendarOutlined className="mr-2" />
                        E'lon qilingan: {vacancy.publishedDate}
                      </div>
                      {vacancy.deadline && (
                        <div className="flex items-center text-gray-400 text-xs">
                          <CalendarOutlined className="mr-2" />
                          Muddat: {vacancy.deadline}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackGroundColor>
      <Footer />

      {/* Application Modal */}
      <Modal
        title={<span className="text-xl font-bold">Ariza topshirish</span>}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={600}
        className="top-8"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="mt-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label="Ism"
              name="first_name"
              rules={[
                { required: true, message: "Iltimos, ismingizni kiriting!" },
              ]}
            >
              <Input placeholder="Ismingiz" size="large" />
            </Form.Item>

            <Form.Item
              label="Familiya"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Iltimos, familiyangizni kiriting!",
                },
              ]}
            >
              <Input placeholder="Familiyangiz" size="large" />
            </Form.Item>
          </div>

          <Form.Item
            label="Tug'ilgan sana"
            name="birth_date"
            rules={[
              {
                required: true,
                message: "Iltimos, tug'ilgan sanangizni tanlang!",
              },
            ]}
          >
            <Input type="date" size="large" />
          </Form.Item>

          <Form.Item
            label="Telefon raqam"
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Iltimos, telefon raqamingizni kiriting!",
              },
              {
                pattern: /^\+?[0-9]{9,15}$/,
                message: "Noto'g'ri telefon raqami!",
              },
            ]}
          >
            <Input placeholder="+998901234567" size="large" />
          </Form.Item>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Ma'lumoti <span className="text-red-500">*</span>
            </label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full h-10 px-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
            >
              <option value="">Ma'lumotingizni tanlang</option>
              <option value="O'rta">O'rta</option>
              <option value="O'rta maxsus">O'rta maxsus</option>
              <option value="Oliy">Oliy</option>
            </select>
          </div>

          <Form.Item
            label="Rezyume (CV)"
            name="resume"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) return e;
              return e?.fileList;
            }}
            rules={[
              { required: true, message: "Iltimos, rezyumengizni yuklang!" },
            ]}
          >
            <Upload
              beforeUpload={() => false}
              maxCount={1}
              accept=".pdf,.doc,.docx"
            >
              <Button icon={<UploadOutlined />} size="large" block>
                Faylni yuklash (PDF, DOC, DOCX)
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item className="mb-0 mt-6">
            <div className="flex gap-3">
              <Button onClick={handleCancel} size="large" block>
                Bekor qilish
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                loading={loading}
                className="font-bold"
              >
                Yuborish
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default VacancyDetails;
