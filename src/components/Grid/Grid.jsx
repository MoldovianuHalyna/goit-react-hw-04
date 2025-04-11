import s from "./Grid.module.css";
const Grid = ({ children, ref }) => {
  return (
    <ul ref={ref} className={s.gridContainer}>
      {children}
    </ul>
  );
};

export default Grid;
