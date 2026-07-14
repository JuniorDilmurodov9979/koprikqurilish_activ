import { LeadershipCardWrapper } from "./LeadershipCardWrapper";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useTranslation } from "react-i18next";
import { imgUrl } from "../../utils/httpClient";
import PersonIcon from "@mui/icons-material/Person";
import { transliterate } from "../../const/ToKrillang";

const LeadershipCardTwo = ({ item }) => {
  const { i18n } = useTranslation();

  const data =
    item?.[i18n.language] || item?.uz || item?.ru || item?.en || item?.data;

  return (
    <LeadershipCardWrapper>
      <div className="leadership__card">
        <div className="left">
          <img
            src={`${imgUrl}${item?.__file__?.url_1}`}
            alt={data?.full_name || item?.name}
          />
        </div>

        <div className="right flex flex-col gap-1">
          {data?.job_name && (
            <p className="flex gap-1 items-center">
              <WorkIcon color="primary" />
              {transliterate(data.job_name)}
            </p>
          )}

          {(data?.full_name || item?.name) && (
            <p className="flex gap-1 items-center">
              <PersonIcon color="primary" />
              <p>{transliterate(data?.full_name || item?.name)}</p>
            </p>
          )}

          {(data?.address || item?.region) && (
            <p className="flex gap-1 items-center">
              <FmdGoodIcon color="primary" />
              {transliterate(data?.address || item?.region)}
            </p>
          )}

          {item?.phone_number && (
            <p className="flex gap-1 items-center">
              <LocalPhoneIcon color="primary" />
              {item.phone_number}
            </p>
          )}

          {data?.reception_days && (
            <p className="flex gap-1 items-center">
              <AccessTimeIcon color="primary" />
              {transliterate(data.reception_days)}
            </p>
          )}

          {item?.email && (
            <p className="flex gap-1 items-center">
              <EmailIcon color="primary" />
              {item.email}
            </p>
          )}

          {item?.fak && (
            <p className="flex gap-1 items-center">
              <UploadFileIcon color="primary" />
              {item.fak}
            </p>
          )}
        </div>
      </div>
    </LeadershipCardWrapper>
  );
};

export default LeadershipCardTwo;
