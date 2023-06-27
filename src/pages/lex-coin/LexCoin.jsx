import { chartData2, lexCoinData } from "../../data/chartData";
import CandlestickChart from "../../components/common/charts/ChandleSticks";
import SplitScreen from "../../components/common/split-screen/SplitScreen";
import MuiTable from "../../components/common/table/MuiTable";
import TabBar from "../../components/common/tab-bar/TabBar";
import Spot from "../../components/common/spot/Spot";
import { useState } from "react";
import SplitScreenHeader from "../../components/common/split-screen-header/SplitScreenHeader";
import { Helmet } from "react-helmet-async";

const LexCoin = () => {
  console.log("lexCoinData", lexCoinData);
  const options = {
    chart: {
      type: "candlestick",
      height: "500px",
    },
    title: {
      text: "LEX COIN",
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
        data: chartData2,
      },
    ],
  };
  /* 
table data
*/
  const totalData = [
    { price: 10000, amount: 21 },
    { price: 15000, amount: 53 },
    { price: 80000, amount: 55 },
    { price: 100000, amount: 22 },
    { price: 150000, amount: 13 },
    { price: 80000, amount: 45 },
    { price: 10000, amount: 21 },
    { price: 15000, amount: 53 },
    { price: 80000, amount: 55 },
    { price: 100000, amount: 22 },
    { price: 150000, amount: 13 },
    { price: 80000, amount: 45 },
  ];
  const timeData = [
    { price: 10000, amount: 21, time: "2023-06-25T10:50:00" },
    { price: 15000, amount: 53, time: "2023-06-25T10:51:00" },
    { price: 80000, amount: 55, time: "2023-06-25T10:52:00" },
    { price: 100000, amount: 22, time: "2023-06-25T10:53:00" },
    { price: 150000, amount: 13, time: "2023-06-25T10:54:00" },
    { price: 80000, amount: 45, time: "2023-06-25T10:55:00" },
    { price: 10000, amount: 21, time: "2023-06-25T10:50:00" },
    { price: 15000, amount: 53, time: "2023-06-25T10:51:00" },
    { price: 80000, amount: 55, time: "2023-06-25T10:52:00" },
    { price: 100000, amount: 22, time: "2023-06-25T10:53:00" },
    { price: 150000, amount: 13, time: "2023-06-25T10:54:00" },
    { price: 80000, amount: 45, time: "2023-06-25T10:55:00" },
  ];

  const rightTopLeftColumns = ["Price (USDT)", "Amount(LEX)", "Total"];
  const rightTopRightColumns = ["Price (USDT)", "Amount(LEX)", "Time"];

  const ordersList = ["Open orders", "Order history", "Trade history", "Fund"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LEX COIN | Cryptocurrency Exchange | LeverageX</title>
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
      <SplitScreenHeader coinName="LEX COIN" />
      <SplitScreen
        leftTop={<CandlestickChart options={options} />}
        leftBottom={
          <TabBar
            list={ordersList}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        }
        rightBottom={<Spot text1="USDT" text2="LEX" />}
        rightTopLeft={
          <MuiTable
            data={totalData}
            columns={rightTopLeftColumns}
            type={"total"}
          />
        }
        rightTopRight={
          <MuiTable
            data={timeData}
            columns={rightTopRightColumns}
            type={"time"}
          />
        }
      />
    </div>
  );
};

export default LexCoin;
