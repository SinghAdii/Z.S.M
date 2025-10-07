import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import TestingServices from '../../components/ServiceDetailsCard/Testing'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import testingImage from "../../assets/images/testingImage.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const Testings = () => {
    const heroSectionContent = {
        paragraph: 'Testing services ensure software functionality, performance, and security by identifying bugs, verifying features, and ensuring quality through systematic evaluations.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'Testing Services',
        image: testingImage
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
            <TestingServices />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default Testings