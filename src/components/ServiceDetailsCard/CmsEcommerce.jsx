import React from 'react';
import "./ServiceDetailsCard.css";
import cmsEcommerce from "../../assets/images/cms-ecommerce.png";

const CmsEcommerce = () => {
    return (
        <div>
            <div className="serviceDetailsCardContainer">
                <h1>
                    <span className="serviceHeadingTitle">CMS and E-commerce Platform Services</span>
                </h1>
                <div className="ServiceCardDescriptionContainer">
                    <p>
                        Enhance your online presence with powerful CMS and e-commerce platforms like WordPress and Drupal. These platforms enable businesses to create dynamic websites, manage content, and run online stores with ease. Customizable themes, plugins, and integrations help tailor solutions to your specific needs, boosting your online performance and improving user engagement.
                    </p>
                    <div>
                        <img src={cmsEcommerce} alt="" />
                    </div>
                </div>
                <div className="serviceTechDescriptionContainer">
                    <h1>Our Custom CMS and E-commerce Platform Services:</h1>

                    {/* WordPress for Content Management */}
                    <div className="serviceTechDescription">
                        <h1>WordPress for Content Management:</h1>
                        <ul>
                            <li>
                                WordPress powers millions of websites with its easy-to-use CMS, offering extensive themes, plugins, and flexibility to create everything from blogs to full-fledged e-commerce sites.
                            </li>
                            <li>
                                Custom integrations, secure hosting, and ongoing support help businesses optimize their WordPress websites for improved content management and user experience.
                            </li>
                        </ul>
                    </div>
                    <hr />

                    {/* Drupal for Content and E-commerce Platforms */}
                    <div className="serviceTechDescription">
                        <h1>Drupal for CMS and E-commerce Platforms:</h1>
                        <ul>
                            <li>
                                Drupal is a flexible CMS used for building complex websites and online stores with customizable content types, advanced user management, and multi-site configurations.
                            </li>
                            <li>
                                With robust security features, Drupal helps businesses build scalable and secure web applications, enabling e-commerce and content-driven solutions that meet unique business needs.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CmsEcommerce;
