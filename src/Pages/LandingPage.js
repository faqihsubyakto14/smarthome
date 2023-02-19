/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import About from '../Component/About';
import Clients from '../Component/Clients';
import Download from '../Component/Download';
import Faq from '../Component/Faq';
import Header from '../Component/Header';
import Subscribe from '../Component/Subscribe';
import Testimonials from '../Component/Testimonials';


const LandingPage = () => {
    return (
        <>
            <Header />
            <About />
            <Clients />
            <Testimonials />
            <Faq />
            <Download />
            <Subscribe />
        </>
    )
}

export default LandingPage