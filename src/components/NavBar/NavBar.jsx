import React, { useState } from "react";
import "./Navbar.css";
import { Logo, ArrowDown, ArrowUp, Close, Menubar } from "../../assets";

const Menu = () => {
  const [toggleUp, setToggleUp] = useState(false);
  const [toggleDown, setToggleDown] = useState(false);
  return (
    <>
      <p>
        <a href="/">Features</a>
      </p>
      <p>
        <a href="/">Company</a>
      </p>
      <p>
        <a href="/">Careers</a>
      </p>
      <p>
        <a href="/">About</a>
      </p>
    </>
  );
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="snap__navbar">
      <div className="snap__navbar-links">
        <div className="snap__navbar-links_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="snap__navbar-links_container">
          <Menu className="snap__navbar-links_container" />
        </div>
      </div>
      <div className="snap__navbar-sign">
        <p>Login</p>
        <button type="button">Register</button>
      </div>
      <div className="snap__navbar-menu">
        {toggleMenu ? (
          <img
            src={Close}
            alt="close button"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <img
            src={Menubar}
            alt="menubar"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="snap__navbar-menu_container scale-up-center">
            <div className="snap__navbar-menu_container-links">
              <Menu />
              <div className="snap__navbar-menu_container-links-sign">
                <p>Login</p>
                <button type="button">Register</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
