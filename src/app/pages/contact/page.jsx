import React from 'react'
import TopNavbar from '../../../components/TopNavbar/TopNavbar'
import HeroSection from '../../../components/HeroSection/HeroSection'
import contactHeroSectionImage from '../../../assets/images/contactHeroSectionImage.png'
import ContactForm from '../../../components/ContactSection/ContactSection'
import FooterSection from '../../../components/FooterSection/FooterSection'
const Contact = () => {
  const heroSectionContent={
    paragraph:"Let’s create something extraordinary together—connect with us to design a captivating, high-performing website that sets your company apart and drives success!",
    normalHeading:'Get ',
    coloredHeading:'In Touch',
    image:contactHeroSectionImage,
}
  return (
    <>
      <TopNavbar/>
      <HeroSection paragraph={heroSectionContent.paragraph} normalHeading={heroSectionContent.normalHeading} coloredHeading={heroSectionContent.coloredHeading} image={heroSectionContent.image} showButton={false} />
      <ContactForm/>
      <FooterSection/>
    </>
  )
}

export default Contact
