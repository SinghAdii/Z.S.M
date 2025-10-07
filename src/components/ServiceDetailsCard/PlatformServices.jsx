import React from 'react';
import "./ServiceDetailsCard.css";
import personalSoftwareServiceImage from "../../assets/images/platform-services.png";

const PlatformServices = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Platform Services for Business</span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                        Platform services offer powerful tools for businesses to enhance operations, improve workflows, and automate processes. We provide solutions using Power BI for data visualization, ServiceNow for automating business processes, and Salesforce for customer relationship management. These platforms help businesses make data-driven decisions, streamline tasks, and drive growth. With customized integrations and services, these platforms empower businesses to stay competitive and efficient.
                    </p>
                    <div>
                        <img src={personalSoftwareServiceImage} alt="" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Platform Services for Business :</h1>

                    {/* Power BI for Data Visualization */}
                    <div className="serviceTechDescription">
                        <h1>Power BI for Data Visualization:</h1>
                        <ul>
                            <li>
                                Power BI enables businesses to visualize complex data and generate interactive reports, helping to make data-driven decisions with ease.
                            </li>
                            <li>
                                By connecting multiple data sources, Power BI provides insights through visually appealing dashboards that are easy to share across teams.
                            </li>
                        </ul>
                    </div>
                    <hr />

                    {/* ServiceNow for Automating Business Processes */}
                    <div className="serviceTechDescription">
                        <h1>ServiceNow for Automating Business Processes:</h1>
                        <ul>
                            <li>
                                ServiceNow streamlines IT service management, automates workflows, and enhances business productivity by integrating different departments.
                            </li>
                            <li>
                                The platform helps manage incidents, track progress, and ensure seamless service delivery with real-time reporting and monitoring.
                            </li>
                        </ul>
                    </div>
                    <hr />

                    {/* Salesforce for Customer Relationship Management */}
                    <div className="serviceTechDescription">
                        <h1>Salesforce for CRM:</h1>
                        <ul>
                            <li>
                                Salesforce offers a comprehensive customer relationship management system that helps businesses connect with customers, track sales, and automate marketing.
                            </li>
                            <li>
                                The platform enhances customer engagement, supports lead generation, and provides deep insights to improve sales strategies.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlatformServices;
