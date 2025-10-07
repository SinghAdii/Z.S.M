'use client'
import React from "react";
import "./Management.css";
import imgSrc from "../../assets/images/managementSection.png"
import AboutSection from "../AboutSection/AboutSection";
// import aditya from "../../assets/images/adityacard.jpg"
import adityaProfile from "../../assets/images/aditya.jpg"
import deepProfile from '../../assets/images/Deep-profile.png'
import avtar from '../../assets/images/avatar.jpg'
import hariProfile from '../../assets/images/hariProfile.jpg'
const aboutobj = {
    
    title: "Our Management Team",
    description: 'A group of experienced and visionary leaders who bring a wealth of expertise in IT services, business consulting, and strategic innovation. With a deep understanding of the digital landscape, they are committed to driving success for our clients by fostering a culture of excellence, collaboration, and customer-centricity. Their combined leadership ensures that we consistently deliver cutting-edge solutions and empower businesses to achieve sustainable growth in an ever-evolving technological world.',
    imgSrc: imgSrc
}
const cardObject = [
    {
        id: '1',
        imgSrc: deepProfile,
        name: ' Deep Singh',
        position: 'Data Analyst',
        description: 'Data analytics involves examining raw data to uncover patterns, insights, and drive informed decisions.',
    },
    {
        id: '2',
        imgSrc: avtar,
        name: 'Dinesh Kumar',
        position: 'R&D',
        description: 'R&D focuses on innovating, researching, and developing new products, technologies, or solutions for growth.',
    },
    {
        id: '3',
        imgSrc: hariProfile,
        name: 'Harishankar Priyadarshi',
        position: 'Web Developer',
        description: 'A web developer designs, builds, and maintains websites, ensuring functionality, responsiveness, and user experience.',
    }
]
const Management = () => {
    return (
        <>
            <AboutSection obj={aboutobj} />
            <div className="teamContainer">
                <div className="teamCard">
                    {cardObject.map((cardObj) =>
                        <div className="team">
                            <img src={cardObj.imgSrc} alt="teamImage" />
                            <h2>{cardObj.name}</h2>
                            <h3>{cardObj.position}</h3>
                            <p>{cardObj.description}</p>
                        </div>
                    )}
                </div>
            </div>
            {/*  Leadership */}
            <section className="managementSection">
                <div className="leaderShipContainer">
                    <div className="leaderahip">
                        <h1 className="leaderahipHeader">
                            Leadership
                        </h1>
                    </div>
                    <div className="leadership-section">
                        <div className="leader-image">
                            <img
                                src={adityaProfile}
                                alt="Aditya Singh"
                            />
                        </div>
                        <div className="leader-description">
                            <h3>Aditya Singh</h3>
                            <h4>CEO & Founder</h4>
                            <p>
                                Aditya Singh, Founder and CEO of Ziostech Solutions Private Limited, is a Software Engineer, IT and Business Consultant. A graduate of NIT Silchar, he specializes in developing scalable and secure digital solutions tailored to client needs, offering his expertise as a self-employed consultant to deliver innovative software solutions and technology strategies for diverse business needs.
                            </p>
                            <p>
                                Ziostech Solutions developed and launched the Industry Profile Management System which is now running in various industries, like Sunrise Diagnostic Services,Medicity hospital, KVL Inter college  and many more. and providing a tailored, efficient digital solution.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
};
export default Management
