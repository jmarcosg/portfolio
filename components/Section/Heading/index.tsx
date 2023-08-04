import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-semibold capitalize mb-8 text-center text-gray-950 dark:text-gray-200">
      {children}
    </h2>
  );
};

export default SectionHeading;
