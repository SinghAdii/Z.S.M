"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Optional array of Tailwind text colors per word */
  wordColors?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes for outer container */
  className?: string;
  /** Additional CSS classes for text container */
  textClassName?: string;
  /** Duration of per-letter animation in milliseconds */
  animationDuration?: number;
}

export default function Herosectionheading({
  words = ["better", "modern", "beautiful", "awesome"],
  wordColors,
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = useRef<HTMLDivElement>(null);

  /** Update width based on current word */
  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 30; // extra padding
      setWidth(textWidth);
    }
  };

  /** Update width whenever the word changes */
  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  /** Cycle words on interval */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  /** Determine text color for current word */
  const currentWordColor =
    wordColors && wordColors[currentWordIndex]
      ? wordColors[currentWordIndex]
      : "";

  return (
    <motion.div
      layout
      layoutId={`words-container-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn("relative inline rounded-lg font-bold", className)}
      key={words[currentWordIndex]}
    >
      <motion.div
        layout
        ref={textRef}
        className={cn(
          "inline-block",
          textClassName,
          currentWordColor // dynamic color
        )}
      >
        {words[currentWordIndex].split("").map((letter, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: idx * 0.02,
              duration: animationDuration / 1000,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
