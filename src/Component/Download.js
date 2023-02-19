/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "../Styling/Download.css"

export default function Download() {
    return (
        <section id="downloadApp">
            <div class="container downloadApp__container">
                <div class="downloadApp__content">
                    <h1>
                        Download <br />
                        App
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nisi
                        quasi, non maxime ea voluptatibus fuga architecto laborum
                        repudiandae obcaecati.
                    </p>
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
                </div>
                <div class="download__image">
                    <img class="d-img" src="/images/app.png" alt="" />
                </div>
            </div>
        </section>
    )
}
