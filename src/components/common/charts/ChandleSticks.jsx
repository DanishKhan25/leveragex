import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const CandlestickChart = ({ options }) => {
  const chartRef = useRef(null);
  let chart = null;

  useEffect(() => {
    chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [options]);

  return <div ref={chartRef} />;
};

export default CandlestickChart;
