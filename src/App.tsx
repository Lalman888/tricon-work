// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from "react-router-dom";

import Swap from "./pages/swap/Swap";
import Liquidity from "./pages/liquidity/Liquidity";
import ReceiveLiquidityPage from "./pages/liquidity/ReceiveLiquidity";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Routes>
        <Route index element={<Swap />} />
        <Route path="liquidity" element={<Liquidity />} />
        <Route path="receive" element={<ReceiveLiquidityPage/>} />
      </Routes> */}
       <Routes>
        <Route path="/" element={<Swap />} />
        <Route path="/liquidity" element={<Liquidity />} />
        <Route path="/receive" element={<ReceiveLiquidityPage />} />
      </Routes>
      
    </>
  );
}

export default App;
