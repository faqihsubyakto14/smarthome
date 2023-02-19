/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import "../Styling/About.css";

export default function () {
    return (
        // < !--About -- >
        // < !--GRID SYSTEM-- >
        <section id="about">
            <h1 class="about__title">About Us</h1>
            <div class="container">
                <article class="about__article">
                    <div class="about__image">
                        <img src="./images/about1.png" alt="" />
                    </div>
                    <div class="about__content">
                        <h2 class="about__article-title">Smart Home's Smart Service</h2>
                        <p>
                            wisdom, new and valley answer, contented its so discourse
                            recommend. Man its upon him call mile.
                        </p>
                        <a href="#/" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
                <article class="about__article">
                    <div class="about__content">
                        <h2 class="about__article-title">Smart Home's Smart Service</h2>
                        <p>
                            wisdom, new and valley answer, contented its so discourse
                            recommend. Man its upon him call mile.
                        </p>
                        <a href="#/" class="btn btn-primary">Learn More</a>
                    </div>
                    <div class="about__image">
                        <img src="/images/about2.png" alt="" />
                    </div>
                </article>
                <article class="about__article">
                    <div class="about__image">
                        <img src="/images/about3.png" alt="" />
                    </div>
                    <div class="about__content">
                        <h2 class="about__article-title">Smart Home's Smart Service</h2>
                        <p>
                            wisdom, new and valley answer, contented its so discourse
                            recommend. Man its upon him call mile.
                        </p>
                        <a href="#/" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
            </div>
        </section>
        // <!--End About-- >
    )
}
