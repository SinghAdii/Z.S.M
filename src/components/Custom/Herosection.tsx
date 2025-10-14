"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Herosectionheading } from "./custom_components.exports";
import Image, { StaticImageData } from "next/image";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

interface HeroSectionProps {
  titlePrefix?: string; // "We Help You"
  words?: string[]; // rotating words
  wordColors?: string[]; // colors for each word
  subtitle?: string; // subtitle paragraph
  highlightText?: string; // highlighted text in subtitle
  heroImage: StaticImageData | string; // next/image compatible image
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonIcon?: React.ReactNode;
  secondaryButtonIcon?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titlePrefix = "We Help You",
  words = ["Build", "Develop", "Scale", "Launch", "Transform"],
  wordColors = [
    "text-blue-600",
    "text-orange-500",
    "text-blue-600",
    "text-orange-500",
    "text-blue-600",
  ],
  subtitle = "A specialized IT services and business consulting solution designed to help companies optimize their technology and drive growth. From design to development — end-to-end services that empower businesses to thrive in the digital world.",
  highlightText = "Experiences",
  heroImage,
  primaryButtonText = "Contact Us",
  secondaryButtonText = "Get Started",
  primaryButtonIcon = <FaPhoneAlt />,
  secondaryButtonIcon = <FaArrowRight />,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row w-full justify-center items-center 
      bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-12 md:ml-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={cn(
              "mb-6 text-left text-4xl md:text-5xl leading-tight tracking-tight transition-colors"
            )}
            layout
          >
            <span className="block">
              {titlePrefix}
              <Herosectionheading
                words={words}
                wordColors={wordColors}
                className="inline-block font-semibold rounded-xl px-2 transition-colors"
                textClassName="capitalize text-4xl md:text-5xl"
                interval={2500}
              />
            </span>
            <span className="block">
              Powerful Digital <br />
              <span className="text-amber-600 dark:text-yellow-400">
                {highlightText}
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-left md:text-md capitalize max-w-[600px] mb-12 
              text-gray-700 dark:text-gray-300 transition-colors"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6">
          <HoverBorderGradient
            containerClassName="rounded-2xl hover:cursor-pointer"
            as="button"
            className="bg-[var(--primary)] text-[var(--primary-foreground)] dark:bg-[var(--accent)] dark:text-[var(--accent-foreground)]
              flex items-center space-x-2 px-6 py-3 transition-colors duration-300"
          >
            <span>{primaryButtonText}</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              {primaryButtonIcon}
            </motion.span>
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-2xl hover:cursor-pointer"
            as="button"
            className="bg-[var(--card)] text-[var(--card-foreground)] dark:bg-[var(--sidebar)] dark:text-[var(--sidebar-foreground)]
              flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 transition-colors duration-300"
          >
            <span>{secondaryButtonText}</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              {secondaryButtonIcon}
            </motion.span>
          </HoverBorderGradient>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
        >
          <Image
            src={heroImage}
            alt="Hero section image"
            className="w-full h-auto object-contain transition-colors"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
