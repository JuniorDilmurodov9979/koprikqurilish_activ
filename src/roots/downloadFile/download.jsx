    import { DownloadWrapper } from "./downloadWrapper";
    import AccessTimeIcon from "@mui/icons-material/AccessTime";
    import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
    import moment from "moment";
    import { imgUrl } from "../../utils/httpClient";

    const DownloadFile = ({ date, file }) => {
      return (
        <>
          <DownloadWrapper>
            <section>
              <p>
                <AccessTimeIcon className="icon" />
                <span>{moment(date).format("DD.MM.YYYY")}</span>
              </p>
              <p>
                <DownloadForOfflineOutlinedIcon className="icon" />
                <a href={`${imgUrl}${file}`} download target="blank">
                  Chop etish
                </a>
              </p>
            </section>
          </DownloadWrapper>
        </>
      );
    };

    export default DownloadFile;
