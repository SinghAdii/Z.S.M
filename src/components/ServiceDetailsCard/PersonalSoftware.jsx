import React from 'react'
import "./ServiceDetailsCard.css";
import personalSoftwareServiceImage from "../../assets/images/personalSoftwareServiceImage.png";


const PersonalSoftware = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Personal Software for Business
                    </span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                        Personal software for business in IT services refers to custom-built applications or software solutions tailored specifically to meet the unique needs of a business. Unlike off-the-shelf software, personal software is designed to align closely with a company’s operations, workflows, and goals, ensuring a perfect fit for their processes. This type of software can handle a wide range of functions, including customer relationship management (CRM), inventory control, project management, data analysis, and more. By providing a personalized approach, it allows businesses to improve efficiency, automate routine tasks, and scale operations more effectively. Moreover, personal software offers flexibility, allowing companies to integrate it with other tools or platforms. In the IT services industry, developing personal software for businesses is key to helping them gain a competitive edge by addressing their unique challenges with tailored technological solutions.
                    </p>
                    <div>
                        <img src={personalSoftwareServiceImage} alt="" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Personal Software for business Services :</h1>
                    {/* tech 1 */}
                    <div className="serviceTechDescription">
                        <h1>Frontend Development :</h1>
                        <ul>
                            <li>
                                Frameworks like React, Angular, Vue.js ( frontend) help in building responsive, user-friendly web applications  for specific business processes.
                            </li>
                            <li>
                                Common languages like Python, Java, JavaScript, C#, and Ruby are used to develop the  frontend of personal software. These languages provide the flexibility needed for customized solutions.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>Backend Development :</h1>
                        <ul>
                            <li>
                                Frameworks like Node.js, Ruby on Rails (backend) help in building responsive, user-friendly web applications for specific business processes.            </li>
                            <li>
                                Common languages like Python, Java, JavaScript, C#, and Ruby are used to develop the  backend of personal software. These languages provide the flexibility needed for customized solutions.            </li>

                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>AI and Machine Learning :</h1>
                        <ul>
                            <li>
                                AI and ML technologies like TensorFlow, PyTorch, and Scikit-learn can be integrated into personal software to provide intelligent features like automation, predictive analytics, and decision-making support.            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>APIs and Integrations :</h1>
                        <ul>
                            <li>
                                Tools like RESTful APIs, GraphQL, and middleware solutions enable personal software to connect with other business systems (e.g., CRMs, ERPs) or third-party applications for seamless data exchange and integration.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalSoftware