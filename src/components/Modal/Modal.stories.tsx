import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Modal";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    children: "<p>jhead</p>",
    open: true,
    size: "medium",
    title: "first",
    tone: "default",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
