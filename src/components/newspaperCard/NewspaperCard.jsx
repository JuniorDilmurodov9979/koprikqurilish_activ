import { NewspaperCardWrapper } from "./NewspaperCardWrapper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button } from "@mui/material";
import moment from "moment";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { imgUrl } from "../../utils/httpClient";
import { transliterate } from "../../const/ToKrillang";

const NewspaperCard = ({ item }) => {
  function download(url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <NewspaperCardWrapper>
      <img src={`${imgUrl}${item?.__photo__?.url_1}`} alt="newspaper" />
      <h3>{transliterate(item?.data?.title)}</h3>
      <div className="card-time">
        <p>
          <AccessTimeIcon />
          {moment(item?.create_at).format("DD MM YYYY")}
        </p>
        <Button
          variant="text"
          onClick={() => download(imgUrl + item?.__file__?.url_1)}
        >
          <FileDownloadIcon /> dowload
        </Button>
      </div>
    </NewspaperCardWrapper>
  );
};

export default NewspaperCard;
