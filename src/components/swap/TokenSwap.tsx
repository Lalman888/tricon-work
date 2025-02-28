import React from "react";
import "./TokenSwap.scss";
// import { FaExchangeAlt } from "react-icons/fa";

const TokenSwap: React.FC = () => {
  return (
    <>
      <main className="tokenSwap">
        <section className="tokenSwap__section">
          <h1 className="tokenSwap__label">You Pay</h1>
          <TokenInput
            tokenIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/9670c5c86581eb021269c8c782d56df25102c2bd"
            tokenName="WETH"
            fiatAmount="~ $12.79"
            tokenAmount="37.082584"
            altText="WETH icon"
          />
        </section>

        <SwapButton
          // swapIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/4bbf76c908792434410ade35b5a0cd8ead18f8ec"
          swapIcon="/swap-icon.svg"
        />

        <section className="tokenSwap__section">
          <h2 className="tokenSwap__label">You Receive</h2>
          <TokenInput
            tokenIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/add08df83504562dc27184f58a5c07d1248b9179"
            tokenName="ALB"
            fiatAmount="~ $12.79"
            tokenAmount="37.082584"
            rateChange="(-0.2%)"
            altText="ALB icon"
          />
        </section>
        <section>
          <button
            className="swap-button"
            // onClick={handleSwap}
            aria-label="Swap Now"
          >
            SWAP NOW
          </button>
        </section>
        <section
        style={{
          width: "100%"
        }}
        >
          <div className="slippage-container">
            <label className="slippage-label">Slippage Tolerance</label>
            <div className="slippage-input">
              <div className="slippage-input__left">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/742949ddecb2432baa8cb3775c7266ea/d1bd108055c56793ffaa42c799c2fda2ce303e941f8498802491b2c7f058aec2?placeholderIfAbsent=true"
                  alt="Icon"
                  className="slippage-input__icon"
                />
                <span className="slippage-input__placeholder">
                  Enter Amount
                </span>
              </div>
              <div className="slippage-input__right">
                ~ $12.79{" "}
                <span className="slippage-input__percentage">(-0.2%)</span>
              </div>
            </div>
          </div>
        </section>
        <section>
        <div className="connect-options">
      <button
        // onClick={handleMetaMaskConnect}
        className="connect-options__button"
        aria-label="Connect with MetaMask"
      >
        <img
          // src="https://cdn.builder.io/api/v1/image/assets/742949ddecb2432baa8cb3775c7266ea/3dd3bbdb579ebc56ce9a0335771d033c9f3fb29e69dc584b3f10ed7db17f8d09?placeholderIfAbsent=true"
          src="/meta-mask.svg"
          alt="MetaMask"
          className="connect-options__icon"
        />
        <span className="connect-options__text">CONNECT METAMASK</span>
      </button>

      <button
        // onClick={handleWalletConnect}
        className="connect-options__button"
        aria-label="Connect with Wallet"
      >
        <img
          // src="https://cdn.builder.io/api/v1/image/assets/742949ddecb2432baa8cb3775c7266ea/84e6ad782be0923395b902392f73d10d3bb3cdde2a988804dcb3cf253cdf5861?placeholderIfAbsent=true"
          src="/wallet.svg"
          alt="Wallet"
          className="connect-options__icon"
        />
        <span className="connect-options__text">CONNECT WALLET</span>
      </button>
    </div>
        </section>

      <section>

      </section>

      </main>
    </>
  );
};

interface SwapButtonProps {
  swapIcon: string;
}

const SwapButton: React.FC<SwapButtonProps> = ({ swapIcon }) => {
  return (
    <section className="swapButton">
      <div className="swapButton__background"></div>
      <img src={swapIcon} alt="Swap icon" className="swapButton__icon" />
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

export default TokenSwap;
