import React from 'react'
import "../Styling/Client.css";

export default function Clients() {
    return (
        // < !--Clients -- >
        <section id="clients">
            <h1>Our Clients</h1>
            <p class="lead">
                wisdom, new and valley answer, contented its so discourse recommend. Man
                its upon him call mile.
            </p>
            {/* <!-- Grid --> */}
            <div class="container clients__container">
                <div>
                    <img src="/images/client1.png" alt="" />
                </div>
                <div>
                    <img src="/images/client2.png" alt="" />
                </div>
                <div>
                    <img src="/images/client3.png" alt="" />
                </div>
                <div>
                    <img src="/images/client4.png" alt="" />
                </div>
                <div>
                    <img src="/images/client5.png" alt="" />
                </div>
                <div>
                    <img src="/images/client6.png" alt="" />
                </div>
                <div>
                    <img src="/images/client7.png" alt="" />
                </div>
                <div>
                    <img src="/images/client8.png" alt="" />
                </div>
            </div>
        </section>
        // <!--End Clients-- >
    )
}
