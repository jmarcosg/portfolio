"use client";

import jmarcosgImg from "@/public/jmarcosg.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Intro = () => (
  <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
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
      <span className="font-bold">Hello, I'm Juan Marcos.</span> I'm a{" "}
      <span className="font-bold">Fullstack Software Developer</span> oriented to{" "}
      <span className="font-bold">Frontend Development</span>. I enjoy building{" "}
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
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
        onClick={() => {}}
      >
        Get in touch <HiMail className="opacity-70 transition" />
      </Link>

      {/* <a
        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack"
        href="/CV.pdf"
        download
      >
        Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
      </a> */}

      <a
        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.05] hover:scale-[1.05] active:scale-105 transition cursor-pointer borderBlack"
        href="https://www.linkedin.com/in/jmarcosg/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.05] hover:scale-[1.05] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
        href="https://github.com/jmarcosg"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare />
      </a>
    </motion.div>
  </section>
);

export default Intro;
