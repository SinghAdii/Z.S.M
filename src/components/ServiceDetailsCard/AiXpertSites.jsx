import React from 'react'
import "./ServiceDetailsCard.css";
import aiServiceImage from "../../assets/images/aiServiceImage.png";

const AiXpertSites = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">AIXpertSites</span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                        AIExpertSites services in IT refer to specialized platforms or services that provide expert knowledge, tools, and solutions in the realm of Artificial Intelligence (AI). These services typically offer consultancy to help businesses understand and implement AI technologies effectively. They also provide custom AI solutions such as machine learning models, natural language processing systems, or AI-driven analytics tailored to meet specific business needs. Additionally, AIExpertSites often grant access to AI tools, software, or platforms that enable companies to develop, deploy, and scale AI applications seamlessly. Alongside development services, they may also offer research resources, case studies, and educational materials to deepen understanding of AI. Ultimately, AIExpertSites services guide businesses in adopting AI, ensuring smooth integration with existing systems and aligning AI solutions with overall business goals, helping companies stay competitive in an AI-driven marketplace.
                    </p>
                    <div>
                        <img src={aiServiceImage} alt="" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom AIXpertSites Services :</h1>
                    {/* tech 1 */}
                    <div className="serviceTechDescription">
                        <h1>Frontend Development :</h1>
                        <ul>
                            <li>
                                HTML5/CSS3/JavaScript: For structuring and styling web pages.
                            </li>
                            <li>
                                React.js/Angular/Vue.js: Modern JavaScript frameworks for dynamic,
                                responsive user interfaces.
                            </li>
                            <li>
                                Bootstrap/Tailwind CSS: Frameworks for responsive design and UI
                                components.
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
                                Ruby on Rails: A full-stack framework with simplicity & productivity in mind.
                            </li>
                            <li>
                                PHP/Laravel: Server-side scripting languages and frameworks.            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>AI and Machine Learning :</h1>
                        <ul>
                            <li>
                                TensorFlow/PyTorch: For training AI models.
                            </li>
                            <li>
                                OpenAI APIs/Transformers: Pre-trained AI models for natural language processing (NLP), computer vision, etc.
                            </li>
                            <li>
                                AWS/GCP AI Services: Cloud-based AI and ML solutions like AWS
                            </li>
                            <li>
                                Sagemaker or Google AutoML.            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>APIs and Integrations :</h1>
                        <ul>
                            <li>
                                REST/GraphQL: For API development and communication between frontend and backend.
                            </li>
                            <li>
                                Third-party APIs: Payment gateways, social media, and more.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiXpertSites