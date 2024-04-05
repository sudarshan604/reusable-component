import Ribbon from "./components/Ribbon/Ribbon";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Quote from "./components/Quote/Quote";
import { useState } from "react";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Crumb from "./components/BreadCrumb/Crumb";
function App() {
  const [openModel, setModelOpen] = useState(false);
  // const handleClick = () => {
  //   console.log("hello");
  // };
  return (
    <>
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
      <Modal title="this is title" open={openModel} tone="danger">
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
      {/* <BreadCrumb>
        <Crumb href="http://:3000">Home</Crumb>
      </BreadCrumb> */}
    </>
  );
}

export default App;
