import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import WebDevelopment from '../../components/ServiceDetailsCard/WebDevelopment'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import webDevelopmentServiceImage from "../../assets/images/webDevelopmentServiceImage.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const WebDevelopmentPage = () => {
    const heroSectionContent = {
        paragraph:
            'Transform your online presence with cutting-edge web development solutions tailored to your business needs. Empower your brand with a seamless and engaging digital experience.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'Web Development Services',
        image: webDevelopmentServiceImage,
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
            <WebDevelopment />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default WebDevelopmentPage