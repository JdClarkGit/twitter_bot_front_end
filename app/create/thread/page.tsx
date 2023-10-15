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

  const handleGoBack = () => {
    console.log("Going back...");
  };

  return (
    <div className="flex flex-col h-96 justify-center items-center space-y-8 bg-gray-50 shadow-2xl rounded-lg">
      <p className="text-3xl font-semibold text-gray-800">
        What would you like your thread to be about?
      </p>

      <div className="w-full max-w-xl text-black">
        <input
          type="text"
          placeholder="Give me an idea and how you'd like it written..."
          className="w-full p-4 text-lg rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-md transition-shadow duration-300 ease-in-out"
        />
      </div>

      <p className="text-3xl font-semibold text-gray-800">
        How would you like this written?
      </p>

      <div className="w-full max-w-xl text-black">
        <input
          type="text"
          placeholder="Tell me how you'd like this to be written"
          className="w-full p-4 text-lg rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-md transition-shadow duration-300 ease-in-out"
        />
      </div>

      <button
        className="inline-flex items-center
          justify-center text-lg
          font-medium
          focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none 
          text-white h-12 py-2 px-6
          bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-shadow duration-300 ease-in-out"
        onClick={handleThread}
      >
        Write My Thread!
      </button>

      <button
        className="inline-flex items-center
          justify-center text-lg
          font-medium
          focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none 
          text-white h-12 py-2 px-6
          bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-shadow duration-300 ease-in-out"
        onClick={handleGoBack}
      >
        Go Back
      </button>

      {thread && (
        <p className="mt-8 text-xl text-gray-700">You typed: {thread}</p>
      )}
    </div>
  );
}
