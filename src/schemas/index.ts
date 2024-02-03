import * as z from "zod";

export const contactFormSchema = z.object({
	email: z.string().email({
		message: "Must be a valid email.",
	}),
	senderMessage: z
		.string()
		.min(5, {
			message: "Message is too short, must be at least 5 characters.",
		})
		.max(1400, {
			message: "Message is too long.",
		}),
});
