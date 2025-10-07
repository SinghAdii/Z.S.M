
import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import CmsEcommerce from '../../components/ServiceDetailsCard/CmsEcommerce'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import cmsEcommerce from "../../assets/images/cms-ecommerce.png";
import HeroSection from '../../components/HeroSection/HeroSection';
const CmsEcommercePage = () => {
    const heroSectionContent = {
        paragraph:
            'Boost your business with powerful CMS and e-commerce platforms like WordPress and Drupal. Build and manage dynamic websites and online stores, enhancing your online presence with easy-to-use, scalable solutions tailored to your needs.',
        normalHeading: 'Grow Your Business With ',
        coloredHeading: 'CMS and E-commerce Platforms',
        image: cmsEcommerce,
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
            <CmsEcommerce />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default CmsEcommercePage