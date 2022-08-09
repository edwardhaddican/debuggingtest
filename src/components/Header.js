import React, { useRef, useEffect } from "react"
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
                    <a href="#">Login</a>
                    </div>
                    <div>
                    <a href="#">Register</a>
                    </div>
                    <div>
                    <a href="#">Home</a>
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