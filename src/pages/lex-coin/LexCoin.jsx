import React from "react";
import { chartData2 } from "../../data/chartData";
import CandlestickChart from "../../components/common/charts/ChandleSticks";
import SplitScreen from "../../components/common/split-screen/SplitScreen";

const LexCoin = () => {
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
    },
    series: [
      {
        data: chartData2,
      },
    ],
  };

  return (
    <div>
      <SplitScreen leftTop={<CandlestickChart options={options} />} />
    </div>
  );
};

export default LexCoin;
