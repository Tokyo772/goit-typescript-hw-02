import styles from "./ImageCard.module.css";
interface ImageCardProps {
  small: string;
  desc: string;
}
const ImageCard: React.FC<ImageCardProps> = ({ small, desc }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={small} alt={desc} />

      <div className={styles.hiddenText}>
        <p className={styles.text}>{desc}</p>
      </div>
    </div>
  );
};

export default ImageCard;
