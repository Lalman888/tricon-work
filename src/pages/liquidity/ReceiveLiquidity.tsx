

import ReceiveLiquidityTab from '../../components/liquidity/ReceiveLiquidityTab'
import Navbar from '../../components/navbar/Navbar'

const ReceiveLiquidityPage = () => {
  return (
    <>
     <div>
        <Navbar />
        <div
        className="liquidity-Container"
        >
        <ReceiveLiquidityTab />
        </div>
      </div>
    </>
  )
}

export default ReceiveLiquidityPage