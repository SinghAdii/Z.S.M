"use client";
import React, { useState, useEffect } from "react";

interface Props {
  title: string;
  description: string;
  topic: string;
  theme?: "light" | "dark";
}

export default function SectionHeading({
  title,
  description,
  topic,
  theme: customTheme,
}: Props) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // If a custom theme is passed, do not listen to HTML class changes
    if (customTheme) {
      setTheme(customTheme);
      return;
    }

    if (typeof window === "undefined") return;

    const detectTheme = () => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    };

    // Initial detection
    detectTheme();

    // Observe <html> class changes
    const observer = new MutationObserver(() => detectTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [customTheme]);

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const subColor = theme === "dark" ? "text-white/70" : "text-black/50";

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {topic && (
        <p className="text-md text-orange-400 font-semibold text-center capitalize max-w-[80%]">
          {topic}
        </p>
      )}
      {title && (
        <h2
          className={`text-3xl font-bold ${textColor} text-center capitalize max-w-[80%]`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p className={`text-md ${subColor} text-center capitalize max-w-[80%]`}>
          {description}
        </p>
      )}
    </div>
  );
}
