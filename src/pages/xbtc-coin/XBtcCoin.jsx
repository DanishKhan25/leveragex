import React from "react";
import SplitScreen from "../../components/common/split-screen/SplitScreen";
import CandlestickChart from "../../components/common/charts/ChandleSticks";
import { ChartData, chartData2 } from "../../data/chartData";
import { generateStockData } from "../../function/generateStockData";

const XBtcCoin = () => {
  const data = generateStockData(80, 180);

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
    },
    series: [
      {
        data: data,
      },
    ],
  };
  return (
    <div>
      <div>
        <SplitScreen leftTop={<CandlestickChart options={options} />} />
      </div>
    </div>
  );
};

export default XBtcCoin;
