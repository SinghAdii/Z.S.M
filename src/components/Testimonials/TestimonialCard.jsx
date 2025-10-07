
import React from 'react'
import './TestimonialCard.css'

const TestimonialCard = (props) => {
  return (
    <div className='testimonialCardContainer'>
        <div className='testimonialImageContainer'>
          <img src={props.img} loading='lazy' alt="" />
        </div>
        <div className='testimonialName'>
            <h2>{props.testimonialName}</h2>
            <h3>{props.testimonialPosition}</h3>
        </div>
        <div className='aboutTestimonial'>
          <span className='testimonialDoubleQuotes leftQuotes'>❛❛</span>
          <p>
         {props.aboutTestimonial}
          </p>
          <span className='testimonialDoubleQuotes rightQuotes'>❞</span>
        </div>
    </div>
  )
}

export default TestimonialCard
