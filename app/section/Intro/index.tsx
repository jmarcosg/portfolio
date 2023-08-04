"use client";

import { useActiveSectionContext } from "@/context/ActiveSection";
import { useSectionInView } from "@/hooks/useSectionInView";
import jmarcosgImg from "@/public/jmarcosg.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <div className="h-28 w-28 rounded-full border-[0.35rem] border-white overflow-hidden">
              <Image
                src={jmarcosgImg}
                alt="A portrait photograph of Juan Marcos looking over his shoulder"
                quality="95"
                priority={true}
                className="h-28 w-28 rounded-full object-cover scale-[1.80]"
              />
            </div>
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 20 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Juan Marcos.</span>
        <br />
        <span className="font-semibold">Full Stack Software Developer</span> oriented to{" "}
        <span className="font-semibold">Front-end Development</span> who enjoys building{" "}
        <span className="italic">simple, yet beautiful solutions</span>.
        {/* My main is{" "}<span className="underline">React (Next.js)</span>. */}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in touch <HiMail className="opacity-70 transition" />
        </Link>

        <a
          className="group bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://www.linkedin.com/in/jmarcosg/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          className="group bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://github.com/jmarcosg"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
