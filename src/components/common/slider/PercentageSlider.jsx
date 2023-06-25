import { Slider } from "@mui/material";
import { useState } from "react";

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 25,
    label: "25%",
  },
  {
    value: 50,
    label: "50%",
  },
  {
    value: 75,
    label: "75%",
  },
  {
    value: 100,
    label: "100%",
  },
];

const PercentageSlider = () => {
  /* Slider change */
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Slider
        value={value}
        onChange={handleChange}
        marks={marks}
        // step={null}
        min={0}
        max={100}
        valueLabelDisplay="off"
      />
    </div>
  );
};

export default PercentageSlider;
