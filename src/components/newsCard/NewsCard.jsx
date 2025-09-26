import { CardActionArea } from "@mui/material";
import { NewscardWrapper } from "./NewscardWrapper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import moment from "moment";
import { Link } from "react-router-dom";
import { imgUrl } from "../../utils/httpClient";
import { transliterate } from "../../const/ToKrillang";

const NewsCard = ({ item }) => {
  return (
    <NewscardWrapper>
      <Link to={`/news/${item?.id}`}>
        <CardActionArea>
          <div className="new__img">
            <img src={`${imgUrl}${item?.photos[0]?.url_1}`} alt="" />
          </div>
          <div className="new__body">
            <p className="new__title">{transliterate(item?.data?.title)}</p>
            <p className="new__text">{transliterate(item?.data?.author)}</p>
            <p className="time">
              <p>
                <AccessTimeIcon />
                {moment(item?.date ? item?.date : item?.create_at).format(
                  "DD MM YYYY"
                )}
              </p>
              <p>
                <RemoveRedEyeIcon />
                {item?.view_count}
              </p>
            </p>
          </div>
        </CardActionArea>
      </Link>
    </NewscardWrapper>
  );
};

export default NewsCard;
