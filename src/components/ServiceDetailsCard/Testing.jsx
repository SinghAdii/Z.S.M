import React from 'react'
import "./ServiceDetailsCard.css";
import testingImage from "../../../assets/images/testingImage.png";


const Testing = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Testing Feature
                    </span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                    Testing is a crucial process in software development that ensures the functionality, performance, security, and reliability of applications. It involves executing a program or system with the intent of identifying bugs or issues and verifying that the software behaves as expected. Testing types include unit testing, integration testing, system testing, and acceptance testing. Automation tools, such as Selenium, Jest, and Playwright, are commonly used to streamline and accelerate testing workflows. Effective testing improves software quality, enhances user experience, and reduces the risk of defects in production. It is an essential step in the software development lifecycle, ensuring robust applications.
                    </p>
                    <div>
                        <img src={testingImage} alt="AI/ML Projects" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Testing Services :</h1>
                    {/* Programming Languages */}
                    <div className="serviceTechDescription">
                        <h1>PlayWrite :</h1>
                        <ul>
                            <li>
                            End-to-End Testing – Playwright provides fast and reliable end-to-end testing for web applications, supporting multiple browsers like Chrome, Firefox, and Safari.
                            </li>
                            <li>
                            Auto-Waiting & Smart Assertions – It automatically waits for elements to be stable, reducing flaky tests and ensuring accurate results.
                            </li>
                          
                        </ul>
                    </div>
                    <hr />
                    {/* Data Processing & Analysis Tools */}
                    <div className="serviceTechDescription">
                        <h1>Selenium :</h1>
                        <ul>
                            <li>
                            Automated Web Testing – Selenium allows automated testing of web applications across different browsers and platforms, reducing manual effort and improving efficiency.
                            </li>
                           
                            <li>
                            Integration with CI/CD Pipelines – Selenium can be integrated with tools like Jenkins, GitHub Actions, and CI/CD workflows to enable continuous testing and faster deployments.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    {/* Machine Learning Frameworks */}
                    <div className="serviceTechDescription">
                        <h1>Jest :</h1>
                        <ul>
                            <li>
                            Fast and Reliable Unit Testing – Jest is a JavaScript testing framework known for its speed and efficiency in testing React, Node.js, and other JavaScript applications.
                            </li>
                            <li>
                            Easy Integration with CI/CD – Jest seamlessly integrates with CI/CD pipelines, enabling automated and continuous testing for scalable applications.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testing