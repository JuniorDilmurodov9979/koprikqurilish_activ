import { useTranslation } from "react-i18next";
import { imgUrl } from "../../utils/httpClient";
import { OurProjectsCardWrapper } from "./OurProjectsCardWrapper";
import { useNavigate } from "react-router-dom";
import { transliterate } from "../../const/ToKrillang";

const OurProjectsCard = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <OurProjectsCardWrapper>
      <article className="card">
        <img
          className="card__background"
          src={`${imgUrl}${data?.photos[0]?.url_1}`}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width="1920"
          height="2193"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">
              {data?.data?.title?.length > 80 ? (
                <>{transliterate(data?.data?.title?.substring(0, 80))}...</>
              ) : (
                transliterate(data?.data?.title)
              )}
            </h2>
          </div>
          <button
            onClick={() => {
              navigate("/projects/" + data?.id);
            }}
            className="card__button"
          >
            {t("batafsil")}
          </button>
        </div>
      </article>
    </OurProjectsCardWrapper>
  );
};

export default OurProjectsCard;
