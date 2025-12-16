import {
  BarChart3,
  Bot,
  Boxes,
  Brain,
  Briefcase,
  Bug,
  CheckCircle,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Cloud,
  CloudUpload,
  Code,
  Code2,
  Cog,
  Cpu,
  Database,
  FileSearch,
  Gauge,
  GitMerge,
  Icon,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  LineChart,
  ListChecks,
  MessageSquare,
  Monitor,
  MonitorSmartphone,
  Network,
  Palette,
  PenTool,
  PieChart,
  Plug,
  RefreshCw,
  Repeat,
  Rocket,
  Search,
  Server,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  Users,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

import {
  projectimg1,
  projectimg2,
  projectimg3,
  projectimg4,
  projectimg5,
  sandeep,
  CarlosMendez,
  Raghubh,
  Aiko,
  Narendra,
  Emily,
  Liam,
  Sofia,
  Raj,
  Hannah,
  aakriti,
  projectimg6,
} from "@/assets/images/images.export.js";

import {
  FaAndroid,
  FaAws,
  FaDatabase,
  FaDigitalOcean,
  FaDocker,
  FaFigma,
  FaFileAlt,
  FaGithub,
  FaGitlab,
  FaJava,
  FaJenkins,
  FaNodeJs,
  FaReact,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";

import {
  RiFirebaseFill,
  RiTailwindCssFill,
  RiVercelFill,
} from "react-icons/ri";

import {
  SiAnsible,
  SiBigcommerce,
  SiCircleci,
  SiExpress,
  SiGit,
  SiGooglecloud,
  SiHeroku,
  SiJetpackcompose,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiSanity,
  SiSqlite,
  SiStrapi,
  SiSwift,
  SiTerraform,
  SiWoocommerce,
  SiXcode,
  SiHuggingface,
  SiTensorflow,
  SiPytorch,
  SiApachespark,
  SiApachehadoop,
  SiApachekafka,
  SiApacheairflow,
  SiTableau,
  SiAdobepremierepro,
  SiSelenium,
  SiJest,
  SiApachejmeter,
  SiPostman,
} from "react-icons/si";

import { PiOpenAiLogo, PiLighthouse } from "react-icons/pi";

import { BiDesktop, BiPowerOff } from "react-icons/bi";

import { AiOutlinePython } from "react-icons/ai";

import { GrMysql } from "react-icons/gr";

import { CiGrid31 } from "react-icons/ci";

import { TbBrandCypress } from "react-icons/tb";

import {
  TbBrandAdobeXd,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
} from "react-icons/tb";

import { SiAdobeaftereffects } from "react-icons/si";

import {
  IconAdjustmentsAlt,
  IconApi,
  IconApps,
  IconBinaryTree2,
  IconBoxMultiple,
  IconBoxSeam,
  IconBrain,
  IconBrandAzure,
  IconBuildingSkyscraper,
  IconChartBar,
  IconChartCandle,
  IconChartHistogram,
  IconCloud,
  IconCloudCog,
  IconCloudDataConnection,
  IconCloudUpload,
  IconDatabase,
  IconDatabaseImport,
  IconDeviceAnalytics,
  IconDeviceDesktopAnalytics,
  IconDeviceMobile,
  IconDeviceMobileMessage,
  IconLayersIntersect,
  IconLayoutDashboard,
  IconMagnetOff,
  IconMessageChatbot,
  IconPlugConnected,
  IconReportAnalytics,
  IconRobot,
  IconRobotFace,
  IconServerCog,
  IconSettingsAutomation,
  IconShieldCheck,
  IconShieldLock,
  IconShoppingBag,
  IconTools,
  IconTopologyStar3,
  IconUsersGroup,
  IconVector,
  IconWorldWww,
  IconServer,
} from "@tabler/icons-react";

export const features = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    text: "Enterprise Grade security & compliance",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    text: "Cloud & DevOps to accelerate delivery",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    text: "Performance engineering and cost optimization",
  },
];

export const cardData = [
  {
    icon: <Server className="w-5 h-5 text-orange-400" />,
    title: "Managed Cloud",
    desc: "End-to-end cloud architecture, migration & 24/7 support.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-orange-400" />,
    title: "Security & Compliance",
    desc: "Vulnerability assessments, incident readiness, and audits.",
  },
  {
    icon: <Cloud className="w-5 h-5 text-orange-400" />,
    title: "Custom Software",
    desc: "Product engineering, APIs, and integrations tailored to your processes.",
  },
  {
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    title: "Modernization",
    desc: "Legacy migrations, performance tuning, and observability.",
  },
];

export const statsData = [
  {
    icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
    value: 100,
    suffix: "+",
    label: "Projects delivered",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-500" />,
    value: 99.99,
    suffix: "%",
    label: "Avg. uptime",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    value: 100,
    suffix: "+",
    label: "Enterprise clients",
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    value: 4.8,
    suffix: "/5",
    label: "Avg. client rating",
  },
];

export const works = [
  {
    imgSrc: projectimg6,
    title: "Fairy of Fortune",
    description:
      "Fairy of Fortune is a digital platform empowering rural women to start and grow their businesses online.",
    points: [
      "Web & App development",
      "Secure data system",
      "Admin dashboard",
      "Scalable architecture",
    ],
    domain: "Web & App Development",
    href: "/projects#fairy-of-fortune",
    link: "https://play.google.com/store/apps/details?id=com.fortunefairy.app",
    testimonialName: "",
  },
  {
    imgSrc: projectimg3,
    title: "Sunrise Diagnostic Services",
    description:
      "Sunrise Diagnostics: Secure website for bookings, profile management, and reliable maintenance.",
    points: [
      "Online booking system",
      "Secure profile management",
      "Maintenance for smooth performance",
      "Reliable patient info handling",
    ],
    domain: "Web Development",
    href: "/projects#sunrise-diagnostic-services",
    testimonialName: "Sandeep Yadav",
  },
  {
    imgSrc: projectimg4,
    title: "Saurabh Visionary Ventures",
    description:
      "Saurabh Visionary Ventures, A Coaching website showcasing courses, faculty, and success stories.",
    points: [
      "Course & faculty showcase",
      "Success stories section",
      "Profile management system",
      "Ongoing website maintenance",
    ],
    domain: "Web Development",
    href: "/projects#saurabh-visionary-ventures",
    link: "https://saurabhvision.in/",
    testimonialName: "MWO Raghubh Singh",
  },
  {
    imgSrc: projectimg5,
    title: "Avni Hospital",
    description:
      "Avni Hospital’s website streamlines patient interactions by offering easy access to information and services.",
    points: [
      "Patient info management",
      "Profile management system",
      "Efficient data handling",
      "Exceptional healthcare delivery",
    ],
    domain: "Web Development",
    href: "/projects#avni-hospital",
    testimonialName: "Narendra Singh",
  },
  {
    imgSrc: projectimg1,
    title: "Ekta Janch Kendra",
    description:
      "Ekta Janch Kendra: Healthcare website with profile management, maintenance, and reliable services.",
    points: [
      "User-friendly website",
      "Profile management system",
      "Ongoing maintenance",
      "Reliable healthcare services",
    ],
    domain: "Web Development",
    href: "/projects#ekta-janch-kendra",
    testimonialsData: "",
  },
  {
    imgSrc: projectimg2,
    title: "Medicity Hospital, Unnao",
    description:
      "Medicity Hospital uses our system for efficient doctor, patient, and staff management.",
    points: [
      "Doctor, patient & staff data management",
      "Improved coordination",
      "Enhanced record accuracy",
      "Streamlined operations",
    ],
    domain: "Web Development",
    href: "/projects#medicity-hospital-unnao",
    testimonialsData: "",
  },
];

export const testimonialsData = [
  {
    img: sandeep,
    name: "Sandeep Yadav",
    title: "CEO & Founder (Sunrise Diagnostic Services)",
    quote:
      "Working with Ziostech Solutions transformed our business. Their expertise, insights, and innovative solutions enhanced operations and improved project outcomes.",
  },
  {
    img: Raghubh,
    name: "MWO Raghubh Singh",
    title: "M.D. & CEO (Saurabh Visionary Ventures)",
    quote:
      "Ziostech exceeded expectations, delivering a dynamic platform with professionalism, timely delivery, and exceptional communication. Highly recommended for innovative tech solutions.",
  },
  {
    img: Narendra,
    name: "Narendra Singh",
    title: "CEO & Founder (Avni Hospital)",
    quote:
      "Avni Hospital values Ziostech's tailored, efficient platform. Their professionalism, expertise, and dedication ensured innovative solutions and outstanding customer support.",
  },
  {
    img: Emily,
    name: "Emily Johnson",
    title: "Marketing Director (GlobalTech Solutions)",
    quote:
      "Ziostech's innovative approach streamlined our processes, boosting efficiency and productivity. Their team's dedication and expertise are truly commendable.",
  },
  {
    img: CarlosMendez,
    name: "Carlos Mendez",
    title: "CEO (Mendez Enterprises)",
    quote:
      "Partnering with Ziostech enhanced our digital presence. Their solutions are top-notch, and their support is unparalleled.",
  },
  // --- Unpaired testimonials below ---
  {
    img: Aiko,
    name: "Aiko Tanaka",
    title: "CTO (Tanaka Innovations)",
    quote:
      "Ziostech's expertise transformed our platform, leading to increased user engagement. Their professionalism and insight were invaluable.",
  },
  {
    img: Liam,
    name: "Liam O'Connor",
    title: "Managing Director (O'Connor Financials)",
    quote:
      "Ziostech delivered exceptional solutions tailored to our needs. Their team's commitment and proficiency exceeded our expectations.",
  },
  {
    img: Sofia,
    name: "Sofia Rossi",
    title: "Founder (Rossi Design Studio)",
    quote:
      "Collaborating with Ziostech was a game-changer. Their innovative solutions and attentive service significantly benefited our projects.",
  },
  {
    img: Raj,
    name: "Raj Patel",
    title: "COO (Patel Logistics)",
    quote:
      "Ziostech's solutions optimized our operations, leading to improved efficiency. Their expertise and support were instrumental in our success.",
  },
  {
    img: Hannah,
    name: "Hannah Muller",
    title: "Head of Development (Muller Tech)",
    quote:
      "Ziostech's professional approach and innovative solutions significantly advanced our development projects. Their team's dedication is impressive.",
  },
  {
    img: aakriti,
    name: "Aakriti",
    title: "CEO (RedZet)",
    quote:
      "Ziostech Solutions played a pivotal role in our digital transformation. Their strategic approach, technical expertise, and commitment to excellence resulted in a robust and scalable platform.",
  },
];

