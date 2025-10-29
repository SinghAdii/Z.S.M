"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Herosectionheading } from "./custom_components.exports";
import Image, { StaticImageData } from "next/image";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  titlePrefix?: string;
  words?: string[];
  wordColors?: string[];
  subtitle?: string;
  highlightText?: string;
  heroImage: StaticImageData | string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonIcon?: React.ReactNode;
  secondaryButtonIcon?: React.ReactNode;
  isSecondaryButton?: boolean;
  isPrimaryButton?: boolean;
  primaryhref?: string;
  secondaryhref?: string;
  features?: string[];
  headingClassName?: string;
  titlesuffix?: string;
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
  subtitle = "Ziostech Solutions delivers expert IT consulting, staffing, web & app development, and AI integration services to help businesses grow and innovate.",
  highlightText = "Experiences",
  heroImage,
  primaryButtonText = "Contact Us",
  secondaryButtonText = "Get Started",
  primaryButtonIcon = <FaPhoneAlt />,
  secondaryButtonIcon = <FaArrowRight />,
  features,
  isPrimaryButton,
  isSecondaryButton,
  primaryhref,
  secondaryhref,
  headingClassName,
  titlesuffix,
}) => {
  const navigate = useRouter();
  return (
    <div
      className="flex flex-col md:flex-row w-full justify-center items-center 
      bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-12 md:ml-10 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={cn(
              "mb-6 text-left text-4xl md:text-5xl leading-snug tracking-tight transition-colors",
              `${headingClassName} leading-snug`
            )}
            layout
          >
            <span className="block">
              {titlePrefix}{" "}
              <Herosectionheading
                words={words}
                wordColors={wordColors}
                className="font-semibold rounded-xl transition-colors"
                textClassName={cn(
                  "capitalize text-4xl md:text-5xl",
                  headingClassName
                )}
                interval={2500}
              />{" "}
              <div>
                {titlesuffix || "Powerful Digital"}
                <span className="text-amber-600 dark:text-yellow-400">
                  {" "}
                  {highlightText}
                </span>
              </div>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-left md:text-md capitalize max-w-[600px] mb-8 
              text-gray-700 dark:text-gray-300 transition-colors"
          >
            {subtitle}
          </motion.p>

          {/* Optional Feature List */}
          {features && features.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-3 mb-12"
            >
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-800 dark:text-gray-200"
                >
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6">
          {isPrimaryButton && (
            <HoverBorderGradient
              containerClassName="rounded-2xl hover:cursor-pointer"
              as="button"
              className="bg-[var(--primary)] text-[var(--primary-foreground)] dark:bg-[var(--accent)] dark:text-[var(--accent-foreground)]
              flex items-center space-x-2 px-6 py-3 transition-colors duration-300"
              onClick={() => primaryhref && navigate.push(primaryhref)}
            >
              <span>{primaryButtonText}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                {primaryButtonIcon}
              </motion.span>
            </HoverBorderGradient>
          )}

          {isSecondaryButton && (
            <HoverBorderGradient
              containerClassName="rounded-2xl hover:cursor-pointer"
              as="button"
              className="bg-[var(--card)] text-[var(--card-foreground)] dark:bg-[var(--sidebar)] dark:text-[var(--sidebar-foreground)]
              flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 transition-colors duration-300"
              onClick={() => secondaryhref && navigate.push(secondaryhref)}
            >
              <span>{secondaryButtonText}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                {secondaryButtonIcon}
              </motion.span>
            </HoverBorderGradient>
          )}
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
