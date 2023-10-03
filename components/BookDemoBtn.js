import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function DemoButton() {
  return (
    <div className="rounded-xl border-none h-16 w-64 cursor-pointer flex justify-center items-center bg-blue-600 hover:animate-pulse hover:text-blue-600 hover:bg-zinc-200 text-white border border-black">
      <FontAwesomeIcon icon={faCalendar} className="mr-2 w-7 h-7" />
      Book a Demo!
    </div>
  );
}

export default DemoButton;
