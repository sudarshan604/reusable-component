import React from "react";

interface CrumbProps {
  children: React.ReactNode;
  href: string;
}
const Crumb = ({ children, href }: CrumbProps) => {
  return (
    <li className={`inline`}>
      <a href={href} className={`text-inherit  no-underline hover:underline`}>
        {children}
      </a>
    </li>
  );
};

export default Crumb;
