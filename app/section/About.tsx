"use client";

import { SectionHeading, SectionSubheading } from "@/components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <SectionSubheading>
        📍 Currently based in:{" "}
        <span className="underline decoration-[#61B2E4] decoration-wavy">Argentina</span> 🇦🇷
      </SectionSubheading>

      <p className="mb-3 antialiased font-normal">
        I graduated from the Universidad Nacional del Comahue (Neuquén, Argentina 🇦🇷) with a degree in
        Software Development. Here I spent 3 years learning the fundamentals of front-end and back-end
        development, as well as some other topics like databases and UX/UI.
      </p>

      <p className="mb-3 antialiased font-normal">
        On 2023, I enrolled again to study a degree in Computer Science, where I'm currently improving and
        learning about algorithms, data structures, and other computer science topics.
      </p>

      <p className="mb-3 antialiased font-normal">
        During my time at university, I had the opportunity to work on a variety of projects that introduced
        me to the world of software development and taught me how to play different roles. I worked with the
        Euclides team, where I was in charge of the front-end development and also was as an asistant to the
        project manager, where I was in charge of the communication between the team and the client, as well
        as the planning and organization of the project.
      </p>

      <p className="mb-3 antialiased font-normal">
        Now I'm working as a Full Stack Developer at Secretaría de Modernización de la Municipalidad de
        Neuquén (Neuquén, Argentina 🇦🇷), where I'm mainly in charge of the front-end development of software
        solutions that are built to help Neuquén's citizens and digitalize the city's processes. I'm also in
        charge of overseeing and teaching interns and junior developers that join the team.
      </p>

      <p className="mb-3 antialiased font-normal">
        Through these experiences, I had the opportunity to work with both small and large specialized and
        cross-functional teams, which allowed me to develop a working style that leans towards flexibility,
        clarity and collaboration.
      </p>

      <p className="antialiased font-normal">
        I'm always open to new challenges and opportunities, so if you think I could be a good fit for your
        team, don't hesitate to contact me!
      </p>
    </motion.section>
  );
};

export default About;
