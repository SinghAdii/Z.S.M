import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import PlatformServices from '../../components/ServiceDetailsCard/PlatformServices'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import platformServicesImage from "../../assets/images/platform-services.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const PlatformServicesPage = () => {
    const heroSectionContent = {
        paragraph:
            'Leverage cutting-edge platform services to transform your business. From data visualization with Power BI, automating business processes with ServiceNow, to driving customer success with Salesforce, we offer tailored solutions for every need.',
        normalHeading: 'Elevate Your Business With ',
        coloredHeading: 'Platform Services',
        image: platformServicesImage,
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
            <PlatformServices />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default PlatformServicesPage