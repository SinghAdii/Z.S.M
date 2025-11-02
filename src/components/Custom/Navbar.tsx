"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaSun, FaMoon } from "react-icons/fa";
import { logo } from "@/assets/images/images.export.js";

const NAV_ITEMS = [
  { title: "Home", href: "/", description: "Welcome, Overview, Landing" },
  {
    title: "Projects",
    href: "/pages/projects",
    description: "Portfolio, Case Studies, Work",
  },
  {
    title: "More Services",
    description: "Explore our specialized service offerings",
    subItems: [
      {
        title: "Development",
        href: "/pages/services/development",
        description: "Web, Mobile, Software, Apps",
      },
      {
        title: "Cloud Services",
        href: "/pages/services/cloud-service",
        description: "AWS, Azure, Google Cloud, Hosting",
      },
      {
        title: "Platform Services",
        href: "/pages/services/platform-service",
        description: "SaaS, PaaS, Enterprise Platforms",
      },
      {
        title: "CMS & E-commerce",
        href: "/pages/services/cms-e-commerce",
        description: "WordPress, Shopify, Online Stores",
      },
      {
        title: "Containerisation Tools",
        href: "/pages/services/contanerization-service",
        description: "Docker, Kubernetes, DevOps",
      },
      {
        title: "UI/UX Services",
        href: "/pages/services/uiux-design",
        description: "Design, Prototyping, User Experience",
      },
      {
        title: "Testing Services",
        href: "/pages/services/testing-services",
        description: "QA, Automation, Manual Testing",
      },
      {
        title: "Big Data",
        href: "/pages/services/big-data",
        description: "Analytics, Data Processing, Hadoop",
      },
      {
        title: "Data Visualisation",
        href: "/pages/services/data-visualisation",
        description: "Charts, Dashboards, Insights",
      },
      {
        title: "AI Integration",
        href: "/pages/services/ai-integration",
        description: "Machine Learning, Chatbots, Automation",
      },
    ],
  },
  { title: "About", href: "/pages/about", description: "Company, Team, Story" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useRouter();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setActiveDropdown(null);
        setHoveredDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={menuRef}
      className="fixed top-0 z-50 w-full bg-white/80 dark:bg-background backdrop-blur-xl transition-colors duration-300"
    >
      <div className="flex items-center justify-between px-8 ">
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src={logo}
            alt="ZiosTech Logo"
            width={130}
            height={40}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* --- Desktop Nav --- */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-10 max-lg:gap-5">
              {NAV_ITEMS.map((item) =>
                item.subItems ? (
                  <NavigationMenuItem
                    key={item.title}
                    onMouseEnter={() => setHoveredDropdown(item.title)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                    className="relative"
                  >
                    <button
                      className={`flex items-center gap-1 text-md font-medium transition-colors ${
                        hoveredDropdown === item.title
                          ? "text-blue-600 dark:text-orange-500"
                          : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-orange-500"
                      }`}
                    >
                      {item.title}
                      <RiArrowDropDownLine className="text-xl" />
                    </button>

                    <AnimatePresence>
                      {hoveredDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 rounded-xl border bg-white/90 dark:bg-background/80 backdrop-blur-md shadow-lg p-4 w-[500px] grid grid-cols-2 gap-3"
                        >
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                            >
                              <div className="text-md font-medium group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors">
                                {sub.title}
                              </div>
                              {sub.description && (
                                <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                                  {sub.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href!}
                        className="text-[16px] font-medium text-gray-800 dark:text-gray-200 dark:hover:text-orange-500 hover:text-blue-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* --- Right: Toggle + Contact --- */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            onClick={toggleDarkMode}
            className="w-12 h-12 flex items-center justify-center rounded-lg text-gray-800 dark:text-yellow-400 cursor-pointer"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              key={darkMode ? "sun" : "moon"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.div>
          </motion.button>

          <Button
            onClick={() => navigate.push("#contact-section")}
            className="rounded-lg text-white px-5 py-2 text-sm font-semibold shadow-md cursor-pointer bg-gradient-to-r from-orange-500 to-blue-500
             hover:shadow-lg transition-transform duration-200 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden gap-5 items-center justify-center">
          <div className="flex justify-between items-center mb-4">
            <motion.button
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-800 dark:text-yellow-400 cursor-pointer"
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </motion.div>
            </motion.button>
            <button
              className="md:hidden text-2xl p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <RxCross2 /> : <HiMiniBars3CenterLeft />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white dark:bg-gray-900 px-6 py-4 md:hidden border-t border-gray-200 dark:border-gray-700"
          >
            <ul className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.title}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.title ? null : item.title
                          )
                        }
                        className="w-full text-gray-900 dark:text-gray-200 flex justify-between items-center text-left text-sm font-medium"
                      >
                        {item.title}
                        <RiArrowDropDownLine
                          className={`text-xl transition-transform ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.ul
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="mt-5 ml-3 space-y-2 border-l pl-3 border-gray-200 dark:border-gray-700"
                          >
                            {item.subItems.map((sub) => (
                              <li key={sub.title}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMenuOpen(false)}
                      className="block text-gray-900 dark:text-gray-200 text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}

              {/* Contact Us Mobile */}
              <li>
                <Button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate.push("./pages/contact");
                  }}
                  className="block rounded-2xl w-fit px-5 py-2 text-white text-sm font-semibold bg-gradient-to-r from-orange-500 to-blue-500
                   mt-2"
                >
                  Contact Us
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
