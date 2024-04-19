import Ribbon from "../Ribbon";

const Ribboncard = () => {
  return (
    <div className="relative h-96 ml-7 w-60 mt-20 bg-slate-500">
      <Ribbon position="top-right" size="medium" color="amber">
        Top Right
      </Ribbon>
    </div>
  );
};

export default Ribboncard;
