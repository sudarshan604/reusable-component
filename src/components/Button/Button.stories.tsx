import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Comfort food",
    size: "medium",
    impact: "none",
    shape: "rounded",
    tone: "default",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
