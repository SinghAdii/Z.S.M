'use client'
import React from 'react';
import './ServiceCard.css'; // Import the CSS file for styling
import AiMLServiceCardImage from '../../../assets/images/AiMlServiceCardImage.png';
import AiXpertSitesCardimage from '../../../assets/images/AiXpertSitesCardimage.png';
import personalSoftwareServiceCardImage from '../../../assets/images/personalSoftwareServiceCardImage.png';
import webAppServiceCardImage from '../../../assets/images/webAppServiceCardImage.png';
import AppDevelopmentServiceCardImage from '../../../assets/images/AppDevelopmentServiceCardImage.png';
import webDevelopmentServiceCardImage from '../../../assets/images/webDevelopmentServiceCardImage.png';
import dataSercurityServiceCardImage from '../../../assets/images/dataSercurityServiceCardImage.png';
import cyberSecurityServiceCardImage  from '../../../assets/images/cyberSecurityServiceCardImage.png';

const ServiceCard = (props) => {
    const data=[
        {
            img:AiMLServiceCardImage, 
            serviceTitle:'AI/ML Projects',
            serviceDescription:'Forefront of technology, innovation across industries by more intelligent and automated solutions.',
            
        },
        {
            img:AiXpertSitesCardimage,
            serviceTitle:'AIXpertSites',
            serviceDescription:'A blend of "AI" and "Expert," emphasizing your expertise in creating AI-powered websites.',
        },
        {
            img:personalSoftwareServiceCardImage,
            serviceTitle:'Personal Software for Business',
            serviceDescription:'To streamline workflows, improve productivity, and make it easier to organize and automate routine tasks. ',
        },
        {
            img:webAppServiceCardImage,
            serviceTitle:'Web/App Upgradation',
            serviceDescription:'Updating and enhancing an existing website to improve its performance, security, and user experience.',
        },
        {
            img:AppDevelopmentServiceCardImage,
            serviceTitle:'App Development',
            serviceDescription:'Development involves the process of creating software applications for mobile devices.',
        },
        {
            img:webDevelopmentServiceCardImage,
            serviceTitle:'Web Development',
            serviceDescription:'Web development involves the creation and maintenance of websites and web applications.',
        },
        {
            img:dataSercurityServiceCardImage,
            serviceTitle:'Data security and protection',
            serviceDescription:'Involves safeguarding data from unauthorized access and ensuring its privacy, integrity, and legal compliance.',
        },
        {
            img:cyberSecurityServiceCardImage,
            serviceTitle:'Cyber Security',
            serviceDescription:'The protection of systems, networks and data from cyber threats and attacks.',
        },
    ]
  return (
    <>
          <div className="service-card">
            <div className="service-card-image">
              <img src={props.img} alt={props.serviceTitle} />
            </div>
            <div className="service-card-Icon">
              <img src={props.serviceIcon} alt={props.serviceTitle} />
            </div>
            <div className="service-card-content">
              <h3>{props.serviceTitle}</h3>
              <p>{props.serviceDescription}</p>
            </div>
          </div>
    </>
  );
};

export default ServiceCard;
