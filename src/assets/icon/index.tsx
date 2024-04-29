import React from "react";
import ChevronIcon, { IconProps } from "./chevron.icon";
import MagnifyIcon from "./maginfy.icon";
type _IconProps = IconProps & {
  type: "chevrondown" | "magnify";
};

const Icon = ({ type, color, ...rest }: _IconProps) => {
  color ??= "#5C5F62";

  return (
    <React.Fragment>
      {
        {
          chevrondown: <ChevronIcon color={color} {...rest} />,
          magnify: <MagnifyIcon color={color} {...rest} />,
        }[type]
      }
    </React.Fragment>
  );
};

export default Icon;
