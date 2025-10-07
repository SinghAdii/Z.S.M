'use client'
import React, { useState } from 'react';
import './FaqSection.css';

const Faqsection = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "How does your software developer company ensure product security?",
            answer: "Ziostech ensures product security by following secure coding practices, encrypting data, and conducting regular vulnerability assessments. We comply with global security standards and provide timely updates to address emerging threats.",
        },
        {
            question: "What standards, laws, and regulations do you comply with?",
            answer: "Ziostech complies with global standards and regulations, ensuring data privacy and security. Our products are designed to meet industry-specific requirements and adhere to applicable laws worldwide.",
        },
        {
            question: "What industries does your software product development company have experience in?",
            answer: "Ziostech has experience in various industries, including healthcare, education, finance, e-commerce, and manufacturing. Our tailored solutions address unique challenges, leveraging expertise to deliver innovative and scalable software.",
        },
        {
            question: "What expertise does your development software company have?",
            answer: "Ziostech specializes in custom software development, AI and machine learning solutions, cloud computing, and mobile app development. Our team excels in creating secure, scalable, and user-friendly applications tailored to diverse business needs.",
        },
        {
            question: "What solutions does your software developer company deliver?",
            answer: "Ziostech delivers tailored solutions including custom software development, AI-powered tools, cloud-based applications, mobile and web platforms, and enterprise resource planning systems. Our solutions are designed to optimize efficiency, scalability, and user experience.",
        },
        {
            question: "How do you handle project constraints?",
            answer: "Ziostech handles project constraints by thoroughly analyzing scope, budget, and timelines to develop realistic plans and priorities. We use agile methodologies to adapt to changes quickly, ensuring efficient resource management and timely delivery.",
        },
        {
            question: "What does the software development life cycle look like in your IT software development company?",
            answer: "Our software development life cycle includes requirement analysis, design, development, testing, deployment, and maintenance. Each phase is executed with precision and agility to ensure high-quality, scalable solutions."
        },
        {
            question: "Why is Ziostech Solutions a trustworthy software engineering company?",
            answer: "Ziostech is trustworthy due to its commitment to transparency, robust security practices, and a track record of delivering innovative and reliable software solutions tailored to client needs."
        }

    ];

    //handling filter
    const [store, setStrore] = useState(faqData);
    const [name, setName] = useState("")
    const [data, setData] = useState("")


    const getData = () => {
        setData(name);
    };

    let filterout = store.filter((curValue) => {
        return curValue.question.toLowerCase().includes(data.toLowerCase());
    });
    // Toggle FAQ item
    const toggleFaq = (index) => {
        console.log("Pressed the index at", index)
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <div className="faq-background">
                <div className="faq-heading">
                    <h2 className="faq-title">FAQ</h2>
                    <p className="faq-type">Type your Questions Here</p>
                    <div className="faq-filter">
                        <input type='text' value={name} placeholder='Enter your question here' className='faq-input' onChange={(e) => setName(e.target.value)} />
                        <button className='faq-btn' onClick={getData}>Search</button>
                    </div>
                </div>
                <div className="faq-container">
                    {filterout.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question"
                                onClick={() => toggleFaq(index)}
                                style={{ cursor: "pointer" }}>
                                {faq.question}
                                <span className="faq-icon">
                                    {activeIndex === index ? "−" : "+"}
                                    {/* {console.log("hello from")} */}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqsection;
