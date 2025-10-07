import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import AiMlProjects from '../../components/ServiceDetailsCard/AiMlProjects'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import HeroSection from '../../components/HeroSection/HeroSection'
import AiMlServiceImage from "../../assets/images/AiMlServiceImage.png";

const AiMlProjectsPage = () => {
    const heroSectionContent = {
        paragraph: 'Unleashing Intelligence through Innovation Explore the limitless possibilities of Artificial Intelligence and Machine Learning with custom-built solutions to streamline operations and transform your business.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'AiMlProjects',
        image: AiMlServiceImage
    }
    return (
        <div>
            <TopNavbar />
            <HeroSection paragraph={heroSectionContent.paragraph} normalHeading={heroSectionContent.normalHeading} coloredHeading={heroSectionContent.coloredHeading} image={heroSectionContent.image} routePath='/contact' buttonTitle='Get In Touch' showButton={true} />
            <AiMlProjects />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default AiMlProjectsPage