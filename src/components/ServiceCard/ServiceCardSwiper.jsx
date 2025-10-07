'use client'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperNavButtons from '../ProjectCard/ProjectSwiperButton'; // Custom navigation buttons
import './ServiceCardSwiper.css';
import ServiceCard from './ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlArrowRightCircle } from "react-icons/sl";
import ViewAllButton from '../ViewAllButton/ViewAllButton';


function ProjectSwiper(props) {
    const navigate=useNavigate()
    
    const data=props.data;
    return (
        <div className='serviceCardContainer'>
            <h1 className="testimonialHeading"><span>Services Provide</span></h1>
            <p className="testimonialHeadingPara">IT services for business refer to a range of technology-related solutions  <br />provided to support and enhance business operations.</p>
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
                    {data.map((item,index)=>{
                        return(
                            <SwiperSlide key={index}><ServiceCard img={item.img} serviceTitle={item.serviceTitle} serviceIcon={item.serviceIcon}  serviceDescription={item.serviceDescription} /></SwiperSlide>
                        )
                    })}
                    {/* {props.showRouteButton?  <SwiperSlide className='serviceSwiperRightArrow' title='View All Services' onClick={()=>navigate('/services')}><SlArrowRightCircle/></SwiperSlide>:null} */}
                    {props.showRouteButton?  <SwiperSlide className='serviceSwiperRightArrow' title='View All Services' onClick={()=>navigate('/services')}><ViewAllButton buttonTitle="View All Services"/></SwiperSlide>:null}
                  
                    {/* <SwiperSlide><ServiceCard /></SwiperSlide>
                    <SwiperSlide><ServiceCard /></SwiperSlide> */}
                    <SwiperNavButtons /> {/* Custom navigation buttons */}
                </Swiper>
            </div>
        </div>
    );
}

export default ProjectSwiper;
