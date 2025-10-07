import React from 'react'
import "./ServiceDetailsCard.css";
import smartBotImage from "../../assets/images/smartBot.png";

const SmartBots = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">AI Integration
                    </span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                    AI-Powered Bots and Smart Websites use advanced artificial intelligence models to enhance user experiences by providing intelligent interactions, automation, and personalized services. These bots, often integrated with machine learning and natural language processing (NLP), can understand and respond to user queries in real time, making customer support more efficient. Websites with integrated AI can analyze user behavior, recommend products, or optimize content based on individual preferences. Additionally, they automate repetitive tasks, improve decision-making, and assist with data analysis. Popular examples include AI chatbots, recommendation engines, and virtual assistants, all of which improve engagement and drive better business outcomes.
                    </p>
                    <div>
                        <img src={smartBotImage} alt="AI/ML Projects" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom SmartBots Services :</h1>
                    {/* Programming Languages */}
                    <div className="serviceTechDescription">
                        <h1>Chatbot Integration :</h1>
                        <ul>
                            <li>
                            Real-Time Customer Support – AI-powered chatbots can instantly respond to customer inquiries, offering 24/7 support and reducing response time, which improves user satisfaction and operational efficiency.
                            </li>
                            <li>
                            Lead Generation and Automation – Chatbots help automate lead qualification and data collection, providing businesses with valuable insights while streamlining the process of engaging potential customers.
                            </li>
                          
                          
                          
                        </ul>
                    </div>
                    <hr />
                    {/* Data Processing & Analysis Tools */}
                    <div className="serviceTechDescription">
                        <h1>AI-Powered :</h1>
                        <ul>
                            <li>
                            Personalized User Experience – By analyzing user behavior, preferences, and interactions, the recommendation engine provides tailored product or content suggestions, increasing user engagement and satisfaction.
                            </li>
                            <li>
                            Boosts Conversion Rates – Personalized recommendations drive higher conversions by suggesting relevant items, improving upselling and cross-selling opportunities, and increasing overall sales on e-commerce platforms.
                            </li>
                         
                        </ul>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default SmartBots