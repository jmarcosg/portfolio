import type { ComponentType } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const iconComponents = Object.fromEntries(
  Object.entries(dynamicIconImports).map(([key, importer]) => [
    key,
    dynamic(importer),
  ])
) as Record<keyof typeof dynamicIconImports, ComponentType<LucideProps>>;

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = iconComponents[name];

  return <LucideIcon {...props} />;
};

export default Icon;