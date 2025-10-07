import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import CloudsService from '../../components/ServiceDetailsCard/Clouds'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import cloudServiceImage from "../../assets/images/clouds.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const Clouds = () => {
    const heroSectionContent = {
        paragraph: 'Cloud services provide on-demand access to computing resources like storage, processing power, and software, enabling remote business management and scalability.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'Cloud Services',
        image: cloudServiceImage
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
            <CloudsService />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default Clouds