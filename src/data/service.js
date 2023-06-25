import { finnhub } from "finnhub";

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cibk2qpr01qjam617130cibk2qpr01qjam61713g";
const finnhubClient = new finnhub.DefaultApi();

finnhubClient.stockSymbols("US", (error, data, response) => {
  console.log(data);
});
