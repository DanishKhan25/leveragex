// cibk2qpr01qjam617130cibk2qpr01qjam61713g;

import React, { useState, useEffect } from "eact";
import finnhub from "finnhub";

const Finnhub = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const api_key = "cibk2qpr01qjam617130cibk2qpr01qjam61713g;";
      const client = new finnhub.DefaultApi();

      try {
        const response = await client.getQuote("AAPL", { api_key });
        setQuote(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      {quote && (
        <div>
          <h1>Apple Stock Quote</h1>
          <p>Price: {quote.c}</p>
          <p>Change: {quote.p}</p>
          <p>Percent Change: {quote.pChange}</p>
        </div>
      )}
    </div>
  );
};

export default Finnhub;
