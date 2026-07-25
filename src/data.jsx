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
  { href: "#work", text: { en: "Work", tr: "İşler" } },
  { href: "#experience", text: { en: "Experience", tr: "Deneyim" } },
  { href: "#skills", text: { en: "Skills", tr: "Yetenekler" } },
  { href: "#projects", text: { en: "Projects", tr: "Projeler" } },
  { href: "#education", text: { en: "Education", tr: "Eğitim" } },
  { href: "#contact", text: { en: "Contact", tr: "İletişim" } },
];

export const ui = {
  resume: { en: "Resume", tr: "CV" },
  viewWork: { en: "View work", tr: "İşleri gör" },
  production: { en: "Production", tr: "Yayında" },
  sheet: { en: "Sheet", tr: "Pafta" },
  titleBlockHeading: { en: "Overview", tr: "Özet" },
  status: { en: "Building at Bimodel", tr: "Bimodel'de geliştiriyorum" },
  sections: {
    work: {
      title: { en: "Selected work", tr: "Seçilmiş işler" },
      note: { en: "Two live SaaS products", tr: "İki canlı SaaS ürünü" },
    },
    experience: { title: { en: "Experience", tr: "Deneyim" } },
    skills: { title: { en: "Technical skills", tr: "Teknik yetenekler" } },
    projects: {
      title: { en: "Earlier & personal work", tr: "Önceki & kişisel işler" },
      note: "2022 – 2024",
    },
    education: { title: { en: "Education & honours", tr: "Eğitim & ödüller" } },
  },
  honoursHeading: { en: "Honours & awards", tr: "Onur & ödüller" },
  languagesHeading: { en: "Languages", tr: "Diller" },
  contactEyebrow: { en: "Contact", tr: "İletişim" },
  contactHeading: {
    en: "Let's build something that ships.",
    tr: "Hayata geçen bir şey inşa edelim.",
  },
};

export const profile = {
  name: "Ahmet Aydın",
  title: { en: "Full Stack & Mobile Developer", tr: "Full Stack & Mobil Geliştirici" },
  location: { en: "İzmir, Turkey", tr: "İzmir, Türkiye" },
  email: "ahm3t35@gmail.com",
  github: "https://github.com/ahmetaydin35",
  linkedin: "https://www.linkedin.com/in/ahmetaydin35/",
  resume: { en: "/Ahmet-AYDIN-CV.pdf", tr: "/Ahmet-AYDIN-CV-TR.pdf" },
  summary: {
    en: "I'm a full-stack developer working across web and mobile with TypeScript, Node.js, C# and Python. I've taken two SaaS products from first design to production; today I manage the full technical stack behind them, from architecture and data modeling to API design, deployment and CI/CD.",
    tr: "TypeScript, Node.js, C# ve Python ile web ve mobil tarafta uçtan uca geliştirme yapıyorum. İki SaaS ürününü ilk tasarımdan production'a taşıdım; bugün de mimariden veri modeline, API tasarımından deployment ve CI/CD süreçlerine uzanan tüm teknik katmanları yönetiyorum.",
  },
};

export const titleBlock = [
  {
    label: { en: "Role", tr: "Rol" },
    value: "Full Stack Developer, Bimodel",
  },
  { label: { en: "Location", tr: "Konum" }, value: "İzmir, TR (UTC+3)" },
  {
    label: { en: "Live products", tr: "Yayındaki ürünler" },
    links: [
      { text: "bimodel.net", href: "https://bimodel.net" },
      { text: "configira.com", href: "https://configira.com" },
    ],
  },
  { label: { en: "Core stack", tr: "Teknolojiler" }, value: "TypeScript, Node.js, C#, Python" },
  {
    label: { en: "Focus", tr: "Odak" },
    value: {
      en: "Full Stack SaaS, Web & Mobile, DevOps",
      tr: "Full Stack SaaS, Web & Mobil, DevOps",
    },
  },
];

