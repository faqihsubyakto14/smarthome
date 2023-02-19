import React from 'react'
import "../Styling/Footer.css";
import { UilArrowRight } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container footer__container">
                <div class="footer__1">
                    <div class="logo">
                        <a href="index.html">
                            <h3>smartHome</h3>
                        </a>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem maxime, tenetur tempore expedita
                    </p>
                    <div class="footer__subscribe">
                        <input type="email" placeholder="Enter Email" required />
                        <button type="submit">
                            <UilArrowRight />
                            {/* <i class="uil uil-arrow-right"></i> */}
                        </button>
                    </div>
                </div>
                <div class="footer__2">
                    <h4>Permalinks</h4>
                    <ul class="permalinks">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html#about">About</a></li>
                        <li><a href="index.html#testimonials">Testimonial</a></li>
                        <li><a href="index.html#faqs">faqs</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer__3">
                    <h4>Primacy</h4>
                    <ul>
                        <li><a href="#/">Privacy Policy</a></li>
                        <li><a href="#/">Term And conditions</a></li>
                        <li><a href="#/">Refund policy</a></li>
                    </ul>
                </div>
                <div class="footer__4">
                    <h4>Contact Us</h4>
                    <p>+01 234 567 89001</p>
                    <ul class="footer__socials">
                        <li>
                            <a href="#/">
                                <i class="uil uil-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/"><i class="uil uil-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#/">
                                <i class="uil uil-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/"><i class="uil uil-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <small>Copyright &copy; EGATOR youtube Tutorials</small>
            </div>
        </footer>
    )
}

export default Footer