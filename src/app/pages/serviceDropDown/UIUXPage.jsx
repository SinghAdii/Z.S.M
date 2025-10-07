import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import UIUXService from '../../components/ServiceDetailsCard/UIUX'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import uiuxImage from "../../assets/images/uiux.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const UIUX = () => {
    const heroSectionContent = {
        paragraph:'UI/UX design focuses on creating intuitive, user-centered interfaces and experiences that enhance usability, accessibility, and overall user satisfaction.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'UIUX Service',
        image: uiuxImage
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
            <UIUXService />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default UIUX