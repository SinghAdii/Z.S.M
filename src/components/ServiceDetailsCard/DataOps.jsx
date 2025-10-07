import React from 'react'
import "./ServiceDetailsCard.css";
import dataOpsImage from "../../assets/images/dataOps.png";


const DataOps = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">DataOps
                    </span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                    DataOps is an emerging practice focused on streamlining and automating the end-to-end data lifecycle, from data collection to processing and analysis. It combines principles from DevOps and Agile methodologies to improve the collaboration between data engineers, data scientists, and business teams. DataOps emphasizes continuous integration, continuous delivery, and automation in data workflows, ensuring faster, more reliable, and scalable data management. By promoting collaboration, transparency, and agility, DataOps helps organizations reduce data bottlenecks, enhance data quality, and accelerate data-driven decision-making. This approach ensures that data is always accessible, accurate, and aligned with business goals.
                    </p>
                    <div>
                        <img src={dataOpsImage} alt="AI/ML Projects" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom DataOps Services :</h1>
                    {/* Programming Languages */}
                    <div className="serviceTechDescription">
                        <h1>Heroku :</h1>
                        <ul>
                            <li>
                            Platform-as-a-Service (PaaS) – Heroku is a cloud-based platform that allows developers to build, run, and scale applications without managing the underlying infrastructure, simplifying deployment and application management.
                            </li>
                            <li>
                            Support for Multiple Programming Languages – Heroku supports several programming languages, including Ruby, Python, Java, Node.js, and PHP, making it versatile for developers across different tech stacks.
                            </li>
                            <li>
                            Add-Ons & Scalability – Heroku offers a wide range of add-ons for databases, caching, monitoring, and more, along with the ability to easily scale applications by adjusting resources based on demand.
                            </li>
                        </ul>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default DataOps