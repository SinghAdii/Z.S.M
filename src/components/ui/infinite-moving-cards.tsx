"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (!containerRef.current) return;
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-6 py-6 md:w-[400px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
          >
            <blockquote className="flex flex-col gap-4">
              {item.img && (
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-zinc-900 dark:text-white text-sm">
                      {item.name}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {item.title}
                    </span>
                  </div>
                </div>
              )}
              <p className="text-sm text-zinc-800 dark:text-zinc-100 leading-6">
                {item.quote}
              </p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
