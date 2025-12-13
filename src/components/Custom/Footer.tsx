import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets/images/images.export.js";

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
    facebook?: string;
  };
}

const NAV_ITEMS: NavItem[] = [
  {
    title: "Explore",
    subItems: [
      { title: "Home", href: "/", description: "Welcome, Overview, Landing" },
      {
        title: "Projects",
        href: "/projects",
        description: "Portfolio, Case Studies, Work",
      },
      {
        title: "Hire Developer",
        href: "/hire-developers",
        description: "Find top talent for your projects",
      },
      { title: "About", href: "/about", description: "Company, Team, Story" },
      { title: "Blog", href: "/blog", description: "Insights, News, Updates" },
    ],
  },
  {
    title: "More Services",
    subItems: [
      {
        title: "Development",
        href: "/services/development",
        description: "Web, Mobile, Software, Apps",
      },
      {
        title: "Cloud Services",
        href: "/services/cloud-service",
        description: "AWS, Azure, Google Cloud, Hosting",
      },
      {
        title: "Platform Services",
        href: "/services/platform-service",
        description: "SaaS, PaaS, Enterprise Platforms",
      },
      {
        title: "CMS & E-commerce",
        href: "/services/cms-e-commerce",
        description: "WordPress, Shopify, Online Stores",
      },
      {
        title: "Containerisation Tools",
        href: "/services/contanerization-service",
        description: "Docker, Kubernetes, DevOps",
      },
      {
        title: "UI/UX Services",
        href: "/services/uiux-design",
        description: "Design, Prototyping, User Experience",
      },
      {
        title: "Testing Services",
        href: "/services/testing-services",
        description: "QA, Automation, Manual Testing",
      },
      {
        title: "Big Data",
        href: "/services/big-data",
        description: "Analytics, Data Processing, Hadoop",
      },
      {
        title: "Data Visualisation",
        href: "/services/data-visualisation",
        description: "Charts, Dashboards, Insights",
      },
      {
        title: "AI Integration",
        href: "/services/ai-integration",
        description: "Machine Learning, Chatbots, Automation",
      },
    ],
  },
];

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-black transition-colors duration-300 px-6 py-8 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Social */}
        <div className="space-y-3">
          <Image width={100} height={100} src={logo} alt="Company Logo" className="w-28 mb-1" />
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            Ziostechsolutions Pvt. Ltd.
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Innovating digital transformation with cutting-edge IT, AI, and
            cloud solutions.
          </p>

          <div className="flex gap-3 mt-1">
            <a
              href={
                socialLinks?.linkedin ||
                "https://www.linkedin.com/company/ziostechsolutions/"
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={20}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              />
            </a>
            <a
              href={
                socialLinks?.instagram ||
                "https://www.instagram.com/ziostechsolutions"
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                size={20}
                className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              />
            </a>
            <a
              href={
                socialLinks?.twitter ||
                "https://x.com/ZiostechS10808?t=FF6BNpjjkc9STyv4B_YLAg&s=08"
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter
                size={20}
                className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              />
            </a>
            <a
              href={
                socialLinks?.facebook ||
                "https://www.facebook.com/ziostechsolutions/"
              }
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                size={20}
                className="hover:text-blue-800 dark:hover:text-blue-500 transition-colors"
              />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        {NAV_ITEMS.slice(0, 1).map((section, i) => (
          <div key={i}>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
              {section.title}
            </h4>
            {section.subItems?.map((sub, index) => (
              <Link key={index} href={sub.href}>
                <div className="hover:text-gray-900 dark:hover:text-white mt-1 cursor-pointer transition-colors">
                  {sub.title}
                </div>
              </Link>
            ))}
          </div>
        ))}

        {/* More Services Column 1 */}
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
            More Services
          </h4>
          {NAV_ITEMS[1].subItems?.slice(0, 5).map((sub, index) => (
            <Link key={index} href={sub.href}>
              <div className="hover:text-gray-900 dark:hover:text-white mt-1 cursor-pointer transition-colors">
                {sub.title}
              </div>
            </Link>
          ))}
        </div>

        {/* More Services Column 2 */}
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold mb-2 invisible">
            {/* invisible header for spacing alignment */}
            More Services
          </h4>
          {NAV_ITEMS[1].subItems?.slice(5).map((sub, index) => (
            <Link key={index} href={sub.href}>
              <div className="hover:text-gray-900 dark:hover:text-white mt-1 cursor-pointer transition-colors">
                {sub.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Info Right Side */}
        <div className="border-l border-gray-300 dark:border-gray-700 pl-4 space-y-2">
          <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
            Contact
          </h4>
          <div>
            <p className="font-semibold">Email</p>
            <a
              href="mailto:ceo@ziostechsolutions.com"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ceo.office@ziostechsolutions.com
            </a>
          </div>
          <div>
            <p className="font-semibold">Call</p>
            <a
              href="tel:+919277801590"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              +91 9277801590
            </a>
          </div>
          <div>
            <p className="font-semibold">Address</p>
            <p>
              H.No - 104A, Vinayakpur, Kanpur Nagar, Uttar Pradesh, India
              208024, IN
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <p className="text-center mt-6 text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Ziostechsolutions Pvt. Ltd. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
