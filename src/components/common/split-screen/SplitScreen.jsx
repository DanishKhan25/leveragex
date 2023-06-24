import React from "react";
import classes from "./split-screen.module.scss";
const SplitScreen = ({ leftTop, leftBottom, rightTop, rightBottom }) => {
  return (
    <section className={classes["wraper"]}>
      <div className={classes["left-pane"]}>
        <div className={classes["left-pane-top-section"]}>{leftTop}</div>
        <div className={classes["left-pane-bottom-section"]}>{leftBottom}</div>
      </div>
      <div className={classes["right-pane"]}>
        <div className={classes["right-pane-top-section"]}>{rightTop}</div>
        <div className={classes["right-pane-bottom-section"]}>
          {rightBottom}
        </div>
      </div>
    </section>
  );
};

export default SplitScreen;
