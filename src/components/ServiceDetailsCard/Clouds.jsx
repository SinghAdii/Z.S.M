import React from 'react'
import "./ServiceDetailsCard.css";
import cloudImage from "../../assets/images/clouds.png";


const AiMlProjects = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Clouds
                    </span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                    Cloud Services refer to a wide range of computing services delivered over the internet, including storage, computing power, databases, networking, software, and analytics. These services eliminate the need for businesses to maintain physical servers and infrastructure. Cloud providers like AWS, Microsoft Azure, and Google Cloud offer scalable, flexible, and cost-effective solutions that allow businesses to access resources on-demand. Users can easily scale up or down based on their needs, ensuring efficiency and reducing costs. Cloud services enable remote work, enhance collaboration, improve security, and provide disaster recovery solutions, making them essential for modern businesses.
                    </p>
                    <div>
                        <img src={cloudImage} alt="AI/ML Projects" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Clouds Services :</h1>
                    {/* Programming Languages */}
                    <div className="serviceTechDescription">
                        <h1>AWS :</h1>
                        <ul>
                            <li>
                            Comprehensive Cloud Platform – Amazon Web Services (AWS) offers a wide range of cloud services, including computing power (EC2), storage (S3), databases (RDS), and machine learning, making it a one-stop platform for all cloud infrastructure needs.
                            </li>
                            <li>
                            Scalability & Flexibility – AWS allows businesses to scale resources up or down based on demand, providing flexibility and cost-efficiency by only paying for the services used.
                            </li>
                          
                          
                          
                        </ul>
                    </div>
                    <hr />
                    {/* Data Processing & Analysis Tools */}
                    <div className="serviceTechDescription">
                        <h1>Azure :</h1>
                        <ul>
                            <li>
                            Comprehensive Cloud Solutions – Microsoft Azure offers services for computing, storage, databases, AI, and networking, catering to a wide range of business needs.
                            </li>
                           
                            <li>
                            Seamless Integration with Microsoft Products – Azure integrates well with Microsoft tools like Office 365, Windows Server, and Active Directory, making it ideal for businesses already using Microsoft software.
                            </li>
                         
                        </ul>
                    </div>
                    <hr />
                    {/* Machine Learning Frameworks */}
                    <div className="serviceTechDescription">
                        <h1>GCP :</h1>
                        <ul>
                            <li>
                            Powerful Data & AI Services – Google Cloud Platform (GCP) excels in data storage, analytics, and machine learning with services like BigQuery and TensorFlow, making it ideal for big data and AI workloads.
                            </li>
                            <li>
                            Global Network & Security – Leveraging Google's global network, GCP provides high-speed, low-latency connections and strong security features, ensuring reliable and secure cloud services.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiMlProjects