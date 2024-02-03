"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { TContactForm } from "@/types/form";
import React from "react";
import { Resend } from "resend";
import ContactForm from "./ContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: TContactForm) => {
	const senderEmail = formData.email;
	const message = formData.senderMessage;

	// simple server-side validation
	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		};
	}
	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		};
	}

	let data;
	try {
		data = await resend.emails.send({
			from: "Porfolio Contact Form <onboarding@resend.dev>",
			to: `${process.env.CONTACT_EMAIL}`,
			subject: "Message from portfolio contact form",
			reply_to: senderEmail,
			react: React.createElement(ContactForm, {
				message: message,
				senderEmail: senderEmail,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	};
};
