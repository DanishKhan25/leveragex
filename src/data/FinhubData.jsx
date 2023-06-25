import React, { useEffect, useState } from "react";
import axios from "axios";

const FinhubData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      handleChange(event) {
        const value = `${event.target.value}`.toUpperCase();
        this.setState({ value });
        console.log(value);
      }
    
      handleSubmit(event) {
        const symbol = this.state.value; // Use this as your symbol
        this.setState({ symbol });
        console.log(symbol);
        const finnhub = require('finnhub');
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = "<API Key>";
        const finnhubClient = new finnhub.DefaultApi()
    
        finnhubClient.quote(symbol, (error, data, response) => {
          console.log(data);
          this.setState({stockPrice: (data.c)})
        });
        finnhubClient.companyProfile2({'symbol': symbol}, (error, data, response) => {
          this.setState({stockName: (data.name)})
          console.log(data.name)
        });
        console.log("update was called")
        console.log(this.state.stockPrice)
        event.preventDefault();
      }
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data from Finhub...</p>
      )}
    </div>
  );
};

export default FinhubData;
