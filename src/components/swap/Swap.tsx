import React, { useState } from "react";
import "./Swap.scss";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaSync } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import TokenSwap from "./TokenSwap";
export type TabType = "alien" | "stable";

const Swap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("alien");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&display=swap"
        rel="stylesheet"
      />
      <main className="swapContainer">
        <section className="swapTabs">
          <button
            className={activeTab === "alien" ? "tabActive" : "tab"}
            onClick={() => setActiveTab("alien")}
            aria-selected={activeTab === "alien"}
            role="tab"
          >
            Alien Swap
          </button>
          <button
            className={activeTab === "stable" ? "tabActive" : "tab"}
            onClick={() => setActiveTab("stable")}
            aria-selected={activeTab === "stable"}
            role="tab"
          >
            Stable Swap
          </button>
        </section>

        <section className="swapCard">
          <Header activeTab={activeTab} />
        
          <div>
            <TokenSwap />
          </div>
         
       
        </section>
      </main>
    </>
  );
};

// Header Component
const Header: React.FC<{ activeTab: TabType }> = ({ activeTab }) => {
  return (
    <header className="header">
      <div className="header__icon">
        <RiBarChart2Fill />
      </div>
      <div className="header__title">
        <h4 className="header__title-text">
          {activeTab === "alien" ? "Alien Swap" : "Stable"}
        </h4>
        <p className="header__subtitle">Trade tokens in an instant</p>
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


export default Swap;
