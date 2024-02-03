import { TSiteConfig } from "@/types";

export const siteData: TSiteConfig = {
	name: "jmarcosg",
	description:
		"Juan Marcos is a Fullstack Software Developer oriented to the Frontend Development.",
	links: {
		mail: "jmarcos.gonzalez94@gmail.com",
		linkedin: "https://linkedin.com/jmarcosg",
		github: "https://github.com/jmarcosg",
	},
	languages: ["Spanish (native)", "English (C1)"],
	softSkills: [
		"Communication",
		"Proactivity",
		"Team-working",
		"Adaptability",
		"Creativity",
		"Growth Mindset",
		"Mentoring",
	],
	frontend: [
		"React",
		"NextJS",
		"Angular",
		"TypeScript",
		"ShadcnUI",
		"Tailwind CSS",
		"Material UI",
		"Bootstrap",
	],
	backend: [
		"Node.js",
		"Express",
		"NestJS",
		"PHP",
		"Laravel",
		"SQL",
		"MySQL",
		"PostgreSQL",
		"MongoDB",
	],
	mobile: ["React Native", "Ionic"],
	experience: [
		{
			title: "Software Developer",
			company: "Secretaría de Modernización - Municipalidad de Neuquén",
			link: "https://www.neuquencapital.gov.ar/secretaria-de-modernizacion/subsecretaria-de-sistemas/",
			location: "Neuquén, NQN, Argentina",
			startDate: "2022",
			endDate: "Present",
			description: [
				"I'm now a full-stack developer who is mainly in charge of the front-end development of software solutions that are built to help Neuquén's citizens and digitalize the city's processes. I'm also in charge of overseeing and teaching interns and junior developers that join the team.",
			],
			tags: [
				"Software Development",
				"Web Applications",
				"Modern Technologies",
				"Cross-Functional Teams",
				"Collaboration",
			],
		},
		{
			title: "Software Developer",
			company: "Universidad Nacional del Comahue",
			link: "https://www.fi.uncoma.edu.ar/",
			location: "Neuquén, NQN, Argentina",
			startDate: "2020",
			endDate: "2022",
			description: [
				"Worked here as front-end developer and also was as an asistant to the project manager, where I was in charge of the communication between the team and the client, as well as the planning and organization of the project.",
			],
			tags: ["Software Development", "Web Applications", "Collaboration"],
		},
	],
	education: [
		{
			school: "Universidad Nacional del Comahue",
			location: "Neuquén, NQN, Argentina",
			link: "https://www.fi.uncoma.edu.ar/",
			degree: "Bachelor's of Science degree",
			fieldOfStudy: "computer science",
			description:
				"Learning about algorithms, data structures and software engineering.",
			startDate: "2023",
			endDate: "Present",
		},
		{
			school: "Universidad Nacional del Comahue",
			location: "Neuquén, NQN, Argentina",
			link: "https://www.fi.uncoma.edu.ar/",
			degree: "Bachelor's degree",
			fieldOfStudy: "software and web development",
			description:
				"Learnt about algorithms, UX/UI and web development. Graduated with GPA: 9.0/10.0.",
			startDate: "2020",
			endDate: "2023",
		},
	],
};
