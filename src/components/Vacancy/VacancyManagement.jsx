import { useTranslation } from "react-i18next";
import Header from "../../containers/header/Header";
import { BackGroundColor } from "../../const/Wrapper";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import PageTwoMenu from "../../containers/pageTwoMenu/PageTwoMenu";
import { menu1 } from "../../const/Menu";
import Footer from "../../containers/footer/Footer";
import { Button, Card, Tag } from "antd";
import vacancies from "./vacancy.json";
import { useNavigate } from "react-router-dom";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  ScheduleOutlined,
  DollarOutlined,
} from "@ant-design/icons";

import vacancyImg from "../../assets/imgs/vacancy_img.jpg";

const VacancyManagement = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const getDescription = (vacancy) => {
    // First priority: direct description
    if (vacancy.description) return vacancy.description;

    // Second priority: positions list
    if (vacancy.positions && vacancy.positions.length > 0) {
      return vacancy.positions.map((p) => `${p.count} ta ${p.name}`).join(", ");
    }

    // Third priority: responsibilities
    if (vacancy.responsibilities && vacancy.responsibilities.length > 0) {
      return vacancy.responsibilities.slice(0, 2).join(". ") + "...";
    }

    // Fourth priority: requirements
    if (vacancy.requirements && vacancy.requirements.length > 0) {
      return "Talablar: " + vacancy.requirements.slice(0, 2).join(", ") + "...";
    }

    // Default fallback
    return "Vakansiya tafsilotlari mavjud";
  };

  const formatSalary = (vacancy) => {
    if (vacancy.salary) {
      return vacancy.salary;
    }
    return "Kelishuv asosida";
  };

  const formatWorkType = (vacancy) => {
    if (vacancy.type) return vacancy.type;
    if (vacancy.workDaysPerMonth)
      return `Oyiga ${vacancy.workDaysPerMonth} kun`;
    return "Aniqlanmagan";
  };

  const formatWorkHours = (vacancy) => {
    if (vacancy.workHours) return vacancy.workHours;
    if (vacancy.contact) return vacancy.contact;
    return "Kelishiladi";
  };

  return (
    <>
      <Header />
      <BackGroundColor>
        <div>
          <div className="container">
            <Breadcrumb
              links={[
                { link: t("menus.menu1.title") },
                { link: t("menus.menu1.title8") },
              ]}
            />
            <PageTwoMenu menu={menu1}>
              <div className="flex flex-col gap-6">
                {vacancies.map((vacancy) => (
                  <Card
                    key={vacancy.id}
                    hoverable
                    className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300"
                    bodyStyle={{ padding: 0 }}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-1/3 lg:w-1/4 bg-gray-100 flex items-center justify-center border-r border-gray-50">
                        <img
                          src={vacancyImg}
                          alt={vacancy.title}
                          className="object-cover h-full w-full min-h-[200px]"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1">
                                {vacancy.title}
                              </h3>
                              {vacancy.company && (
                                <p className="text-sm text-gray-500">
                                  {vacancy.company}
                                </p>
                              )}
                            </div>
                            <Tag
                              color={
                                vacancy.status === "Ochiq" ? "success" : "error"
                              }
                              className="m-0 rounded-md"
                            >
                              {vacancy.status}
                            </Tag>
                          </div>

                          <p className="text-gray-500 mb-4 line-clamp-2">
                            {getDescription(vacancy)}
                          </p>

                          <div className="flex flex-wrap gap-3 mb-4">
                            <Tag
                              icon={<ScheduleOutlined />}
                              className="bg-blue-50 border-blue-100 text-blue-600 px-3 py-1"
                            >
                              {formatWorkType(vacancy)}
                            </Tag>

                            <Tag
                              icon={<ClockCircleOutlined />}
                              className="bg-green-50 border-green-100 text-green-600 px-2 py-1"
                            >
                              {formatWorkHours(vacancy)}
                            </Tag>

                            {vacancy.location && (
                              <span className="text-gray-400 flex items-center text-sm">
                                <EnvironmentOutlined className="mr-1" />
                                {vacancy.location}
                              </span>
                            )}

                            <Tag
                              icon={<DollarOutlined />}
                              className="bg-amber-50 border-amber-100 text-amber-600 px-2 py-1"
                            >
                              {formatSalary(vacancy)}
                            </Tag>
                          </div>
                        </div>

                        {/* Footer Section */}
                        <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
                          <div className="text-gray-400 text-xs flex items-center">
                            <CalendarOutlined className="mr-1" />
                            E'lon qilingan:
                            <span className="ml-1 text-gray-600 font-medium">
                              {vacancy.publishedDate}
                            </span>
                            {vacancy.deadline && (
                              <span className="ml-3">
                                Muddat:{" "}
                                <span className="text-gray-600 font-medium">
                                  {vacancy.deadline}
                                </span>
                              </span>
                            )}
                          </div>
                          <Button
                            type="primary"
                            size="large"
                            onClick={() =>
                              navigate(
                                `/management/vacancy-management/${vacancy.id}`
                              )
                            }
                            className="rounded-lg px-8 shadow-blue-200 shadow-lg hover:translate-y-[-2px] transition-transform"
                          >
                            Batafsil
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </PageTwoMenu>
          </div>
        </div>
      </BackGroundColor>
      <Footer />
    </>
  );
};

export default VacancyManagement;
