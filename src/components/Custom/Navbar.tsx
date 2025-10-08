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
import logo from "@/assets/images/ziostech_logo.png";

const NAV_ITEMS = [
  { title: "Home", href: "/", description: "Welcome, Overview, Landing" },
  {
    title: "Projects",
    href: "/projects",
    description: "Portfolio, Case Studies, Work",
  },
  {
    title: "More Services",
    description: "Explore our specialized service offerings",
    subItems: [
      {
        title: "Development",
        href: "/development",
        description: "Web, Mobile, Software, Apps",
      },
      {
        title: "Cloud Services",
        href: "/clouds",
        description: "AWS, Azure, Google Cloud, Hosting",
      },
      {
        title: "Platform Services",
        href: "/platform-services",
        description: "SaaS, PaaS, Enterprise Platforms",
      },
      {
        title: "CMS & E-commerce",
        href: "/cms-ecommerce",
        description: "WordPress, Shopify, Online Stores",
      },
      {
        title: "Containerisation Tools",
        href: "/containerization",
        description: "Docker, Kubernetes, DevOps",
      },
      {
        title: "UI/UX Services",
        href: "/uiux",
        description: "Design, Prototyping, User Experience",
      },
      {
        title: "Testing Services",
        href: "/testing",
        description: "QA, Automation, Manual Testing",
      },
      {
        title: "Big Data",
        href: "/big-data",
        description: "Analytics, Data Processing, Hadoop",
      },
      {
        title: "Data Visualisation",
        href: "/data-visualisation",
        description: "Charts, Dashboards, Insights",
      },
      {
        title: "AI Integration",
        href: "/smart-bot",
        description: "Machine Learning, Chatbots, Automation",
      },
    ],
  },
  { title: "About", href: "/about", description: "Company, Team, Story" },
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useRouter();

  // --- Close dropdown when clicking outside ---
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
      className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-xl"
    >
      <div className="flex items-center justify-between px-8 py-3">
        {/* --- Left: Logo --- */}
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

        {/* --- Center: Desktop Nav --- */}
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
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        hoveredDropdown === item.title
                          ? "text-white"
                          : "text-white hover:text-primary"
                      }`}
                    >
                      {item.title}
                      <RiArrowDropDownLine className="text-xl" />
                    </button>

                    {/* --- Dropdown --- */}
                    <AnimatePresence>
                      {hoveredDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 rounded-xl border bg-popover/90 backdrop-blur-md shadow-lg p-4 w-[500px] grid grid-cols-2 gap-3"
                        >
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="rounded-md p-3 hover:bg-accent transition-colors group"
                            >
                              <div className="text-sm font-medium group-hover:text-primary transition-colors">
                                {sub.title}
                              </div>
                              {sub.description && (
                                <p className="text-xs text-muted-foreground mt-1">
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
                        className="text-sm font-medium text-white hover:text-primary transition-colors"
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

        {/* --- Right: Contact Button (Desktop) --- */}
        <div className="hidden md:flex items-center">
          <Button
            onClick={() => navigate.push("./pages/contact")}
            className="rounded-lg text-white px-5 py-2 text-sm font-semibold shadow-md bg-gradient-to-r from-blue-800 to-blue-500 
            hover:from-blue-700 hover:to-blue-400  hover:shadow-lg transition-transform hover:cursor-pointer duration-200 hover:scale-105"
          >
            Contact Us
          </Button>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="md:hidden text-2xl p-2 rounded-md hover:bg-accent text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross2 /> : <HiMiniBars3CenterLeft />}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-transparent px-6 py-4 md:hidden"
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
                        className="w-full text-white flex justify-between items-center text-left text-sm font-medium"
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
                            className="mt-5 ml-3 space-y-2 border-l pl-3 border-border"
                          >
                            {item.subItems.map((sub) => (
                              <li key={sub.title}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
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
                      className="block text-white text-sm font-medium hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}

              {/* Contact Us in Mobile */}
              <li>
                <Button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate.push("./pages/contact");
                  }}
                  className="block rounded-2xl w-fit px-5 py-2 text-white text-sm font-semibold bg-gradient-to-r from-blue-800 to-blue-500 
                  hover:from-blue-700 hover:to-blue-400  hover:underline mt-2"
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
