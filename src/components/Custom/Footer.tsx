import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/ziostech_logo.png";

interface NavItem {
  title: string;
  href?: string;
  description?: string;
  subItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

interface FooterProps {
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

const NAV_ITEMS: NavItem[] = [
  {
    title: "Explore",
    subItems: [
      { title: "Home", href: "/", description: "Welcome, Overview, Landing" },
      {
        title: "Projects",
        href: "/pages/projects",
        description: "Portfolio, Case Studies, Work",
      },
      { title: "About", href: "/about", description: "Company, Team, Story" },
    ],
  },
  {
    title: "More Services",
    description: "Explore our specialized service offerings",
    subItems: [
      {
        title: "Development",
        href: "/pages/services/development",
        description: "Web, Mobile, Software, Apps",
      },
      {
        title: "Cloud Services",
        href: "/pages/services/cloud-service",
        description: "AWS, Azure, Google Cloud, Hosting",
      },
      {
        title: "Platform Services",
        href: "/pages/services/platform-service",
        description: "SaaS, PaaS, Enterprise Platforms",
      },
      {
        title: "CMS & E-commerce",
        href: "/pages/services/cms-e-commerce",
        description: "WordPress, Shopify, Online Stores",
      },
      {
        title: "Containerisation Tools",
        href: "/pages/services/contanerization-service",
        description: "Docker, Kubernetes, DevOps",
      },
      {
        title: "UI/UX Services",
        href: "/pages/services/uiux-design",
        description: "Design, Prototyping, User Experience",
      },
      {
        title: "Testing Services",
        href: "/pages/services/testing-services",
        description: "QA, Automation, Manual Testing",
      },
      {
        title: "Big Data",
        href: "/pages/services/big-data",
        description: "Analytics, Data Processing, Hadoop",
      },
      {
        title: "Data Visualisation",
        href: "/pages/services/data-visualisation",
        description: "Charts, Dashboards, Insights",
      },
      {
        title: "AI Integration",
        href: "/pages/services/ai-integration",
        description: "Machine Learning, Chatbots, Automation",
      },
    ],
  },
];

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-black transition-colors duration-300 px-6 py-10 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto grid max-md:grid-cols-1 min-md:grid-cols-3 gap-8">
        {/* Logo and Company Info */}
        <div>
          <Image src={logo} alt="Company Logo" className="w-32 mb-3" />
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Ziostechsolutions Pvt. Ltd.
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Innovating digital transformation with cutting-edge IT, AI, and
            cloud solutions.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-3 mt-4">
            <a
              href={socialLinks?.linkedin || "#"}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={22}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              />
            </a>
            <a
              href={socialLinks?.instagram || "#"}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                size={22}
                className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              />
            </a>
            <a
              href={socialLinks?.twitter || "#"}
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter
                size={22}
                className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              />
            </a>
          </div>
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Email Us:</p>
              <a href="mailto:company@gamil.com">ceo@ziostechsolutions.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Call Us:</p>
              <a href="phone:company@gamil.com">+91 92778-01590</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Address:</p>
              <p>H.No - 104A, Vinayakpur, Kanpur Nagar, Uttar Pradesh, India 208024, IN</p>
            </div>
          </div>
        </div>

        {/* Dynamic Navigation Columns */}
        {NAV_ITEMS.map((section, i) => (
          <div key={i}>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-3">
              {section.title}
            </h4>
            {section.subItems?.map((sub, index) => (
              <Link key={index} href={sub.href}>
                <div className="hover:text-gray-900 dark:hover:text-white mt-2 transition-colors">
                  {sub.title}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Footer Bottom Text */}
      <p className="text-center mt-10 text-gray-500 dark:text-gray-500 text-sm">
        © {new Date().getFullYear()} Ziostechsolutions Pvt. Ltd. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
