"use client";

import { useActiveSectionContext } from "@/context/ActiveSection";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [open, setOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-6 md:h-[3.25rem] md:w-[44rem] md:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 md:top-[1.7rem] md:h-[initial] md:py-0">
        {/* Menu icon */}
        <motion.div
          onClick={() => setOpen(!open)}
          className="absolute right-2 top-6 cursor-pointer md:hidden"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
          {open ? (
            <HiOutlineX className="w-6 h-6 text-gray-950 hover:text-gray-950 dark:text-gray-50 dark:hover:text-gray-300" />
          ) : (
            <HiMenu className="w-6 h-6 text-gray-950 hover:text-gray-950 dark:text-gray-50 dark:hover:text-gray-300" />
          )}
        </motion.div>

        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 md:w-[initial] md:flex-nowrap md:gap-5">
          {/* <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        > */}
          {links.map((link) => (
            <motion.li
              className={`h-3/4 flex items-center justify-center relative`}
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300 select-none",
                  {
                    "text-gray-950 dark:text-gray-50": activeSection === link.name
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-700 select-none"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
