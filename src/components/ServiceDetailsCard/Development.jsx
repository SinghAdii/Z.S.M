import React from 'react'
import "./ServiceDetailsCard.css";
import "./Development.css"

import AppDevelopmentServiceImage from "../../assets/images/AppDevelopmentServiceImage.png";

const Development = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                {/* <h1>
                    <span className="serviceHeadingTitle"> Development</span>
                </h1> */}
                <div className="ServiceCardDescriptionContainer">
                    <div className='ServiceCardSubDescriptionContainer'>
                        <p>  <span className="servicesubHeadingTitle">Web Development: </span>
                            Web development involves creating and managing websites and applications for seamless user experiences. It includes front-end interfaces, back-end logic, and databases. Technologies like React, Node.js, and Python enable scalable solutions, ensuring security, performance, and digital transformation for businesses.
                        </p>
                        <p> <span className="servicesubHeadingTitle">Android Development: </span>
                            Android development focuses on building mobile applications for Android devices using Java, Kotlin, or Flutter. It ensures seamless user experiences, optimized performance, and integration with APIs. Scalable, secure, and feature-rich apps enhance business growth in the competitive mobile market.
                        </p>
                    </div>


                    <div>
                        <img src={AppDevelopmentServiceImage} alt="" />
                    </div>
                </div>

                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom  Development Services :</h1>

                    {/* Frontend Development */}
                    <div className="serviceTechDescription">
                        <h1>Frontend Development :</h1>
                        <ul>
                            <li>
                                For web development, we use HTML, CSS, and JavaScript to create responsive and interactive interfaces. Modern frameworks like React ensure fast and efficient UI development.
                            </li>
                            <li>
                                For Android development, we use React Native to build cross-platform mobile applications with a native-like experience and high performance.
                            </li>
                        </ul>
                    </div>
                    <hr />

                    {/* Backend Development */}
                    <div className="serviceTechDescription">
                        <h1>Backend Development :</h1>
                        <ul>
                            <li>
                                We use backend technologies like Java (Spring), Python (Django, Flask), and Node.js (Express) to build secure and scalable web applications.
                            </li>
                            <li>
                                Our backend solutions provide seamless data processing, API integration, and authentication for a high-performance web experience.
                            </li>
                        </ul>
                    </div>
                    <hr />

                    {/* Database Technologies */}
                    <div className="serviceTechDescription">
                        <h1>Database Technologies :</h1>
                        <ul>
                            <li>
                                Our database solutions include PostgreSQL, MySQL, AWS databases, and MongoDB, ensuring efficient and secure data management.
                            </li>
                            <li>
                                We design scalable database architectures that enhance data accessibility, integrity, and security for web applications.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Development
