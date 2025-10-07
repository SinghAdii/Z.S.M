'use client'
import React, { Fragment } from 'react'
import './ContactUs.css';

const ContactUs = ({buttonTitle}) => {
  return (
    <Fragment>
      <button className='contactUsButton'>{buttonTitle}</button>
    </Fragment>
  )
}

export default ContactUs
