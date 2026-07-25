import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaMobileAlt,
  FaGithub,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiTypescript,
  SiJavascript,
  SiCsharp,
  SiPython,
  SiRedux,
  SiReactquery,
  SiReactrouter,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiExpo,
  SiExpress,
  SiDotnet,
  SiGraphql,
  SiSupabase,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiDrizzle,
  SiMongoose,
  SiSequelize,
  SiKubernetes,
  SiGit,
  SiPuppeteer,
  SiJest,
  SiAutodesk,
} from "react-icons/si";

export const nav = [
  { href: "#work", text: "Work" },
  { href: "#experience", text: "Experience" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
  { href: "#education", text: "Education" },
  { href: "#contact", text: "Contact" },
];

export const profile = {
  name: "Ahmet Aydın",
  title: "Full Stack & Mobile Developer",
  location: "İzmir, Turkey",
  email: "ahm3t35@gmail.com",
  github: "https://github.com/ahmetaydin35",
  linkedin: "https://www.linkedin.com/in/ahmetaydin35/",
  resume: "/Ahmet-AYDIN-CV.pdf",
  summary:
    "I build web and mobile products end to end in TypeScript, Node.js, C# and Python. I've designed, shipped and now run two live SaaS products, owning the architecture, data model, API design and deployment from the first schema to production.",
};

export const titleBlock = [
  { label: "Role", value: "Full Stack Developer, Bimodel" },
  { label: "Location", value: "İzmir, TR (UTC+3)" },
  {
    label: "Live products",
    value: "bimodel.net, configira.com",
    links: [
      { text: "bimodel.net", href: "https://bimodel.net" },
      { text: "configira.com", href: "https://configira.com" },
    ],
  },
  { label: "Core stack", value: "TypeScript, Node.js, C#, Python" },
  { label: "Focus", value: "Full Stack SaaS, Web & Mobile" },
];

export const featured = [
  {
    id: "fw-01",
    index: "FW-01",
    title: "Bimodel",
    url: "https://bimodel.net",
    urlText: "bimodel.net",
    tagline: "BIM content platform for building-product manufacturers",
    description:
      "Designed and built from the ground up: upload and management tools for manufacturers, a searchable product catalog, and Revit/IFC content delivery to architects. The Autodesk Platform Services integration runs server-side IFC/Revit model translation and an in-browser model viewer.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "C# / .NET",
      "PostgreSQL",
      "Autodesk Platform Services",
    ],
  },
  {
    id: "fw-02",
    index: "FW-02",
    title: "Configira",
    url: "https://configira.com",
    urlText: "configira.com",
    tagline: "On-demand BIM model configurator",
    description:
      "Turns a manufacturer's BIM library into configurable, project-specific models generated in the cloud through Design Automation pipelines. Architects pick the options; the Revit model is produced on demand.",
    stack: ["Next.js", "Node.js", "C#", "Design Automation API", "Revit"],
  },
];

