import React from 'react'
import TopNavbar from '../../../components/TopNavbar/TopNavbar'
import HeroSection from '../../../components/HeroSection/HeroSection'
import servicesHeroSectionImage from '../../../assets/images/servicesHeroSectionImage.png'
import ServiceDetailsCard from '../../../components/ServiceDetailsCard/ServiceDetailsCard'
import Testimonials from '../../../components/Testimonials/Testimonials'
import ContactSection from '../../../components/ContactSection/ContactSection'
import FooterSection from '../../../components/FooterSection/FooterSection'
import ServiceCardSwiper from '../../../components/ServiceCard/ServiceCardSwiper'
// images and icons
import AiMLServiceCardImage from '../../../assets/images/AiMlServiceCardImage.png';
import AiXpertSitesCardimage from '../../../assets/images/AiXpertSitesCardimage.png';
import personalSoftwareServiceCardImage from '../../../assets/images/personalSoftwareServiceCardImage.png';
import webAppServiceCardImage from '../../../assets/images/webAppServiceCardImage.png';
import AppDevelopmentServiceCardImage from '../../../assets/images/AppDevelopmentServiceCardImage.png';
import webDevelopmentServiceCardImage from '../../../assets/images/webDevelopmentServiceCardImage.png';
import dataSercurityServiceCardImage from '../../../assets/images/dataSercurityServiceCardImage.png';
import cyberSecurityServiceCardImage  from '../../../assets/images/cyberSecurityServiceCardImage.png';
// service Card Icons
import aiMlServiceIcon from '../../../assets/Icons/AiMlServiceIcon.png'
import AiXpertsiteServiceIcon from '../../../assets/Icons/AiXpertsiteServiceIcon.png'
import personalSoftwareServiceCardIcon from '../../../assets/Icons/personalSoftwareServiceCardIcon.png'
import webAppServiceCardIcon from '../../../assets/Icons/webAppServiceCardIcon.png'
import appDevelopmentServiceCardIcon from '../../../assets/Icons/appDevelopmentServiceCardIcon.png'
import webDevelopmentServiceCardIcon from '../../../assets/Icons/webDevelopmentServiceCardIcon.png'
import dataSercurityServiceCardIcon from '../../../assets/Icons/dataSercurityServiceCardIcon.png'
import cyberSecurityServiceCardIcon from '../../../assets/Icons/cyberSecurityServiceCardIcon.png';
import bigDataImage from '../../../assets/images/bigData.png'
import testingImage from '../../../assets/images/testingImage.png'
import cmsEcommerceImage from '../../../assets/images/cms-ecommerce.png'
import ContainerisationImage from '../../../assets/images/containerisation.png'
const Services = () => {
    const heroSectionContent={
        paragraph:'Services for business refer to a range of technology-related solutions provided to support and enhance your business operations.',
        normalHeading:'Grow Your Business With Our ',
        coloredHeading:'IT Services...',
        image:servicesHeroSectionImage
    }
    const serviceCardData =[
      {
          img:AiMLServiceCardImage, 
          serviceTitle: 'Platform Services',
          serviceDescription: 'Platform services offer tools and infrastructure for efficient application development and management.',
          serviceIcon:aiMlServiceIcon,
          
      },
      {
          img:AiXpertSitesCardimage,
          serviceTitle: 'Cloud Services',
      serviceDescription: 'Cloud services provide scalable, on-demand computing resources for businesses and applications.',
          serviceIcon:AiXpertsiteServiceIcon,
      },
      {
          img:personalSoftwareServiceCardImage,
          serviceTitle: 'Data Visualisation',
          serviceDescription: 'Data visualization transforms data into visual formats for easy analysis and interpretation.',
          serviceIcon:personalSoftwareServiceCardIcon,
      },
      {
          img:webAppServiceCardImage,
          serviceTitle:'Development',
          serviceDescription:'Development involves creating, improving, and maintaining software applications and systems efficiently.',
          serviceIcon:webAppServiceCardIcon,
      },
      {
          img:AppDevelopmentServiceCardImage,
          serviceTitle:'UIUX',
          serviceDescription:'UI/UX focuses on creating intuitive, visually appealing, and user-friendly designs.',
          serviceIcon:appDevelopmentServiceCardIcon,
      },
      {
          img:webDevelopmentServiceCardImage,
          serviceTitle:'AI Integration',
          serviceDescription:'AI integration enhances systems by embedding intelligent automation and decision-making capabilities.',
          serviceIcon:webDevelopmentServiceCardIcon
      },
      {
          img:dataSercurityServiceCardImage,
          serviceTitle:'DataOps',
          serviceDescription:'DataOps streamlines data pipeline management, improving collaboration, automation, and efficiency.',
          serviceIcon:dataSercurityServiceCardIcon,
      },
      {
          img:bigDataImage,
          serviceTitle:'Big Data',
          serviceDescription:'Big Data involves large, complex datasets analyzed for insights and decision-making.',
          serviceIcon:cyberSecurityServiceCardIcon,
      },
      {
          img:testingImage,
          serviceTitle:'Testing services',
          serviceDescription:'Testing services ensure software quality, performance, security, and bug-free functionality.',
          serviceIcon:cyberSecurityServiceCardIcon,
      },
      {
          img:ContainerisationImage,
          serviceTitle:'Containerisation Tools',
          serviceDescription:'Containerization ensures consistent, portable, and efficient application deployment.',
          serviceIcon:cyberSecurityServiceCardIcon,
      },
      {
          img:cmsEcommerceImage,
          serviceTitle:'CMS E-commerce',
          serviceDescription:'CMS eCommerce platforms enable easy online store management, customization, and scalability.',
          serviceIcon:cyberSecurityServiceCardIcon,
      },
  ]
  return (
    <div>
      <TopNavbar/>
      <HeroSection paragraph={heroSectionContent.paragraph} normalHeading={heroSectionContent.normalHeading} coloredHeading={heroSectionContent.coloredHeading} image={heroSectionContent.image} routePath='/contact' showButton={true}/>
      <ServiceCardSwiper data={serviceCardData}  showRouteButton={false}/>
      <ServiceDetailsCard  />
      <Testimonials/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default Services
