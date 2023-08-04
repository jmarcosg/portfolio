"use client";

import { SectionHeading, SectionSubheading } from "@/components";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
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
        Graduated from Universidad Nacional del Comahue (Neuquén, Argentina 🇦🇷) with a degree in Software
        Development.
      </p>

      <p className="mb-3 antialiased font-normal">
        Through my experiences, I had the opportunity to work with both small and large specialized and
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
