import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import smartBotImage from "../../assets/images/smartBot.png";
import HeroSection from '../../components/HeroSection/HeroSection';
import SmartBotsServices from '../../components/ServiceDetailsCard/SmartBots'
const SmartBots = () => {
    const heroSectionContent = {
        paragraph:'SmartBot Website Integration enables AI-powered chatbots to interact with website visitors, automate customer support, and enhance user engagement.',
        normalHeading: 'Grow Your Business With',
        coloredHeading: 'AI Integration',
        image: smartBotImage
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
            <SmartBotsServices />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

export default SmartBots