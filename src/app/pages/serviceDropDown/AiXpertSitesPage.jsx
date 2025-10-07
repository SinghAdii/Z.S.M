import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import AiXpertSites from '../../components/ServiceDetailsCard/AiXpertSites'
import aiServiceImage from "../../assets/images/aiServiceImage.png";
import HeroSection from '../../components/HeroSection/HeroSection';


const AiXpertSitesPage = () => {
    const heroSectionContent = {
        paragraph: 'Empower Your Business with AI-Driven Expert Sites. Experience cutting-edge solutions tailored to meet your unique needs and enhance your online presence.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'AiXpertSites',
        image: aiServiceImage
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
            <AiXpertSites />
            <ContactSection />
            <FooterSection />
        </div>
    )
}


export default AiXpertSitesPage