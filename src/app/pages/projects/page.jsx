import React from 'react'
import TopNavbar from '../../../components/TopNavbar/TopNavbar'
import HeroSection from '../../../components/HeroSection/HeroSection'
import projectsHeroSectionImage from '../../../assets/images/projectsHeroSectionImage.png'
import OurProjects from '../../../components/OurProjects/OurProjects'
import Testimonials from '../../../components/Testimonials/Testimonials'
import ContactSection from '../../../components/ContactSection/ContactSection'
import FooterSection from '../../../components/FooterSection/FooterSection'

const Projects = () => {
    const heroSectionContent={
        paragraph:'Explore our comprehensive project case studies to gain valuable insights into the full scope of our work. These case studies serve as a reference point, offering a clear view of how we tackle complex projects and consistently deliver successful results.',
        normalHeading:'Explore ',
        coloredHeading:'Our Works',
        image:projectsHeroSectionImage
    }
  return (
    <div>
      <TopNavbar/>
      <HeroSection paragraph={heroSectionContent.paragraph} normalHeading={heroSectionContent.normalHeading} coloredHeading={heroSectionContent.coloredHeading} image={heroSectionContent.image} showButton={true} routePath='/contact'/>
      <OurProjects/>
      <Testimonials/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default Projects
