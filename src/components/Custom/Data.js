import {
  Briefcase,
  Clock,
  Cloud,
  Server,
  ShieldCheck,
  Star,
  Users,
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
    img: CarlosMendez,
    name: "Carlos Mendez",
    title: "CEO (Mendez Enterprises)",
    quote:
      "Partnering with Ziostech enhanced our digital presence. Their solutions are top-notch, and their support is unparalleled.",
  },
  {
    img: Raghubh,
    name: "MWO Raghubh Singh",
    title: "M.D. & CEO (Saurabh Visionary Ventures)",
    quote:
      "Ziostech exceeded expectations, delivering a dynamic platform with professionalism, timely delivery, and exceptional communication. Highly recommended for innovative tech solutions.",
  },
  {
    img: Aiko,
    name: "Aiko Tanaka",
    title: "CTO (Tanaka Innovations)",
    quote:
      "Ziostech's expertise transformed our platform, leading to increased user engagement. Their professionalism and insight were invaluable.",
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