// 🌅 Sunrise Diagnostic Services
export const sunriseOverview =
  "A secure, user-friendly diagnostic service website that simplifies test booking and patient profile management.";
export const sunriseGoal =
  "To develop a reliable digital platform enabling online diagnostics bookings, profile management, and system maintenance.";
export const sunriseChallenges = [
  "Handling sensitive medical data securely",
  "Ensuring smooth booking experience for patients",
  "Maintaining system reliability and uptime",
];
export const sunriseSolution = [
  "Built a secure web platform using React and Node.js",
  "Integrated encrypted database for patient records",
  "Set up automated maintenance and uptime monitoring",
];

// Saurabh Visionary Ventures
export const saurabhOverview =
  "A coaching institute website highlighting courses, experienced faculty, and success stories for prospective students.";
export const saurabhGoal =
  "To create an engaging, informative web presence for the institute to attract students and showcase achievements.";
export const saurabhChallenges = [
  "Presenting large volumes of course data effectively",
  "Ensuring easy navigation across multiple sections",
  "Maintaining consistent branding and design",
];
export const saurabhSolution = [
  "Developed with Next.js for performance and SEO",
  "Added structured course and faculty sections",
  "Implemented a dynamic CMS for easy updates",
];

// Avni Hospital
export const avniOverview =
  "A modern hospital website designed to streamline patient interaction and improve service accessibility.";
export const avniGoal =
  "To enhance digital accessibility for patients by providing information and service access through an optimized website.";
export const avniChallenges = [
  "Organizing complex healthcare data effectively",
  "Ensuring fast access across devices",
  "Implementing secure patient interaction points",
];
export const avniSolution = [
  "Developed using React for responsive UI",
  "Optimized backend APIs for fast load times",
  "Integrated secure HTTPS and authentication layers",
];

// Ekta Janch Kendra
export const ektaOverview =
  "A healthcare diagnostic center website providing booking, profile management, and maintenance functionalities.";
export const ektaGoal =
  "To deliver a dependable healthcare service portal with profile handling and regular maintenance support.";
export const ektaChallenges = [
  "Maintaining real-time availability data",
  "Designing a simple yet functional patient interface",
  "Ensuring long-term reliability and support",
];
export const ektaSolution = [
  "Created an intuitive booking and profile system",
  "Used Node.js backend with optimized REST APIs",
  "Added regular maintenance and monitoring scripts",
];

// Medicity Hospital (Unnao)
export const medicityOverview =
  "A hospital management system for doctors, patients, and staff — improving coordination and record handling.";
export const medicityGoal =
  "To develop a full-scale hospital management solution with efficient data management and streamlined operations.";
export const medicityChallenges = [
  "Integrating multiple user roles (doctor, patient, staff)",
  "Maintaining accurate and synchronized records",
  "Ensuring data security and scalability",
];
export const medicitySolution = [
  "Built a modular management dashboard using React",
  "Integrated PostgreSQL for relational data handling",
  "Deployed on AWS for scalability and performance",
];

export const fairyOverview =
  "A digital empowerment platform designed to help rural women start, manage, and grow their businesses online through an integrated website and mobile app.";

export const fairyGoal =
  "To create a scalable, secure, and accessible digital ecosystem that supports women entrepreneurs with business tools, data management, and growth insights.";

export const fairyChallenges = [
  "Building a unified experience across mobile platforms",
  "Ensuring secure user data handling for multiple user roles",
  "Designing an intuitive admin dashboard for efficient management",
  "Developing a scalable architecture to support long term platform growth",
];

export const fairySolution = [
  "Developed a responsive mobile app",
  "Implemented secure authentication and encrypted data storage",
  "Built an admin dashboard for real time business insights and control",
  "Designed a modular backend architecture for scalability and easy feature expansion",
];

export const developmentSteps = [
  {
    title: "Discovery and Planning",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          We start by{" "}
          <span className="font-semibold capitalize text-orange-500">
            understanding your goals, audience, and project requirements
          </span>{" "}
          to lay a solid foundation for your digital product.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm text-gray-500 max-md:text-xs dark:text-gray-500 capitalize">
            This phase ensures alignment on strategy, scope, and success metrics
            before we move ahead.
          </p>
        </div>
      </>
    ),
    icon: <Search className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Design and Prototyping",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Our design team crafts{" "}
          <span className="font-semibold capitalize text-blue-500">
            engaging UI and UX prototypes
          </span>{" "}
          that balance aesthetics, usability, and brand identity.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm max-md:text-xs text-gray-500 dark:text-gray-500 capitalize">
            Interactive mockups bring your vision to life before development
            begins.
          </p>
        </div>
      </>
    ),
    icon: <FaFigma className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Development",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Our engineers use{" "}
          <span className="font-medium capitalize text-orange-500">
            modern web and mobile frameworks
          </span>{" "}
          to build scalable, secure, and high-performing solutions.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm max-md:text-xs text-gray-500 dark:text-gray-500 capitalize">
            We ensure smooth integrations, clean code, and optimized
            performance.
          </p>
        </div>
      </>
    ),
    icon: <Code className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Testing and Quality Assurance",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          We perform{" "}
          <span className="font-semibold capitalize text-blue-500">
            rigorous performance, security, and compatibility testing
          </span>{" "}
          to ensure a flawless user experience.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm max-md:text-xs text-gray-500 dark:text-gray-500 capitalize">
            Every feature is validated across browsers and devices before
            launch.
          </p>
        </div>
      </>
    ),
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Launch",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          We handle{" "}
          <span className="font-semibold capitalize text-orange-500">
            deployment and optimization
          </span>{" "}
          to ensure your website or app goes live smoothly with zero downtime.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm max-md:text-xs text-gray-500 dark:text-gray-500 capitalize">
            Our experts configure hosting, domains, and CI/CD pipelines for a
            seamless release.
          </p>
        </div>
      </>
    ),
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Support and Growth",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          We provide{" "}
          <span className="font-semibold capitalize text-blue-500">
            continuous monitoring, maintenance, and updates
          </span>{" "}
          to keep your platform optimized and future ready.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm max-md:text-xs text-gray-500 dark:text-gray-500 capitalize">
            Our ongoing support helps your business evolve and scale with
            confidence.
          </p>
        </div>
      </>
    ),
    icon: <LifeBuoy className="w-8 h-8 text-blue-500" />,
  },
];

export const developmentTechStack = {
  web: [
    { name: "React", icon: FaReact, desc: "UI Library" },
    { name: "Next.js", icon: SiNextdotjs, desc: "Full-stack Framework" },
    { name: "Node.js", icon: FaNodeJs, desc: "Backend Runtime" },
    { name: "Express", icon: SiExpress, desc: "Server Framework" },
    { name: "MongoDB", icon: SiMongodb, desc: "NoSQL Database" },
    { name: "PostgreSQL", icon: SiPostgresql, desc: "Relational DB" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, desc: "Styling" },
  ],
  android: [
    { name: "Kotlin", icon: SiKotlin, desc: "Native Language" }, // Using Java as a close alternative
    { name: "Java", icon: FaJava, desc: "Core Android Development" },
    {
      name: "Jetpack Compose",
      icon: SiJetpackcompose,
      desc: "Modern UI Toolkit",
    },
    { name: "Firebase", icon: RiFirebaseFill, desc: "Backend Services" },
    { name: "Retrofit", icon: FaAndroid, desc: "Networking Client" },
    { name: "SQLite", icon: SiSqlite, desc: "Local Database" },
  ],
  ios: [
    { name: "Swift", icon: SiSwift, desc: "Native Language" },
    { name: "SwiftUI", icon: SiSwift, desc: "Declarative UI Framework" },
    { name: "Xcode", icon: SiXcode, desc: "Development Environment" },
    { name: "Firebase", icon: RiFirebaseFill, desc: "Realtime Backend" },
    { name: "CoreData", icon: FaDatabase, desc: "Local Storage Framework" },
    { name: "Alamofire", icon: IconApi, desc: "HTTP Networking Library" },
  ],
};

export const cloudSteps = [
  {
    title: "Assessment & Planning",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We analyze your{" "}
          <span className="text-orange-500 font-semibold">
            current infrastructure and identify migration opportunities
          </span>{" "}
          for better efficiency.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Includes system audit, dependency mapping, and readiness assessment.
          </p>
        </div>
      </>
    ),
    icon: <ClipboardCheck className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Design & Strategy",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our team{" "}
          <span className="text-orange-500 font-semibold">
            builds a detailed plan
          </span>{" "}
          for secure and scalable cloud architecture.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Architecture blueprints designed for AWS, Azure, or GCP
            environments.
          </p>
        </div>
      </>
    ),
    icon: <PenTool className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Migration & Deployment",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We execute{" "}
          <span className="text-orange-500 font-semibold">
            Applications and data are transferred smoothly
          </span>{" "}
          without disrupting your operations.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Ensures data integrity, compliance, and operational continuity.
          </p>
        </div>
      </>
    ),
    icon: <CloudUpload className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Optimization",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          we Continuously{" "}
          <span className="text-orange-500 font-semibold">
            monitor performance, manage resources, and enhance
          </span>{" "}
           system speed.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Implements auto-scaling, cost tracking, and load balancing.
          </p>
        </div>
      </>
    ),
    icon: <Gauge className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Support & Maintenance",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our{" "}
          <span className="text-orange-500 font-semibold">
            experts provide 24/7 assistance to ensure
          </span>{" "}
          your cloud remains secure and up to date.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Includes proactive issue resolution and ongoing optimization.
          </p>
        </div>
      </>
    ),
    icon: <LifeBuoy className="w-8 h-8 text-blue-500" />,
  },
];

export const cloudTechStack = {
  providers: [
    { name: "AWS", icon: FaAws, desc: "Compute & Cloud Infrastructure" },
    {
      name: "Microsoft Azure",
      icon: IconBrandAzure,
      desc: "Enterprise Cloud Platform",
    },
    {
      name: "Google Cloud",
      icon: SiGooglecloud,
      desc: "ML & Data-driven Cloud",
    },
    {
      name: "DigitalOcean",
      icon: FaDigitalOcean,
      desc: "Simplified Cloud Hosting",
    },
    { name: "Heroku", icon: SiHeroku, desc: "App Hosting Platform" },
    { name: "Vercel", icon: RiVercelFill, desc: "Frontend Deployment" },
    { name: "Netlify", icon: SiNetlify, desc: "Static Site Deployment" },
  ],
};

