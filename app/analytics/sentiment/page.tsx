import React from "react";

export default function Sentiment() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-xl font-medium mb-8">Sentiment Overview</h1>

      <div className="flex space-x-8">
        <div className="flex flex-col space-y-4">
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Positive
          </button>
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Negative
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Neutral
          </button>
        </div>
      </div>
    </div>
  );
}
