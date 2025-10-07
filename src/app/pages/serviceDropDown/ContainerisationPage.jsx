import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ContainerisationService from '../../components/ServiceDetailsCard/Containerisation'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import containerisationImage from "../../assets/images/containerisation.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const Containerisation = () => {
    const heroSectionContent = {
        paragraph:'Containerization tools enable efficient software deployment by packaging applications and dependencies into isolated containers, ensuring consistency across environments and scalability.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'Containerization Tools',
        image: containerisationImage
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
            <ContainerisationService />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default Containerisation