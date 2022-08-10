import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
            <div className="ContainerMenu">
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
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
