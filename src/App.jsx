import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LexCoin from "./pages/lex-coin/LexCoin";
import XBtcCoin from "./pages/xbtc-coin/XBtcCoin";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lex" element={<LexCoin />} />
        <Route path="/x-btc" element={<XBtcCoin />} />
      </Routes>
    </div>
  );
};

export default App;
