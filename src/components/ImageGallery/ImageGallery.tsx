import { Article } from "../App/types";
import ImageCard from "./ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: Article[];
  onImageClick: (id: string) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={styles.ul}>
      {items.map((item) => (
        <li
          key={item.id}
          className={styles.li}
          onClick={() => onImageClick(item.id)}
        >
          <ImageCard small={item.urls.small} desc={item.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
