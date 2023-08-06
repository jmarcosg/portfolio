import React from "react";
import { RoughNotation } from "react-rough-notation";

type HighlightNotationProps = {
  children: React.ReactNode;
  color: string;
  iterations?: number;
};

const HighlightNotation = ({ children, color, iterations = 1 }: HighlightNotationProps) => {
  return (
    <RoughNotation type="highlight" color={color} animationDuration={500} iterations={iterations} show>
      {children}
    </RoughNotation>
  );
};

export default HighlightNotation;
