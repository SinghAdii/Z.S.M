import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconCloud,
  IconDeviceLaptop,
  IconShoppingBag,
  IconLayoutDashboard,
  IconBoxSeam,
  IconPalette,
  IconBug,
  IconDatabase,
  IconChartBar,
  IconRobot,
} from "@tabler/icons-react";
import Sectionheading from "./Sectionheading";

export default function ServicesSection() {
  const moreServices = [
    {
      title: "Development",
      href: "/development",
      description: "Web, Mobile, Software, Apps",
      icon: <IconDeviceLaptop />,
    },
    {
      title: "Cloud Services",
      href: "/clouds",
      description: "AWS, Azure, Google Cloud, Hosting",
      icon: <IconCloud />,
    },
    {
      title: "Platform Services",
      href: "/platform-services",
      description: "SaaS, PaaS, Enterprise Platforms",
      icon: <IconLayoutDashboard />,
    },
    {
      title: "CMS & E-commerce",
      href: "/cms-ecommerce",
      description: "WordPress, Shopify, Online Stores",
      icon: <IconShoppingBag />,
    },
    {
      title: "Containerisation Tools",
      href: "/containerization",
      description: "Docker, Kubernetes, DevOps",
      icon: <IconBoxSeam />,
    },
    {
      title: "UI/UX Services",
      href: "/uiux",
      description: "Design, Prototyping, User Experience",
      icon: <IconPalette />,
    },
    {
      title: "Testing Services",
      href: "/testing",
      description: "QA, Automation, Manual Testing",
      icon: <IconBug />,
    },
    {
      title: "Big Data",
      href: "/big-data",
      description: "Analytics, Data Processing, Hadoop",
      icon: <IconDatabase />,
    },
    {
      title: "Data Visualisation",
      href: "/data-visualisation",
      description: "Charts, Dashboards, Insights",
      icon: <IconChartBar />,
    },
    {
      title: "AI Integration",
      href: "/smart-bot",
      description: "Machine Learning, Chatbots, Automation",
      icon: <IconRobot />,
    },
  ];

  return (
    <section
      className="relative z-10 py-25 bg-zinc-900 dark:bg-zinc-900"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <Sectionheading
            topic="Services"
            title="Our Services to Empower Your Business"
            theme="dark"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-l border-zinc-200 dark:border-zinc-800 overflow-hidden rounded-xl shadow-sm">
          {moreServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({
  title,
  description,
  href,
  icon,
  index,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <Link
      href={href}
      key={index}
      className={cn(
        "relative flex flex-col justify-start py-10 px-8 border-r border-b border-zinc-200 dark:border-zinc-800 group overflow-hidden transition-all duration-300 hover:shadow-md bg-white dark:bg-zinc-900"
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-400/10 pointer-events-none" />

      <div className="relative z-10 mb-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="relative z-10 font-semibold text-lg text-zinc-800 dark:text-zinc-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </Link>
  );
};
