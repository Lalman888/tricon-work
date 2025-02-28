// import React from 'react'
import LiquidityTab from "../../components/liquidity/LiquidityTab";
import Navbar from "../../components/navbar/Navbar";

const Liquidity = () => {
  return (
    <>
      <div>
        <Navbar />
        <div
        className="liquidity-Container"
        >
          <LiquidityTab />
        </div>
      </div>
    </>
  );
};

export default Liquidity;
