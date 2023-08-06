import React from "react";
import { RoughNotation } from "react-rough-notation";

type UnderlineNotationProps = {
  children: React.ReactNode;
  color: string;
  iterations?: number;
};

const UnderlineNotation = ({ children, color, iterations = 1 }: UnderlineNotationProps) => {
  return (
    <RoughNotation type="underline" color={color} animationDuration={500} iterations={iterations} show>
      {children}
    </RoughNotation>
  );
};

export default UnderlineNotation;
