import React from "react";
import { chartData2 } from "../../data/chartData";
import CandlestickChart from "../../components/common/charts/ChandleSticks";
import SplitScreen from "../../components/common/split-screen/SplitScreen";
import MuiTable from "../../components/common/table/MuiTable";

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
  ];
  const timeData = [
    { price: 10000, amount: 21, time: "2023-06-25T10:50:00" },
    { price: 15000, amount: 53, time: "2023-06-25T10:51:00" },
    { price: 80000, amount: 55, time: "2023-06-25T10:52:00" },
    { price: 100000, amount: 22, time: "2023-06-25T10:53:00" },
    { price: 150000, amount: 13, time: "2023-06-25T10:54:00" },
    { price: 80000, amount: 45, time: "2023-06-25T10:55:00" },
  ];

  const rightTopLeftColumns = ["Price (USDT)", "Amount(LEX)", "Total"];
  const rightTopRightColumns = ["Price (USDT)", "Amount(LEX)", "Time"];
  return (
    <div>
      <SplitScreen
        leftTop={<CandlestickChart options={options} />}
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
