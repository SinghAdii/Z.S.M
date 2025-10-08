import {
  Herosection,
  SpotlightBackground,
} from "@/components/Custom/custom_components.exports";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <SpotlightBackground />
        </div>
        <div className="relative top-28 text-white">
          <Herosection />
        </div>
      </div>
    </>
  );
}
