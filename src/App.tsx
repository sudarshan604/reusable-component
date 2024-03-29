import Ribbon from "./components/Ribbon";
import Button from "./components/Button";
import Modal from "./components/Modal";
function App() {
  return (
    <>
      <div className="relative h-96 ml-7 w-60 mt-20 bg-slate-500">
        <Ribbon position="top-right" size="medium" color="amber">
          Top Right
        </Ribbon>
      </div>
      <Button impact="bold" size="medium" tone="danger" shape="rounded">
        CLick
      </Button>
      <Modal />
    </>
  );
}

export default App;
