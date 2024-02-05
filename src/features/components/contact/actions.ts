"use server";

import { ContactForm } from "@/components";
import { CONTACT_EMAIL, RESEND_API_KEY } from "@/config";
import { TContactForm } from "@/types/form";
import { Resend } from "resend";

export const sendEmail = async (formData: TContactForm) => {
	const senderEmail = formData.email;
	const message = formData.senderMessage;

	const resend = new Resend(RESEND_API_KEY);
	const { data, error } = await resend.emails.send({
		from: "Portfolio Contact Form <onboarding@resend.dev>",
		to: `${CONTACT_EMAIL}`,
		subject: "<HelloWorld/>",
		react: ContactForm({
			message: message,
			senderEmail: senderEmail,
		}) as React.ReactElement,
	});

	return { data, error };
};
