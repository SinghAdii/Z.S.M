
// export const Collabration = () => {
//     return (
//         <div className='collabration-container'>
//             <div className='collabration-left'>
//                 <h1>Why Collaboration with <br /> Ziostech Solution?</h1>
//                 <ul>
//                     <li><i class="arrow-left"></i> Delivering high-quality digital projects across various industries.</li>
//                     <li><i class="arrow-left"></i> Focused on creating seamless, intuitive interfaces.</li>
//                     <li><i class="arrow-left"></i> Meticulous attention to detail in design and development.</li>
//                     <li><i class="arrow-left"></i> Customized strategies and solutions with your business goals.</li>
//                 </ul>
//             </div>
//             <div className='collabration-right'>
//                 <img src="/images/About/collabration.jpeg" alt="" />
//             </div>
//             <br />

//         </div>
//     )
// }
import React from "react";
import image6 from "../../../assets/images/collabrationImage.png";
import arrow from "../../../assets/images/Vector.png";
import "./Collabaration.css";
import FolderBackground from "../../../assets/images/blueFolder.png";
import FolderForeground from "../../../assets/images/Rectangle.png";

function Collaboration() {
    return (
        <div className="collaboration-container">
            <div
                className="folder-background"
                style={{ backgroundImage: `url(${FolderBackground})` }}
            >
                <div className="folder-content">

                    <div className="folder-details">
                        <div
                            className="folder-title"
                            style={{ backgroundImage: `url(${FolderForeground})` }}
                        >
                            Why Collaboration with Ziostech Solutions?
                        </div>
                        {/* Left Side */}
                        <div className="folder-text">
                            <ul className="points-list">
                                <li>
                                    <img src={arrow} alt="arrow" className="arrow-icon" />
                                    Delivering high-quality digital projects across various
                                    industries.
                                </li>
                                <li>
                                    <img src={arrow} alt="arrow" className="arrow-icon" />
                                    Focused on creating seamless, intuitive interfaces.
                                </li>
                                <li>
                                    <img src={arrow} alt="arrow" className="arrow-icon" />
                                    Meticulous attention to detail in design and development.
                                </li>
                                <li>
                                    <img src={arrow} alt="arrow" className="arrow-icon" />
                                    Customized strategies and solutions with your business goals.
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* Right Side */}
                    <div className="folder-image">
                        <img src={image6} alt="Collaboration" className="image-rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collaboration;
