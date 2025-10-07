import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import CyberSecurity from '../../components/ServiceDetailsCard/CyberSecurity.jsx'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import cyberSecurityServiceImage from "../../assets/images/cyberSecurityServiceImage.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const CyberSecurityPage = () => {
    const heroSectionContent = {
        paragraph: 'Safeguard your digital assets with advanced cybersecurity solutions, ensuring complete protection against evolving threats.',
        normalHeading: 'Secure Your Business With ',
        coloredHeading: 'Cyber Security',
        image: cyberSecurityServiceImage
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
            <CyberSecurity />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default CyberSecurityPage