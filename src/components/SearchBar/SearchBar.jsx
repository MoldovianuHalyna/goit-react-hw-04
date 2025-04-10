import { FiSearch } from "react-icons/fi";
import { GiTerror } from "react-icons/gi";
import toast from "react-hot-toast";
import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchInput = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      toast("Please enter a search query", {
        duration: 4000,
        position: "top-center",
        icon: <GiTerror />,
        style: {
          minWidth: "250px",
          backgroundColor: "#CD5C5C",
          color: "whitesmoke",
        },
      });
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSearchInput} className={s.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={searchQuery}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          <FiSearch size="26px" color="#843aaa" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
