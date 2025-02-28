import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <nav className="navContainer">
      <div className="navContent">
        <Logo />
        <NavLinks />
        <RightSection />
      </div>
    </nav>
  </>
  )
}

export default Navbar



const Logo: React.FC = () => {
  return (
    <div className="logoSection">
      <h1 className="logoText">
        <span>Alien</span>
        <span className="highlight">Base</span>
      </h1>
    </div>
  );
};

const NavLinks: React.FC = () => {
  return (
    <div className="navLinks">
      <button className="navLink">Home</button>
      <button className="navLinkActive">Swap</button>
      <button className="navLink">Portfolio</button>
      <button className="navLink">Farm</button>
      <button className="navLink">Liquidity</button>
    </div>
  );
};

const RightSection: React.FC = () => {
  return (
    <div className="rightSection">
      <span className="price">$0.067</span>
      <button className="menuDots">
        <i className="ti ti-dots" />
      </button>
      <button className="connectButton-navbar">Connect Wallet</button>
    </div>
  );
};
