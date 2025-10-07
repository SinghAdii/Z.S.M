import React from 'react'
import TopNavbar from '../../../components/TopNavbar/TopNavbar'
import HeroSection from '../../../components/HeroSection/HeroSection'
import contactHeroSectionImage from '../../../assets/images/contactHeroSectionImage.png'
import Faqsection from '../../../components/FaqSection/FaqSection'
import FooterSection from '../../../components/FooterSection/FooterSection'

const Faq = () => {
  const heroSectionContent={
    paragraph:'To provide clear and concise answers to your most frequently asked questions about our services, processes, and everything in between. Whether you’re here to learn more about what we offer or need help with a specific query.',
    normalHeading:'Frequently ',
    coloredHeading:'Asked Questions',
    image:contactHeroSectionImage,
}
  
  return (
    <div>
      <TopNavbar/>
      <HeroSection paragraph={heroSectionContent.paragraph} normalHeading={heroSectionContent.normalHeading} coloredHeading={heroSectionContent.coloredHeading} image={heroSectionContent.image} showButton={false} />
      <Faqsection/>
      <FooterSection/>
    </div>
  )
}

export default Faq
