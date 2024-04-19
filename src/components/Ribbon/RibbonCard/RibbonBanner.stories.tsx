import { ComponentMeta, ComponentStory } from "@storybook/react";
import RibbonBanner from "./RibbonBanner";
import Button from "../../Button/Button";
export default {
  title: "Components/RibbonBanner",
  component: RibbonBanner,
  args: {},
} as ComponentMeta<typeof RibbonBanner>;

const Template: ComponentStory<typeof RibbonBanner> = (args) => (
  <RibbonBanner {...args} />
);

export const Default = Template.bind({});
