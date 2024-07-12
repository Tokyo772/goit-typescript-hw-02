import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import fetchArticles from "../../article-api";
import style from "./App.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Article } from "./types";

function App() {
  const [article, setArticle] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Article | null>(null);

  useEffect(() => {
    async function getArticle() {
      if (query.trim() === "") return;

      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticles(query, page);
        setArticle((prevArticle) => {
          return [...prevArticle, ...data.results];
        });
        setShowBtn(page < data.total_pages);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getArticle();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setShowBtn(false);
    setArticle([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (imageId: string) => {
    const image = article.find((img) => img.id === imageId);

    setSelectedImage(image || null);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={style.container}>
      <SearchBar onSubmit={handleSearch} />
      {article.length > 0 && (
        <ImageGallery items={article} onImageClick={openModal} />
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {article.length > 0 && !loading && showBtn && (
        <LoadMoreBtn onLoad={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
}

export default App;
