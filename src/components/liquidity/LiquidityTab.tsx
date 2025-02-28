// import React from 'react'

import { FaSync } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
// import { RiBarChart2Fill } from "react-icons/ri";
import "./LiquidityTab.scss"
import AddLiquidity from "./AddLiquidity";

const LiquidityTab = () => {
  return (
    <>
      <main className="liquidityContainer">
      <section className="swapCard">
         <Header />
         <AddLiquidity />
        </section>
      </main>
    </>
  );
};

export default LiquidityTab;


// Header Component
const Header = () => {
    return (
      <header className="header">
        {/* <div className="header__icon">
          <RiBarChart2Fill />
        </div> */}
        <div/>
        <div className="header__title">
          <h4 className="header__title-text">
            { "Add Liquidity"}
          </h4>
          <p className="header__subtitle">Receive LP tokens and earn trading fees</p>
        </div>
        <div className="header__actions">
          <div className="header__action-item">
            <FaSync />
          </div>
          <div className="header__action-item">
            <IoMdSettings />
          </div>
        </div>
      </header>
    );
  };