export const featured = [
  {
    id: "fw-01",
    index: "FW-01",
    title: "Bimodel",
    url: "https://bimodel.net",
    urlText: "bimodel.net",
    tagline: {
      en: "BIM content platform for building-product manufacturers",
      tr: "Yapı ürünü üreticileri için BIM içerik platformu",
    },
    description: {
      en: "Designed and built from the ground up: upload and management tools for manufacturers, a searchable product catalog, and Revit/IFC content delivery to architects. The Autodesk Platform Services integration runs server-side IFC/Revit model translation and an in-browser model viewer.",
      tr: "Sıfırdan tasarlanıp geliştirildi: üreticiler için yükleme ve yönetim araçları, aranabilir ürün kataloğu ve mimarlara Revit/IFC içerik dağıtımı. Autodesk Platform Services entegrasyonu, sunucu tarafında IFC/Revit model dönüşümü ve tarayıcı içi model görüntüleyici çalıştırıyor.",
    },
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
    tagline: {
      en: "On-demand BIM model configurator",
      tr: "Talep üzerine BIM model konfigüratörü",
    },
    description: {
      en: "Turns a manufacturer's BIM library into configurable, project-specific models generated in the cloud through Design Automation pipelines. Architects pick the options; the Revit model is produced on demand.",
      tr: "Bir üreticinin BIM kütüphanesini, Design Automation pipeline'ları ile bulutta üretilen, projeye özel ve yapılandırılabilir modellere dönüştürüyor. Mimar seçenekleri belirliyor; Revit modeli talep üzerine üretiliyor.",
    },
    stack: ["Next.js", "Node.js", "C#", "Design Automation API", "Revit"],
  },
];

export const experience = [
  {
    id: "xp-01",
    role: "Full Stack Developer",
    company: "Bimodel",
    period: { en: "06/2025 – Present", tr: "06/2025 – Halen" },
    place: { en: "İzmir", tr: "İzmir" },
    bullets: [
      {
        en: "Own the architecture, data model and release of bimodel.net and Configira across frontend, backend and cloud (Next.js, TypeScript, Node.js, C#).",
        tr: "bimodel.net ve Configira'nın mimarisi, veri modeli ve yayın süreci; frontend'den backend'e ve buluta kadar (Next.js, TypeScript, Node.js, C#) benim sorumluluğumda.",
      },
      {
        en: "Architected the Autodesk Platform Services integration in C#: server-side IFC/Revit model translation, an in-browser model viewer, and Design Automation pipelines that generate models in the cloud on demand.",
        tr: "Autodesk Platform Services entegrasyonunu C# ile kurdum: sunucu tarafında IFC/Revit model dönüşümü, tarayıcı içi model görüntüleyici ve bulutta talep üzerine model üreten Design Automation pipeline'ları.",
      },
      {
        en: "Built the manufacturer content platform: upload and management tools, a searchable product catalog, and Revit/IFC content delivery to architects.",
        tr: "Üretici içerik platformunu geliştirdim: yükleme ve yönetim araçları, aranabilir ürün kataloğu ve mimarlara Revit/IFC içerik dağıtımı.",
      },
    ],
  },
  {
    id: "xp-02",
    role: "Full Stack Developer",
    company: "Freelance",
    period: "06/2024 – 06/2025",
    place: { en: "Remote", tr: "Uzaktan" },
    bullets: [
      {
        en: "Took on web and mobile projects end to end, choosing the stack to fit each brief.",
        tr: "Web ve mobil projeleri uçtan uca üstlendim; stack'i her işin ihtiyacına göre seçtim.",
      },
      {
        en: "Built cross-platform mobile apps in React Native and Expo, and web apps in React, Next.js and Node.js with PostgreSQL and MongoDB.",
        tr: "React Native ve Expo ile cross-platform mobil uygulamalar; React, Next.js ve Node.js ile PostgreSQL ve MongoDB destekli web uygulamaları geliştirdim.",
      },
      {
        en: "Worked both independently and inside client teams, running projects from scope to delivery.",
        tr: "Hem bağımsız hem de müşteri ekipleri içinde çalışarak projeleri kapsamdan teslimata yürüttüm.",
      },
    ],
  },
  {
    id: "xp-03",
    role: "Full Stack Developer",
    company: "Alme Tech",
    period: "10/2022 – 06/2024",
    place: { en: "İzmir", tr: "İzmir" },
    bullets: [
      {
        en: "Built and shipped a range of client web and mobile projects to production.",
        tr: "Çok sayıda müşteri web ve mobil projesini geliştirip production'a aldım.",
      },
      {
        en: "Worked full-stack: React and Next.js frontends, React Native and Expo mobile apps, Node.js, Express.js and C#/.NET back ends with PostgreSQL and MongoDB.",
        tr: "Full-stack çalıştım: React ve Next.js frontend'ler, React Native ve Expo mobil uygulamalar, PostgreSQL ve MongoDB ile Node.js, Express.js ve C#/.NET back end'ler.",
      },
      {
        en: "Built REST APIs and integrated third-party services to fit each project's requirements.",
        tr: "REST API'ler geliştirdim ve her projenin ihtiyacına göre üçüncü parti servisleri entegre ettim.",
      },
    ],
  },
  {
    id: "xp-04",
    role: { en: "ERP Specialist", tr: "ERP Uzmanı" },
    company: "Neli Engineering",
    period: "04/2022 – 10/2022",
    place: { en: "İzmir", tr: "İzmir" },
    bullets: [
      {
        en: "Worked on ERP implementations for external clients, setting up new systems around their operational workflows.",
        tr: "Dış müşteriler için ERP implementasyonlarında çalıştım; sistemleri operasyonel iş akışlarına göre sıfırdan kurdum.",
      },
      {
        en: "Mapped existing business processes into ERP module configuration and data structures; built operational reports and supported teams through go-live.",
        tr: "Mevcut iş süreçlerini ERP modül konfigürasyonuna ve veri yapılarına aktardım; operasyonel raporlar hazırlayıp ekiplere go-live sürecinde destek verdim.",
      },
    ],
  },
];

