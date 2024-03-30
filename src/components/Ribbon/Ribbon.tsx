import React from "react";

interface RibbonProps {
  size: "small" | "medium" | "large";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  children: React.ReactNode;
  color: "amber" | "purple" | "cyan";
}

const SizeClasses: Record<RibbonProps["size"], string> = {
  small: "w-24",
  medium: "w-28",
  large: "w-36",
};

const PositionClasses: Record<
  RibbonProps["position"],
  {
    wrapper: string;
    banner: string;
    shadeOne: string;
    shadeTwo: string;
  }
> = {
  "top-left": {
    banner: " origin-bottom-left bottom-0 left-0 -rotate-45  ",
    shadeOne: " top-0 right-0",
    shadeTwo: "bottom-0 left-0",
    wrapper: "-left-2 -top-2",
  },
  "top-right": {
    banner: "origin-bottom-right rotate-45 right-0 bottom-0",
    shadeOne: "top-0 left-0",
    shadeTwo: "bottom-0 right-0",
    wrapper: "-right-2 -top-2",
  },
  "bottom-left": {
    banner: "origin-top-left top-0 left-0 rotate-45",
    shadeOne: "top-0 left-0",
    shadeTwo: "bottom-0 right-0",
    wrapper: "-left-2 -bottom-2 ",
  },
  "bottom-right": {
    banner: "origin-top-right top-0 right-0  -rotate-45 ",
    shadeOne: "top-0 right-0",
    shadeTwo: "bottom-0 left-0",
    wrapper: "-right-2 -bottom-2",
  },
};

const ColorClasses: Record<
  RibbonProps["color"],
  {
    shade: string;
    banner: string;
  }
> = {
  amber: {
    banner: "bg-amber-400",
    shade: "bg-amber-300 text-amber-700 hover:bg-yellow-300",
  },
  purple: {
    banner: "bg-purple-500",
    shade: "",
  },
  cyan: {
    banner: "bg-cyan-500",
    shade: "",
  },
};

const Ribbon = ({
  size = "medium",
  position = "top-right",
  color = "amber",
  children,
}: RibbonProps) => {
  return (
    <div
      className={`overflow-hidden ${SizeClasses[size]} aspect-square absolute ${PositionClasses[position].wrapper} rounded-md`}
    >
      <div
        className={`absolute ${ColorClasses[color].shade}  h-2 w-2 ${PositionClasses[position].shadeOne}`}
      ></div>
      <div
        className={`absolute ${PositionClasses[position].shadeTwo} ${ColorClasses[color].shade} h-2 w-2`}
      ></div>
      <a
        href="#"
        className={` block ${PositionClasses[position].banner}  ${ColorClasses[color].banner} tracking-wider uppercase w-square-diagonal absolute  text-center py-1.5
     text-xs
      shadow-sm
     font-semibold`}
      >
        {children}
      </a>
    </div>
  );
};

export default Ribbon;
