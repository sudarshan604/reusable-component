import React from "react";

interface CrumbProps {
  children: React.ReactNode;
  href: string;
}
const Crumb = ({ children, href }: CrumbProps) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
};

export default Crumb;
