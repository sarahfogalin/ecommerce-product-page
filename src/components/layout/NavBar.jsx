import React, { useState } from "react";

import CartIcon from "../icons/CartIcon";

/* 
  Render navigation pages into a <ul> list
*/
const renderPages = (pages) => (
  <ul className="pages">
    {pages.map((p) => (
      <li key={p}>{p}</li>
    ))}
  </ul>
);

const NavBar = ({}) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [xClicked, setXClicked] = useState(false); // State to trigger X close animation
  const pages = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <>
      {/* Main navigation bar */}
      <div className="navbar">
        {/* Left side of navbar: hamburger + logo + links */}
        <div className="menu-left">
          {/* Hamburger menu button */}
          <button
            className="hamburger-icon"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Logo */}
          <img src="/images/logo.svg" alt="logo" className="logo-img" />

          {/* Navigation links (toggle open/close) */}
          <div className={`nav-links ${hamburgerOpen ? "open" : ""}`}>
            {/* Close button inside the mobile menu */}
            <button
              className={`close-menu-icon ${hamburgerOpen ? "showX" : ""} ${
                xClicked ? "clicked" : ""
              }`}
              onClick={() => {
                setXClicked(true);
                setTimeout(() => {
                  setXClicked(false); // Reset animation state
                  setHamburgerOpen(false); // Close hamburger menu
                }, 200); // Delay matches CSS transition duration
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Render page links */}
            {renderPages(pages)}
          </div>
        </div>

        {/* Right side of navbar: cart icon + profile photo */}
        <div className="menu-right">
          <div className="cart">
            {<CartIcon />}
            <div className="cart-quantity">3</div>
          </div>

          {/* Profile avatar */}
          <img
            src="/images/image-avatar.png"
            alt="profile-photo"
            className="profile-photo"
          />
        </div>
      </div>

      {/* Screen overlay (visible when hamburger menu is open) */}
      <div
        className={`overlay ${hamburgerOpen ? "visible" : ""}`}
        onClick={() => setHamburgerOpen(false)}
      />
    </>
  );
};

export default NavBar;
