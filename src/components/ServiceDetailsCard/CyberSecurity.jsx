import React from 'react'
import "./ServiceDetailsCard.css";
import cyberSecurityServiceImage from "../../assets/images/cyberSecurityServiceImage.png";


const CyberSecurity = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Cyber Security</span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                        Cybersecurity in IT services refers to the practices, technologies, and processes designed to protect computer systems, networks, and data from cyber threats and attacks. As organizations increasingly rely on digital infrastructure, cybersecurity has become paramount for safeguarding sensitive information and maintaining business continuity. IT services employ a multi-layered approach to cybersecurity, including risk assessment, threat detection, incident response, and compliance with regulatory standards. Key components of cybersecurity include firewalls, intrusion detection systems, encryption, and endpoint protection to safeguard against unauthorized access and data breaches. By integrating comprehensive cybersecurity strategies, IT services help organizations mitigate risks, protect valuable data, and ensure the resilience of their digital operations in an increasingly complex threat landscape.
                    </p>
                    <div>
                        <img src={cyberSecurityServiceImage} alt="" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Cyber Security Services:</h1>
                    {/* Intrusion Detection and Prevention Systems */}
                    <div className="serviceTechDescription">
                        <h1>Intrusion Detection and Prevention Systems (IDPS):</h1>
                        <ul>
                            <li>
                                <strong>Intrusion Detection Systems (IDS):</strong> Monitor network traffic for suspicious activity and send alerts when potential threats are detected.
                            </li>
                            <li>
                                <strong>Intrusion Prevention Systems (IPS):</strong> Actively block or prevent identified threats in real-time, often integrated with firewalls.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    {/* Endpoint Security Solutions */}
                    <div className="serviceTechDescription">
                        <h1>Endpoint Security Solutions:</h1>
                        <ul>
                            <li>
                                <strong>Antivirus and Anti-Malware:</strong> Software that detects, prevents, and removes malware from endpoints, including computers, mobile devices, and servers.
                            </li>
                            <li>
                                <strong>Endpoint Detection and Response (EDR):</strong> Solutions that provide real-time monitoring, detection, and response capabilities for endpoint threats.
                            </li>
                        </ul>
                    </div>
                    <hr />
                    {/* AI and Machine Learning */}
                    <div className="serviceTechDescription">
                        <h1>AI and Machine Learning:</h1>
                        <ul>
                            <li>
                                <strong>AI/ML Technologies:</strong> Tools that utilize machine learning algorithms to enhance threat detection, automate security processes, and analyze vast amounts of security data for actionable insights.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CyberSecurity