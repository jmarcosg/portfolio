"use client";

import { SectionHeading, SectionSubheading } from "@/components";
import { useSectionInView } from "@/hooks/useSectionInView";
import {
  backendSkillsData,
  frontendAndDesignSkillsData,
  languagesData,
  mobileSkillsData,
  toolsSkillsData
} from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>

      <motion.article
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true
        }}
        custom={"languages"}
      >
        <SectionSubheading>Languages</SectionSubheading>
        <motion.ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {languagesData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill.name} {skill.flag}
            </motion.li>
          ))}
        </motion.ul>
      </motion.article>

      <motion.article
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true
        }}
        custom={"frontendAndDesign"}
      >
        <SectionSubheading>Front-end</SectionSubheading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {frontendAndDesignSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.article>

      <motion.article
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true
        }}
        custom={"backend"}
      >
        <SectionSubheading>Back-end</SectionSubheading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {backendSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.article>

      <motion.article
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true
        }}
        custom={"mobile"}
      >
        <SectionSubheading>Mobile</SectionSubheading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {mobileSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.article>

      <motion.article
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true
        }}
        custom={"mobile"}
      >
        <SectionSubheading>Tools</SectionSubheading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {toolsSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white borderBlack rounded-xl px-5 py-3"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.article>
    </section>
  );
}
