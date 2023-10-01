import React, { useState } from "react";
import Link from "next/link";

export default function promptSaved() {
  const [save, setSave] = useState("");

  const handleSave = () => {
    const result = prompt("Write what you would like your tweet to be about");
    if (result != null) {
      setSave(result);
    }
  };

  return (
    <div>
      <button
        className="inline-flex items-center
            justify-center text-sm
            font-medium transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
            text-white h-12 py-4 px-8
            bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
        onClick={handleSave}
      >
        Write Note!
      </button>
      {save && <p>You typed: {save}</p>}
    </div>
  );
}
