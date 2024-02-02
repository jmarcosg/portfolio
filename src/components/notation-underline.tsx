import React from "react";
import { RoughNotation } from "react-rough-notation";

type NotationUnderlineProps = {
	children: React.ReactNode;
	color: string;
	iterations?: number;
};

export const NotationUnderline = ({
	children,
	color,
	iterations = 1,
}: NotationUnderlineProps) => {
	return (
		<RoughNotation
			type="underline"
			color={color}
			animationDuration={500}
			iterations={iterations}
			show
		>
			{children}
		</RoughNotation>
	);
};
