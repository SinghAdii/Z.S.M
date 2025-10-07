import React from 'react'
import "./ServiceDetailsCard.css";
import dataSercurityServiceImage from "../../assets/images/dataSercurityServiceImage.png";



const DataSecurity = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Data Security and Protection</span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                        Data security and protection in IT services are critical for safeguarding sensitive information from unauthorized access, breaches, and cyberattacks. As businesses increasingly rely on digital systems, ensuring the confidentiality, integrity, and availability of data has become a top priority. IT services employ advanced security measures to protect data at all stages, including encryption, firewalls, intrusion detection systems, and multi-factor authentication. Data protection also involves compliance with legal standards and regulations such as GDPR (General Data Protection Regulation), HIPAA (Health Insurance Portability and Accountability Act), and CCPA (California Consumer Privacy Act) to ensure that sensitive personal information is handled responsibly.
                    </p>
                    <div>
                        <img src={dataSercurityServiceImage} alt="" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Data Security and Protection Services:</h1>
                    {/* Cloud Security Technologies  */}
                    <div className="serviceTechDescription">
                        <h1>Cloud Security Technologies:</h1>
                        <ul>
                            <li>
                                <strong>Cloud Access Security Brokers (CASB):</strong> Tools like Microsoft Cloud App Security and Netskope enforce security policies between on-premises systems and cloud service providers.
                            </li>
                            <li>
                                <strong>Encryption and Cloud Storage Services:</strong> Services like Amazon S3, Google Cloud Storage, and Azure Blob Storage offer encryption both in transit and at rest to secure data stored in the cloud.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    {/* AI and Machine Learning */}
                    <div className="serviceTechDescription">
                        <h1>AI and Machine Learning:</h1>
                        <ul>
                            <li>
                                <strong>AI/ML-Based Threat Detection:</strong> Tools like Darktrace and Cylance use AI/ML to detect anomalies and potential threats based on behavioral analysis and predictive analytics, providing proactive security measures.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataSecurity