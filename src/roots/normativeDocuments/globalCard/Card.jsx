import { LawsCardWrapper } from "./CardWrapper";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { imgUrl } from "../../../utils/httpClient";
import { transliterate } from "../../../const/ToKrillang";

const LawsCard = ({ item }) => {
  return (
    <LawsCardWrapper>
      <section>
        <a
          href={`${imgUrl}${item?.data?.__file__?.url_1}`}
          target="blank"
          download
        >
          <SimCardDownloadIcon className="icon" />
          <span>
            {item?.data?.title
              ? transliterate(item?.data?.title?.slice(0, 110))
              : transliterate(item?.data?.name?.slice(0, 110))}
            ...
          </span>
        </a>
      </section>
    </LawsCardWrapper>
  );
};

export default LawsCard;
