import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../Button/Button";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    children: "",
    open: true,
    size: "medium",
    title: "first",
    tone: "default",
  },
} as ComponentMeta<typeof Button>;

const DefaultModel = () => {
  const [openModel, setModelOpen] = React.useState(false);

  const handleConfirm = () => {
    setTimeout(() => {
      setModelOpen(false);
    }, 200);
  };

  return (
    <>
      <Button
        impact="bold"
        size="medium"
        tone="danger"
        shape="rounded"
        onClick={() => setModelOpen(!openModel)}
      >
        CLick
      </Button>
      <Modal
        title="this is title"
        onClose={() => setModelOpen(false)}
        open={openModel}
        tone="danger"
        size="large"
        actions={{
          confirm: {
            label: "Yes,confirm",
            action: handleConfirm,
          },
          cancel: {
            label: "Cancel",
            action: () => setModelOpen(false),
          },
        }}
      >
        <h1>Hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          fugiat ducimus impedit.
        </p>
      </Modal>
    </>
  );
};

export const Default = {
  render: () => <DefaultModel />,
};
