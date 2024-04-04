import React from "react";

const RibbonBanner = () => {
  return (
    <div className="min-h-screen bg-blue-800 p-8 flex-1 h-1">
      <div className="mx-auto bg-white rounded-xl  shadow-xl h-80 w-80 relative">
        <div className=" overflow-hidden w-36 aspect-square absolute -right-2 -top-2 rounded-md">
          <div className="absolute bg-amber-400 h-2 w-2 top-0 left-0"></div>
          <div
            className="absolute 
          bottom-0 right-0 bg-amber-400 h-2 w-2"
          ></div>
          <a
            href="#"
            className="block bg-amber-300  origin-bottom-right rotate-45 right-0  text-amber-700 tracking-wider uppercase w-square-diagonal absolute bottom-0 text-center py-1.5
             text-xs
              shadow-sm
             font-semibold"
          >
            My Color Ribbon
          </a>
        </div>
        <div className=" overflow-hidden w-36 aspect-square absolute -left-2 -top-2 rounded-md">
          <div className="absolute bg-amber-400 h-2 w-2 top-0 right-0"></div>
          <div className="absolute bottom-0 left-0 bg-amber-400 h-2 w-2"></div>
          <a
            href="#"
            className="bg-amber-300
             block origin-bottom-left bottom-0 left-0 -rotate-45    text-amber-700 tracking-wider uppercase w-square-diagonal absolute  text-center py-1.5
             text-xs
              shadow-sm
             font-semibold"
          >
            Top Left
          </a>
        </div>

        <div className=" overflow-hidden w-36 aspect-square absolute -left-2 -bottom-2 rounded-md">
          <div className="absolute bg-amber-400 h-2 w-2 top-0 left-0"></div>
          <div className="absolute bottom-0 right-0 bg-amber-400 h-2 w-2"></div>
          <a
            href="#"
            className="bg-amber-300 block origin-top-left top-0 left-0 rotate-45   text-amber-700 tracking-wider uppercase w-square-diagonal absolute  text-center py-1.5
             text-xs
              shadow-sm
             font-semibold"
          >
            Bottom Left
          </a>
        </div>

        <div className=" overflow-hidden w-36 aspect-square absolute -right-2 -bottom-2 rounded-md">
          <div className="absolute bg-amber-400 h-2 w-2 top-0 right-0"></div>
          <div className="absolute bottom-0 left-0 bg-amber-400 h-2 w-2"></div>
          <a
            href="#"
            className="bg-amber-300 block origin-top-right top-0 right-0  -rotate-45  text-amber-700 tracking-wider uppercase w-square-diagonal absolute  text-center py-1.5
             text-xs
              shadow-sm
             font-semibold"
          >
            Bottom Right
          </a>
        </div>
      </div>
    </div>
  );
};

export default RibbonBanner;
