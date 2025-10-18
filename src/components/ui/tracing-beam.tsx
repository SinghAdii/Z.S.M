"use client";

import React, { useEffect, useRef, useState, useId } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const id = useId(); // unique per instance for gradient id
  const rootRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  // Scroll progress for this specific root element
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });

  // Determine if this beam is currently in view
  const isInView = useInView(rootRef, { amount: 0.2, once: false });

  // Resize observer to keep svgHeight up-to-date when content or layout changes
  useEffect(() => {
    const update = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight || 0);
      }
    };

    update();

    if (!contentRef.current) return;
    const ro = new ResizeObserver(() => update());
    ro.observe(contentRef.current);

    // Also update on window resize as a fallback
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // Reset scroll progress when out of view so animation restarts when re-entering
  useEffect(() => {
    // scrollYProgress is a MotionValue; it exposes .set
    try {
      if (!isInView) {
        // small timeout to ensure consistent reset behavior when rapidly scrolling
        const t = window.setTimeout(() => {
          // set to 0 so gradient springs start from beginning next time
          (scrollYProgress as unknown as MotionValue<number>).set(0);
        }, 20);
        return () => window.clearTimeout(t);
      }
    } catch {
      // ignore if scrollYProgress doesn't support set (shouldn't happen)
    }
  }, [isInView, scrollYProgress]);

  // Create the animated positions for the gradient
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, Math.max(50, svgHeight)]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(50, svgHeight - 200)]),
    { stiffness: 500, damping: 90 }
  );

  const gradientId = `trace-gradient-${id.replace(/[:]/g, "")}`;

  return (
    <motion.div
      ref={rootRef}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute top-3 -left-4 md:-left-20">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              (scrollYProgress as unknown as MotionValue<number>).get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor:
                (scrollYProgress as unknown as MotionValue<number>).get() > 0
                  ? "white"
                  : "#10b981",
              borderColor:
                (scrollYProgress as unknown as MotionValue<number>).get() > 0
                  ? "white"
                  : "#059669",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>

        <svg
          viewBox={`0 0 20 ${svgHeight || 200}`}
          width="20"
          height={svgHeight || 200}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* base path */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />

          {/* animated gradient stroke path */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />

          <defs>
            <motion.linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
