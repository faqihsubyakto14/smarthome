import React, { useState } from 'react';
import "../Styling/Faq.css";
import { UilPlus, UilMinus } from '@iconscout/react-unicons';

export default function Faq() {
    const [selected, setSelected] = useState(null);

    // dinamyc accordion
    const toogleOpne = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    const data = [
        {
            question: "How does this work ?",
            icon: UilPlus,
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Provident, vitae?"
        },
        {
            question: "Service",
            icon: UilPlus,
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Provident, vitae?"
        },
        {
            question: "Team",
            icon: UilPlus,
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Provident, vitae?"
        },
        {
            question: "About Us",
            icon: UilPlus,
            answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Provident, vitae?"
        }
    ];

    return (
        <section id="faqs">
            <h1>FAQs</h1>
            <div className="container faqs__container">
                {data.map((item, i) => (
                    <article className={selected === i ? "faq open" : "faq"} key={i}>
                        <span className="faq__icon" onClick={() => toogleOpne(i)}>{selected === i ? <UilMinus /> : <UilPlus />}</span>
                        <div className="faq__question-answer">
                            <h4 className="faq__question">{item.question}</h4>
                            <p className="faq__answer">
                                {item.answer}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
