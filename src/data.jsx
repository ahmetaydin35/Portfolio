import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaDocker,
} from "react-icons/fa";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { DiMysql, DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiReactrouter,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiExpo,
  SiPrisma,
  SiKubernetes,
  SiSequelize,
  SiRedis,
  SiPuppeteer,
  SiJest,
  SiAngular,
  SiNestjs,
} from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "Tech Stack" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <SiJavascript className="h-16 w-16 rounded" />,
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Angular",
    icon: <SiAngular className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: <SiTailwindcss className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: <SiRedux className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "React Router",
    icon: <SiReactrouter className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Next JS",
    icon: <RiNextjsFill className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Node JS",
    icon: <FaNodeJs className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Express JS",
    icon: <SiExpress className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Nest JS",
    icon: <SiNestjs className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "GraphQL",
    icon: <SiGraphql className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <DiMongodb className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: <DiMysql className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "PostgreSQL",
    icon: <BiLogoPostgresql className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Sequelize ",
    icon: <SiSequelize className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Prisma",
    icon: <SiPrisma className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Redis ",
    icon: <SiRedis className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "React Native",
    icon: <RiReactjsFill className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Expo",
    icon: <SiExpo className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Docker",
    icon: <FaDocker className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Kubernetes",
    icon: <SiKubernetes className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Puppeteer",
    icon: <SiPuppeteer className="h-16 w-16" />,
  },
  {
    id: nanoid(),
    title: "Jest",
    icon: <SiJest className="h-16 w-16" />,
  },
];
export const projects = [
  {
    id: nanoid(),
    img: "https://i.ibb.co/HBPmKfW/Fire-Shot-Capture-004-Property-A-Find-The-Perfect-Rental-propertya-vercel-app.png",
    url: "https://propertya.vercel.app",
    github: "https://github.com/ahmetaydin35/Propertya",
    title: "Property A (with Next JS)",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/QMWjHqt/Shopping.png",
    url: "https://shopping-ea57.onrender.com",
    github: "https://github.com/ahmetaydin35/Shopping",
    title: "Shopping (with MERN Stack)",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/GHcVvT9/Job-Track.png",
    url: "https://jobstracking.vercel.app",
    github: "https://github.com/ahmetaydin35/JobTrack",
    title: "Job Track",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/F5wBSnC/GPTTOUR.png",
    url: "https://gpttour.vercel.app",
    github: "https://github.com/ahmetaydin35/GPTTour",
    title: "GPTTour (Next JS, CHATGPT)",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/G0kC2Fz/Fire-Shot-Capture-003-Comfy-Store-comfy-store-4zpn-onrender-com.png",
    url: "https://comfy-store-4zpn.onrender.com/",
    github: "https://github.com/ahmetaydin35",
    title: "Comfy Store",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/ZzvhHfL/Fire-Shot-Capture-002-React-Quiz-react-quiz-app-ku3m-onrender-com.png",
    url: "https://react-quiz-app-ku3m.onrender.com",
    github: "https://github.com/ahmetaydin35",
    title: "React Quiz-App",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/PCFkJvQ/Color-Generator.png",
    url: "https://color-generator-52rl.onrender.com",
    github: "https://github.com/ahmetaydin35",
    title: "Color Generator",
  },
];
