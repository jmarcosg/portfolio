"use client";

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Input,
	Textarea,
} from "@/components/ui";
import { useSectionInView } from "@/hooks";
import { contactFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { sendEmail } from "./actions";

export const Contact = () => {
	const { ref } = useSectionInView("Contact");
	const [isSendingEmail, setIsSendingEmail] = useState(false);

	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			email: "",
			senderMessage: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
		setIsSendingEmail(true);

		try {
			const { data, error } = await sendEmail(values);

			if (error) {
				setIsSendingEmail(false);
				toast.error("Apologies! Please try again.");
				return;
			}

			setIsSendingEmail(false);
			toast.success("Email sent successfully!");
		} catch (error) {
			setIsSendingEmail(false);
			toast.error("An error occurred while trying to send the email");
		}
	};

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

			<Form {...form}>
				<form
					className="grid gap-2 py-4"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										placeholder="your@email.com"
										className="bg-white/80 dark:bg-slate-700 transition-all px-4 text-gray-700 dark:text-white/80"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="senderMessage"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										{...field}
										placeholder="Your message"
										className="resize-none bg-white/80 dark:bg-slate-700 h-52 my-3 p-4 transition-all text-gray-700 dark:text-white/80"
										maxLength={5000}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full" disabled={isSendingEmail}>
						Submit
					</Button>
				</form>
			</Form>
		</motion.section>
	);
};
