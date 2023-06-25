import { Helmet } from "react-helmet-async";
import Header from "../components/header/Header";
import TextVideo from "../components/text-video-component/TextVideo";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Buy Trade and hold xBTC and Lex Coin | Cryptocurrency Exchange |
          LeverageX
        </title>
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
      <Header />
      <TextVideo />
      {/*
    header 
    heading buy trade 
    
    sign up with google 

     */}
    </div>
  );
};

export default HomePage;
