import { LeadershipCardWrapper } from "./LeadershipCardWrapper";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useTranslation } from "react-i18next";
import { imgUrl } from "../../utils/httpClient";
import { transliterate } from "../../const/ToKrillang";

const LeadershipCardTwo = ({ item }) => {
  const { t } = useTranslation();
  return (
    <LeadershipCardWrapper>
      <div className="leadership__card">
        <div className="left">
          <img src={`${imgUrl}${item?.__file__?.url_1}`} alt="" />
        </div>
        <div className="rigth">
          <p>
            <WorkIcon />
            {transliterate(item?.data?.job_name)}
          </p>
          <p>{transliterate(item?.data?.full_name)}</p>
          <p>
            <FmdGoodIcon />
            {transliterate(item?.data?.address)}
          </p>
          <p>
            <LocalPhoneIcon />
            {item?.phone_number}
          </p>
          <p>
            <AccessTimeIcon />
            {transliterate(item?.data?.reception_days)}
          </p>
          <p>
            <EmailIcon />
            {item?.email}
          </p>
          <p>
            <UploadFileIcon />
            {item?.fak} 
          </p>
        </div>
      </div>
    </LeadershipCardWrapper>
  );
};

export default LeadershipCardTwo;
