import React from "react";
import { RoughNotation } from "react-rough-notation";

type NotationHighlightProps = {
	children: React.ReactNode;
	color: string;
	iterations?: number;
};

export const NotationHighlight = ({
	children,
	color,
	iterations = 1,
}: NotationHighlightProps) => {
	return (
		<RoughNotation
			type="highlight"
			color={color}
			animationDuration={500}
			iterations={iterations}
			show
		>
			{children}
		</RoughNotation>
	);
};
