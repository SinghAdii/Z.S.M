"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Herosectionheading } from "./custom_components.exports";
import Image from "next/image";
import { Hero_Section_Image } from "../../assets/images/images.export.js";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { motion as framerMotion } from "framer-motion";

export default function Herosection() {
  const words = ["Build", "Develop", "Scale", "Launch", "Transform"];

  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center">
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
              "mb-6 text-left text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white/80 dark:text-zinc-100"
            )}
            layout
          >
            <span className="block">
              We Help You{" "}
              <Herosectionheading
                words={words}
                wordColors={[
                  "text-blue-500",
                  "text-yellow-500",
                  "text-blue-500",
                  "text-yellow-500",
                  "text-blue-500",
                ]}
                className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl shadow-lg px-2"
                textClassName="capitalize text-5xl md:text-6xl"
                interval={2500}
              />
            </span>
            <span className="block">
              Powerful Digital <br /> Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-left text-base md:text-md capitalize text-white dark:text-zinc-300 max-w-[600px] mb-12"
          >
            A specialized IT services and business consulting solutions designed
            to help companies optimize their technology and drive growth. From
            designing to software development end-to-end services that enable
            businesses to thrive.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap gap-6">
          <HoverBorderGradient
            containerClassName="rounded-full hover:cursor-pointer"
            as="button"
            className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2 px-6 py-3"
          >
            <span>Contact Us</span>
            <framerMotion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <FaPhoneAlt />
            </framerMotion.span>
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-full hover:cursor-pointer"
            as="button"
            className="text-white flex items-center space-x-2 px-6 py-3"
          >
            <span>Get Started</span>
            <framerMotion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <FaArrowRight />
            </framerMotion.span>
          </HoverBorderGradient>
        </div>
      </div>

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
            src={Hero_Section_Image}
            alt="Hero section image"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
