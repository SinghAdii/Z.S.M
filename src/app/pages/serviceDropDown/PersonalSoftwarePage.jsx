import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import PersonalSoftware from '../../components/ServiceDetailsCard/PersonalSoftware'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import personalSoftwareServiceImage from "../../assets/images/personalSoftwareServiceImage.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const PersonalSoftwarePage = () => {
    const heroSectionContent = {
        paragraph:
            'Empower your business with personalized software solutions designed to meet your unique needs. Enhance productivity and streamline processes with custom-tailored software that aligns perfectly with your goals.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'Personal Software Solutions',
        image: personalSoftwareServiceImage,
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
            <PersonalSoftware />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default PersonalSoftwarePage