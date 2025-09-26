import { useTranslation } from "react-i18next";
import { BackGroundColor } from "../../const/Wrapper";
import { UsefulLinksWrapper } from "./UsefulLinksWrapper";
import NewspaperCard from "../newspaperCard/NewspaperCard";
import http from "../../utils/httpClient";
import { useEffect, useState } from "react";
import { langLocal } from "../../const/LangLocal";

const UsefulLinks = () => {
  const { t } = useTranslation();

  const [newspaper, setNewsPaper] = useState([]);
  const getNewsPaper = () => {
    http
      .get(`find/all/newspapers?page=1&limit=2&language=${langLocal()}`)
      .then((res) => {
        setNewsPaper(res?.data?.items);
      });
  };
  useEffect(() => {
    getNewsPaper();
  }, []);
  return (
    <>
      <BackGroundColor>
        <div className="container">
          <UsefulLinksWrapper>
            <div className="boxs">
              <div className="card__paper div">
                <div className="card__in">
                  {newspaper.map((item, index) => {
                    return <NewspaperCard item={item} key={index} />;
                  })}
                </div>
              </div>
              <div className="card__link div">
                <p>{t("usefullinks.link")}</p>
                <ul>
                  <li>
                    <a target="blank" href="https://president.uz/oz/">
                      {t("usefullinks.link1")}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://www.gov.uz/oz/">
                      {t("usefullinks.link2")}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://senat.uz/oz/">
                      {t("usefullinks.link3")}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://parliament.gov.uz/uz/">
                      {t("usefullinks.link4")}
                    </a>
                  </li>
                  {/* <li>
                    <a target="blank" href="https://osjd.org/">
                      {t("usefullinks.link5")}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://sovetgt.org/">
                      {t("usefullinks.link6")}
                    </a>
                  </li> */}
                  <li>
                    <a target="blank" href="https://mintrans.uz/">
                      {t("usefullinks.link7")}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://mitc.uz/uz/">
                      {t("usefullinks.link8")}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://e-gov.uz/">
                      {t("usefullinks.link9")}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://csec.uz/uz/">
                      {t("usefullinks.link10")}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://openinfo.uz/uz/">
                      {t("usefullinks.link11")}
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://uztradeinfo.uz/?l=uz">
                      {t("usefullinks.link12")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </UsefulLinksWrapper>
        </div>
      </BackGroundColor>
    </>
  );
};

export default UsefulLinks;
