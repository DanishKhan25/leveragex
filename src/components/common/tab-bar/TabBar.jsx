import classes from "./tabbar.module.scss";
import PropTypes from "prop-types";
const TabBar = ({ list, setActiveTab, activeTab }) => {
  const handleActive = (index) => {
    setActiveTab(index);
  };
  return (
    <div className={classes["tab-bar"]}>
      {list.map((title, index) => (
        <div
          key={index}
          onClick={() => handleActive(index)}
          className={`${classes["tab-bar-item"]} ${
            activeTab === index ? classes.active : ""
          }`}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
TabBar.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};
