import React, { useState } from "react";

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

  const cartIcon = (
    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
    </svg>
  );

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
            {cartIcon}
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
