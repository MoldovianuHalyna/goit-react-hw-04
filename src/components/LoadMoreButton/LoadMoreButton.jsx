import s from "./LoadMore.module.css";
const LoadMoreButton = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
