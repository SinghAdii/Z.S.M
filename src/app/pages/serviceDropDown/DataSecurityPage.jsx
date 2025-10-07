import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import DataSecurity from '../../components/ServiceDetailsCard/DataSecurity'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import dataSercurityServiceImage from "../../assets/images/dataSercurityServiceImage.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const DataSecurityPage = () => {
    const heroSectionContent = {
        paragraph:
            'Protect your business from potential threats with advanced data security solutions. Ensure the confidentiality, integrity, and availability of your data to build trust and safeguard your operations.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'Data Security Solutions',
        image: dataSercurityServiceImage,
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
            <DataSecurity />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default DataSecurityPage