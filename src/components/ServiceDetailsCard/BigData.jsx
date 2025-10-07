import React from 'react'
import "./ServiceDetailsCard.css";
import bigDataImage from "../../assets/images/bigData.png";


const BigData = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">Big Data
                    </span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                    Big Data refers to vast and complex datasets that are too large to be processed using traditional data-processing tools. It involves capturing, storing, and analyzing large volumes of structured, semi-structured, and unstructured data from various sources such as social media, sensors, transaction records, and more. Big Data technologies like Hadoop, Spark, and NoSQL databases enable the storage and analysis of these massive datasets in real time. By extracting valuable insights from Big Data, businesses can make data-driven decisions, improve operations, enhance customer experiences, and uncover new opportunities, leading to more informed strategic planning and innovation.
                    </p>
                    <div>
                        <img src={bigDataImage} alt="AI/ML Projects" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom Big Data Services :</h1>
                    {/* Programming Languages */}
                    <div className="serviceTechDescription">
                        <h1>Snowflake :</h1>
                        <ul>
                            <li>
                            Cloud-Based Data Platform – Snowflake is a cloud-native data warehousing platform that allows businesses to store, process, and analyze large volumes of data with high scalability, flexibility, and performance.
                            </li>
                            <li>
                            Seamless Data Sharing & Collaboration – Snowflake enables secure and easy sharing of data across different teams, departments, and organizations, promoting collaboration and real-time data insights without the need for complex data movement.
                            </li>
                          
                        </ul>
                    </div>
                    <hr />
                    {/* Data Processing & Analysis Tools */}
                    <div className="serviceTechDescription">
                        <h1>Redshift :</h1>
                        <ul>
                            <li>
                            Scalable Data Warehousing – Amazon Redshift is a fully managed data warehouse solution that allows users to store and analyze large datasets quickly, offering high performance and scalability for data-driven insights.
                            </li>
                           
                            <li>
                            Seamless Integration with AWS Ecosystem – Redshift integrates easily with other AWS services like S3, EC2, and Lambda, enabling efficient data processing, storage, and analysis across a wide range of cloud applications and services.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigData