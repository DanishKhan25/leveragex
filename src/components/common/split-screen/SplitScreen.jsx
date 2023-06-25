import classes from "./split-screen.module.scss";
const SplitScreen = ({
  leftTop,
  leftBottom,
  rightTopLeft,
  rightTopRight,
  rightBottom,
}) => {
  return (
    <section className={classes["wraper"]}>
      <div className={classes["left-pane"]}>
        <div className={classes["left-pane-top-section"]}>{leftTop}</div>
        <div className={classes["left-pane-bottom-section"]}>{leftBottom}</div>
      </div>
      <div className={classes["right-pane"]}>
        <div className={classes["right-pane-top-section"]}>
          <div className={classes["right-pane-top-left"]}>{rightTopLeft}</div>
          <div className={classes["right-pane-top-right"]}>{rightTopRight}</div>
        </div>
        <div className={classes["right-pane-bottom-section"]}>
          {rightBottom}
        </div>
      </div>
    </section>
  );
};

export default SplitScreen;
