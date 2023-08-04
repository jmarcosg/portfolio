"use client";

import { SectionHeading, SubmitButton } from "@/components";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { sendEmail } from "./actions";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jmarcos.gonzalez94@gmail.com">
          jmarcos.gonzalez94@gmail.com
        </a>
      </p>

      <p className="text-gray-700 mt-6 dark:text-white/80">Or through this form</p>

      <form
        className="mt-4 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          placeholder="your.name@email.com"
          maxLength={500}
          required
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white transition-all dark:outline-none"
          name="senderMessage"
          placeholder="Your message"
          maxLength={5000}
          required
        />

        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
