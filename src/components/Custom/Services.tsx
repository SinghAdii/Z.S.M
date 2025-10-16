"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
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
  IconShieldCheck,
  IconServer,
  IconLock,
} from "@tabler/icons-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Sectionheading from "./Sectionheading";

import {
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiReact,
  SiNextdotjs,
  SiAndroidstudio,
  SiFlutter,
  SiShopify,
  SiWordpress,
  SiFigma,
  SiAdobe,
  SiPython,
  SiTensorflow,
  SiTableau,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ServicesSection() {
  const { theme } = useTheme();

  // theme-based adaptive colors
  const themedColor = theme === "dark" ? "#60a5fa" : "#3b82f6";

  const services = [
    {
      title: "Full-Stack Development",
      href: "/development",
      description:
        "From concept to deployment — we build fast, scalable, and maintainable web and mobile applications.",
      icon: <IconDeviceLaptop size={28} />,
      techs: [
        { icon: <SiReact />, color: themedColor },
        { icon: <SiNextdotjs className="dark:text-white text-black" /> },
        { icon: <SiPython />, color: "#3776AB" },
      ],
    },
    {
      title: "Cloud Services",
      href: "/clouds",
      description:
        "Empowering your business with secure, scalable cloud infrastructures across major providers.",
      icon: <IconCloud size={28} />,
      techs: [
        { icon: <FaAws />, color: "#FF9900" }, // single-color original
        { icon: <SiGooglecloud />, color: themedColor }, // was multicolor
        { icon: <FaMicrosoft />, color: themedColor }, // was multicolor
      ],
    },
    {
      title: "Platform Engineering",
      href: "/platform-services",
      description:
        "Design, build, and maintain your SaaS or enterprise platforms with high availability and low latency.",
      icon: <IconLayoutDashboard size={28} />,
      techs: [
        { icon: <SiDocker />, color: "#2496ED" }, // single color
        { icon: <SiKubernetes />, color: "#326CE5" },
        { icon: <SiNextdotjs className="dark:text-white text-black" /> },
      ],
    },
    {
      title: "E-commerce & CMS",
      href: "/cms-ecommerce",
      description:
        "Building custom online stores and CMS experiences that convert visitors into loyal customers.",
      icon: <IconShoppingBag size={28} />,
      techs: [
        { icon: <SiShopify />, color: "#96BF48" },
        { icon: <SiWordpress />, color: "#21759B" },
      ],
    },
    {
      title: "Containerization & DevOps",
      href: "/containerization",
      description:
        "Streamline your CI/CD pipelines with containerized environments and automated deployments.",
      icon: <IconBoxSeam size={28} />,
      techs: [
        { icon: <SiDocker />, color: "#2496ED" },
        { icon: <SiKubernetes />, color: "#326CE5" },
      ],
    },
    {
      title: "UI/UX Design",
      href: "/uiux",
      description:
        "Crafting intuitive, beautiful, and data-driven design systems for web and mobile interfaces.",
      icon: <IconPalette size={28} />,
      techs: [
        { icon: <SiFigma />, color: themedColor }, // multicolor adjusted
        { icon: <SiAdobe />, color: "#FF0000" },
      ],
    },
    {
      title: "Testing & QA",
      href: "/testing",
      description:
        "Ensuring reliability through automation testing, bug tracking, and performance benchmarking.",
      icon: <IconBug size={28} />,
      techs: [
        { icon: <SiPython />, color: "#3776AB" },
        { icon: <SiTensorflow />, color: "#FF6F00" },
      ],
    },
    {
      title: "Big Data & Analytics",
      href: "/big-data",
      description:
        "Unlock insights from data lakes and warehouses using modern data analytics tools.",
      icon: <IconDatabase size={28} />,
      techs: [
        { icon: <SiPython />, color: "#3776AB" },
        { icon: <SiTensorflow />, color: "#FF6F00" },
      ],
    },
    {
      title: "AI & Automation",
      href: "/ai-integration",
      description:
        "Integrate chatbots, predictive models, and generative AI to automate and innovate faster.",
      icon: <IconRobot size={28} />,
      techs: [
        { icon: <SiTensorflow />, color: "#FF6F00" },
        { icon: <SiPython />, color: "#3776AB" },
      ],
    },
    {
      title: "Mobile App Development",
      href: "/mobile-dev",
      description:
        "Native and cross-platform mobile applications built with cutting-edge frameworks.",
      icon: <IconDeviceLaptop size={28} />,
      techs: [
        { icon: <SiAndroidstudio />, color: "#3DDC84" },
        { icon: <SiReact />, color: themedColor },
        { icon: <SiFlutter />, color: themedColor },
      ],
    },
    {
      title: "Data Visualization",
      href: "/data-visualisation",
      description:
        "Turn complex data into meaningful insights using interactive charts and dashboards.",
      icon: <IconChartBar size={28} />,
      techs: [
        { icon: <SiTableau />, color: "#E97627" },
        { icon: <SiPython />, color: "#3776AB" },
      ],
    },
    {
      title: "Cybersecurity & Infrastructure",
      href: "/cybersecurity",
      description:
        "Advanced protection and monitoring to keep your digital assets secure and compliant.",
      icon: <IconShieldCheck size={28} />,
      techs: [
        { icon: <IconLock size={18} />, color: "#22C55E" },
        { icon: <IconServer size={18} />, color: "#64748B" },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative z-10 py-24 bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Sectionheading
            topic="Services"
            title="Empowering Your Digital Vision"
            description="We combine creativity and engineering excellence to deliver full-spectrum technology solutions from design to cloud."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  href,
  icon,
  techs,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  techs?: { icon: React.ReactNode; color: string }[];
}) {
  return (
    <Link href={href} aria-label={`Learn more about ${title}`}>
      <Card
        className={cn(
          "relative overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
        )}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:via-blue-500/10 group-hover:to-blue-500/20 transition-all duration-500 rounded-xl" />

        <CardHeader className="relative z-10 flex flex-col items-start space-y-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          <CardTitle className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </CardTitle>

          <CardDescription className="text-zinc-600 dark:text-zinc-400">
            {description}
          </CardDescription>

          {techs && (
            <div className="flex space-x-3 mt-2">
              {techs.map((tech, i) => (
                <span
                  key={i}
                  className="text-xl transition-transform duration-200 hover:scale-110"
                  style={{
                    color: tech.color,
                    filter:
                      "drop-shadow(0 0 1px rgba(0,0,0,0.1)) drop-shadow(0 0 2px rgba(0,0,0,0.05))",
                  }}
                >
                  {tech.icon}
                </span>
              ))}
            </div>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
