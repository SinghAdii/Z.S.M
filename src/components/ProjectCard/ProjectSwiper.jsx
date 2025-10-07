'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperNavButtons from './ProjectSwiperButton'; // Custom navigation buttons
import projectimg1 from '../../../assets/images/ekta.png'
import projectimg2 from '../../../assets/images/medicityHospital.jpg'
import projectimg3 from '../../../assets/images/sunrise.jpg'
import projectimg4 from '../../../assets/images/saurabh_visionary.jpg'
import projectimg5 from '../../../assets/images/avni.png'
import { SlArrowRightCircle } from "react-icons/sl";


import './ProjectSwiper.css';
import ProjectCard from './ProjectCard';
import ViewAllButton from '../ViewAllButton/ViewAllButton';

function ProjectSwiper() {
  const navigate=useNavigate()
  const projectObj1 = {
    imgSrc: projectimg1,
    title: "Ekta Janch Kendra",
    // description: "Ekta Janch Kendra is a healthcare-focused project that delivers reliable and accessible services. We created a user-friendly website with a profile management system and maintenance to ensure smooth operations and a seamless user experience."
    description:'Ekta Janch Kendra: Healthcare website with profile management, maintenance, and reliable services.',
  };

  const projectObj2 = {
    imgSrc: projectimg2,
    title: "Medicity Hospital, Unnao",
    // description: "Medicity Hospital, Unnao, uses our system to manage doctor profiles, patient data, and staff details. This efficient platform improves coordination, record accuracy, and patient services, helping streamline operations and elevate the healthcare experience."
    description:"Medicity Hospital uses our system for efficient doctor, patient, and staff management.",
  };

  const projectObj3 = {
    imgSrc: projectimg3,
    title: "Sunrise Diagnostic Services",
    // description: "Sunrise Diagnostic Services benefits from a user-friendly website for booking and accessing services. We developed a secure profile management system and provide maintenance to ensure seamless performance and reliable patient information handling."
    description:'Sunrise Diagnostics: Secure website for bookings, profile management, and reliable maintenance.',
  };

  const projectObj4 = {
    imgSrc: projectimg4,
    title: "Saurabh Visionary Ventures",
    description: "Saurabh Visionary Ventures, a coaching center, features a website showcasing courses, faculty, and success stories. We implemented a profile management system and ensure platform functionality through ongoing website maintenance for seamless operations."
  };

  const projectObj5 = {
    imgSrc: projectimg5,
    title: "Avni Hospital",
    description: "Avni Hospital’s website streamlines patient interactions by offering easy access to information and services. We implemented a profile management system and provide maintenance to ensure efficient data handling and exceptional healthcare delivery."
  };


  return (
    <div className='projectCardContainer'>
      <h1 className="testimonialHeading"><span>Our Projects</span></h1>
      <p className="testimonialHeadingPara">Explore our project case study for your reference to gain insights into the project <br />details, challenges, solutions, and outcomes.</p>
      <div className="ProjectSwiperContainer">

        <Swiper
          spaceBetween={0}
          slidesPerView="auto"
          navigation={true}   // Enabling navigation
          pagination={{ clickable: true }} // Pagination with clickable option
          a11y={{ enabled: true }} // Enabling accessibility
          breakpoints={{
            // When the screen width is <= 768px
            768: {
              slidesPerView: 2, // 1 slide per view on small screens
              spaceBetween: 10, // Adjust space between slides
            },
            // When the screen width is <= 1024px
            1024: {
              slidesPerView: 2, // 2 slides per view on medium screens
              spaceBetween: 20, // Adjust space between slides
            },
            // Default settings for larger screens
            1400: {
              slidesPerView: 3, // 3 slides per view on large screens
              spaceBetween: 30, // Adjust space between slides
            },
          }}
        >
          <SwiperSlide><ProjectCard obj={projectObj1} /></SwiperSlide>
          <SwiperSlide><ProjectCard obj={projectObj2} /></SwiperSlide>
          <SwiperSlide><ProjectCard obj={projectObj3} /></SwiperSlide>
          {/* <SwiperSlide><ProjectCard obj={projectObj4} /></SwiperSlide>
          <SwiperSlide><ProjectCard obj={projectObj5} /></SwiperSlide> */}
          <SwiperSlide className='projectSwiperRightArrow' title='View All Projects' onClick={()=>navigate('/projects')}><ViewAllButton buttonTitle="View All Projects"/></SwiperSlide>
          <SwiperNavButtons /> {/* Custom navigation buttons */}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectSwiper;
