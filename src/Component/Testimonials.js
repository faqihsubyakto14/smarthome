import React from 'react'
import "../Styling/Testimonials.css"

export default function Testimonials() {
    return (
        <section id="testimonials">
            <h1>Testimonials</h1>
            <p class="lead">
                Wisdom new and valley answer,Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Sint nulla voluptates labore praesentium nobis dicta
                dolor mollitia quae eveniet sit.
            </p>
            {/* <!-- Grid --> */}
            <div class="container testimonials__container">
                <article class="testimonial">
                    <p>
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                        fugit voluptatum id maiores quasi eum eligendi est necessitatibus
                        dolore
                    </p>
                    <div class="testimonial__client">
                        <div class="avatar">
                            <img src="/images/avatar1.jpg" alt="" />
                        </div>
                        <div class="testimonial__work">
                            <p>
                                <b>Diana ayi</b>
                            </p>
                            <small>Musician</small>
                        </div>
                    </div>
                </article>
                <article class="testimonial">
                    <p>
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                        fugit voluptatum id maiores quasi eum eligendi est necessitatibus
                        dolore
                    </p>
                    <div class="testimonial__client">
                        <div class="avatar">
                            <img src="/images/avatar2.jpg" alt="" />
                        </div>
                        <div class="testimonial__work">
                            <p>
                                <b>Marcell vario</b>
                            </p>
                            <small>Web Developer</small>
                        </div>
                    </div>
                </article>
                <article class="testimonial">
                    <p>
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                        fugit voluptatum id maiores quasi eum eligendi est necessitatibus
                        dolore
                    </p>
                    <div class="testimonial__client">
                        <div class="avatar">
                            <img src="/images/avatar3.jpg" alt="" />
                        </div>
                        <div class="testimonial__work">
                            <p>
                                <b>marco lava</b>
                            </p>
                            <small>Musician</small>
                        </div>
                    </div>
                </article>
                <article class="testimonial">
                    <p>
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                        fugit voluptatum id maiores quasi eum eligendi est necessitatibus
                        dolore
                    </p>
                    <div class="testimonial__client">
                        <div class="avatar">
                            <img src="/images/avatar4.jpg" alt="" />
                        </div>
                        <div class="testimonial__work">
                            <p>
                                <b>Beatric Azy</b>
                            </p>
                            <small>Politician</small>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
