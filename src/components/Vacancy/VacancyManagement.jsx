import { useTranslation } from "react-i18next";
import Header from "../../containers/header/Header";
import { BackGroundColor } from "../../const/Wrapper";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import PageTwoMenu from "../../containers/pageTwoMenu/PageTwoMenu";
import { menu1 } from "../../const/Menu";
import Footer from "../../containers/footer/Footer";
import { Button, Card, Tag } from "antd";
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

  const vacancy = [
    {
      id: 1,
      company: t("vacancy.job_info1"),
      title: t("vacancy.job_title1"),
      positions: [
        {
          name: t("vacancy.job1.job_desc1"),
          // count: 2,
        },
        {
          name: t("vacancy.job1.job_desc2"),
          // count: 2,
        },
        {
          name: t("vacancy.job1.job_desc3"),
          // count: 2,
        },
      ],
      type: t("vacancy.job_type") + " (5/2)",
      workHours: "09:00 – 18:00",
      location: t("vacancy.job_place"),
      salary: t("vacancy.job_price"),
      publishedDate: "2026-01-12",
      deadline: "2026-02-10",
      status: t("vacancy.job_status_1"),
    },
    {
      id: 2,
      company: t("vacancy.job_info2"),
      title: t("vacancy.job_title2"),
      type: t("vacancy.job_type") + " (5/2)",
      workHours: "09:00 – 18:00",
      location: t("vacancy.job_place"),
      experience: t("vacancy.experience"),
      salary: t("vacancy.job_price1"),
      salaryPayment: t("vacancy.salary_payment"),
      employment: t("vacancy.job2.bandlik_turi"),
      publishedDate: "2026-01-14",
      deadline: "2026-01-16",
      status: t("vacancy.job_status_2"),
      responsibilities: [
        t("vacancy.job2.responsibilities.resp1"),
        t("vacancy.job2.responsibilities.resp2"),
        t("vacancy.job2.responsibilities.resp3"),
        t("vacancy.job2.responsibilities.resp4"),
        t("vacancy.job2.responsibilities.resp5"),
        t("vacancy.job2.responsibilities.resp6"),
      ],
      requirements: [
        t("vacancy.job2.requirements.req1"),
        t("vacancy.job2.requirements.req2"),
        t("vacancy.job2.requirements.req3"),
        t("vacancy.job2.requirements.req4"),
        t("vacancy.job2.requirements.req5"),
        t("vacancy.job2.requirements.req6"),
      ],
      languages: [
        t("vacancy.job2.languages.lang1"),
        t("vacancy.job2.languages.lang2"),
      ],
      conditions: [
        t("vacancy.job2.conditions.cond1"),
        t("vacancy.job2.conditions.cond2"),
        t("vacancy.job2.conditions.cond3"),
        t("vacancy.job2.conditions.cond4"),
        t("vacancy.job2.conditions.cond5"),
      ],
    },
    {
      id: 3,
      company: t("vacancy.job_info3"),
      title: t("vacancy.job_title3"),
      type: t("vacancy.job_type1"),
      workDaysPerMonth: 24,
      workHours: t("vacancy.job_time"),
      location: t("vacancy.location"),
      salary: t("vacancy.job_price"),
      publishedDate: "2025-11-14",
      status: t("vacancy.job_status_1"),
    },
  ];

  const navigate = useNavigate();

  const getDescription = (vacancy) => {
    // First priority: direct description
    if (vacancy.description) return vacancy.description;

    // Second priority: positions list
    // if (vacancy.positions && vacancy.positions.length > 0) {
    //   return vacancy.positions.map((p) => `${p.count} ta ${p.name}`).join(", ");
    // }

    // Third priority: responsibilities
    if (vacancy.responsibilities && vacancy.responsibilities.length > 0) {
      return vacancy.responsibilities.slice(0, 2).join(". ") + "...";
    }

    // Fourth priority: requirements
    if (vacancy.requirements && vacancy.requirements.length > 0) {
      return vacancy.requirements.slice(0, 2).join(", ") + "...";
    }

    // Default fallback
    return t("vacancy.job_desc3");
  };

  const formatSalary = (vacancy) => {
    if (vacancy.salary) {
      return vacancy.salary;
    }
    return t("vacancy.job_price");
  };

  const formatWorkType = (vacancy) => {
    if (vacancy.type) return vacancy.type;
    if (vacancy.workDaysPerMonth)
      return `${vacancy.workDaysPerMonth} kun oyiga`;
    return t("vacancy.job_time");
  };

  const formatWorkHours = (vacancy) => {
    if (vacancy.workHours) return vacancy.workHours;
    if (vacancy.contact) return vacancy.contact;
    return t("vacancy.job_time");
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
                {vacancy.map((vacancy) => (
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
                                vacancy.status === t("vacancy.job_status_1")
                                  ? "success"
                                  : "error"
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
                              {vacancy.workHours}
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
                            {t("vacancy.job_relese")}
                            <span className="ml-1 text-gray-600 font-medium">
                              {vacancy.publishedDate}
                            </span>
                            {vacancy.deadline && (
                              <span className="ml-3">
                                {t("vacancy.job_deadline")}{" "}
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
                                `/management/vacancy-management/${vacancy.id}`,
                              )
                            }
                            className="rounded-lg px-8 shadow-blue-200 shadow-lg hover:translate-y-[-2px] transition-transform"
                          >
                            {t("vacancy.job_detail_btn")}
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
