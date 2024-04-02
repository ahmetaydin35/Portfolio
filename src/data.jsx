import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaBootstrap,
} from "react-icons/fa";
import { DiMysql, DiGithub } from "react-icons/di";
import { SiReactrouter, SiRedux } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "Tech Stack" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "CSS",
    icon: <FaCss3Alt className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Node JS & Express JS",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Redux",
    icon: <SiRedux className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "React Router",
    icon: <SiReactrouter className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: <DiMysql className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Bootstrap",
    icon: <FaBootstrap className="h-16 w-16 text-emerald-500" />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.ibb.co/PCFkJvQ/Color-Generator.png",
    url: "https://color-generator-52rl.onrender.com",
    github: "https://github.com/ahmetaydin35",
    title: "Color Generator",
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
    img: "https://i.ibb.co/G0kC2Fz/Fire-Shot-Capture-003-Comfy-Store-comfy-store-4zpn-onrender-com.png",
    url: "https://comfy-store-4zpn.onrender.com/",
    github: "https://github.com/ahmetaydin35",
    title: "Comfy Store",
  },
];
