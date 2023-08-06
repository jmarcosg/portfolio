import React from "react";

type SectionSubheadingProps = {
  children: React.ReactNode;
};

const SectionSubheading = ({ children }: SectionSubheadingProps) => {
  return (
    <h3 className="text-2xl font-medium my-8 text-center text-gray-700 dark:text-gray-300">{children}</h3>
  );
};

export default SectionSubheading;
