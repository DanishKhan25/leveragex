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
import NotificationBellIcon from "../../assets/svg-icons/NotificationBellIcon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleTradeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTradeClose = (type) => {
    setAnchorEl(null);
    if (type === "lex") navigate("/lex");

    if (type === "btc") navigate("/x-btc");
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
            <MenuItem onClick={() => handleTradeClose("lex")}>
              {/* <Link to="/lex">Spot trade in Lex coin</Link> */}Spot trade in
              Lex coin
            </MenuItem>
            {/* <Link to="/x-btc"> */}
            <MenuItem onClick={() => handleTradeClose("btc")}>
              Trade in leverage in xBTC
            </MenuItem>
            {/* </Link> */}
          </Menu>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
