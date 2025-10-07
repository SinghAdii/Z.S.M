import React from 'react'
import './OurProjects.css';
import LetstartBtn from '../../components/Button/Button'
import projectimg1 from '../../assets/images/ekta.png'
import projectimg2 from '../../assets/images/medicityHospital.jpg'
import projectimg3 from '../../assets/images/sunrise.jpg'
import projectimg4 from '../../assets/images/saurabh_visionary.jpg'
import projectimg5 from '../../assets/images/avni.png'
import projectimg6 from '../../assets/images/kvl.jpg'
const OurProjects = () => {
 
  const ourProjectCardContent = [
    {
      id: 1,
      img: projectimg1,
      ourProjectCardHeading: "Ekta janch Kendra",
      ourPorjectCardDescription: "Ekta Janch Kendra is a healthcare-focused project aimed at providing reliable and accessible health-related information and services. We developed their website to provide a seamless experience for users, offering essential healthcare services and resources. Our work also included a robust profile management system and website maintenance , ensuring smooth operations and user data management for optimal service delivery."
    },
    {
      id: 2,
      img: projectimg2,
      ourProjectCardHeading: "Medicity Hospital, Unnao",
      ourPorjectCardDescription: "Medicity Hospital Unnao is a leading healthcare facility committed to providing high-quality medical care to the community. For this project, we developed a comprehensive Industry Profile Management system to streamline hospital operations. The system enables efficient management of doctor profiles, patient data, and hospital staff details, ensuring smooth coordination across departments. Our solution also includes features for updating and maintaining accurate records, improving operational efficiency, and enhancing the overall patient experience. With this system in place, Medicity Hospital Unnao is now able to deliver even more reliable and organized healthcare services."
    },
    {
      id: 3,
      img: projectimg3,
      ourProjectCardHeading: "Sunrise Diagnostic Services",
      ourPorjectCardDescription: "Sunrise Diagnostic Services is a diagnostic center dedicated to providing accurate medical testing and results. We created a user-friendly website that allows patients to easily book appointments and access diagnostic services. Our team also developed a comprehensive profile management system to help manage patient information securely, alongside providing ongoing website maintenance to ensure the platform runs smoothly and efficiently at all times."
    },
    {
      id: 4,
      img: projectimg4,
      ourProjectCardHeading: "Saurabh Visionary Ventures",
      ourPorjectCardDescription: "Saurabh Visionary Ventures is a coaching class that helps students achieve their academic goals with innovative learning methods. We developed their website to showcase their courses, faculty, and student success stories. To complement this, we created a profile management system that helps both students and teachers manage their information, while providing continuous website maintenance to ensure smooth functionality for the platform."
    },
    {
      id: 5,
      img: projectimg5,
      ourProjectCardHeading: "Avni Hospital",
      ourPorjectCardDescription: "Avni Hospital is a prominent healthcare facility that provides a wide range of medical services to the community. We developed their website to help streamline patient interactions, offering easy access to information, appointments, and medical services. Additionally, we implemented a profile management system to ensure efficient patient data handling and support the hospital’s ongoing website maintenance, allowing them to provide excellent care to their patients."
    },
    {
      id: 6,
      img: projectimg6,
      ourProjectCardHeading: "Kvl inter college parsoli raniya kanpur dehat uttar pradesh",
      ourPorjectCardDescription: "We provide innovative, secure, and user-friendly industry profile management systems . Our solutions efficiently manage student, teacher, and staff profiles while streamlining operations. With customizable features, seamless integration, and robust data security, we empower schools to focus on education as we handle their profile management needs."
    },
  ]
  return (
    <>
      <div className='ourProjectContainer'>
        <h1><span className='ourProjectHeading'>Our Projects</span></h1>
        <p className='ourProjectHeadingPara'>Our project case study offers an in-depth look at the entire project lifecycle, providing valuable insights into every aspect of the work. By exploring the case study, you'll gain a comprehensive understanding of the project's objectives, the specific challenges we encountered, and the innovative solutions we implemented to overcome them. We detail the step-by-step process of how we approached the project, the strategies we used to solve complex problems, and the measurable outcomes that resulted from our efforts. This reference serves as a useful resource for anyone looking to learn more about our methodology, our commitment to excellence, and the tangible impact we deliver to our clients.</p>
      </div>
      {ourProjectCardContent.map((item, index) => (
        <div className='ourProjectsCardContainer' key={index}>
          <div className='ourProjectCardImageContainer'><img src={item.img} loading='lazy' alt={item.img} /></div>
          <div className='ourProjectsContentContainer'>
            <h1>{item.ourProjectCardHeading}</h1>
            <p>{item.ourPorjectCardDescription}</p>
            <div>
              {/* <LetstartBtn buttonTitle="Learn More" /> */}
            </div>
          </div>
        </div>
      ))}

    </>
  )
}

export default OurProjects
