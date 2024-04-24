// const syles={
//     small:{

//     },
//     medium:{

//     },
//     large:{
//         height:16
//         padding:4
//     }

// }

const ProgressBar = ({ value = 90, size = "small" }) => {
  //   const height = size == "small" ? 8 : 12;
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className="bg-gray-400
        shadow-inner
        border-x-4
        border-y-4
        overflow-hidden
      "
    >
      <div className={`w-${value}% h-2 bg-blue-500`}></div>
    </div>
  );
};

export default ProgressBar;
