import s from "./Grid.module.css";
const Grid = ({ children }) => {
  return <div className={s.gridContainer}>{children}</div>;
};

export default Grid;
