import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibilty">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Libary</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gtp3__navbar">
      <div className="gtp3__navbar-links">
        <div className="gtp3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gtp3__navbar-links_container">
          <Menu />
        </div>

        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_conatiner-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign In</p>
                  <button type="button">Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
