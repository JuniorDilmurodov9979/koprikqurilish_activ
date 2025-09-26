import { Button } from "@mui/material";
import { DowlandButtonWrapper } from "./DowlandButtonWrapper";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { LargeText } from "../../const/Wrapper";

const DowlandButton = ({ link }) => {
  return (
    <DowlandButtonWrapper>
      <Button variant="text">
        <a href={link} download={true}>
          <SimCardDownloadIcon />
          <LargeText color="true">Downland file</LargeText>
        </a>
      </Button>
    </DowlandButtonWrapper>
  );
};

export default DowlandButton;
