export type TContactForm = {
	email: string;
	senderMessage: string;
};

export type TContactEmail = {
	from: string;
	to: string;
	subject: string;
	reply_to: string;
	react: React.ReactElement;
};
