import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
// import AppDevelopment from '../../components/ServiceDetailsCard/AppDevelopment'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import AppDevelopmentServiceImage from "../../assets/images/AppDevelopmentServiceImage.png";
import HeroSection from '../../components/HeroSection/HeroSection';
import Development from '../../components/ServiceDetailsCard/Development'
const AppDevelopmentPage = () => {
    const heroSectionContent = {
        paragraph: 'Empower your business with top-notch development solutions, including web and mobile applications. Build seamless digital experiences with modern technologies.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'Development',
        image: AppDevelopmentServiceImage
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
            <Development />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default AppDevelopmentPage