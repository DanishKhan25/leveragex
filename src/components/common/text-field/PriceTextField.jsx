import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const PriceTextField = ({ name, label, text, value = "" }) => {
  /* input change */
  const [price, setPrice] = useState(value);

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
        endAdornment: <InputAdornment position="start">{text}</InputAdornment>,
      }}
      label={label}
    />
  );
};

export default PriceTextField;
