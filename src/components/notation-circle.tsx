import React from "react";
import { RoughNotation } from "react-rough-notation";

type NotationCircleProps = {
	children: React.ReactNode;
	color: string;
	iterations?: number;
};

export const NotationCircle = ({
	children,
	color,
	iterations = 1,
}: NotationCircleProps) => {
	return (
		<RoughNotation
			type="circle"
			color={color}
			animationDuration={500}
			iterations={iterations}
			show
		>
			{children}
		</RoughNotation>
	);
};
