"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonialsData } from "./Data";
import Sectionheading from "./Sectionheading";

export default function TestimonialsSection() {
  return (
    <section className="bg-white dark:bg-zinc-950 pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <Sectionheading
          topic="Testimonials"
          title="What Our Clients Say"
          description=" Hear directly from our clients about how Ziostech Solutions helped
          transform their businesses."
        />
      </div>

      <div className="h-fit relative overflow-hidden mb-20">
        <InfiniteMovingCards
          items={testimonialsData.map((t) => ({
            quote: t.quote,
            name: t.name,
            title: t.title,
            img: t.img,
          }))}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  );
}