export const platformSteps = [
  {
    title: "Discovery & Assessment",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We start by{" "}
          <span className="text-orange-500 font-semibold">
            Understand your goals, requirements, and scalability needs.
          </span>{" "}
          to lay the foundation for a successful build.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Deep assessment of business requirements and cloud readiness.
          </p>
        </div>
      </>
    ),
    icon: <Layers className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Architecture Design",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We design{" "}
          <span className="text-orange-500 font-semibold">
            scalable, secure, and high-performance PaaS architectures
          </span>{" "}
          tailored to your business goals.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Built on cloud-native frameworks using AWS, Azure, or GCP.
          </p>
        </div>
      </>
    ),
    icon: <Cog className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Platform Development & Deployment",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our team develops and deploys{" "}
          <span className="text-orange-500 font-semibold">
            production-ready platforms
          </span>{" "}
          with optimized APIs, databases, and automation workflows.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Implements CI/CD pipelines for continuous delivery and scalability.
          </p>
        </div>
      </>
    ),
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Integration & Automation",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We connect{" "}
          <span className="text-orange-500 font-semibold">
            apps, APIs, and data pipelines
          </span>{" "}
          to enable smooth cross-platform communication and smart automation.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Ensures seamless orchestration between services and systems.
          </p>
        </div>
      </>
    ),
    icon: <Zap className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Testing & Optimization",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Every platform undergoes{" "}
          <span className="text-orange-500 font-semibold">
            rigorous testing and performance tuning
          </span>{" "}
          to guarantee reliability, security, and responsiveness.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Covers automated testing, vulnerability scans, and stress tests.
          </p>
        </div>
      </>
    ),
    icon: <Shield className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Monitoring & Support",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We provide{" "}
          <span className="text-orange-500 font-semibold">
            continuous monitoring, maintenance, and scaling support
          </span>{" "}
          post-launch to ensure optimal performance.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Includes SLA-based support and real-time health tracking.
          </p>
        </div>
      </>
    ),
    icon: <LifeBuoy className="w-8 h-8 text-orange-500" />,
  },
];

export const platformTechStack = {
  technologies: [
    { name: "React", icon: FaReact, desc: "Frontend Framework" },
    { name: "Next.js", icon: SiNextdotjs, desc: "SSR & API Layer" },
    { name: "Node.js", icon: FaNodeJs, desc: "Backend Runtime" },
    { name: "AWS", icon: FaAws, desc: "Cloud Deployment" },
    { name: "Azure", icon: IconBrandAzure, desc: "Enterprise Cloud Services" },
    { name: "GCP", icon: SiGooglecloud, desc: "Data & AI Integration" },
    { name: "Vercel", icon: RiVercelFill, desc: "Edge Deployment" },
    { name: "Heroku", icon: SiHeroku, desc: "App Hosting Platform" },
  ],
};

export const cmsSteps = [
  {
    title: "Consultation & Strategy",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We begin by{" "}
          <span className="text-orange-500 font-semibold">
            understanding your brand, business goals, and target audience
          </span>{" "}
          to craft a strategic roadmap for your e-commerce success.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Includes market research, competitor analysis, and growth planning.
          </p>
        </div>
      </>
    ),
    icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Design & Development",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We design{" "}
          <span className="text-orange-500 font-semibold">
            visually stunning, conversion-optimized storefronts
          </span>{" "}
          using modern UX principles and responsive design.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Developed with React, Next.js, or Shopify for performance and
            flexibility.
          </p>
        </div>
      </>
    ),
    icon: <Palette className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Integration & Testing",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We integrate{" "}
          <span className="text-orange-500 font-semibold">
            payment gateways, shipping APIs, and third-party tools
          </span>{" "}
          while ensuring flawless performance through end-to-end testing.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Includes QA, security validation, and performance optimization.
          </p>
        </div>
      </>
    ),
    icon: <Plug className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Deployment",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We deploy your store on{" "}
          <span className="text-orange-500 font-semibold">
            secure, cloud-based infrastructure
          </span>{" "}
          with complete SEO and performance optimization.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Hosted on AWS, Azure, or Vercel for global reliability.
          </p>
        </div>
      </>
    ),
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Support & Maintenance",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Post-launch, we offer{" "}
          <span className="text-orange-500 font-semibold">
            continuous updates, monitoring, and technical support
          </span>{" "}
          to keep your store secure and optimized.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Covers bug fixes, performance tuning, and new feature rollouts.
          </p>
        </div>
      </>
    ),
    icon: <LifeBuoy className="w-8 h-8 text-blue-500" />,
  },
];

export const cmsTechStack = {
  platforms: [
    { name: "WordPress", icon: FaWordpress, desc: "Flexible CMS Platform" },
    { name: "Shopify", icon: FaShopify, desc: "E-commerce Platform" },
    { name: "WooCommerce", icon: SiWoocommerce, desc: "WP-based E-commerce" },
    { name: "BigCommerce", icon: SiBigcommerce, desc: "Enterprise Commerce" },
    { name: "Contentful", icon: FaFileAlt, desc: "Headless CMS" },
    { name: "Sanity", icon: SiSanity, desc: "Structured Content Platform" },
    { name: "Strapi", icon: SiStrapi, desc: "Open-source Headless CMS" },
    { name: "Magento", icon: IconMagnetOff, desc: "E-commerce Framework" },
  ],
};

export const containerSteps = [
  {
    title: "Assessment & Planning",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We conduct a{" "}
          <span className="text-orange-500 font-semibold">
            full audit of your applications, dependencies, and infrastructure
          </span>{" "}
          readiness.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Identifies workloads ideal for Docker or Kubernetes environments.
          </p>
        </div>
      </>
    ),
    icon: <ClipboardCheck className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Containerization Strategy Design",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our experts create a{" "}
          <span className="text-orange-500 font-semibold">
            detailed roadmap
          </span>{" "}
          outlining tools, workflows, and best practices.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Includes orchestration planning, CI/CD integration, and deployment
            design.
          </p>
        </div>
      </>
    ),
    icon: <PenTool className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Container Development & Testing",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We{" "}
          <span className="text-orange-500 font-semibold">
            containerize applications
          </span>{" "}
          and configure environments, and test for compatibility and performance.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Validates resource utilization, runtime efficiency, and reliability.
          </p>
        </div>
      </>
    ),
    icon: <Boxes className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Orchestration & Automation Setup",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We deploy{" "}
          <span className="text-orange-500 font-semibold">
            Kubernetes or Docker Swarm to manage
          </span>{" "}
          scaling, updates, and load balancing.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Enables efficient lifecycle management and zero-downtime
            deployments.
          </p>
        </div>
      </>
    ),
    icon: <Network className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Security Implementation & Optimization",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We take care of{" "}
          <span className="text-orange-500 font-semibold">
          Continuous monitoring and vulnerability scans
          </span>{" "}
          to ensure secure and optimized containerized environments.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Strengthens compliance and safeguards workloads across all layers.
          </p>
        </div>
      </>
    ),
    icon: <Shield className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Deployment & Ongoing Support",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We handle{" "}
          <span className="text-orange-500 font-semibold">
            end-to-end deployment and provide continuous support
          </span>{" "}
          to maintain efficiency and reliability.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Includes proactive maintenance and performance optimization.
          </p>
        </div>
      </>
    ),
    icon: <LifeBuoy className="w-8 h-8 text-orange-500" />,
  },
];

export const containerTechStack = {
  tools: [
    { name: "Docker", icon: FaDocker, desc: "Container Platform" },
    { name: "Kubernetes", icon: SiKubernetes, desc: "Orchestration" },
    { name: "Jenkins", icon: FaJenkins, desc: "CI/CD Automation" },
    { name: "Git", icon: SiGit, desc: "Version Control" },
    { name: "GitHub Actions", icon: FaGithub, desc: "Workflow Automation" },
    { name: "GitLab CI", icon: FaGitlab, desc: "Pipeline Management" },
    { name: "CircleCI", icon: SiCircleci, desc: "CI/CD Cloud Service" },
    { name: "Terraform", icon: SiTerraform, desc: "Infrastructure as Code" },
    { name: "Ansible", icon: SiAnsible, desc: "Automation & Configuration" },
  ],
};

export const aiIntegrationSteps = [
  {
    title: "Requirement Analysis",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We start by{" "}
          <span className="text-orange-500 font-semibold">
            understanding your business goals, target users, and automation
            opportunities
          </span>{" "}
          to define clear AI integration objectives.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Establishes a strong foundation aligned with your digital strategy.
          </p>
        </div>
      </>
    ),
    icon: <Brain className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Design and Conversation Flow",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our experts design{" "}
          <span className="text-orange-500 font-semibold">
            intelligent and user-friendly conversation flows
          </span>{" "}
          while defining the bot’s tone, personality, and interaction logic.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Enhances user engagement and ensures natural communication.
          </p>
        </div>
      </>
    ),
    icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Development and AI Training",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We leverage{" "}
          <span className="text-orange-500 font-semibold">
            NLP and machine learning frameworks
          </span>{" "}
          to train your AI for contextual understanding and human-like
          responses.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Delivers responsive, adaptive, and intelligent conversational
            experiences.
          </p>
        </div>
      </>
    ),
    icon: <Workflow className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Testing and Validation",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Rigorous{" "}
          <span className="text-orange-500 font-semibold">
            performance, accuracy, and security testing
          </span>{" "}
          ensures the bot behaves consistently across all environments and
          platforms.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Guarantees reliability and error-free user interactions.
          </p>
        </div>
      </>
    ),
    icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Deployment and Monitoring",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We{" "}
          <span className="text-orange-500 font-semibold">
            deploy and monitor your AI solutions in real-time
          </span>{" "}
          to collect insights, feedback, and performance metrics post-launch.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Enables data-driven optimization and continuous improvement.
          </p>
        </div>
      </>
    ),
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Optimization and Support",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Ziostech provides{" "}
          <span className="text-orange-500 font-semibold">
            ongoing AI optimization, updates, and technical support
          </span>{" "}
          to ensure scalability and evolving intelligence.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Keeps your AI solution adaptive, efficient, and future-ready.
          </p>
        </div>
      </>
    ),
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
  },
];

const aiTechStack = [
  { name: "OpenAI", icon: PiOpenAiLogo, desc: "LLMs & APIs" },
  {
    name: "Hugging Face",
    icon: SiHuggingface,
    desc: "Transformers & Model Hub",
  },
  { name: "TensorFlow", icon: SiTensorflow, desc: "Training & Serving" },
  { name: "PyTorch", icon: SiPytorch, desc: "Research & Production" },
];
export { aiTechStack };

