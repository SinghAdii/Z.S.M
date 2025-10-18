"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GlobalPageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Trigger loader every time route (pathname) changes
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // Adjust duration for smooth fade

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
            "bg-white dark:bg-black"
          )}
        >
          {/* Outer gradient glow */}
          <motion.div
            className="absolute h-40 w-40 rounded-full bg-gradient-to-tr from-orange-500/30 to-blue-500/30 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Elastic gradient ring */}
          <motion.div
            initial={{ scale: 0.9, rotate: 0 }}
            animate={{ scale: [0.9, 1.05, 1], rotate: 360 }}
            transition={{
              duration: 1.6,
              ease: [0.6, 0.01, -0.05, 0.95], // elastic ease
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="relative flex items-center justify-center"
          >
            <div
              className={cn(
                "h-20 w-20 rounded-full border-[5px] border-transparent",
                "bg-gradient-to-tr from-orange-500 to-blue-500 p-[2px]",
                "bg-clip-border [mask-composite:exclude]"
              )}
              style={{
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), black 100%)",
                maskComposite: "exclude",
              }}
            ></div>

            {/* Center pulsing icon */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
            >
              <Loader2 className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-blue-500" />
            </motion.div>
          </motion.div>

          {/* Optional text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-sm capitalize font-medium bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent"
          >
            Loading your experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
