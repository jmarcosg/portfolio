import pantryImg from "@/public/pantry.png";
import petAdoptionsImg from "@/public/petadoptions.png";
import servcentdemoImg from "@/public/servcentdemo.png";
import React from "react";
import { FaReact } from "react-icons/fa";
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
    title: "BS Computer Science",
    school: "Universidad Nacional del Comahue",
    location: "Neuquén, NQN, Argentina",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2028 (expected)",
    status: "In progress"
  },
  {
    title: "BS Software Development",
    school: "Universidad Nacional del Comahue",
    location: "Neuquén, NQN, Argentina",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
    status: "Graduated"
  }
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Software Developer",
    location: "Neuquén, NQN, Argentina",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present"
  },
  {
    title: "Universidad Nacional del Comahue",
    location: "Neuquén, NQN, Argentina",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(FaReact),
    date: "2019"
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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion"
] as const;