export const bigDataSteps = [
  {
    title: "Assessment & Strategy Development",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We begin with a deep{" "}
          <span className="text-orange-500 font-semibold">
            analysis of your existing data systems, goals, and infrastructure
          </span>{" "}
          to create a clear and actionable roadmap.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Aligns architecture design with your business objectives.
          </p>
        </div>
      </>
    ),
    icon: <Database className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Architecture Design",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We design the{" "}
          <span className="text-orange-500 font-semibold">
            core data warehouse architecture
          </span>{" "}
          covering ingestion, storage, processing, and presentation layers for
          maximum efficiency.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Ensures scalability and optimal data flow across the ecosystem.
          </p>
        </div>
      </>
    ),
    icon: <Layers className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Data Integration & Transformation",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our engineers build{" "}
          <span className="text-orange-500 font-semibold">
            robust ETL pipelines
          </span>{" "}
          to collect, cleanse, and merge data from multiple sources ensuring
          accuracy and consistency.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Enables unified, reliable datasets for analytics and reporting.
          </p>
        </div>
      </>
    ),
    icon: <GitMerge className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Testing & Validation",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Every solution undergoes{" "}
          <span className="text-orange-500 font-semibold">
            rigorous validation and quality checks
          </span>{" "}
          to ensure data consistency, accuracy, and performance.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Guarantees reliability under real-world data loads.
          </p>
        </div>
      </>
    ),
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Deployment & Optimization",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We{" "}
          <span className="text-orange-500 font-semibold">
            deploy and fine-tune the data warehouse
          </span>{" "}
          for performance, scalability, and long-term growth.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Includes continuous monitoring and real-time optimization.
          </p>
        </div>
      </>
    ),
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Ongoing Support & Maintenance",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Ziostech provides{" "}
          <span className="text-orange-500 font-semibold">
            continuous monitoring, upgrades, and maintenance
          </span>{" "}
          to ensure your system remains aligned with evolving business needs.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Keeps your data warehouse secure, scalable, and future-ready.
          </p>
        </div>
      </>
    ),
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
  },
];

const bigDataTechStack = [
  { name: "Apache Spark", icon: SiApachespark, desc: "Big Data Processing" },
  { name: "Hadoop", icon: SiApachehadoop, desc: "Distributed Storage" },
  { name: "Kafka", icon: SiApachekafka, desc: "Stream Processing" },
  { name: "Airflow", icon: SiApacheairflow, desc: "Workflow Management" },
  { name: "Tableau", icon: SiTableau, desc: "Data Visualization" },
  { name: "Power BI", icon: BiPowerOff, desc: "Business Analytics" },
];
export { bigDataTechStack };

export const dataVisSteps = [
  {
    title: "Requirement Assessment",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We start by gaining a{" "}
          <span className="text-orange-500 font-semibold">
            deep understanding of your business goals, KPIs, and data challenges
          </span>{" "}
          to define the project scope effectively.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Establishes a clear visualization roadmap aligned with strategy.
          </p>
        </div>
      </>
    ),
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Data Collection & Preparation",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Data is{" "}
          <span className="text-orange-500 font-semibold">
            cleaned, standardized, and structured
          </span>{" "}
          to ensure accuracy and reliability before visualization begins.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Ensures consistent, high-quality data for analysis and dashboards.
          </p>
        </div>
      </>
    ),
    icon: <Database className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Visualization Design",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our design team creates{" "}
          <span className="text-orange-500 font-semibold">
            intuitive and impactful dashboard mockups
          </span>{" "}
          that transform complex data into clear, actionable insights.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Focuses on readability, storytelling, and user interaction.
          </p>
        </div>
      </>
    ),
    icon: <Palette className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Development & Implementation",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Using{" "}
          <span className="text-orange-500 font-semibold">
            top visualization tools like Power BI, Tableau, or Google Data
            Studio
          </span>
          , we develop and integrate dashboards into your ecosystem.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Delivers dynamic, interactive dashboards ready for business use.
          </p>
        </div>
      </>
    ),
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Testing & Validation",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We conduct{" "}
          <span className="text-orange-500 font-semibold">
            rigorous performance and usability testing
          </span>{" "}
          to ensure accuracy, responsiveness, and visual consistency.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Validates every interaction, metric, and visualization layer.
          </p>
        </div>
      </>
    ),
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Ongoing Support & Enhancement",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Ziostech provides{" "}
          <span className="text-orange-500 font-semibold">
            continuous updates, enhancements, and optimization
          </span>{" "}
          as your data and business needs evolve.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Keeps dashboards scalable, reliable, and aligned with business
            growth.
          </p>
        </div>
      </>
    ),
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
  },
];

const dataVisTechStack = [
  { name: "Tableau", icon: SiTableau, desc: "Data Visualization" },
  { name: "Power BI", icon: BiPowerOff, desc: "Business Analytics" },
  { name: "Python", icon: AiOutlinePython, desc: "Data Analysis" },
  { name: "SQL", icon: GrMysql, desc: "Database Querying" },
  { name: "D3.js", icon: CiGrid31, desc: "Interactive Visuals" },
];
export { dataVisTechStack };

export const uiuxSteps = [
  {
    title: "Discovery and Strategy",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We begin by{" "}
          <span className="text-orange-500 font-semibold">
            understanding your goals, target users, and competitors
          </span>{" "}
          through UX research and stakeholder discussions.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Establishes a clear vision and design direction aligned with
            business objectives.
          </p>
        </div>
      </>
    ),
    icon: <Search className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Information Architecture",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We organize and structure{" "}
          <span className="text-orange-500 font-semibold">
            content logically to enhance
          </span>{" "}
          clarity and ease of navigation.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Organizes site hierarchy and enhances findability of key features.
          </p>
        </div>
      </>
    ),
    icon: <LayoutDashboard className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Wireframing & Prototyping",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
           We visualize{" "}
          <span className="text-orange-500 font-semibold">
            core design concepts
          </span>{" "}
          to visualize the user experience before development begins.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Helps validate ideas and refine design direction early.
          </p>
        </div>
      </>
    ),
    icon: <PenTool className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "User Interface Design",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We create{" "}
          <span className="text-orange-500 font-semibold">
            high-fidelity designs
          </span>{" "}
          that reflect your brand and user expectations.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Ensures consistency, accessibility, and pixel-perfect precision.
          </p>
        </div>
      </>
    ),
    icon: <Monitor className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Usability Testing",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We collect{" "}
          <span className="text-orange-500 font-semibold">
            real user feedback
          </span>{" "}
          to identify opportunities for refinement.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Ensures the design performs effectively in real-world scenarios.
          </p>
        </div>
      </>
    ),
    icon: <Users className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Delivery & Continuous Optimization",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          After launch, we provide{" "}
          <span className="text-orange-500 font-semibold">
            performance and provide 
          </span>{" "}
          ongoing design improvements.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Data-driven enhancements ensure lasting design success.
          </p>
        </div>
      </>
    ),
    icon: <RefreshCw className="w-8 h-8 text-orange-500" />,
  },
];

const uiuxTechStack = [
  { name: "Figma", icon: FaFigma, desc: "Design & Prototyping" },
  { name: "Adobe XD", icon: TbBrandAdobeXd, desc: "Prototyping & Design" },
  {
    name: "Adobe Photoshop",
    icon: TbBrandAdobePhotoshop,
    desc: "Image Editing",
  },
  {
    name: "Adobe Illustrator",
    icon: TbBrandAdobeIllustrator,
    desc: "Graphic Design",
  },
  {
    name: "Adobe After Effects",
    icon: SiAdobeaftereffects,
    desc: "Video Editing",
  },
  {
    name: "Adobe Premiere Pro",
    icon: SiAdobepremierepro,
    desc: "Video Editing",
  },
  { name: "Adobe Indesign", icon: TbBrandAdobeIndesign, desc: "Layout Design" },
];
export { uiuxTechStack };

export const testingSteps = [
  {
    title: "Requirement Analysis",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We begin by{" "}
          <span className="text-orange-500 font-semibold">
            analyzing your product goals, user expectations, and technical scope
          </span>{" "}
          to define clear quality benchmarks.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Establishes a solid foundation for effective test coverage.
          </p>
        </div>
      </>
    ),
    icon: <ClipboardList className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Test Planning",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our QA leads create a{" "}
          <span className="text-orange-500 font-semibold">
            strategic test plan
          </span>{" "}
          that defines environments, tools, timelines, and responsibilities.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Ensures alignment between QA, development, and business teams.
          </p>
        </div>
      </>
    ),
    icon: <FileSearch className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Test Case Design",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We create{" "}
          <span className="text-orange-500 font-semibold">
            detailed, measurable test cases
          </span>{" "}
          that validate every feature, function, and user scenario.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Covers functional, UI, API, and performance aspects comprehensively.
          </p>
        </div>
      </>
    ),
    icon: <ListChecks className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Execution & Bug Reporting",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Our QA engineers execute tests and{" "}
          <span className="text-orange-500 font-semibold">
            report defects in real time
          </span>{" "}
          using modern tracking tools for quick resolution.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Transparent bug tracking ensures rapid feedback loops.
          </p>
        </div>
      </>
    ),
    icon: <Bug className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Regression & Automation Testing",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We perform{" "}
          <span className="text-orange-500 font-semibold">
            regression and automation tests
          </span>{" "}
          to confirm that new updates don’t affect existing functionality.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Improves reliability and accelerates release cycles.
          </p>
        </div>
      </>
    ),
    icon: <Repeat className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Final QA Review & Reporting",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We deliver a{" "}
          <span className="text-orange-500 font-semibold">
            comprehensive QA summary
          </span>{" "}
          highlighting test outcomes, key metrics, and improvement insights.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Ensures your application is launch-ready and fully optimized.
          </p>
        </div>
      </>
    ),
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
  },
];

const testingTechStack = [
  { name: "Selenium", icon: SiSelenium, desc: "Web browser automation" },
  { name: "Cypress", icon: TbBrandCypress, desc: "Modern end-to-end testing" },
  {
    name: "Jest / Vitest",
    icon: SiJest,
    desc: "JavaScript & component testing",
  },
  { name: "JMeter", icon: SiApachejmeter, desc: "Performance & load testing" },
  { name: "Postman", icon: SiPostman, desc: "API testing and automation" },
  { name: "Lighthouse", icon: PiLighthouse, desc: "Web performance auditing" },
];
export { testingTechStack };

