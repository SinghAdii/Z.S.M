import React from "react";
import customSectionImage from '../../assets/images/customSectionImage.png'
import "./CustomSection.css";
import CustomButton from "../Button/Button"

const CustomSection = () => {
    return (
        <>

            <div className="customSectionContainer">
                <div className="customSectionContentContainer">
                    <h1 className="customSectionHeading">Custom IT Solutions for your Business.</h1>
                    <p className="customSectionParagraph">Refers to tailored technology services designed specifically to meet the unique needs of a business. These solutions can include software development, system integration, cloud services, and IT consulting, all customized to enhance productivity, streamline operations, and support business growth. By focusing on a business's specific goals and challenges, custom IT solutions provide more flexibility, scalability, and efficiency with technology built around their exact needs.</p>
                    <CustomButton buttonTitle='Learn more' routePath="/services" />
                </div>

                <div className="customSectionImageContainer">
                    <img src={customSectionImage} loading="lazy" alt="customSolution" />
                </div>
            </div>
        </>
    );
};
export default CustomSection;