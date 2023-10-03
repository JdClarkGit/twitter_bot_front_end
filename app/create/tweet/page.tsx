import React, { useState } from "react";
import Link from "next/link";

export default function PromptTweet() {
  const [tweet, setTweet] = useState("");

  const handleTweet = () => {
    const result = prompt("Write what you would like your tweet to be about");
    if (result != null) {
      setTweet(result);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-8">
      <p className="text-3xl">What would you like your tweet to be about?</p>

      {/* Input Box */}
      <div className="w-full max-w-xl text-black">
        <input
          type="text"
          placeholder="Give me an idea and I can write it for you..."
          className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        className="inline-flex items-center
          justify-center text-sm
          font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background
          text-white h-12 py-4 px-8
          bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
        onClick={handleTweet}
      >
        Write My Tweet!
      </button>

      {/* <Link href="/create" passHref>
        <button
          className="inline-flex items-center
        justify-center text-sm
        font-medium transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background
        text-white h-12 py-4 px-8
        bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
        >
          Back
        </button>
      </Link> */}

      {tweet && <p className="mt-8">You typed: {tweet}</p>}
    </div>
  );
}
