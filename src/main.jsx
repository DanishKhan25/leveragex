import React from "react";
import ReactDOM from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import Store from "./redux/store/store";

import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { finnhubClient, FinnhubProvider } from "react-finnhub";

const client = finnhubClient("cibk2qpr01qjam617130cibk2qpr01qjam61713g");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <HelmetProvider>
        <BrowserRouter>
          <FinnhubProvider client={client}>
            <App />
          </FinnhubProvider>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