export const IntroDevfeatures = [
  {
    icon: Code,
    title: "Custom Web and App Development",
    text: "We build scalable, secure, and high performing digital products tailored to your business goals.",
  },
  {
    icon: Smartphone,
    title: "Cross Platform Expertise",
    text: "Our team delivers seamless experiences across web, iOS, and Android using the latest frameworks and technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and Reliable Solutions",
    text: "We implement robust security practices to ensure your applications are protected and reliable at every layer.",
  },
];

export const DevServices = [
  {
    title: "Website & App Strategy & Planning",
    description:
      "Roadmap creation to align technology with business goals.",
    icon: <BiDesktop size={28} />,
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "Intuitive, user-centered designs that enhance engagement.",
    icon: <IconCloud size={28} />,
  },
  {
    title: "Custom Web Software Development",
    description:
      "Tailored web apps built for performance and security.",
    icon: <IconLayoutDashboard size={28} />,
  },
  {
    title: "Custom Mobile Application Development",
    description:
      "Android, iOS, and cross-platform mobile apps.",
    icon: <IconBoxSeam size={28} />,
  },
  {
    title: "E-commerce Development Solutions",
    description:
      "Fully functional and conversion-optimized stores.",
    icon: <IconChartBar size={28} />,
  },
  {
    title: "API Integration & Automation",
    description:
      " Smooth data flow between systems and services.",
    icon: <IconShieldCheck size={28} />,
  },
  {
    title: "Performance Optimization & Maintenance",
    description:
      " Continuous improvements for peak efficiency.",
    icon: <IconServer size={28} />,
  },
];

export const Devbenefits = [
  {
    title: "Full Stack Expertise",
    description:
      "Web, mobile, and backend solutions in one place.",
  },
  {
    title: "Skilled Developers",
    description:
      "Experienced in modern frameworks and tools.",
  },
  {
    title: "Cost Effective Development",
    description:
      "Optimized resources for better ROI.",
  },
  {
    title: "User Centric Design",
    description:
      "Clean, engaging UI/UX to boost retention.",
  },
  {
    title: "Secure and Reliable Solutions",
    description:
      "Built with best-in-class security practices.",
  },
  {
    title: "Proven Results",
    description:
      "Trusted by startups and enterprises alike for long-term success.",
  },
];

export const DevelopmentFAQ = [
  {
    question: "What is Website & App Development?",
    answer: `Website and app development is the process of designing, building, and launching digital platforms that help businesses establish and grow their online presence. 
At Ziostech Solutions, we create high-performance, responsive, and user-friendly web and mobile applications tailored to your brand and business goals.`,
  },
  {
    question:
      "How is custom software development different from ready-made solutions?",
    answer: `Custom software development is built specifically for your business requirements, offering greater flexibility, scalability, and integration options. 
Unlike ready-made solutions that come with limitations, custom development ensures your platform adapts perfectly to your processes and future growth.`,
  },
  {
    question:
      "Which platforms do you support for web and mobile application development?",
    answer: `Ziostech Solutions develops applications for Android, iOS, and the web using the latest technologies and frameworks. 
Our expertise includes React, Next.js, Flutter, and other cutting-edge tools that ensure cross-platform performance and seamless user experiences.`,
  },
  {
    question: "How long does it take to develop a website or mobile app?",
    answer: `The timeline depends on the project’s size, features, and complexity. 
However, with our agile development approach, we ensure faster delivery without compromising on quality. 
Our process includes planning, design, development, testing, and deployment phases for smooth execution.`,
  },
  {
    question: "Do you offer post-launch support?",
    answer: `Yes. Ziostech Solutions provides comprehensive post-launch support, including maintenance, security updates, performance optimization, and new feature integration. 
We ensure your website and mobile app continue to perform efficiently and stay aligned with evolving business goals.`,
  },
  {
    question:
      "Why choose Ziostech Solutions for your web and app development needs?",
    answer: `Partnering with Ziostech Solutions means choosing innovation, reliability, and scalability. 
We combine full-stack expertise, modern design practices, and robust architecture to deliver products that drive business results. 
Ready to transform your ideas into powerful digital experiences? Contact us today to build, scale, and optimize your applications for long-term success.`,
  },
];

export const IntroCloudfeatures = [
  {
    icon: Cloud,
    title: "Scalable Cloud Transformation",
    text: "Effortless migration and modernization of your digital infrastructure to cloud platforms like AWS, Azure, and Google Cloud.",
  },
  {
    icon: Server,
    title: "Optimized Performance and Reliability",
    text: "Our expert architects design and manage cloud systems that enhance performance, collaboration, and uptime.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and Compliant Infrastructure",
    text: "We implement enterprise-grade security, encryption, and compliance frameworks for total data protection and trust.",
  },
];

export const cloudServices = [
  {
    title: "Cloud Migration Services",
    description:
      "We help you move your applications, data, and workloads to the cloud securely and efficiently. Our migration process minimizes downtime and maximizes performanc.",
    icon: <IconCloudUpload size={28} />,
  },
  {
    title: "Managed Cloud Services",
    description:
      "Focus on business innovation while we manage your cloud environment. Our services include monitoring, optimization, and regular updates for uninterrupted performanc.",
    icon: <IconServerCog size={28} />,
  },
  {
    title: "Cloud Architecture & Consulting",
    description:
      "Our certified experts design smart, cost-efficient architectures that ensure long-term scalability and reliabilit.",
    icon: <IconLayersIntersect size={28} />,
  },
  {
    title: "Multi-Cloud Management",
    description:
      "Simplify complex operations by managing all your cloud accounts through a single MultCloud dashboard. This enables better synchronization, automation, and data contro.",
    icon: <IconSettingsAutomation size={28} />,
  },
  {
    title: "Cloud Security & Compliance",
    description:
      "We implement robust encryption, monitoring, and compliance frameworks to protect sensitive data and meet global industry standard.",
    icon: <IconShieldCheck size={28} />,
  },
];

export const cloudbenefits = [
  {
    title: "Improved Efficiency",
    description:
      "Simplified workflows and faster data access.",
  },
  {
    title: "Enhanced Security",
    description:
      "Advanced encryption and access control to protect business data.",
  },
  {
    title: "Business Agility",
    description:
      "Quickly adapt to changing market needs with flexible cloud setups.",
  },
  {
    title: "Reduced Downtime",
    description:
      "Optimized cloud performance ensures smooth business continuity.",
  },
  {
    title: "Future-Ready Infrastructure",
    description:
      "Designed for innovation and long-term digital success.",
  },
];

export const cloudFAQ = [
  {
    question: "What does a cloud architect do?",
    answer: `A cloud architect designs, implements, and manages cloud-based systems, ensuring your infrastructure is optimized for performance, scalability, and security.`,
  },
  {
    question: "What are cloud migration services?",
    answer: `Cloud migration services help securely transfer your data, applications, and workloads from on-premise systems to cloud platforms with minimal disruption.`,
  },
  {
    question: "What are managed cloud services?",
    answer: `Managed cloud services include continuous monitoring, updates, cost optimization, and performance management by certified cloud professionals.`,
  },
  {
    question: "How does MultCloud help in cloud management?",
    answer: `MultCloud provides centralized access, synchronization, and automation between multiple cloud platforms, improving efficiency and control.`,
  },
  {
    question:
      "Why hire a cloud computing architect for business transformation?",
    answer: `A cloud computing architect ensures your cloud setup is secure, scalable, and cost-effective—critical for achieving sustainable digital growth and innovation.`,
  },
];

export const IntroPlatformFeatures = [
  {
    icon: Layers,
    title: "Powerful Platform Services",
    text: "Accelerate your digital transformation with modern, secure, and scalable Platform as a Service (PaaS) solutions.",
  },
  {
    icon: Cpu,
    title: "Smarter Application Deployment",
    text: "Build, integrate, and manage apps effortlessly using next-gen cloud platform technologies designed for speed and innovation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and Future-Ready",
    text: "Our platforms combine automation, security, and flexibility to help your business scale with confidence.",
  },
];

export const platformServices = [
  {
    title: "Application Platform Integration",
    description:
      "Seamlessly connect tools and services across your ecosystem.",
    icon: <IconApps size={28} />,
  },
  {
    title: "PaaS Deployment & Management",
    description:
      "Scalable and optimized environments for faster performance.",
    icon: <IconServerCog size={28} />,
  },
  {
    title: "Cloud Storage as a Service",
    description:
      "Secure, redundant, and reliable storage solutions for all your data.",
    icon: <IconCloudDataConnection size={28} />,
  },
  {
    title: "Microservices & Containerization",
    description:
      "Simplify complex architectures using modern container tools.",
    icon: <IconBoxMultiple size={28} />,
  },
  {
    title: "Automation & Monitoring",
    description:
      "Real-time tracking, proactive alerts, and predictive maintenance.",
    icon: <IconRobot size={28} />,
  },
  {
    title: "Custom Platform Development",
    description:
      "We don’t just provide a service, we build a digital backbone for your business.",
    icon: <IconRobot size={28} />,
  }
];

export const PlatformBenefits = [
  {
    title: "End-to-End Platform Expertise",
    description:
      "We manage every layer from setup to scaling.",
  },
  {
    title: "Custom PaaS Solutions",
    description:
      "Tailored for your unique business model.",
  },
  {
    title: "High Availability",
    description:
      "Fault-tolerant systems for uninterrupted performance.",
  },
  {
    title: "Faster Innovation",
    description:
      "Use pre-built APIs and services to reduce development time.",
  },
  {
    title: "Global Scalability",
    description:
      "Deploy and grow anywhere with powerful p aa s infrastructure.",
  },
];

export const PlatformFAQ = [
  {
    question: "What are platform services?",
    answer: `Platform services are cloud-based solutions that let businesses build, deploy, and manage applications without maintaining hardware or infrastructure also known as Platform as a Service (PaaS).`,
  },
  {
    question: "How does PaaS differ from traditional hosting?",
    answer: `Unlike traditional hosting, PaaS handles server management, scaling, and deployment automatically, saving both time and operational costs.`,
  },
  {
    question: "Is cloud storage included in platform services?",
    answer: `Yes. We provide cloud storage as a service with built-in security, redundancy, and global accessibility.`,
  },
  {
    question: "What industries can benefit from PaaS?",
    answer: `Our PaaS solutions are ideal for startups, SaaS providers, fintech companies, and enterprises modernizing legacy system.`,
  },
  {
    question: "How secure is your platform?",
    answer: `Our infrastructure is built with enterprise-grade security, compliance support, and continuous monitoring to protect your data at every level.`,
  },
];


// Blog Data - Now sourced from markdown files in src/content/blogs/
// See src/lib/blog.ts for blog data utilities


