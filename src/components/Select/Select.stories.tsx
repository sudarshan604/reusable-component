import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { getDisplayedValue } from "../../utils/select.helper";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  args: {
    children: <option value="first">New item</option>,
    value: "first",
    onchange: (e) => {},
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default;
