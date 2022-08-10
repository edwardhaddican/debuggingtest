import React, { useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"
import '../style/Header.css'

const Header = () => {
    const ref = useRef(null)

    window.onload = function () {
        const hamburgerDisplay = document.querySelector('.hamburger');
        const ContainerMenuDisplay = document.querySelector('.ContainerMenu')
        hamburgerDisplay.addEventListener('click', function () {
        hamburgerDisplay.classList.toggle('is-active')
        ContainerMenuDisplay.classList.toggle('is-active')
        })
    }

    return (
        <div className="Header">
            <div className="HeaderTitle">
            TOP SECRET
            </div>
            <div className="Container">
                <button className="hamburger" data-hamburger-button ref={ref}>
                    <div className="bar"></div>
                </button>
                <div className="ContainerMenu">
                    <div>
                    <NavLink to='/login'>Login</NavLink>
                    </div>
                    <div>
                        <NavLink to='/register'>Register</NavLink>
                    </div>
                    <div>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div>
                    <a href="#">About</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header