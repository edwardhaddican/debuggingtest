import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/Header.css";

const Header = () => {
  const ref = useRef(null);
  const [hideMenu, setHideMenu] = useState(true);

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

  return (
    <div className="Header">
      <div className="HeaderTitle">TOP SECRET SHIRTS LA</div>
      <div className="searchDiv">
        <input type="search" id="searchBar"/>
        <label for="search"><img src="https://cdn-icons-png.flaticon.com/512/751/751463.png" id="magnifyingGlass" /></label>
      </div>
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
            <motion.div className="ContainerMenu"
            initial={{opacity: 0}}
            animate={{opacity: 0.9}}
            transition={{ duration: 0.7}}
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
                        <NavLink to='/shop'>Shop</NavLink>
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
