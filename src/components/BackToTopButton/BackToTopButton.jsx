'use client'
import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';
import { FaAngleUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

const scrollToTop = () => {
    const scrollStep = -window.scrollY /50; // Adjust the divisor to control speed (higher = slower)
    const scrollAnimation = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <button title='Back To Top'
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <FaAngleUp size={28} />
      </button>
    )
  );
};

export default BackToTop; 
