import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import './TestimonialCard.css'
import sandeep from '../../../assets/images/sandeep.jpg'
import Raghubh from '../../../assets/images/saurabh_visionaryowner.jpg'
import Narendra from '../../../assets/images/avatar.jpg'
import CarlosMendez from '../../../assets/images/CarlosMendez.png'
import Aiko from '../../../assets/images/Aiko_Tanaka.png'
import Emily from '../../../assets/images/Emily_Johnson.png'
import Liam from '../../../assets/images/Liam.png'
import Sofia from '../../../assets/images/Sofia.png'
import Raj from '../../../assets/images/RajPatel.png'
import Hannah from '../../../assets/images/Hannah.png'
import aakriti from '../../../assets/images/aakriti.png'
const Testimonials = () => {

  const data = [
    // Testimonial 1
    {
      img: sandeep,
      testimonialName: "Sandeep Yadav",
      testimonialPosition: "CEO & Founder (Sunrise Diagnostic Services)",
      aboutTestimonial:
        "Working with Ziostech Solutions transformed our business. Their expertise, insights, and innovative solutions enhanced operations and improved project outcomes.",
    },
    // Testimonial 2
    {
      img: CarlosMendez,
      testimonialName: "Carlos Mendez",
      testimonialPosition: "CEO (Mendez Enterprises)",
      aboutTestimonial:
        "Partnering with Ziostech enhanced our digital presence. Their solutions are top-notch, and their support is unparalleled.",
    },
    // Testimonial 3
    {
      img: Raghubh,
      testimonialName: "MWO Raghubh Singh",
      testimonialPosition: "M.D. & CEO (Saurabh Visionary Ventures)",
      aboutTestimonial:
        "Ziostech exceeded expectations, delivering a dynamic platform with professionalism, timely delivery, and exceptional communication. Highly recommended for innovative tech solutions.",
    },
    // Testimonial 4
    {
      img: Aiko,
      testimonialName: "Aiko Tanaka",
      testimonialPosition: "CTO (Tanaka Innovations)",
      aboutTestimonial:
        "Ziostech's expertise transformed our platform, leading to increased user engagement. Their professionalism and insight were invaluable.",
    },
    // Testimonial 5
    {
      img: Narendra,
      testimonialName: "Narendra Singh",
      testimonialPosition: "CEO & Founder (Avni Hospital)",
      aboutTestimonial:
        "Avni Hospital values Ziostech's tailored, efficient platform. Their professionalism, expertise, and dedication ensured innovative solutions and outstanding customer support.",
    },
    // Testimonial 6
    {
      img: Emily,
      testimonialName: "Emily Johnson",
      testimonialPosition: "Marketing Director (GlobalTech Solutions)",
      aboutTestimonial:
        "Ziostech's innovative approach streamlined our processes, boosting efficiency and productivity. Their team's dedication and expertise are truly commendable.",
    },
    // Testimonial 7
    {
      img: Liam,
      testimonialName: "Liam O'Connor",
      testimonialPosition: "Managing Director (O'Connor Financials)",
      aboutTestimonial:
        "Ziostech delivered exceptional solutions tailored to our needs. Their team's commitment and proficiency exceeded our expectations.",
    },
    // Testimonial 8
    {
      img: Sofia,
      testimonialName: "Sofia Rossi",
      testimonialPosition: "Founder (Rossi Design Studio)",
      aboutTestimonial:
        "Collaborating with Ziostech was a game-changer. Their innovative solutions and attentive service significantly benefited our projects.",
    },
    // Testimonial 9
    {
      img: Raj,
      testimonialName: "Raj Patel",
      testimonialPosition: "COO (Patel Logistics)",
      aboutTestimonial:
        "Ziostech's solutions optimized our operations, leading to improved efficiency. Their expertise and support were instrumental in our success.",
    },
    // Testimonial 10
    {
      img: Hannah,
      testimonialName: "Hannah Muller",
      testimonialPosition: "Head of Development (Muller Tech)",
      aboutTestimonial:
        "Ziostech's professional approach and innovative solutions significantly advanced our development projects. Their team's dedication is impressive.",
    },
    {
      img: aakriti,
      testimonialName: "Aakriti",
      testimonialPosition: "CEO (RedZet)",
      aboutTestimonial: "Ziostech Solutions played a pivotal role in our digital transformation. Their strategic approach, technical expertise, and commitment to excellence resulted in a robust and scalable platform."
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonialMainContainer">
      <h1 className="testimonialHeading"><span>Testimonials</span></h1>
      <p className="testimonialHeadingPara">Explore our project case study for your reference to gain insights into the project <br />details, challenges, solutions, and outcomes.</p>
      <div className="carousel">
        <Slider {...settings}>

          {data.map((item, index) => (
            <TestimonialCard key={index} img={item.img} aboutTestimonial={item.aboutTestimonial} testimonialName={item.testimonialName} testimonialPosition={item.testimonialPosition} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
