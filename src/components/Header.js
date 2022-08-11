import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/Header.css";

const Header = () => {
  const ref = useRef(null);
  const [hideMenu, setHideMenu] = useState(true);
  const [hideSearch, setHideSearch] = useState(false);

  //   window.onload = function () {
  //     const hamburgerDisplay = document.querySelector(".hamburger");
  //     const ContainerMenuDisplay = document.querySelector(".ContainerMenu");
  //     hamburgerDisplay.addEventListener("click", function () {
  //       hamburgerDisplay.classList.toggle("is-active");
  //       ContainerMenuDisplay.classList.toggle("is-active");
  //     });
  //   };

  function menuShowFunc() {
    setHideMenu(false);
  }

  function menuHideFunc() {
    setHideMenu(true);
  }

  function hideMagGlass() {
    setHideSearch(false);
  }

  function showMagGlass() {
    setHideSearch(true);
  }

  return (
    <div className="Header">
      <div className="HeaderTitle">TOP SECRET SHIRTS LA</div>
        {!hideSearch ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
            id="magnifyingGlass"
            onClick={showMagGlass}
          />
        ) : (
          <>
            <div className="searchDiv">
              <input type="search" id="searchBar" placeholder="Search inventory..." />
              <label for="search">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
                  id="magnifyingGlass"
                />
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1660229420~hmac=c55efdbb55bb38520c1e0bcd5d56dfff"
                  id="xIconSearch"
                  onClick={hideMagGlass}
                />
              </label>
            </div>
          </>
        )}
      <div className="Container">
        {hideMenu ? (
          <button
            className="hamburger"
            data-hamburger-button
            ref={ref}
            onClick={menuShowFunc}
          >
            <div className="bar"></div>
          </button>
        ) : (
          <>
            <button
              className="hamburger"
              data-hamburger-button
              ref={ref}
              onClick={menuHideFunc}
            >
              <div className="bar"></div>
            </button>
            <motion.div
              className="ContainerMenu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <div>
                <NavLink to="/login">Login</NavLink>
              </div>
              <div>
                <NavLink to="/register">Register</NavLink>
              </div>
              <div>
                <NavLink to="/">Home</NavLink>
              </div>
              <div>
                <NavLink to="/shop">Shop</NavLink>
              </div>
              <div>
                <NavLink to="/about">About</NavLink>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
