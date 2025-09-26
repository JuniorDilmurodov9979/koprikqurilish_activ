import { LoaderWrapper } from "./LoaderWrapper";
import { LOGOGIF } from "../../assets/imags";

const Loader = () => {
  return (
    <LoaderWrapper>
      <video src={LOGOGIF} autoPlay muted className="hf"></video>
    </LoaderWrapper>
  );
};

export default Loader;
