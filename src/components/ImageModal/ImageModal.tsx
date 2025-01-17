import React from "react";
import Modal from "react-modal";
import { Article } from "../App/types";

Modal.setAppElement("#root");
interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedImage: Article | null;
}
const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  selectedImage,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.90)",
        },
      }}
    >
      {selectedImage && (
        <div>
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
