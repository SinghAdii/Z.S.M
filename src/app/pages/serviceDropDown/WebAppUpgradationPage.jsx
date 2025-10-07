import React from 'react'
import WebAppUpgradation from '../../components/ServiceDetailsCard/WebAppUpgradation'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import webAppServiceImage from "../../assets/images/webAppServiceImage.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const WebAppUpgradationPage = () => {
    const heroSectionContent = {
        paragraph:
            'Revolutionize your existing web applications with the latest technologies and features. Upgrade to ensure performance, security, and modern functionality for your growing business.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'Web/App Upgradation',
        image: webAppServiceImage,
    };
    return (
        <div>
            <TopNavbar />
            <HeroSection
                paragraph={heroSectionContent.paragraph}
                normalHeading={heroSectionContent.normalHeading}
                coloredHeading={heroSectionContent.coloredHeading}
                image={heroSectionContent.image}
                routePath='/contact'
                buttonTitle='Get In Touch'
                showButton={true}
            />
            <WebAppUpgradation />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default WebAppUpgradationPage