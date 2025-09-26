import { PhotoCardWrapper } from "./PhotoCardWrapper";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { imgUrl } from "../../utils/httpClient";
import { transliterate } from "../../const/ToKrillang";

const PhotoCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <PhotoCardWrapper>
      <img src={imgUrl + data?.photos?.[0]?.url_1} alt="" loading="lazy" />
      <div
        className="photo__card"
        onClick={() => navigate(`/press-center/gallery/${data?.id}`)}
      >
        <div className="top__card">
          <p>{moment(data?.create_at).format("DD MM YYYY")}</p>
          <p>{data?.photos?.length}</p>
        </div>
        <div className="bottom__card">
          <p>{transliterate(data?.data?.name)}</p>
        </div>
      </div>
    </PhotoCardWrapper>
  );
};

export default PhotoCard;
