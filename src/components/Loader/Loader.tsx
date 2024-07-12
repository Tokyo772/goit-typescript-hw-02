import { InfinitySpin } from "react-loader-spinner";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.container}>
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};

export default Loader;
