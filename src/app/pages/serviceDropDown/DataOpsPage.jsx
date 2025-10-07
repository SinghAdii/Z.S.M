import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import dataOpsImage from "../../assets/images/dataOps.png";
import HeroSection from '../../components/HeroSection/HeroSection';
import DataOpsService from '../../components/ServiceDetailsCard/DataOps'
const DataOps = () => {
    const heroSectionContent = {
        paragraph:'DataOps is a set of practices combining data engineering and operations, aimed at improving data pipeline efficiency, collaboration, and automation across teams.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'DataOps',
        image: dataOpsImage
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
            <DataOpsService />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default DataOps