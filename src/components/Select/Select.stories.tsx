import { ComponentMeta, ComponentStory } from "@storybook/react";
import Select from "./Select";
export default {
  title: "Components/Select",
  component: Select,
  args: {
    children: "Comfort food",
    size: "medium",
    impact: "none",
    shape: "rounded",
    tone: "default",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
