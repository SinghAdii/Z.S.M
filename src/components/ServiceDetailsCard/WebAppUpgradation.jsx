import React from 'react'
import "./ServiceDetailsCard.css";

import webAppServiceImage from "../../../assets/images/webAppServiceImage.png";

const WebAppUpgradation = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Web/App Upgradation</span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                        Web/App upgradation in IT services refers to the process of improving or modernizing an existing website or application to enhance performance, functionality, security, and user experience. This often involves updating the underlying technology stack, optimizing the code, redesigning the user interface (UI), and adding new features to meet evolving business needs or market trends. Upgrading can also address compatibility issues with new operating systems, browsers, or devices, ensuring that the web or mobile app continues to function smoothly across platforms. Additionally, security patches and updates are critical to protect against vulnerabilities and cyber threats. In many cases, upgradation also involves migrating the app to more scalable infrastructure, such as cloud platforms, to support growing user demands. The goal is to keep the web or app relevant, efficient, and aligned with current technological standards while delivering a seamless experience to users.
                    </p>
                    <div>
                        <img src={webAppServiceImage} alt="" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Web/App Upgradation Services :</h1>
                    {/* tech 1 */}
                    <div className="serviceTechDescription">
                        <h1>Frontend Development :</h1>
                        <ul>
                            <li>
                                Web apps are often upgraded using newer versions of frameworks like React, Angular, Vue.js (for frontend). For mobile apps, frameworks like React Native, Flutter, and Swift (iOS) or Kotlin (Android) are commonly used.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>Backend Development :</h1>
                        <ul>
                            <li>
                                Web apps are often upgraded using newer versions of frameworks like Node.js, Django, Flask, or Spring Boot (for backend). For mobile apps, frameworks like React Native, Flutter, and Swift (iOS) or Kotlin (Android) are commonly used.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>AI and Machine Learning :</h1>
                        <ul>
                            <li>
                                AI Enhancements: Integrating AI tools like TensorFlow or scikit-learn during upgrades can enable predictive analytics, personalization, and automation in apps.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="serviceTechDescription">
                        <h1>APIs and Integrations :</h1>
                        <ul>
                            <li>
                                API Upgrades: Moving from older APIs to modern RESTful or GraphQL APIs improves data communication between services. This allows seamless integration with third-party services and other apps.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebAppUpgradation