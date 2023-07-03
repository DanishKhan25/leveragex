import SplitScreen from "../../components/common/split-screen/SplitScreen";
import CandlestickChart from "../../components/common/charts/ChandleSticks";
import { ChartData } from "../../data/chartData";
import { useState } from "react";
import TabBar from "../../components/common/tab-bar/TabBar";
import MuiTable from "../../components/common/table/MuiTable";
import Spot from "../../components/common/spot/Spot";
import SplitScreenHeader from "../../components/common/split-screen-header/SplitScreenHeader";
import { Helmet } from "react-helmet-async";
import Allot from "../../components/common/allot/Allot";

const XBtcCoin = () => {
  let factor = 200;
  const data = ChartData.map(([timestamp, open, high, low, close]) => ({
    x: new Date(timestamp),
    y: [open * factor, high * factor, low * factor, close * factor],
  }));

  const options = {
    chart: {
      type: "candlestick",
      height: "500px",
    },
    title: {
      text: "XBTC COIN",
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      opposite: true, // add this to show the scale on the left side
      labels: {
        formatter: function (value) {
          return "$" + value.toFixed(2); // customize the labels as needed
        },
      },
    },
    series: [
      {
        data: data.slice(0, 100),
      },
    ],
  };
  /* 
table data
*/
  const totalData = [
    { price: 32100, amount: 21 },
    { price: 32100, amount: 53 },
    { price: 32550, amount: 55 },
    { price: 32650, amount: 22 },
    { price: 32650, amount: 13 },
    { price: 36650, amount: 45 },
    { price: 36650, amount: 21 },
    { price: 36655, amount: 53 },
    // { price: 32650, amount: 13 },
    // { price: 36650, amount: 45 },
    // { price: 36650, amount: 21 },
    // { price: 36655, amount: 53 },
    // { price: 36255, amount: 55 },
    { price: 36255, amount: 22 },
    { price: 31205, amount: 13 },
    // { price: 36655, amount: 53 },
    // { price: 36255, amount: 55 },
    // { price: 36255, amount: 55 },
  ];

  const rightTopLeftColumns = ["Price (USDT)", "Amount(LEX)", "Total"];

  const ordersList = ["Open orders", "Order history", "Trade history", "Fund"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>xBTC and Lex Coin | Cryptocurrency Exchange | LeverageX</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <SplitScreenHeader />
        <SplitScreen
          leftTop={<CandlestickChart options={options} />}
          leftBottom={
            <TabBar
              list={ordersList}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          }
          rightBottom={<Spot text1="LEX" text2="XBTC" text3="LEX" />}
          rightTopLeft={
            <MuiTable
              data={totalData}
              columns={rightTopLeftColumns}
              type={"total"}
            />
          }
          rightTopRight={<Allot />}
        />
      </div>
    </div>
  );
};

export default XBtcCoin;
