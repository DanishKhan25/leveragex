import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const PriceTextField = ({ name, label, text }) => {
  /* input change */
  const [price, setPrice] = useState("");

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <TextField
      name={name}
      type="text"
      autoComplete="off"
      value={price}
      onChange={handlePriceChange}
      InputProps={{
        endAdornment: <InputAdornment position="end">{text}</InputAdornment>,
      }}
      label={label}
    />
  );
};

export default PriceTextField;
