import React from "react";

type SectionSubheadingProps = {
  children: React.ReactNode;
};

const SectionSubheading = ({ children }: SectionSubheadingProps) => {
  return <h3 className="text-xl font-medium my-8 text-center text-gray-700">{children}</h3>;
};

export default SectionSubheading;
