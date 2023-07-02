import { useState } from "react";
import TabBar from "../tab-bar/TabBar";
import classes from "./spot.module.scss";
import PriceTextField from "../text-field/PriceTextField";
import PercentageSlider from "../slider/PercentageSlider";
import { Button } from "@mui/material";

const Spot = ({ text1, text2 }) => {
  const spotList = ["Spot", "Cross 3X", "IsoLated", "Grid"];
  const [activeTab, setActiveTab] = useState(0);
  const [navActive, setNavActive] = useState(0);
  const navBarListitem = ["Limit", "Market", "Stop Limit"];
  const handleActive = (index) => {
    setNavActive(index);
  };

  return (
    <div>
      <TabBar
        list={spotList}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <div className={classes["nav-bar"]}>
        {navBarListitem.map((title, index) => (
          <div
            key={index}
            onClick={() => handleActive(index)}
            className={`${classes["nav-bar-item"]} ${
              navActive === index ? classes.active : ""
            }`}
          >
            {title}
          </div>
        ))}
      </div>

      <form className={classes["form"]}>
        <InputForm
          backgroundColor="green"
          buttonTitle="Buy"
          text1="USDT"
          text2="LEX"
          PriceValue="32000"
          AmountValue="3"
        />
        <InputForm
          buttonTitle="Sell"
          backgroundColor="red"
          text1={text1}
          text2={text2}
          PriceValue="34000"
          AmountValue="3"
        />
      </form>
    </div>
  );
};

export default Spot;

export function InputForm({
  buttonTitle,
  backgroundColor,
  text1 = "USDT",
  text2 = "LEX",
  PriceValue = "",
  AmountValue = "",
}) {
  return (
    <div className={classes["form-left"]}>
      <PriceTextField label="Price" text={text1} value={PriceValue} />
      <PriceTextField label="Amount" text={text2} value={AmountValue} />
      <PercentageSlider />
      <Button
        variant="contained"
        sx={{
          backgroundColor: { backgroundColor },
          color: "#fff",
          textTransform: "none",
        }}
      >
        {buttonTitle}
      </Button>
    </div>
  );
}
