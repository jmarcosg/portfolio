import React from "react";
import { RoughNotation } from "react-rough-notation";

type CircleNotationProps = {
  children: React.ReactNode;
  color: string;
  iterations?: number;
};

const CircleNotation = ({ children, color, iterations = 1 }: CircleNotationProps) => {
  return (
    <RoughNotation type="circle" color={color} animationDuration={500} iterations={iterations} show>
      {children}
    </RoughNotation>
  );
};

export default CircleNotation;
