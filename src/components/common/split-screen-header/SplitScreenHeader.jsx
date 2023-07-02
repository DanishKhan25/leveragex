import { Button } from "@mui/material";
import classes from "./split-screen-header.module.scss";
import NotificationBellIcon from "../../../assets/svg-icons/NotificationBellIcon";
import { useNavigate } from "react-router-dom";
import laverage from "../../../assets/svg-icons/leverage2.png";
const SplitScreenHeader = ({ coinName }) => {
  const navigate = useNavigate();
  return (
    <header className={classes["header-wrapper"]}>
      <div className={classes["header-left"]}>
    <div onClick={() => navigate("/")} className={classes["logo"]}>
           <img src={laverage} alt="logo"  width={20}/>
          LeverageX</div>
        <div className={classes["coin-name"]}>{coinName}</div>
      </div>
      <div className={classes["header-center"]}>
        <div className={classes["header-center-wrapper"]}>
          <div>0.51354</div>
          <div>$0.51354</div>
        </div>
        <div className={classes["header-center-wrapper"]}>
          <div>24h changes</div>
          <div>0.051354 +8.15% </div>
        </div>
        <div className={classes["header-center-wrapper"]}>
          <div>24h changes</div>
          <div>0.051354 +8.15% </div>
        </div>
        <div className={classes["header-center-wrapper"]}>
          <div>24h Low</div>
          <div>0.055</div>
        </div>
        <div className={classes["header-center-wrapper"]}>
          <div>24h high</div>
          <div>0.855</div>
        </div>
        <div className={classes["header-center-wrapper"]}>
          <div>24h volume</div>
          <div>844,540,855</div>
        </div>
      </div>
      <div className={classes["header-right"]}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#1E2329",
            marginRight: "16px",
            textTransform: "none",
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fcd535",
            color: "#fff",
            textTransform: "none",
          }}
        >
          Register
        </Button>
        <span style={{ marginLeft: "1rem" }}>
          <NotificationBellIcon />
        </span>
      </div>
    </header>
  );
};

export default SplitScreenHeader;
