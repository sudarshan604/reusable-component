import { ComponentMeta, ComponentStory } from "@storybook/react";
import Ribbon from "./Ribbon";
export default {
  title: "Components/Ribbon",
  component: Ribbon,
  args: {
    size: "medium",
    position: "top-right",
    color: "amber",
    children: "Discount",
  },
} as ComponentMeta<typeof Ribbon>;

const Template: ComponentStory<typeof Ribbon> = (args) => <Ribbon {...args} />;

export const Default = Template.bind({});
