import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { getDisplayedValue } from "../../utils/select.helper";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const SelectWithHooks = () => {
  const [value, setValue] = React.useState("Price");

  return (
    <Select value={value} onChange={(e) => setValue(e.target.value)}>
      <option value="newest">Newest Releases</option>
      <option value="price">Price</option>
      <option value="curated">Curated</option>
    </Select>
  );
};

export const Default = {
  render: () => <SelectWithHooks />,
};
