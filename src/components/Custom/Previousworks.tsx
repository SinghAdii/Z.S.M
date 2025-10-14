import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Sectionheading from "./Sectionheading";

type PreviousWork = {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  points: string[];
  link?: string;
};

export default function PreviousWorkSection({
  works,
}: {
  works: PreviousWork[];
}) {
  return (
    <section className="bg-white dark:bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Sectionheading
            topic="Our Work"
            title="Projects That Speak for Themselves"
            description=" Take a look at some of the projects we've delivered for our clients."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow dark:bg-zinc-900"
            >
              <CardHeader className="p-0">
                <Image
                  src={work.imgSrc}
                  alt={work.title}
                  className="w-full h-48 px-2 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {work.title}
                </CardTitle>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  {work.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {work.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-4 h-4 mt-1 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                      <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                {work.link && (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
