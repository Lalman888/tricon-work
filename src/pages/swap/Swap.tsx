// import React from 'react'

import Navbar from "../../components/navbar/Navbar";
import Swap from "../../components/swap/Swap";

const SwapPage = () => {
  return (
    <div>
      <Navbar />
      <div className="swap-container">
        <Swap/>
      </div>
    </div>
  );
};

export default SwapPage;
