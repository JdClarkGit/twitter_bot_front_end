import React, { useState } from "react";
import Link from "next/link";

export default function PromptThread() {
  const [thread, setThread] = useState("");

  const handleThread = () => {
    const result = prompt("Write what you would like your thread to be about");
    if (result != null) {
      setThread(result);
    }
  };

  return (
    <div>
      <Link href="/create" passHref>
        <button
          className="inline-flex items-center
          justify-center text-sm
          font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
          text-white h-12 py-4 px-8
          bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
        >
          Back
        </button>
      </Link>
      <button
        className="inline-flex items-center
          justify-center text-sm
          font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
          text-white h-12 py-4 px-8
          bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
        onClick={handleThread}
      >
        Write A Thread For Me!
      </button>
      {thread && <p>You typed: {thread}</p>}
    </div>
  );
}
