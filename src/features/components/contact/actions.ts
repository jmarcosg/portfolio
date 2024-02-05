"use server";

import { ContactForm } from "@/components";
import { RESEND_API_KEY } from "@/config";
import { TContactForm } from "@/types/form";
import { Resend } from "resend";

export const sendEmail = async (formData: TContactForm) => {
	const senderEmail = formData.email;
	const message = formData.senderMessage;

	const resend = new Resend(RESEND_API_KEY);
	const { data, error } = await resend.emails.send({
		from: "Acme <onboarding@resend.dev>",
		to: ["delivered@resend.dev"],
		subject: "Hello world",
		react: ContactForm({
			message: message,
			senderEmail: senderEmail,
		}) as React.ReactElement,
	});

	return { data, error };
};
