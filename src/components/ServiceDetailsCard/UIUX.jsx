import React from 'react'
import "./ServiceDetailsCard.css";
import uiuxImage from "../../../assets/images/uiux.png";


const UIUX = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">UIUX
                    </span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                    UI/UX design plays a crucial role in enhancing the overall user experience of digital products. UI (User Interface) refers to the visual elements, layout, colors, typography, and interactive components that a user interacts with. UX (User Experience) focuses on the overall experience of the user, ensuring that the product is intuitive, user-friendly, and meets the user's needs. UX design involves research, wireframing, prototyping, and usability testing to create a seamless interaction flow. Together, UI and UX aim to build visually appealing, functional, and engaging products that provide a smooth and satisfying experience for users.
                    </p>
                    <div>
                        <img src={uiuxImage} alt="AI/ML Projects" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom UIUX Services :</h1>
                    {/* Programming Languages */}
                    <div className="serviceTechDescription">
                        <h1>Figma :</h1>
                        <ul>
                            <li>
                            Real-Time Collaboration – Figma allows multiple designers to work simultaneously on the same file, making it easy to collaborate and receive feedback in real time.
                            </li>
                     
                            <li>
                            Prototyping & Handoff – Figma supports interactive prototyping, allowing designers to create clickable prototypes, while also providing design specs and assets for developers during handoff.
                            </li>
                          
                        </ul>
                    </div>
                  
                   
                </div>
            </div>
        </div>
    )
}

export default UIUX 