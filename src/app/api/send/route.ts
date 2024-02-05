import { ContactForm } from "@/components";
import * as React from "react";
import { Resend } from "resend";

export async function POST(message: string, senderEmail: string) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	try {
		const { data, error } = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: ["delivered@resend.dev"],
			subject: "Hello world",
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