export const IntroEcommerceFeatures = [
  {
    icon: ShoppingCart,
    title: "Scalable E-Commerce Platforms",
    text: "Empower your business with fast, secure, and user-friendly online stores built to scale effortlessly.",
  },
  {
    icon: Smartphone,
    title: "Cross-Device Shopping Experience",
    text: "Deliver seamless e-commerce experiences across web and mobile with high-performance, responsive designs.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and Reliable Transactions",
    text: "Our platforms are built with enterprise-grade encryption, compliance, and performance optimization for complete peace of mind.",
  },
];

export const EcommerceServices = [
  {
    title: "E-Commerce Website Development",
    description:
      "Build responsive, high-performance websites using top platforms like Shopify, WooCommerce, Magento, and custom frameworks tailored to your goals.",
    icon: <IconShoppingBag size={28} />,
  },
  {
    title: "E-Commerce Mobile App Development",
    description:
      "Reach customers anywhere with Android, iOS, and hybrid e-commerce mobile applications that deliver smooth, high-speed performance.",
    icon: <IconDeviceMobile size={28} />,
  },
  {
    title: "E-Commerce SaaS Solutions",
    description:
      "Simplify your operations with cloud-based E-Commerce Software-as-a-Service (SaaS) complete with hosting, maintenance, and security.",
    icon: <IconCloudCog size={28} />,
  },
  {
    title: "Platform Customization & Integration",
    description:
      "Seamlessly connect your e-commerce system with ERP, CRM, payment gateways, and logistics tools to automate workflows.",
    icon: <IconPlugConnected size={28} />,
  },
  {
    title: "Maintenance & Optimization",
    description:
      "Get 24/7 monitoring, bug fixing, and performance tuning to keep your online store secure and optimized at all times.",
    icon: <IconSettingsAutomation size={28} />,
  },
];

export const EcommerceBenefits = [
  {
    title: "Faster Time to Market",
    description:
      " Pre-built SaaS frameworks speed up deployment.",
  },
  {
    title: "Scalability",
    description:
      "Easily add new products, categories, or vendors as you grow.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Cloud hosting and automation reduce operational costs.",
  },
  {
    title: "Enhanced User Experience",
    description:
      "Intuitive UI/UX boosts engagement and conversion.",
  },
  {
    title: "Data Security & Compliance",
    description:
      "Encrypted transactions and compliance-ready platforms.",
  },
  {
    title: "24/7 Expert Support",
    description:
      "Continuous assistance from our e-commerce experts.",
  },
];

export const EcommerceFAQ = [
  {
    question: "What are e-commerce platforms?",
    answer: `E-commerce platforms are software systems that allow you to build, manage, and run online stores efficiently.`,
  },
  {
    question: "What is E-Commerce Software as a Service (SaaS)?",
    answer: `It’s a cloud-based solution where all hosting, updates, and maintenance are handled by your provider; so you focus only on sales.`,
  },
  {
    question: "Do you provide E-Commerce mobile application development?",
    answer: `Yes, we build ecommerce mobile applications for both Android and iOS to reach customers anywher.`,
  },
  {
    question: "How do your ecommerce website developers ensure performance?",
    answer: `Our developers use the latest technologies and SEO best practices to build fast-loading, high-conversion website.`,
  },
  {
    question: "Can you customize my existing ecommerce services website?",
    answer: `Absolutely. We specialize in integrating and customizing all major e-commerce platforms and plugin.`,
  },
];

export const IntroContainerFeatures = [
  {
    icon: Boxes,
    title: "Scalable and Efficient Containerization",
    text: "Transform the way you build, deploy, and scale applications with expert containerization services powered by Docker and Kubernetes.",
  },
  {
    icon: Layers,
    title: "Modern, Cloud-Ready Infrastructure",
    text: "Adopt containerization as a service to make your systems agile, secure, and built for hybrid or multi-cloud environments.",
  },
  {
    icon: ShieldCheck,
    title: "Secure, Reliable, and Future-Proof",
    text: "Our process embeds security, monitoring, and compliance at every stage to deliver resilient, high-performance systems.",
  },
];

export const containerServices = [
  {
    title: "Application Containerization for Seamless Deployment",
    description:
      "We containerize your existing applications without requiring major code changes. Our team evaluates dependencies, optimizes configurations, and deploys applications using Docker, Kubernetes, and OpenShift for consistent and reliable performance.",
    icon: <IconBoxMultiple size={28} />,
  },
  {
    title: "Tailored Containerization Strategy & Consulting",
    description:
      "We help you choose the right containerization tools, plan your deployment roadmap, and build an implementation strategy that aligns with your technical and business objectives.",
    icon: <IconTopologyStar3 size={28} />,
  },
  {
    title: "Intelligent Container Orchestration & Lifecycle Management",
    description:
      "Our specialists deploy and manage orchestration tools such as Kubernetes and Docker Swarm, ensuring automated scaling, deployment, and load balancing across your entire environmen.",
    icon: <IconDeviceAnalytics size={28} />,
  },
  {
    title: "Cloud-Native Application Development",
    description:
      "We design and develop new applications specifically built for containerized ecosystems, providing greater agility, resilience, and performance across hybrid or multi-cloud infrastructure.",
    icon: <IconCloudCog size={28} />,
  },
  {
    title: "Streamlined CI/CD Integration for Faster Delivery",
    description:
      "Our experts implement Continuous Integration and Continuous Deployment pipelines that integrate with your containerized environment to enable faster, automated, and reliable software releases.",
    icon: <IconSettingsAutomation size={28} />,
  },
  {
    title: "Container Security & Proactive Monitoring",
    description:
      "Security is embedded in every stage of our process. We conduct vulnerability scans, continuous monitoring, and compliance checks to ensure your containerized systems remain safe and efficient.",
    icon: <IconShieldCheck size={28} />,
  },
];

export const ContainerBenefits = [
  {
    title: "Faster Deployment",
    description:
      "Launch updates and patches quickly with minimal downtime.",
  },
  {
    title: "Enhanced Scalability",
    description:
      "Scale applications based on real-time demand.",
  },
  {
    title: "Platform Independence",
    description:
      "Deploy containers across any environment, cloud, or on-premises.",
  },
  {
    title: "Improved Resource Utilization",
    description:
      "Optimize compute power and reduce infrastructure costs.",
  },
  {
    title: "Simplified Maintenance",
    description:
      "Update or roll back applications easily.",
  },
  {
    title: "Increased Security",
    description:
      "Container isolation ensures better compliance and risk contro.",
  },
  {
    title: "DevOps Friendly",
    description:
      "Seamlessly integrates with CI/CD and DevOps pipelines for continuous delivery.",
  },
];

export const ContainerFAQ = [
  {
    question: "What are containerization tools, and which ones do you use?",
    answer: `Containerization tools are platforms that allow you to package and manage applications within containers. At Ziostech Solution, we primarily use Docker, Kubernetes, OpenShift, and Amazon ECS, depending on your business and infrastructure requirements.`,
  },
  {
    question: "Can you help containerize legacy applications?",
    answer: `Yes. Our experts specialize in modernizing legacy applications by containerizing them without rewriting the entire codebase, ensuring better scalability, performance, and maintenance.`,
  },
  {
    question: "How does containerization improve DevOps and CI/CD workflows?",
    answer: `Containerization enables consistent environments across development, testing, and production, allowing teams to deploy faster and minimize compatibility issues.`,
  },
  {
    question: "Do you offer ongoing support and monitoring after deployment?",
    answer: `Absolutely. Ziostech Solution provides continuous support, monitoring, and optimization to ensure your containerized systems remain efficient, secure, and cost-effective.`,
  },
];

export const IntroUIDesignFeatures = [
  {
    icon: Palette,
    title: "Creative and Strategic UI/UX Design",
    text: "Blend creativity, research, and strategy to craft human-centered digital experiences that elevate engagement and business growth.",
  },
  {
    icon: Users,
    title: "Human-Centered Approach",
    text: "We design for people first — focusing on empathy, usability, and intuitive user journeys that drive meaningful interactions.",
  },
  {
    icon: Workflow,
    title: "Research-Driven and Result-Oriented",
    text: "Our UX research and consulting ensure every design decision aligns with business goals and measurable outcomes.",
  },
];

export const UIDesignServices = [
  {
    title: "UI/UX Design Strategy and Consulting",
    description:
      "We bring together design thinking and business strategy to create scalable and goal-driven UI/UX solutions. Our consultants align user experience goals with your brand vision, defining a strategic roadmap that ensures long-term product success.",
    icon: <IconDeviceDesktopAnalytics size={28} />,
  },
  {
    title: "User Interface (UI) Design",
    description:
      "Our designers craft visually stunning interfaces that balance creativity and usability. Using tools like Figma, Adobe XD, and Sketch, we create cohesive designs that ensure smooth navigation and engaging experiences across platforms.",
    icon: <IconVector size={28} />,
  },
  {
    title: "UX Research and Data-Driven Analysis",
    description:
      "We conduct extensive research to understand user needs and market expectations. From user interviews to usability testing, our insights help you make informed design decisions and create meaningful digital journeys.",
    icon: <IconReportAnalytics size={28} />,
  },
  {
    title: "User Experience (UX) Design",
    description:
      "We focus on optimizing every step of the user journey. Our UX experts map interactions to create intuitive, seamless, and rewarding digital experiences that enhance user satisfaction and conversion rate.",
    icon: <IconUsersGroup size={28} />,
  },
  {
    title: "Product Design and Interactive Prototyping",
    description:
      "Our designers bring concepts to life through interactive prototypes. These simulate real-world experiences, allowing you to validate and refine your product design before development.",
    icon: <IconTools size={28} />,
  },
  {
    title: "Enterprise UI/UX Consulting for Large-Scale Platforms",
    description:
      "For enterprises and SaaS platforms, we provide advanced UI/UX consulting that integrates accessibility, design systems, and scalability; ensuring consistent brand identity and future-ready experience.",
    icon: <IconBuildingSkyscraper size={28} />,
  },
];

export const UIDesignBenefits = [
  {
    title: "Human-Centered Design Approach",
    description:
      "Every design decision is informed by empathy and user insight.",
  },
  {
    title: "Increased Conversions and Retention",
    description:
      "Well-designed interfaces reduce drop-offs and enhance engagement.",
  },
  {
    title: "Brand Consistency Across Platforms",
    description:
      "Unified visuals across web and mobile touchpoints.",
  },
  {
    title: "Faster Development Cycles",
    description:
      "Our design systems accelerate production and reduce rework.",
  },
  {
    title: "Scalable and Future-Ready Designs",
    description:
      "Optimized for adaptability and long-term performance.",
  },
  {
    title: "Improved Accessibility",
    description:
      " We ensure designs are inclusive and compliant with modern accessibility standards.",
  },
];

