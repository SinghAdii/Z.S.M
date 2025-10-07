'use client'
import React from 'react'
import './HeroSection.css'
import LetstartBtn from '../Button/Button'
import BottomNavBar from '../BottomNavBar/BottomNavBar'
const HeroSection = (props) => {
  return (
    <>
    <div className='heroSectionContainer'>
      <div className='heroSectionContentContainer'>
      <h1 className='heroSectionHeading'>{props.normalHeading} <span className='headingHighlightedText'>{props.coloredHeading}</span> </h1>
      <p className='heroSectionParagraph' >{props.paragraph}</p>
     {props.showButton?<LetstartBtn buttonTitle={props.buttonTitle} routePath={props.routePath}/>:null}
      </div>
      <div className='cardImageContainer'>
        <img src={props.image} className='card-image' loading='lazy'  alt="Hero section"  />
      </div>
    </div>
    <BottomNavBar/>
    </>
  )
}

export default HeroSection
