import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import homeHeroSectionImage from '../../assets/images/homeHeroSectionImage.png'
import Testimonials from '../../components/Testimonials/Testimonials'
import ProjectSwiper from '../../components/ProjectCard/ProjectSwiper'
import FooterSection from '../../components/FooterSection/FooterSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import Collaboration from '../../components/Collabaration/Collabaration'
import AboutSection from '../../components/AboutSection/AboutSection'
import AnimationNumber from '../../components/AnimationNumber/AnimationNumber'
// import Faqsection from '../../components/FaqSection/FaqSection'
import CustomSection from '../../components/CustomSection/CustomSection'
import ServiceCardSwiper from '../../components/ServiceCard/ServiceCardSwiper'
// images and icons 
import AiMLServiceCardImage from '../../assets/images/AiMlServiceCardImage.png';
import AiXpertSitesCardimage from '../../assets/images/AiXpertSitesCardimage.png';
import personalSoftwareServiceCardImage from '../../assets/images/personalSoftwareServiceCardImage.png';
// service Card Icons
import aiMlServiceIcon from '../../assets/Icons/AiMlServiceIcon.png'
import AiXpertsiteServiceIcon from '../../assets/Icons/AiXpertsiteServiceIcon.png'
import personalSoftwareServiceCardIcon from '../../assets/Icons/personalSoftwareServiceCardIcon.png'
const Home = () => {
  const heroSectionContent = {
    paragraph: 'A specialized IT services and business consulting solutions designed to help companies optimize their technology and drive growth. From designing to software development  end-to-end services that enable businesses to thrive. ',
    normalHeading: 'Grow Your Business With ',
    coloredHeading: 'Powerful IT Technology',
    image: homeHeroSectionImage
  }
  const aboutobj = {
    description: 'Ziostech Solutions Private Limited provide specialized IT services and business consulting solutions designed to help companies optimize their technology and drive growth. From designing to software development, we provide end-to-end services that enable businesses to thrive. We ensuring that your businesses or startups are equipped with the right tools to thrive in a digital world for long-term success.',
    buttonTitle: 'Learn more'
  }
  const serviceCardData = [
    {
      img: AiMLServiceCardImage,
      serviceTitle: 'AI/ML Projects',
      serviceDescription: 'Forefront of technology, innovation across industries by more intelligent and automated solutions.',
      serviceIcon: aiMlServiceIcon,

    },
    {
      img: AiXpertSitesCardimage,
      serviceTitle: 'AIXpertSites',
      serviceDescription: 'A blend of "AI" and "Expert," emphasizing your expertise in creating AI-powered websites.',
      serviceIcon: AiXpertsiteServiceIcon,
    },
    {
      img: personalSoftwareServiceCardImage,
      serviceTitle: 'Personal Software for Business',
      serviceDescription: 'To streamline workflows, improve productivity, and make it easier to organize and automate routine tasks. ',
      serviceIcon: personalSoftwareServiceCardIcon,
    },

  ]
  return (
    <>
      <TopNavbar />
      <HeroSection paragraph={heroSectionContent.paragraph} normalHeading={heroSectionContent.normalHeading} coloredHeading={heroSectionContent.coloredHeading} image={heroSectionContent.image} showButton={true} routePath='/services' />
      <CustomSection />

      {/* <ServiceCardSwiper /> */}

      <ServiceCardSwiper data={serviceCardData} showRouteButton={true} />

      <AboutSection obj={aboutobj} />
      <AnimationNumber />
      <ProjectSwiper />
      <Collaboration />
      <Testimonials />
      <ContactSection />
      {/* <Faqsection /> */}
      <FooterSection />
    </>
  )
}

export default Home
