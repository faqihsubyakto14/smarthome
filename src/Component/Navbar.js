import React, { useState } from 'react';
import "../Styling/Navbar.css";
import { UilBars, UilMultiply } from '@iconscout/react-unicons'


// Add BackgroundStyle to navbar
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});


const Navbar = () => {
    const [state, setState] = useState(false);



    const NavbarToggle = () => {
        setState((state) => !state);
        // Memunculkan Close Button
    }


    return (
        <nav>
            <div className="container nav__container">
                <ul className="nav__items" style={state ? { display: 'block' } : {}}>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#testimonials">Testimonials</a></li>
                    <li><a href="index.html#faqs">Faqs</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>

                <a href="index.html" className="nav__logo"><h3>smarthome</h3> </a>

                <div className="nav__signup-signup">
                    <a href="#a">Login</a>
                    <a href="#a" className="btn">SignUp</a>
                </div>
                <button id="menu-btn" style={state ? { display: "none" } : {}} onClick={NavbarToggle}><UilBars /></button>
                <button id="close-btn" style={state ? { display: "inline-block" } : {}} onClick={NavbarToggle}><UilMultiply /></button>
            </div>
        </nav>
    )
}

export default Navbar