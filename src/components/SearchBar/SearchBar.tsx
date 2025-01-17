import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

import styles from "./SearchBar.module.css";
interface SearchBarProps {
  onSubmit: (newQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handlerSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const textInput = (
      form.elements.namedItem("text") as HTMLInputElement
    )?.value.trim();

    if (textInput === "") {
      toast.error("Please enter some text", {
        duration: 4000,
        position: "top-center",
        icon: "👀",
      });
    }
    onSubmit(textInput);

    form.reset();
  };
  return (
    <header>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <input
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
