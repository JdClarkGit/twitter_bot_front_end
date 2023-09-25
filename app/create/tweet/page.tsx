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
        onClick={handleTweet}
      >
        Write Tweet For Me!
      </button>
      {tweet && <p>You typed: {tweet}</p>}
    </div>
  );
}
