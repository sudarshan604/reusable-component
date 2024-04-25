const Select = () => {
  return (
    <div className="relative w-max">
      <select className="absolute opacity-0 top-0 left-0 w-full h-full">
        <option>c++</option>
        <option>Java</option>
      </select>
      <div
        className="text-gray-700
         bg-gray-400
         text-base
       px-3 py-4
      "
      >
        hello world
      </div>
    </div>
  );
};

export default Select;
