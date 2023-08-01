import React from "react";

type SectionSubheadingProps = {
  children: React.ReactNode;
};

const SectionSubheading = ({ children }: SectionSubheadingProps) => {
  return <h3 className="text-xl font-medium mb-8 text-center">{children}</h3>;
};

export default SectionSubheading;
