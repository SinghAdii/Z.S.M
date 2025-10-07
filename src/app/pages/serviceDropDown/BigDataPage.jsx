import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import bigDataImage from "../../assets/images/bigData.png";
import HeroSection from '../../components/HeroSection/HeroSection';
import BigDataService from '../../components/ServiceDetailsCard/BigData'
const BigData = () => {
    const heroSectionContent = {
        paragraph: 'Big data refers to large, complex datasets analyzed for insights, helping businesses make data-driven decisions and identify trends and patterns.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'BigData Services',
        image: bigDataImage
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
            <BigDataService />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default BigData