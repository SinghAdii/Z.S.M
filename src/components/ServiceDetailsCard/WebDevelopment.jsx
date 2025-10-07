import React from 'react'
import "./ServiceDetailsCard.css";
import webDevelopmentServiceImage from "../../../assets/images/webDevelopmentServiceImage.png";


const WebDevelopment = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Web Development</span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                        Web development in IT services involves the creation and maintenance of websites and web applications that enable businesses to establish a strong online presence and deliver services effectively to their users. It encompasses a wide range of tasks, from building static websites to complex dynamic web applications with advanced features like e-commerce, content management systems (CMS), and data analytics. The process begins with front-end development, which focuses on the user interface (UI) and user experience (UX) using technologies like HTML, CSS, and JavaScript. Simultaneously, backend development handles server-side functionality, databases, and APIs, ensuring that the application is secure, scalable, and capable of meeting growing demands. Web development in IT services is essential for businesses to build customized, user-friendly websites and applications that meet their goals, engage customers, and adapt to the evolving digital landscape.
                    </p>
                    <div>
                        <img src={webDevelopmentServiceImage} alt="" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Web Development Services :</h1>
                    {/* tech 1 */}
                    <div className="serviceTechDescription">
                        <h1>Frontend Development :</h1>
                        <ul>
                            <li>
                                HTML/CSS3/JavaScript: For structuring and styling web pages.
                            </li>
                            <li>
                                React/Angular/Vue.js: Modern JavaScript frameworks for dynamic, responsive user interfaces.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>Backend Development :</h1>
                        <ul>
                            <li>
                                Node.js/Express.js: Popular for scalable and efficient server-side operations.
                            </li>
                            <li>
                                Django/Flask (Python): Python-based web frameworks for backend APIs.
                            </li>
                            <li>
                                Ruby on Rails: A full-stack web framework with simplicity and productivity in mind.
                            </li>
                            <li>
                                PHP/Laravel: Server-side scripting languages and frameworks.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>AI and Machine Learning :</h1>
                        <ul>
                            <li>
                                AI and Machine Learning in web development: Technologies like TensorFlow, PyTorch, and NLP libraries facilitate the integration of these intelligent features, making websites more responsive, secure, and user-centric.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>APIs and Integrations :</h1>
                        <ul>
                            <li>
                                RESTful APIs and GraphQL: Commonly used to enable communication between the frontend and backend services or integrate third-party services (e.g., payment gateways, geolocation services).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WebDevelopment