export const UIDesignFAQ = [
  {
    question: "What is UI/UX designing, and why is it important?",
    answer: `UI UX designing focuses on how a digital product looks (UI) and how it feels to use (UX). It improves usability, accessibility, and satisfaction. We help businesses retain customers and grow faster.`,
  },
  {
    question: "How does Ziostech approach UX research?",
    answer: `We use a structured UX research methodology involving surveys, user interviews, usability testing, and data analysis. Our user experience researchers identify pain points and behaviors that guide the design process.`,
  },
  {
    question:
      "Do you offer UI/UX consulting along with business strategy services?",
    answer: `Yes. Ziostech Solution uniquely combines UI UX design consulting with business and strategy consulting to ensure design aligns with your overall digital transformation goals.`,
  },
  {
    question: "Which tools do you use for UI/UX designing?",
    answer: `We use industry-standard tools such as Figma, Adobe XD, Sketch, and InVision to create interactive, high-fidelity designs that bring ideas to life.`,
  },
];

export const IntroQATestingFeatures = [
  {
    icon: ShieldCheck,
    title: "Reliable QA and App Testing Services",
    text: "Ensure flawless digital performance with Ziostech Solution’s professional QA testing and Android app quality assurance services.",
  },
  {
    icon: Smartphone,
    title: "End-to-End Android Testing",
    text: "We validate functionality, security, and performance across all Android devices and OS versions to guarantee a seamless experience for every user.",
  },
  {
    icon: MonitorSmartphone,
    title: "Cross-Platform Quality Assurance",
    text: "Our testing experts ensure your websites, web apps, and enterprise systems deliver consistent and reliable experiences across platforms.",
  },
];

export const QATestingServices = [
  {
    title: "Android App Testing",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
          We perform{" "}
          <span className="text-orange-500 font-semibold">
            end-to-end Android app testing
          </span>{" "}
          across real devices and Android versions. Our QA engineers focus on app functionality, performance, and security.
        </p>
        <div className="space-y-2 mt-3">
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Functional and Regression Testing</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Compatibility and UI/UX Testing</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Performance and Load Testing</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Security and Compliance Testing</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Automated and Manual Testing</span>
            </p>
          </div>
        </div>
      </>
    ),
    icon: <IconDeviceMobile size={28} />,
  },
  {
    title: "Web App Testing",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
          Your{" "}
          <span className="text-orange-500 font-semibold">
            website or SaaS platform
          </span>{" "}
          deserves to run flawlessly across all browsers. Our web app testing ensures that every feature, interaction, and layout works exactly as intended.
        </p>
        <div className="space-y-2 mt-3">
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Browser & Device Compatibility Testing</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">End-to-End Functional Testing</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Accessibility and SEO Validation</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">API and Integration Testing</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Responsive Design Validation</span>
            </p>
          </div>
        </div>
      </>
    ),
      icon: <IconWorldWww size={28} />,
  },
  {
    title: "Software System Testing",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
          Our {" "}
          <span className="text-orange-500 font-semibold">
            software system testing
          </span>{" "}
          verifies that all components of your application integrate and perform perfectly under real-world conditions.
        </p>
        <div className="space-y-2 mt-3">
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Integration & Interface Testing</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Load and Stress Testing</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Scalability & Reliability Validation</span>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="text-blue-500 w-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Continuous Integration (CI/CD) Testing</span>
            </p>
          </div>
        </div>
      </>
    ),
    icon: <IconBinaryTree2 size={28} />,
  },
];

export const QATestingBenefits = [
  {
    title: "Early Bug Detection & Prevention",
    description:
      "Identify and resolve issues early in the development cycle to minimize risk and reduce rework costs.",
  },
  {
    title: "Faster Time-to-Market",
    description:
      "Streamlined automated testing ensures quicker releases with higher reliability and confidence.",
  },
  {
    title: "Enhanced User Experience & Stability",
    description:
      "Our QA processes guarantee consistent app performance and user satisfaction across platforms.",
  },
  {
    title: "Lower QA and Maintenance Costs",
    description:
      "Automation and proactive monitoring help optimize resource usage and reduce long-term maintenance expenses.",
  },
  {
    title: "Improved Scalability & Security",
    description:
      "Rigorous testing ensures your systems can scale securely under growing workloads and user traffic.",
  },
  {
    title: "Real-Device Testing Accuracy",
    description:
      "We use real devices and live environments to ensure authentic, real-world performance validation.",
  },
];

export const QATestingFAQ = [
  {
    question: "What is Android app testing?",
    answer:
      "Android app testing ensures that your mobile app works correctly on all Android devices and OS versions while maintaining speed, functionality, and security.",
  },
  {
    question: "How long does testing take?",
    answer:
      "Depending on the complexity, web and Android app testing usually takes 1–4 weeks, including regression and performance testing.",
  },
  {
    question: "Which tools do you use for testing?",
    answer:
      "We use Selenium, Appium, TestComplete, JMeter, and BrowserStack to deliver accurate and comprehensive QA results.",
  },
  {
    question: "Why is QA testing important?",
    answer:
      "QA testing helps prevent product failures, improves customer satisfaction, and saves costs by identifying issues early in the development cycle.",
  },
  {
    question: "Do you offer automated testing?",
    answer:
      "Yes. We offer both manual and automated testing to achieve faster delivery, better coverage, and consistent results across releases.",
  },
];

export const IntroDataWarehouseFeatures = [
  {
    icon: Database,
    title: "Intelligent Data Warehouse Consulting",
    text: "Unlock your data’s potential with Ziostech Solutions’ Big Data Warehouse Consulting Services. We help businesses design, build, and manage scalable, high-performance data ecosystems.",
  },
  {
    icon: BarChart3,
    title: "Transform Data into Business Insights",
    text: "From data integration to analytics enablement, our experts create smart, centralized systems that turn raw information into actionable intelligence.",
  },
  {
    icon: ShieldCheck,
    title: "Secure and Scalable Data Infrastructure",
    text: "We design architectures built for performance, compliance, and long-term scalability — ensuring your business grows with data confidence.",
  },
];

export const DataWarehouseServices = [
  {
    title: "Data Warehouse Consulting",
    description:
      "Our consultants analyze your existing data systems and business goals to design an efficient data warehouse architecture. We ensure scalability, consistency, and accuracy across all your data pipelines.",
    icon: <IconDatabase size={28} />,
  },
  {
    title: "Data Integration and ETL Services",
    description:
      "We develop robust ETL (Extract, Transform, Load) frameworks that automate data movement from multiple sources into a unified system. This ensures data reliability and real-time availability for analytics.",
    icon: <IconServerCog size={28} />,
  },
  {
    title: "Data Modeling and Optimization",
    description:
      "Our team creates optimized data models that improve data storage efficiency, query performance, and analytics speed. We focus on designing flexible and future-ready data warehouse solutions.",
    icon: <IconChartHistogram size={28} />,
  },
  {
    title: "Data Governance and Security",
    description:
      "Data privacy and compliance are top priorities. We implement best practices in governance, role-based access, and monitoring to ensure your data remains protected and compliant with global standards.",
    icon: <IconShieldLock size={28} />,
  },
  {
    title: "Big Data Consulting",
    description:
      "From planning your data warehouse architecture to enabling predictive analytics, we help you leverage big data consulting to gain deeper insights and unlock business growth opportunities.",
    icon: <IconCloudDataConnection size={28} />,
  },
];

export const DataWarehouseBenefits = [
  {
    title: "End-to-End Data Lifecycle Management",
    description:
      "From architecture and integration to maintenance and automation, we manage every stage of your data ecosystem.",
  },
  {
    title: "Scalable and Future-Ready Architecture",
    description:
      "Our modern, modular data solutions grow with your business and adapt to evolving technology landscapes.",
  },
  {
    title: "Real-Time Analytics for Faster Decisions",
    description:
      "Empower teams with live dashboards and quick access to accurate insights that drive smarter business outcomes.",
  },
  {
    title: "Improved Data Quality and Consistency",
    description:
      "We standardize, clean, and synchronize data sources to ensure accuracy and eliminate duplication.",
  },
  {
    title: "Cost-Efficient Data Storage and Operations",
    description:
      "Optimized query models and cloud-based frameworks help reduce storage costs while improving performance.",
  },
  {
    title: "Enhanced Security and Compliance",
    description:
      "We implement robust data protection, monitoring, and compliance practices to safeguard sensitive business information.",
  },
];

export const DataWarehouseFAQ = [
  {
    question: "What is data warehouse consulting?",
    answer:
      "Data warehouse consulting helps businesses design and implement structured data systems that consolidate information from multiple sources, making analysis and reporting easier and faster.",
  },
  {
    question: "Why do businesses need data warehouse solutions?",
    answer:
      "A data warehouse solution centralizes your business data, improves reporting accuracy, and supports better decision-making by providing a single source of truth.",
  },
  {
    question: "How long does it take to build a data warehouse?",
    answer:
      "Depending on complexity and data volume, a full data warehouse implementation typically takes 4–12 weeks, including design, integration, and testing.",
  },
  {
    question:
      "What’s the difference between a data warehouse and big data architecture?",
    answer:
      "A data warehouse stores structured data for analytics, while big data architecture handles large volumes of structured and unstructured data for predictive and real-time analytics.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, Ziostech Solutions provides continuous monitoring, optimization, and support to ensure your data warehouse operates efficiently and evolves with your business needs.",
  },
];

export const IntroDataVisualizationFeatures = [
  {
    icon: BarChart3,
    title: "Transform Data into Visual Insights",
    text: "Turn complex datasets into clear, actionable visuals with Ziostech Solutions’ Data Visualization Services. We help organizations create dashboards that simplify decision-making and reveal key insights.",
  },
  {
    icon: PieChart,
    title: "Customized Dashboards & Reports",
    text: "We design and develop interactive dashboards tailored to your KPIs, ensuring every visualization aligns with business goals and data strategy.",
  },
  {
    icon: LineChart,
    title: "Interactive & Insightful Visuals",
    text: "Our visualizations combine precision with creativity — delivering interactive, easy-to-understand dashboards that tell compelling data stories.",
  },
];

