import { Fragment } from "react";

export interface IconProps {
  width?: number | string;
  color?: string;
  className?: string;
  fill?: string;
  strokeWidth?: string | number;
}

const MagnifyIcon = ({
  width,
  color,
  className,
  fill,
  strokeWidth,
}: IconProps) => {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "24"}
        height={width || "24"}
        viewBox="0 0 24 24"
        fill={fill || "none"}
        stroke={color || "currentColor"}
        strokeWidth={strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className || "feather feather-search"}
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      ;
    </Fragment>
  );
};

export default MagnifyIcon;
