"use client";
import React, { useState } from "react";
import PromptThread from "./thread/page";
import PromptTweet from "./tweet/page";

export default function CreateContent() {
  const [activePage, setActivePage] = useState<
    null | "PromptTweet" | "PromptThread"
  >(null);

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      {activePage === null && (
        <div className="flex flex-col space-y-4">
          {" "}
          <h1>What would you like to create?</h1>
          <button
            onClick={() => setActivePage("PromptTweet")}
            className="inline-flex items-center 
            justify-center text-sm  
            font-medium transition-colors 
            focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2  
            disabled:opacity-50  disabled:pointer-events-none  
            ring-offset-background
             text-white h-12 py-4 px-8  
             bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
          >
            Tweet
          </button>
          <button
            onClick={() => setActivePage("PromptThread")}
            className="inline-flex items-center 
            justify-center text-sm  
            font-medium transition-colors 
            focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  ring-offset-background
             text-white h-12 py-4 px-8  
             bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
          >
            Thread
          </button>
        </div>
      )}

      {activePage === "PromptTweet" && <PromptTweet />}
      {activePage === "PromptThread" && <PromptThread />}
    </div>
  );
}
