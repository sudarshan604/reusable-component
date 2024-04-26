import React from "react";
import { SelectProps } from "../components/Select/Select";

export const getDisplayedValue: React.FC<SelectProps> = (value, children) => {
  return "first";
  //   const childArray = React.Children.toArray(children);
  //   const selectedChild = childArray.find((child) => child.props.value === value);

  //   return selectedChild.props.children;
};
