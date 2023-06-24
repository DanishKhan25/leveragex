import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleTradeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTradeClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", boxShadow: "none" }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ textAlign: "start", color: "#F0B90B", fontSize: "2rem" }}
        >
          LeverageX
        </Typography>
        <div style={{ flexGrow: 1, textAlign: "center" }}>
          <Button
            aria-controls="trade-menu"
            aria-haspopup="true"
            onClick={handleTradeClick}
            sx={{
              color: "#1E2329",
              textTransform: "none",
              fontSize: "24px",
            }}
          >
            Trade{" "}
            <ArrowDropDownIcon
              sx={{ transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </Button>

          <Menu
            id="trade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleTradeClose}
          >
            <MenuItem onClick={handleTradeClose}>
              Spot trade in Lex coin
            </MenuItem>
            <MenuItem onClick={handleTradeClose}>
              Trade in leverage in xBTC
            </MenuItem>
          </Menu>
        </div>
        <div>
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
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
