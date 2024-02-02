"use client";

import { Button } from "@/components/ui";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { sendEmail } from "./actions";

export const Contact = () => {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center flex flex-col space-y-6 mx-auto dark:text-white/80 transition-all"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<h2 className="font-display mb-4 text-2xl font-bold md:text-3xl">
				Contact me
			</h2>

			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:jmarcos.gonzalez94@gmail.com">
					jmarcos.gonzalez94@gmail.com
				</a>
			</p>

			<p className="text-gray-700 mt-6 dark:text-white/80">
				Or through this form
			</p>

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

				<Button type="submit" className="w-full">
					Submit
				</Button>
			</form>
		</motion.section>
	);
};
