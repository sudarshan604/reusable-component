import Ribbon from "./components/Ribbon/Ribbon";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Quote from "./components/Quote/Quote";
import { useState } from "react";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Crumb from "./components/BreadCrumb/Crumb";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Select from "./components/Select/Select";
function App() {
  const [openModel, setModelOpen] = useState(false);
  const [value, setValue] = useState("first");

  const handleConfirm = () => {
    setTimeout(() => {
      setModelOpen(false);
    }, 200);
  };

  return (
    <>
      <Select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="first">New itm</option>
        <option value="second">Second itm</option>
      </Select>
      <div className="relative h-96 ml-7 w-60 mt-20 bg-slate-500">
        <Ribbon position="top-right" size="medium" color="amber">
          Top Right
        </Ribbon>
      </div>
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
      <div className="w-fit">
        <Quote by="Nikola Tesla" source="http://example.com">
          Of all things, I liked books best
        </Quote>
      </div>
      <BreadCrumb>
        <Crumb href="http://:3000">Home</Crumb>
        <Crumb href="http://:3000">Living Room</Crumb>
        <Crumb href="http://:3000">Couches</Crumb>
        <Crumb href="http://:3000">Sectionals</Crumb>
      </BreadCrumb>
      <div className="w-1/3">
        <ProgressBar size="medium" value={29} />
      </div>
    </>
  );
}

export default App;
