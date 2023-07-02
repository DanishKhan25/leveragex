import classes from "./Allot.module.scss";
const Allot = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.row}>
        <span>Allocated</span>
        <span>7</span>
        <span>XBTC</span>
      </div>
      <div>
        <p>The 8x price of BTC</p>
        <div className={classes.row}>
          <span>8x =</span>
          <span>2,47,6000</span>
        </div>
      </div>
      <div>
        <p>The price of one XBTC in LEX</p>
        <div className={classes.row}>
          <span>Price =</span>
          <span>32,000</span>
          <span>Lex</span>
        </div>
      </div>
    </div>
  );
};

export default Allot;
