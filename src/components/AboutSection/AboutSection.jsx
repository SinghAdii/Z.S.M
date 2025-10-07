import React from "react";
import Button from "../Button/Button";
import aboutSectionImage from '../../assets/images/aboutSectionImage.png'
import "./AboutSection.css";

const AboutSection = (props) => {
    const value = 'About Us'
    return (
        // <div className="about-section">
        //     <div className="about-section-content">

        //         <h1>{props.obj.title ? props.obj.title : value}</h1>
        //         <p>{props.obj.description}</p>
        //         {props.obj.buttonTitle && <Button buttonTitle={props.obj.buttonTitle}routePath="/about" />}
        //     </div>
        //     <div className="about-section-image">
        //         <img src={props.obj?.imgSrc ? props.obj.imgSrc : aboutSectionImage}
        //             alt={props.obj?.imgSrc ? props.obj.imgSrc : "About Section Image"} />
        //     </div>
        // </div>
        <div className="aboutSectionContainer">
            <div className="aboutSectionContentContainer">
                <h1 className="aboutSectionHeading">
                    {props.obj.title ? props.obj.title : value}
                </h1>
                <p className="aboutSectionParagraph">{props.obj.description}</p>
                {props.obj.buttonTitle && (
                    <Button buttonTitle={props.obj.buttonTitle} routePath="/about" />
                )}
            </div>

            <div className="aboutSectionImageContainer">
                <img
                    src={props.obj?.imgSrc ? props.obj.imgSrc : aboutSectionImage} loading="lazy"
                    alt={props.obj?.imgSrc ? props.obj.imgSrc : 'About Section Image'}
                />
            </div>
        </div>
    );
};

export default AboutSection;