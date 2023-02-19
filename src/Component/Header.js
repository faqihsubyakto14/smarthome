/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "../Styling/Header.css";
import { UilFacebookF, UilInstagram, UilTwitterAlt, UilLinkedinAlt } from '@iconscout/react-unicons';

const Header = () => {
    return (
        <header>
            <div class="container header__container">
                <h1 class="header__title">
                    smarthome <br />
                    Application
                </h1>
                <p class="lead">
                    wisdom, new and valley answer, contented its so discourse recommend.
                    Man its upon him call mile. An pasture he himself believe ferrars
                    besides cottage
                </p>

                <div class="header__image">
                    <img src="/images/hero.png" alt="" />
                </div>

                <div class="cta">
                    <a
                        href="https://www.apple.com/app-store"
                        class="btn btn-primary"
                        target="_blank" rel="noreferrer"
                    >
                        <div class="logo">
                            <img src="/images/Apple-logo.png" />
                        </div>
                        <span>
                            <small>Download on The</small>
                            <h4>App Store</h4>
                        </span>
                    </a>
                    <a
                        href="https://www.apple.com/app-store"
                        class="btn btn-primary"
                        target="_blank" rel="noreferrer"
                    >
                        <div class="logo">
                            <img src="/images/google playstore.png" />
                        </div>
                        <span>
                            <small>Get It On </small>
                            <h4>Google Play</h4>
                        </span>
                    </a>
                </div>

                <div class="header__socials">
                    <a href="https://facebook.com/apple" target="_blank" rel="noreferrer"
                    >
                        <UilFacebookF />
                    </a>
                    <a href="https://instagram.com/apple" target="_blank" rel="noreferrer">
                        <UilInstagram />
                    </a>
                    <a href="https://twitter.com/apple" target="_blank" rel="noreferrer">
                        <UilTwitterAlt />
                    </a>
                    <a href="https://linkedin.com/apple" target="_blank" rel="noreferrer">
                        <UilLinkedinAlt />
                    </a>
                </div>
            </div>

            <div class="header__decorator-1">
                <img src="/images/header-decorator1.png" alt="" />
            </div>
            <div class="header__decorator-2">
                <img src="/images/header-decorator-2.png" alt="" />
            </div>
        </header>
    )
}

export default Header