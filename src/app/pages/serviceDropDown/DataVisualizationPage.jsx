import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import DataVisualisation from '../../components/ServiceDetailsCard/DataVisualization'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import dataVisualizationImage from "../../assets/images/dataVisualization.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const DataVisualization = () => {
    const heroSectionContent = {
        paragraph: 'Data visualization transforms complex data into visual formats like charts and graphs, helping users easily interpret trends, patterns, and insights.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'Data Visualisation',
        image: dataVisualizationImage
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
            <DataVisualisation />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default DataVisualization