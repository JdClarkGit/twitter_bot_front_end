import React from "react";

export default function PlatformBreakdown() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-xl font-medium mb-0">Platform Breakdown</h1>
      <div className="w-3/4 h-3/4 bg-gray-300 rounded shadow-lg mb-0">
        Graph
      </div>

      <div className="flex space-x-8">
        <div className="flex space-x-4">
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Twitter
          </button>
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Facebook
          </button>
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
