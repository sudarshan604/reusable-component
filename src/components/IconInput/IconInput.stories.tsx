import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconInput from ".";
export default {
  title: "Components/IconInput",
  component: IconInput,
} as ComponentMeta<typeof IconInput>;

const Template: ComponentStory<typeof IconInput> = (args) => (
  <IconInput {...args} />
);

export const Default = Template.bind({});
