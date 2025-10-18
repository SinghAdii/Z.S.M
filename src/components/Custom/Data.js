import {
  Box,
  Briefcase,
  CheckCircle,
  Clock,
  Cloud,
  Code,
  Cog,
  Database,
  Layers,
  Layout,
  Rocket,
  Server,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Star,
  Users,
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
} from "../../assets/images/images.export.js";

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
} from "react-icons/si";

import { IconApi, IconBrandAzure, IconMagnetOff } from "@tabler/icons-react";

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
    href: "/case-studies/sunrise-diagnostic-services",
    testimonialName: "Sandeep Yadav",
  },
  {
    imgSrc: projectimg4,
    title: "Saurabh Visionary Ventures",
    description:
      "Saurabh Visionary Ventures, a coaching center, features a website showcasing courses, faculty, and success stories.",
    points: [
      "Course & faculty showcase",
      "Success stories section",
      "Profile management system",
      "Ongoing website maintenance",
    ],
    domain: "Web Development",
    href: "/case-studies/saurabh-visionary-ventures",
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
    href: "/case-studies/avni-hospital",
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
    href: "/case-studies/ekta-janch-kendra",
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
    href: "/case-studies/medicity-hospital-unnao",
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

export const developmentSteps = [
  {
    title: "Prototyping & Wireframing",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          We begin by{" "}
          <span className="font-semibold capitalize text-orange-500">
            translating your ideas into wireframes and prototypes
          </span>
          , helping visualize user flows and product direction.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm text-gray-500 max-md:text-xs dark:text-gray-500 capitalize">
            This stage ensures clarity, alignment, and a shared understanding
            before moving to design.
          </p>
        </div>
      </>
    ),
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "UI/UX Design",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Our designers craft{" "}
          <span className="font-semibold capitalize text-blue-500">
            intuitive and visually refined interfaces
          </span>{" "}
          that enhance usability and align with your brand.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text- max-md:text-xs text-gray-500 dark:text-gray-500 capitalize">
            Every screen is optimized for accessibility, aesthetics, and
            conversion-focused design.
          </p>
        </div>
      </>
    ),
    icon: <FaFigma className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Development & Integration",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Our engineers bring designs to life using{" "}
          <span className="font-medium capitalize text-orange-500">
            modern frameworks like React, Next.js, and Node.js
          </span>
          , ensuring speed, scalability, and security.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm max-md:text-xs text-gray-500 dark:text-gray-500 capitalize">
            We follow agile development for transparent collaboration and timely
            delivery.
          </p>
        </div>
      </>
    ),
    icon: <Code className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Testing & Quality Assurance",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          Rigorous{" "}
          <span className="font-semibold capitalize text-blue-500">
            testing and QA reviews
          </span>{" "}
          ensure your product is stable, secure, and optimized for performance.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm max-md:text-xs text-gray-500 dark:text-gray-500 capitalize">
            We validate functionality, usability, and responsiveness before
            launch.
          </p>
        </div>
      </>
    ),
    icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Deployment & Support",
    description: (
      <>
        <p className="text-base max-md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          We handle{" "}
          <span className="font-semibold capitalize text-orange-500">
            deployment, scaling, and post-launch support
          </span>{" "}
          using modern cloud infrastructures like AWS and Vercel.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4 max-md:w-8" />
          <p className="text-sm max-md:text-xs text-gray-500 dark:text-gray-500 capitalize">
            Continuous monitoring and updates keep your product reliable and
            future-ready.
          </p>
        </div>
      </>
    ),
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
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
    title: "Cloud Strategy & Consulting",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We help you define a{" "}
          <span className="text-orange-500 font-semibold">
            clear cloud roadmap
          </span>{" "}
          aligned with your business goals.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Choose the right provider & architecture for scalability and cost
            efficiency.
          </p>
        </div>
      </>
    ),
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Migration & Integration",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We handle{" "}
          <span className="text-orange-500 font-semibold">
            secure migration
          </span>{" "}
          from on-premise to cloud without downtime.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Includes database migration, CI/CD setup, and third-party
            integrations.
          </p>
        </div>
      </>
    ),
    icon: <Server className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Optimization & Monitoring",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We provide{" "}
          <span className="text-orange-500 font-semibold">
            cost, performance, and reliability optimization
          </span>
          .
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Continuous monitoring ensures 99.9% uptime and minimal latency.
          </p>
        </div>
      </>
    ),
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
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
    title: "Architecture Planning",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We design{" "}
          <span className="text-orange-500 font-semibold">
            multi-tenant SaaS architectures
          </span>{" "}
          for scalability, modularity, and data isolation.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Built on microservices & event-driven models.
          </p>
        </div>
      </>
    ),
    icon: <Layers className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "SaaS / PaaS Development",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We build{" "}
          <span className="text-orange-500 font-semibold">
            custom platforms
          </span>{" "}
          using React, Next.js, and Node.js.
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Integrates APIs, billing, and analytics modules seamlessly.
          </p>
        </div>
      </>
    ),
    icon: <Cog className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Deployment & Scaling",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Auto-scaling, CI/CD, and continuous monitoring ensure{" "}
          <span className="text-orange-500 font-semibold">
            seamless user experiences
          </span>
          .
        </p>
        <div className="flex gap-2 mt-2 items-center">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Runs on AWS, Azure, and GCP with high availability.
          </p>
        </div>
      </>
    ),
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
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
    title: "Content Architecture",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We structure{" "}
          <span className="text-orange-500 font-semibold">
            content models and hierarchies
          </span>{" "}
          tailored for scalability.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Supports both headless and traditional CMS workflows.
          </p>
        </div>
      </>
    ),
    icon: <Layout className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "E-Commerce Development",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Build powerful{" "}
          <span className="text-orange-500 font-semibold">online stores</span>{" "}
          with secure payments and inventory control.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            We specialize in Shopify, WooCommerce, and Magento platforms.
          </p>
        </div>
      </>
    ),
    icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Integration & Analytics",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Integrate{" "}
          <span className="text-orange-500 font-semibold">
            CRM, ERP, and analytics
          </span>{" "}
          tools for business insights.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Connects your CMS to marketing and sales ecosystems.
          </p>
        </div>
      </>
    ),
    icon: <Database className="w-8 h-8 text-blue-500" />,
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
    title: "Containerization & Setup",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          We containerize your apps using{" "}
          <span className="text-orange-500 font-semibold">
            Docker & Kubernetes
          </span>{" "}
          for portability.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Lightweight, scalable environments ready for deployment.
          </p>
        </div>
      </>
    ),
    icon: <Box className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "CI/CD Automation",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Automate testing, builds, and deployment with{" "}
          <span className="text-orange-500 font-semibold">
            GitHub Actions, Jenkins, or GitLab CI
          </span>
          .
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Accelerates release cycles and reduces human error.
          </p>
        </div>
      </>
    ),
    icon: <ServerCog className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Infrastructure as Code",
    description: (
      <>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Use{" "}
          <span className="text-orange-500 font-semibold">
            Terraform and Ansible
          </span>{" "}
          for consistent infrastructure management.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <CheckCircle className="text-blue-500 w-4" />
          <p className="text-sm text-gray-500">
            Version-controlled, automated infrastructure provisioning.
          </p>
        </div>
      </>
    ),
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
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
