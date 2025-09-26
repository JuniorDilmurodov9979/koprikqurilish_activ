import { LawsCardWrapper } from "../../normativeDocuments/globalCard/CardWrapper";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

const CorruptionLaw = ({ item }) => {
  return (
    <LawsCardWrapper>
      <section>
        <a href={item?.file} target="_blank" rel="noopener noreferrer" download>
          <SimCardDownloadIcon className="icon" />
          <span>{item?.title}</span>
        </a>
      </section>
    </LawsCardWrapper>
  );
};

export default CorruptionLaw;
