import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const validateString = (
	value: unknown,
	maxLength: number,
): value is string => {
	if (!value || typeof value !== "string" || value.length > maxLength) {
		return false;
	}

	return true;
};

export const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message);
	} else if (typeof error === "string") {
		message = error;
	} else {
		message = "Something went wrong";
	}

	return message;
};

export const getFirstStringsLessThanNChars = (arr: string[], n: number) => {
	const result: string[] = [];
	let totalChars: number = 0;

	for (let i = 0; i < arr.length; i++) {
		const str = arr[i];
		const strLength = str.length;

		if (totalChars + strLength <= n) {
			result.push(str);
			totalChars += strLength;
		} else {
			break; // Stop iterating once the limit is reached
		}

		if (result.length === n) {
			break; // Stop when you have n strings
		}
	}

	return result;
};
