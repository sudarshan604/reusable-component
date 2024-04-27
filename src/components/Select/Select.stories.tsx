import React from "react";
import { ComponentMeta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const SelectWithHooks = () => {
  const [value, setValue] = React.useState<string>("newest");

  return (
    <Select
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setValue(e.target.value)
      }
    >
      <option value="newest">Newest Releases</option>
      <option value="price">Price</option>
      <option value="curated">Curated</option>
    </Select>
  );
};

export const Default = {
  render: () => <SelectWithHooks />,
};
