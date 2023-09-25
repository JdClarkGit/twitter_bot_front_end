"use client";
import React, { useState } from "react";
import PromptTweet from "./tweet/page";
import PromptThread from "./thread/page";

export default function CreateContent() {
  const [activePage, setActivePage] = useState<
    null | "PromptTweet" | "PromptThread"
  >(null);

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-xl font-medium mb-8">
        What Would You Like To Create?
      </h1>

      {activePage === null && (
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setActivePage("PromptTweet")}
            className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center"
          >
            Tweet
          </button>
          <button
            onClick={() => setActivePage("PromptThread")}
            className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center"
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
