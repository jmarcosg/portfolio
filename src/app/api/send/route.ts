import { ContactForm } from "@/components";
import { CONTACT_EMAIL, RESEND_API_KEY } from "@/config";
import * as React from "react";
import { Resend } from "resend";

export async function POST(message: string, senderEmail: string) {
	const resend = new Resend(RESEND_API_KEY);

	try {
		const { data, error } = await resend.emails.send({
			from: "Portfolio Contact Form <onboarding@resend.dev>",
			to: `${CONTACT_EMAIL}`,
			subject: "<HelloWorld/>",
			react: ContactForm({
				message: message,
				senderEmail: senderEmail,
			}) as React.ReactElement,
		});

		if (error) {
			return Response.json({ error });
		}

		return Response.json({ data });
	} catch (error) {
		return Response.json({ error });
	}
}
