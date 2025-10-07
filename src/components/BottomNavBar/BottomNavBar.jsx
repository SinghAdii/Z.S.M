"use client";
import React, { useState } from "react";
import "./BottomNavBar.css";
import HomeIcon from "@/assets/Icons/home-icon.png";
import AboutIcon from "@/assets/Icons/about-icon.png";
import ServiceIcon from "@/assets/Icons/service-icon.png";
import ProjectIcon from "@/assets/Icons/projects-icon.png";
import ProductsIcon from "@/assets/Icons/products-icon.png";
import ComingSoonPopup from "../BlogPopUp/BlogPopUp";
import { usePathname, useRouter } from "next/navigation";
const BottomNavBar = () => {
  const navigate = useRouter();
  const location = usePathname();
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { name: "Home", route: "/", icon: HomeIcon },
    { name: "About", route: "/about", icon: AboutIcon },
    { name: "Services", route: "/services", icon: ServiceIcon },
    { name: "Projects", route: "/projects", icon: ProjectIcon },
    // { name: 'Products', route: '/products', icon: ProductsIcon },
  ];
  const handleItemClick = (item) => {
    if (item.route === "/products") {
      setShowPopup(true); // Show the popup for "Products"
    }
    if (location.pathname === item.route) {
      window.scrollTo(0, 0); // Scroll to top for the same route
    } else {
      navigate.push(item.route); // Navigate to other routes
    }
  };
  const toggleDropdown = (isOpen) => {
    setShowDropdown(isOpen);
  };
  return (
    <div className="bottomNavBarContainer">
      <ul className="bottomNavBarItems">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={location.pathname === item.route ? "active" : ""}
            onClick={() => handleItemClick(item)}
          >
            <img src={item.icon} loading="lazy" alt={`${item.name} icon`} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      {showPopup && <ComingSoonPopup closePopup={() => setShowPopup(false)} />}
    </div>
  );
};

export default BottomNavBar;
