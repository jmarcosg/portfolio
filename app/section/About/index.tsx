"use client";

import {
  CircleNotation,
  HighlightNotation,
  SectionHeading,
  SectionSubheading,
  UnderlineNotation
} from "@/components";
import { useActiveSectionContext } from "@/context/ActiveSection";
import { useTheme } from "@/context/ThemeContext";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  const { ref } = useSectionInView("About");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <SectionSubheading>
        📍 Currently based in:{" "}
        <span>
          <UnderlineNotation color="#61b2e4" iterations={3}>
            Argentina 🇦🇷
          </UnderlineNotation>
        </span>
      </SectionSubheading>

      <p className="mb-3 antialiased font-normal">
        Graduated from Universidad Nacional del Comahue (Neuquén, Argentina 🇦🇷) with a degree in Software
        Development.
      </p>

      <p className="mb-3 antialiased font-normal">
        Through my experiences, I had the opportunity to work with both small and large specialized and
        cross-functional teams, which allowed me to develop a working style that leans towards{" "}
        <HighlightNotation color={theme === "light" ? "rgba(34, 211, 238, 0.6)" : "rgba(8, 145, 178, 0.6)"}>
          clarity
        </HighlightNotation>
        ,{" "}
        <HighlightNotation color={theme === "light" ? "rgba(74, 222, 128, 0.6)" : "rgba(22, 163, 74, 0.6)"}>
          collaboration
        </HighlightNotation>{" "}
        and{" "}
        <HighlightNotation color={theme === "light" ? "rgba(253, 224, 71, 0.6)" : "rgba(202, 138, 4, 0.6)"}>
          flexibility
        </HighlightNotation>
        .
      </p>

      <p className="antialiased font-normal">
        I'm always open to new challenges and opportunities, so if you think I could be a good fit for your
        team, don't hesitate to{" "}
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <CircleNotation color={"#e11d48"} iterations={3}>
            <span className="font-semibold">contact me!</span>
          </CircleNotation>
        </Link>
      </p>
    </motion.section>
  );
};

export default About;
