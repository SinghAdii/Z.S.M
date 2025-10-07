import React from 'react'
import "./ServiceDetailsCard.css";
import containerisationImage from "../../assets/images/containerisation.png";


const Containerisation = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Containerisation 
                    </span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                    Containerization is a lightweight form of virtualization that packages software and its dependencies into isolated units called containers. These containers run consistently across different computing environments, from development to production, ensuring that the application works the same way regardless of the host system. Unlike traditional virtual machines, containers share the same OS kernel, making them more efficient and faster to deploy. Popular tools like Docker and Kubernetes help manage and orchestrate containers. Containerization simplifies development workflows, improves scalability, and enhances portability, making it easier to deploy and maintain applications in cloud or on-premise environments.
                    </p>
                    <div>
                        <img src={containerisationImage} alt="AI/ML Projects" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Containerisation Services :</h1>
                    {/* Programming Languages */}
                    <div className="serviceTechDescription">
                        <h1>Docker :</h1>
                        <ul>
                            <li>
                            Containerization Platform – Docker is a platform that allows developers to create, deploy, and run applications in containers, which package the application along with all its dependencies, ensuring consistency across environments.
                            </li>
                            <li>
                            Portability & Scalability – Docker containers can run on any system with Docker installed, making applications highly portable. Docker also supports scaling by allowing multiple containers to run simultaneously in an efficient manner.
                            </li>
                           
                        </ul>
                    </div>
                    <hr />
                    {/* Data Processing & Analysis Tools */}
                    <div className="serviceTechDescription">
                        <h1>Kubernetes :</h1>
                        <ul>
                            <li>
                            Container Orchestration – Kubernetes is an open-source platform that automates the deployment, scaling, and management of containerized applications, ensuring smooth and efficient operations across clusters of machines.
                            </li>
                           
                            <li>
                            Self-Healing & Auto-Scaling – Kubernetes provides self-healing by automatically replacing failed containers, and it supports auto-scaling based on traffic or resource usage, ensuring high availability and reliability.
                            </li>
                           
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Containerisation