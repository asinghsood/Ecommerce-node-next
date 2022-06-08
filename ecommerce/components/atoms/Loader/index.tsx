import { LoaderSvg } from "./Loader.style";

const Loader = () => {

  return (
    <LoaderSvg id="loader" viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </LoaderSvg>
  );
};

export default Loader;