export const skillGroups = [
  {
    label: { en: "Languages", tr: "Diller" },
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
    label: { en: "Mobile", tr: "Mobil" },
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
      {
        name: { en: "REST & GraphQL API design", tr: "REST & GraphQL API tasarımı" },
        icon: SiGraphql,
      },
      { name: { en: "MVC architecture", tr: "MVC mimarisi" } },
    ],
  },
  {
    label: { en: "Databases & ORM", tr: "Veritabanları & ORM" },
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
      { name: { en: "CI/CD workflows", tr: "CI/CD süreçleri" } },
    ],
  },
  {
    label: { en: "Automation & Testing", tr: "Otomasyon & Test" },
    items: [
      { name: { en: "Python scraping & ETL", tr: "Python scraping & ETL" }, icon: SiPython },
      { name: "Puppeteer", icon: SiPuppeteer },
      { name: "Jest", icon: SiJest },
    ],
  },
  {
    label: { en: "Domain", tr: "Alan uzmanlığı" },
    items: [
      { name: "Autodesk Platform Services", icon: SiAutodesk },
      { name: "Design Automation", icon: SiAutodesk },
      { name: { en: "BIM / IFC workflows", tr: "BIM / IFC iş akışları" } },
      { name: { en: "Revit content pipelines", tr: "Revit içerik pipeline'ları" } },
      { name: { en: "CRM & lead-generation", tr: "CRM & lead üretimi" } },
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
    degree: {
      en: "M.B.A., Production Management & Industrial Business Administration",
      tr: "Yüksek Lisans, Üretim Yönetimi ve Endüstri İşletmeciliği",
    },
    school: {
      en: "Dokuz Eylül University, İzmir",
      tr: "Dokuz Eylül Üniversitesi, İzmir",
    },
    period: "2022 – 2025",
  },
  {
    id: "ed-02",
    degree: { en: "B.A., Business Administration", tr: "Lisans, İşletme" },
    school: {
      en: "Dokuz Eylül University, İzmir",
      tr: "Dokuz Eylül Üniversitesi, İzmir",
    },
    period: "2016 – 2021",
    note: { en: "Final grade 3.5 / 4.0", tr: "Mezuniyet notu 3.5 / 4.0" },
  },
];

export const honours = [
  {
    id: "hn-01",
    title: { en: "Highest Ranked Student", tr: "Okul birinciliği" },
    detail: {
      en: "Dokuz Eylül University, 07/2021",
      tr: "Dokuz Eylül Üniversitesi, 07/2021",
    },
  },
  {
    id: "hn-02",
    title: { en: "High Honour Certificate", tr: "Yüksek Onur Belgesi" },
    detail: {
      en: "Dokuz Eylül University, 07/2021 (GPA above 3.5)",
      tr: "Dokuz Eylül Üniversitesi, 07/2021 (GPA 3.5 üzeri)",
    },
  },
];

export const languages = [
  {
    id: "lg-01",
    name: { en: "Turkish", tr: "Türkçe" },
    level: { en: "Native", tr: "Ana dil" },
  },
  {
    id: "lg-02",
    name: { en: "English", tr: "İngilizce" },
    level: { en: "Professional working proficiency", tr: "Profesyonel çalışma seviyesi" },
  },
];
