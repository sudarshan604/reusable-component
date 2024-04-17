import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonProps } from "./Button";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Comfort food",
  },
} as ComponentMeta<typeof Button>;

{
  /* <Button
impact="bold"
size="medium"
tone="danger"
shape="rounded"
onClick={() => setModelOpen(!openModel)}
> */
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  impact: "bold",
  size: "medium",
  tone: "danger",
  shape: "rounded",
};
