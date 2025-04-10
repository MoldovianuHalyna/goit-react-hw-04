import { RingLoader } from "react-spinners";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.backdrop}>
      <RingLoader />
    </div>
  );
};

export default Loader;
