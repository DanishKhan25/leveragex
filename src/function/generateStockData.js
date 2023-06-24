export const generateStockData = (low, high) => {
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const startDate = new Date("2023-01-01");
  const endDate = new Date("2023-02-10");
  const data = [];

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const openPrice = getRandomNumber(low, high);
    const highPrice = openPrice + getRandomNumber(0.5, 2);
    const lowPrice = openPrice - getRandomNumber(0.5, 2);
    const closePrice = getRandomNumber(lowPrice, highPrice) * 1.02;

    const dataPoint = {
      x: new Date(currentDate),
      y: [
        Number(openPrice.toFixed(2)),
        Number(highPrice.toFixed(2)),
        Number(lowPrice.toFixed(2)),
        Number(closePrice.toFixed(2)),
      ],
    };

    data.push(dataPoint);

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};
