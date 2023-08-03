import pantryImg from "@/public/pantry.png";
import petAdoptionsImg from "@/public/petadoptions.png";
import servcentdemoImg from "@/public/servcentdemo.png";
import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Education",
    hash: "#education"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;

export const educationData = [
  {
    title: "BS Computer Science - Universidad Nacional del Comahue",
    location: "Neuquén, NQN, Argentina",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2028 (expected)",
    status: "pending"
  },
  {
    title: "BS Software Development - Universidad Nacional del Comahue",
    location: "Neuquén, NQN, Argentina",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
    status: "completed"
  }
] as const;

export const experiencesData = [
  {
    title: "Secretaría de Modernización - Municipalidad de Neuquén",
    location: "Neuquén, NQN, Argentina",
    description:
      "I'm now a full-stack developer who is mainly in charge of the front-end development of software solutions that are built to help Neuquén's citizens and digitalize the city's processes. I'm also in charge of overseeing and teaching interns and junior developers that join the team.",
    icon: React.createElement(BiCodeAlt),
    date: "2022 - Present"
  },
  {
    title: "Universidad Nacional del Comahue",
    location: "Neuquén, NQN, Argentina",
    description:
      "Worked here as front-end developer and also was as an asistant to the project manager, where I was in charge of the communication between the team and the client, as well as the planning and organization of the project.",
    icon: React.createElement(BiCodeAlt),
    date: "2020 - 2022"
  }
] as const;

export const projectsData = [
  {
    title: "Pantry",
    description:
      "A web app for managing your pantry. It also has a native mobile app for scanning barcodes and adding items to your pantry.",
    tags: ["React", "React Native", "TypeScript", "Next.js", "Tailwind", "Prisma", "MySQL"],
    imageUrl: pantryImg,
    workRelated: false
  },
  {
    title: "Pet Adoptions",
    description:
      "A web app for citizens to check out pets that are available to be adopted and get in contact with city's local shelter. Admins can manage pets and adopters.",
    tags: ["React", "Tailwind", "TypeScript", "PHP", "SQL"],
    imageUrl: petAdoptionsImg,
    workRelated: true
  },
  {
    title: "ServCent",
    description:
      "A private web app for the developers team at my current job. It has features like managing users and projects.",
    tags: ["React", "Tailwind", "SQL", "Laravel"],
    imageUrl: servcentdemoImg,
    workRelated: true
  }
] as const;

export const languagesData = ["Spanish (Native)", "English (C1)"];

export const codingLanguagesAndToolsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "SASS",
  "Node.js",
  "PHP",
  "SQL",
  "Figma",
  "Photoshop",
  "Illustrator"
];

export const librariesAndFrameworksData = [
  "React",
  "Next.js",
  "Angular",
  "React Native",
  "Ionic",
  "Redux",
  "Express",
  "NestJS",
  "Laravel",
  "Prisma",
  "Framer Motion",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap"
];

export const databasesData = ["SQL Server", "MongoDB", "MySQL", "PostgreSQL"];

export const otherToolsSkillsData = ["Git", "Docker", "Jest", "Postman"];
