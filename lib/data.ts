export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export const aboutTechnologies: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Docker",
  "Git",
];

export type EducationEntry = {
  degree: string;
  institution: string;
  affiliation?: string;
  period?: string;
};

export const educationEntries: EducationEntry[] = [
  {
    degree: "Higher Diploma in FullStack Web Development",
    institution: "Myanmar Technopreneur Academy (MTA)",
  },
  {
    degree: "KBTC School of IT / NCC Education",
    institution: "University of Central Lancashire",
  },
  {
    degree: "B.C.Tech — Bachelor of Computer Technology",
    institution: "Polytechnic University, Maubin",
    period: "2016 – 2026",
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Univision",
    category: "Video Management System",
    description:
      "A video management system designed for managing and working with video streams and surveillance-related workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MediaMTX",
      "WebRTC",
      "WHEP",
      "REST API",
      "Docker",
    ],
  },
  {
    name: "HR & Payroll Management System",
    category: "Business Management System",
    description:
      "A web-based HR and payroll management system designed to support employee and payroll-related business processes.",
    technologies: [
      "Employee Management",
      "HR Workflows",
      "Payroll Management",
      "Backend APIs",
      "Database-Driven Architecture",
    ],
  },
  {
    name: "Luxe",
    category: "E-commerce Store",
    description:
      "A modern e-commerce platform focused on providing a clean shopping experience and structured product management.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"],
  },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "DevOps / Tools",
    skills: ["Docker", "Git", "GitHub"],
  },
  {
    title: "Video / Streaming",
    skills: ["MediaMTX", "WebRTC", "WHEP", "RTSP"],
  },
];

export const siteConfig = {
  name: "Khant Nyi Aung",
  role: "Full-Stack Web Developer",
  email: "knakhantnyiaung@gmail.com",
  phone: "+95 9 979 967 741",
  phoneHref: "+959979967741",
  address: "20 Padaukpin St., Kyeemyindaing, Yangon",
  technocratUrl: "https://www.facebook.com/technocrat2023t/",
};