export const dataVisualizationServices = [
  {
    title: "Custom Dashboard Development",
    description:
      "We design intuitive dashboards using top visualization tools that display real-time KPIs and business metrics.",
    icon: <IconDeviceAnalytics size={28} />,
  },
  {
    title: "Big Data Visualization",
    description:
      "Our team helps manage and visualize large data sets using scalable frameworks for faster insights and performance monitoring.",
    icon: <IconChartCandle size={28} />,
  },
  {
    title: "Data Integration and Preparation",
    description:
      "We connect multiple data sources into one unified view, ensuring accuracy and consistency across your reports.",
    icon: <IconDatabaseImport size={28} />,
  },
  {
    title: "Data Analytics and Reporting",
    description:
      "Ziostech transforms your business data into dynamic reports and summaries to support data-driven decision-making.",
    icon: <IconReportAnalytics size={28} />,
  },
  {
    title: "Visualization Consulting and Strategy",
    description:
      "We guide businesses on the best visualization practices, tools, and frameworks to align data presentation with strategic goals.",
    icon: <IconAdjustmentsAlt size={28} />,
  },
];

export const DataVisualizationBenefits = [
  {
    title: "Clear Data Representation",
    description:
      "Simplify complex datasets with visually clear, easily interpretable dashboards that reveal meaningful trends.",
  },
  {
    title: "Custom Visualization Design",
    description:
      "Dashboards are built to match your KPIs, business logic, and user needs — ensuring relevance and usability.",
  },
  {
    title: "Interactive Insights",
    description:
      "Enable users to explore, filter, and analyze data dynamically for deeper understanding and faster insights.",
  },
  {
    title: "Faster Decision-Making",
    description:
      "Access real-time analytics and performance metrics that drive agility and strategic responses.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Our solutions handle growing data volumes and integrate seamlessly with evolving business systems.",
  },
  {
    title: "Improved Collaboration",
    description:
      "Share consistent, easy-to-understand dashboards across teams to promote alignment and data transparency.",
  },
];

export const DataVisualizationFAQ = [
  {
    question: "What is data visualization and why is it important?",
    answer:
      "Data visualization converts complex data into graphical formats, making it easier to identify trends, patterns, and insights for better business decisions.",
  },
  {
    question: "Which tools do you use for data visualization?",
    answer:
      "Ziostech Solutions works with Power BI, Tableau, Google Data Studio, Qlik, and other advanced visualization platforms.",
  },
  {
    question: "Can you integrate multiple data sources into one dashboard?",
    answer:
      "Yes, our visualization experts specialize in data integration, combining information from multiple systems into a unified dashboard.",
  },
  {
    question: "Do you offer cloud-based data visualization solutions?",
    answer:
      "Absolutely. We provide both cloud and on-premises visualization solutions depending on your business infrastructure.",
  },
  {
    question: "What industries benefit most from data visualization?",
    answer:
      "Every data-driven industry like finance, healthcare, retail, education, and manufacturing benefits from improved visualization and analytics.",
  },
];

export const IntroSmartBotFeatures = [
  {
    icon: Bot,
    title: "Transform Business with Intelligent Automation",
    text: "Ziostech Solutions enhances customer engagement and streamlines operations through cutting-edge Smart Bot Services powered by AI and Natural Language Processing.",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Interactions",
    text: "Our smart chatbots and virtual assistants deliver instant, personalized, and human-like experiences that improve satisfaction and reduce operational overhead.",
  },
  {
    icon: Brain,
    title: "Designed for Scalability and Performance",
    text: "Built for startups, enterprises, and SaaS platforms, our smart bots evolve with your needs — ensuring reliability, adaptability, and efficiency.",
  },
];

export const SmartBotServices = [
  {
    title: "Custom Smart Bot Development",
    description:
      "We create AI-driven bots that automate support, lead generation, and internal workflows while preserving your brand identity and voice.",
    icon: <IconRobotFace size={28} />,
  },
  {
    title: "Smart Chat Bots",
    description:
      "Engage users 24/7 with responsive, interactive chatbots that handle queries, suggest products, and deliver instant answers across all channels.",
    icon: <IconMessageChatbot size={28} />,
  },
  {
    title: "AI-Powered Virtual Assistants",
    description:
      "Empower your organization with intelligent assistants that manage tasks like scheduling, data retrieval, and workflow automation.",
    icon: <IconBrain size={28} />,
  },
  {
    title: "Bot Integration Services",
    description:
      "Integrate smart bots seamlessly into your websites, mobile apps, CRMs, and messaging systems for a unified user experience.",
    icon: <IconDeviceMobileMessage size={28} />,
  },
  {
    title: "Bot Analytics and Optimization",
    description:
      "Monitor bot performance, analyze conversations, and apply insights to continuously optimize engagement, accuracy, and ROI.",
    icon: <IconChartHistogram size={28} />,
  },
];

export const SmartBotBenefits = [
  {
    title: "24/7 Customer Support",
    description:
      "Deliver round-the-clock assistance to customers without downtime, improving satisfaction and retention.",
  },
  {
    title: "Improved User Engagement",
    description:
      "Provide real-time, personalized experiences that drive engagement, loyalty, and conversions.",
  },
  {
    title: "Enhanced Productivity",
    description:
      "Automate repetitive and manual business tasks to free up teams for higher-value work.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Our bots scale effortlessly to handle changing workloads, growing audiences, and business expansion.",
  },
  {
    title: "AI Learning Capabilities",
    description:
      "Self-learning bots that evolve over time through user interaction, improving accuracy and personalization.",
  },
  {
    title: "Multi-Platform Integration",
    description:
      "Deploy consistent experiences across websites, mobile apps, messaging tools, and CRMs.",
  },
];

export const SmartBotFAQ = [
  {
    question: "What is a Smart Bot?",
    answer:
      "A Smart Bot is an AI-powered assistant that automates communication and workflows, providing instant, intelligent responses to users via chat or voice.",
  },
  {
    question: "What types of bots do you develop?",
    answer:
      "We build smart chatbots, AI virtual assistants, and conversational bots for web, mobile, and enterprise platforms.",
  },
  {
    question: "Can bots integrate with my existing systems?",
    answer:
      "Yes. Our smart bots integrate seamlessly with CRMs, ERPs, websites, and messaging tools to deliver unified experiences.",
  },
  {
    question: "How do smart bots improve efficiency?",
    answer:
      "They automate repetitive processes, minimize response times, and reduce operational costs through intelligent automation.",
  },
  {
    question: "Are your smart bot services suitable for small businesses?",
    answer:
      "Absolutely. Ziostech offers scalable, affordable Smart Bot solutions for startups, SMEs, and large enterprises alike.",
  },
];

export const homePageFAQ = [
  {
    question: "What services does Ziostech Solutions provide?",
    answer: `Ziostech Solutions offers a complete range of IT consulting, staffing, and technology services designed to help businesses innovate and scale.
Our key offerings include Platform Services, Web & App Development, CMS and E-commerce Solutions, Cloud Services, UI/UX Design, Testing, Big Data Services, Data Visualization, DataOps, and AI Integration.
We also provide custom software development and end-to-end digital transformation consulting for enterprises and startups.`,
  },
  {
    question: "What kind of software solutions can Ziostech Solutions build?",
    answer: `We build custom software solutions tailored to meet your business needs from web applications, mobile apps, and enterprise platforms to AI-powered tools and cloud-based systems.
Whether you need an e-commerce platform, data analytics dashboard, or workflow automation system, our team can design, develop, and deploy scalable solutions using the latest technologies.`,
  },
  {
    question: "What industries does Ziostech Solutions specialize in?",
    answer: `Ziostech Solutions works across a diverse range of industries, including:
* Information Technology and Software
* Finance and Banking
* Retail and E-commerce
* Healthcare
* Manufacturing
* Education and Training
* Startups and SMEs
Our flexible approach allows us to adapt our services to any industry’s unique challenges and requirements.`,
  },
  {
    question: "How do you ensure quality, security, and compliance?",
    answer: `At Ziostech Solution, quality and security are at the core of everything we do.
We follow agile development practices, continuous testing, and code review processes to ensure high-quality delivery.
For security, we adhere to industry standards like ISO, GDPR, and OWASP guidelines.
Every solution we build undergoes rigorous performance, vulnerability, and compliance checks to protect your data and meet global standards.`,
  },
  {
    question: "What technologies and tools do you work with?",
    answer: `Our team works with a wide range of modern technologies and frameworks, including:
* Frontend: React, Angular, Vue.js
* Backend: Node.js, Python, Java, .NET
* Mobile: Flutter, React Native, Kotlin, Swift
* Cloud: AWS, Azure, Google Cloud
* Databases: MySQL, MongoDB, PostgreSQL, Firebase
* Big Data & AI: Hadoop, Spark, TensorFlow, Power BI
We choose the tech stack based on your project’s goals, scalability needs, and long-term vision.`,
  },
  {
    question: "What are the engagement models available for businesses?",
    answer: `Ziostech Solutions offers flexible engagement and collaboration models to suit every business type:
* Dedicated Team Model: Hire a full-time development team for ongoing projects.
* Fixed-Price Model: Ideal for clearly defined projects with set timelines and budgets.
* Time & Material Model: Pay based on actual work hours and evolving requirements.
* Staff Augmentation: Expand your internal team with skilled IT professionals on demand.`,
  },
  {
    question: "Why should you choose Ziostech Solution?",
    answer: `You should choose Ziostech Solutions because we combine innovation, expertise, and reliability to deliver results that matter.
* We provide end-to-end IT consulting and development services
* We have a skilled team of certified engineers and designers
* We ensure quality, scalability, and security in every project
* We focus on long-term partnerships and measurable outcomes
With us, your business gets the right technology foundation to grow and lead.`,
  },
  {
    question: "Do you assist with software integration and data migration?",
    answer: `Yes, absolutely. We specialize in software integration and data migration services to help businesses modernize smoothly.
Whether you’re moving from legacy systems to the cloud, integrating new tools into existing workflows, or consolidating data across platforms, our team ensures zero downtime, full compatibility, and data security.`,
  },
  {
    question: "What’s your approach to developing mobile apps and software?",
    answer: `Our approach follows a strategic and agile development process:
* Requirement Analysis & Planning
* UI/UX Design and Wireframing
* Development & Integration
* Testing and Quality Assurance
* Deployment and Continuous Support
We prioritize user experience, performance, and scalability at every step, ensuring your product succeeds in the real world.`,
  },
  {
    question: "Do you offer app maintenance and support services?",
    answer: `Yes. Ziostech Solutions provides ongoing maintenance and post-launch support to ensure your applications remain secure, updated, and high-performing.
Our support includes bug fixes, performance optimization, system upgrades, and feature enhancements so your business continues running smoothly without interruption.`,
  },
];