export const experience = [
  {
    id: "xp-01",
    role: "Full Stack Developer",
    company: "Bimodel",
    period: "06/2025 – Present",
    place: "İzmir",
    bullets: [
      "Own the architecture, data model and release of bimodel.net and Configira across frontend, backend and cloud (Next.js, TypeScript, Node.js, C#).",
      "Architected the Autodesk Platform Services integration in C#: server-side IFC/Revit model translation, an in-browser model viewer, and Design Automation pipelines that generate models in the cloud on demand.",
      "Built the manufacturer content platform: upload and management tools, a searchable product catalog, and Revit/IFC content delivery to architects.",
    ],
  },
  {
    id: "xp-02",
    role: "Full Stack Developer",
    company: "Freelance",
    period: "06/2024 – 06/2025",
    place: "Remote",
    bullets: [
      "Took on web and mobile projects end to end, choosing the stack to fit each brief.",
      "Built cross-platform mobile apps in React Native and Expo, and web apps in React, Next.js and Node.js with PostgreSQL and MongoDB.",
      "Worked both independently and inside client teams, running projects from scope to delivery.",
    ],
  },
  {
    id: "xp-03",
    role: "Full Stack Developer",
    company: "Alme Tech",
    period: "10/2022 – 06/2024",
    place: "İzmir",
    bullets: [
      "Built and shipped a range of client web and mobile projects to production.",
      "Worked full-stack: React and Next.js frontends, React Native and Expo mobile apps, Node.js, Express.js and C#/.NET back ends with PostgreSQL and MongoDB.",
      "Built REST APIs and integrated third-party services to fit each project's requirements.",
    ],
  },
  {
    id: "xp-04",
    role: "ERP Specialist",
    company: "Neli Engineering",
    period: "04/2022 – 10/2022",
    place: "İzmir",
    bullets: [
      "Worked on ERP implementations for external clients, setting up new systems around their operational workflows.",
      "Mapped existing business processes into ERP module configuration and data structures; built operational reports and supported teams through go-live.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C#", icon: SiCsharp },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Redux / Redux Toolkit", icon: SiRedux },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "React Router", icon: SiReactrouter },
      { name: "Angular", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "React Native", icon: FaReact },
      { name: "Expo", icon: SiExpo },
      { name: "iOS & Android", icon: FaMobileAlt },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "C# / .NET", icon: SiDotnet },
      { name: "Python", icon: SiPython },
      { name: "REST & GraphQL API design", icon: SiGraphql },
      { name: "MVC architecture" },
    ],
  },
  {
    label: "Databases & ORM",
    items: [
      { name: "PostgreSQL", icon: BiLogoPostgresql },
      { name: "Supabase", icon: SiSupabase },
      { name: "MongoDB", icon: DiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: SiPrisma },
      { name: "Drizzle", icon: SiDrizzle },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Sequelize", icon: SiSequelize },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", icon: FaDocker },
      { name: "Docker Swarm", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: FaGithub },
      { name: "CI/CD workflows" },
    ],
  },
  {
    label: "Automation & Testing",
    items: [
      { name: "Python scraping & ETL", icon: SiPython },
      { name: "Puppeteer", icon: SiPuppeteer },
      { name: "Jest", icon: SiJest },
    ],
  },
  {
    label: "Domain",
    items: [
      { name: "Autodesk Platform Services", icon: SiAutodesk },
      { name: "Design Automation", icon: SiAutodesk },
      { name: "BIM / IFC workflows" },
      { name: "Revit content pipelines" },
      { name: "CRM & lead-generation" },
    ],
  },
];

export const projects = [
  {
    id: "pr-05",
    img: "/astore.jpg",
    url: "https://astore-red.vercel.app",
    github: "https://github.com/ahmetaydin35",
    title: "Astore",
    stack: "Next.js, E-commerce",
  },
  {
    id: "pr-01",
    img: "https://i.ibb.co/HBPmKfW/Fire-Shot-Capture-004-Property-A-Find-The-Perfect-Rental-propertya-vercel-app.png",
    url: "https://propertya.vercel.app",
    github: "https://github.com/ahmetaydin35/Propertya",
    title: "Propertya",
    stack: "Next.js, Prisma, Tailwind",
  },
  {
    id: "pr-02",
    img: "https://i.ibb.co/QMWjHqt/Shopping.png",
    url: "https://shopping-ea57.onrender.com",
    github: "https://github.com/ahmetaydin35/Shopping",
    title: "Shopping",
    stack: "MERN Stack",
  },
  {
    id: "pr-03",
    img: "https://i.ibb.co/GHcVvT9/Job-Track.png",
    url: "https://jobstracking.vercel.app",
    github: "https://github.com/ahmetaydin35/JobTrack",
    title: "JobTrack",
    stack: "React, Node.js",
  },
  {
    id: "pr-04",
    img: "https://i.ibb.co/F5wBSnC/GPTTOUR.png",
    url: "https://gpttour.vercel.app",
    github: "https://github.com/ahmetaydin35/GPTTour",
    title: "GPTTour",
    stack: "Next.js, OpenAI API",
  },
];

export const education = [
  {
    id: "ed-01",
    degree:
      "M.B.A., Production Management & Industrial Business Administration",
    school: "Dokuz Eylül University, İzmir",
    period: "2022 – 2025",
  },
  {
    id: "ed-02",
    degree: "B.A., Business Administration",
    school: "Dokuz Eylül University, İzmir",
    period: "2016 – 2021",
    note: "Final grade 3.5 / 4.0",
  },
];

export const honours = [
  {
    id: "hn-01",
    title: "Highest Ranked Student",
    detail: "Dokuz Eylül University, 07/2021",
  },
  {
    id: "hn-02",
    title: "High Honour Certificate",
    detail: "Dokuz Eylül University, 07/2021 (GPA above 3.5)",
  },
];

export const languages = [
  { id: "lg-01", name: "Turkish", level: "Native" },
  { id: "lg-02", name: "English", level: "Professional working proficiency" },
];
