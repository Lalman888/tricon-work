import React from "react";
// import "./TokenSwap.scss";
import "../swap/TokenSwap.scss";
// import { FaExchangeAlt } from "react-icons/fa";

const AddLiquidity: React.FC = () => {
  return (
    <>
      <main className="tokenSwap">
        <section className="tokenSwap__section">
          <h1 className="tokenSwap__label">Select Token</h1>
          <TokenInput
            tokenIcon="/usdbc.svg"
            tokenName="USDBC"
            fiatAmount="Balance"
            tokenAmount="~$0.00"
            altText="USDBC icon"
          />
        </section>

        <SwapButton />

        <section className="tokenSwap__section">
          <h2 className="tokenSwap__label">Choose Token</h2>
          <TokenInput
            tokenIcon="/weth.svg"
            tokenName="WETH"
            fiatAmount="Balance"
            tokenAmount="~$0.00"
            rateChange=""
            altText="ALB icon"
          />
        </section>
        <section>
          <button
            className="swap-button"
            // onClick={handleSwap}
            aria-label="Swap Now"
          >
            Add Liquidity
          </button>
        </section>
        <div>
            <p
            className="lp-reward"
            >
            LP reward APR 2.39%
            </p>
        </div>

        <section></section>
      </main>
    </>
  );
};

interface SwapButtonProps {
  swapIcon: string;
}

const SwapButton = () => {
  return (
    <section className="swapButton">
      {/* <div className="swapButton__background"></div> */}
      {/* <img src={swapIcon} alt="Swap icon" className="swapButton__icon" /> */}
      <span
        className="add-liquidity-text"
        style={{
          color: "#FFC412",
        }}
      >
        CHOOSE A VALID PAIR
      </span>
    </section>
  );
};

interface TokenInputProps {
  tokenIcon: string;
  tokenName: string;
  fiatAmount: string;
  tokenAmount: string;
  rateChange?: string;
  altText: string;
}

const TokenInput: React.FC<TokenInputProps> = ({
  tokenIcon,
  tokenName,
  fiatAmount,
  tokenAmount,
  rateChange,
  altText,
}) => {
  return (
    <section className="tokenInput">
      <img src={tokenIcon} alt={altText} className="tokenInput__icon" />
      <h2 className="tokenInput__name">{tokenName}</h2>
      <div className="tokenInput__amount">
        <p className="tokenInput__fiat">
          {fiatAmount}
          {rateChange && (
            <span className="tokenInput__rateChange">{rateChange}</span>
          )}
        </p>
        <p className="tokenInput__tokenAmount">{tokenAmount}</p>
      </div>
    </section>
  );
};

export default AddLiquidity;
