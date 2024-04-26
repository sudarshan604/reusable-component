import React from "react";
import ChevronIcon, { IconProps } from "./chevron.icon";

type _IconProps = IconProps & {
  type: "chevrondown";
};

const Icon = ({ type, color, ...rest }: _IconProps) => {
  color ??= "#5C5F62";

  return (
    <React.Fragment>
      {
        {
          chevrondown: <ChevronIcon color={color} {...rest} />,
        }[type]
      }
    </React.Fragment>
  );
};

export default Icon;
