import React from 'react'
import "./ServiceDetailsCard.css";
import dataVisualizationImage from "../../assets/images/dataVisualization.png";


const DataVisualization = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer"> 
                <h1>
                    <span className="serviceHeadingTitle">Data Visualisation
                    </span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                    Data Visualization is the graphical representation of data and information, using charts, graphs, maps, and other visual tools to help people understand trends, patterns, and insights within large datasets. By transforming raw data into visual formats, it makes complex data easier to comprehend and analyze, aiding in decision-making. Tools like Tableau, Power BI, and Google Data Studio are commonly used to create interactive dashboards, reports, and real-time visualizations. Effective data visualization enhances communication, enabling businesses to spot key trends, monitor performance, and present data in a more engaging and accessible way for stakeholders at all levels.
                    </p>
                    <div>
                        <img src={dataVisualizationImage} alt="AI/ML Projects" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Data Visulization Services :</h1>
                    {/* Programming Languages */}
                    <div className="serviceTechDescription">
                        <h1>Tableau :</h1>
                        <ul>
                            <li>
                            Interactive Data Visualization – Tableau is a powerful data visualization tool that enables users to create interactive, real-time dashboards and reports, helping businesses to uncover insights and make data-driven decisions.
                            </li>
                            <li>
                            Ease of Use & Integration – Tableau is user-friendly and offers seamless integration with a wide range of data sources, including databases, cloud services, and spreadsheets, making it accessible to both technical and non-technical users for in-depth analysis.
                            </li>
                          
                        </ul>
                    </div>
                    <hr />
                    {/* Data Processing & Analysis Tools */}
                    <div className="serviceTechDescription">
                        <h1>Power BI :</h1>
                        <ul>
                            <li>
                            Business Intelligence Tool – Power BI is a Microsoft-powered business analytics tool that enables users to visualize, analyze, and share data through interactive dashboards and reports, making data-driven decision-making easier.
                            </li>
                           
                            <li>
                            Integration with Microsoft Ecosystem – Power BI seamlessly integrates with Microsoft products like Excel, Azure, and SQL Server, allowing users to consolidate and analyze data from various sources within the Microsoft ecosystem.
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default DataVisualization