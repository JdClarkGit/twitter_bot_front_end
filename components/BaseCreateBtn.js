import React from "react";

export default function BaseCreateBtn({ textVal }) {
  return (
    <div className="transition-all duration-200 transform active:scale-90 flex flex-row w-[190px] bg-[#7C0003] py-3 my-2 rounded-[80px]">
      <a
        href="/threadprompt"
        className=" text-white w-full h-full flex justify-center items-center"
      >
        {(textVal = "Create")}
      </a>
    </div>
  );
}
