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

  // Example function for "Go Back" logic. You can replace this with your desired logic.
  const handleGoBack = () => {
    console.log("Going back...");
  };

  return (
    <div className="flex flex-col h-95 justify-center items-center space-y-8 bg-gray-50 shadow-2xl rounded-lg">
      <p className="text-3xl font-semibold text-gray-800">
        What would you like your tweet to be about?
      </p>

      {/* Input Box */}
      <div className="w-full max-w-xl text-black">
        <input
          type="text"
          placeholder="Give me an idea and how you'd like it written..."
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
        onClick={handleTweet}
      >
        Write My Tweet!
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

      {tweet && (
        <div className="w-2/3 h-3/4 bg-white shadow-md rounded-md overflow-auto mt-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-gray-600 text-left">
                  Your Tweet
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">{tweet}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
