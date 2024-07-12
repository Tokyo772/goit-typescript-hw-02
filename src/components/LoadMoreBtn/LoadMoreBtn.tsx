import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoad: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoad }) => {
  const handleClick = () => {
    onLoad();
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
