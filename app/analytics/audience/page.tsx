import React, { lazy, Suspense } from "react";

export default function Audience() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-xl font-medium ">Audience Demographics</h1>
      <div className="w-3/4 h-3/4 bg-gray-300 rounded shadow-lg">Graph</div>
      <div className="flex space-x-8">
        <div className="flex space-x-4">
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Age
          </button>
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Location
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Gender
          </button>
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Active Times
          </button>
        </div>
      </div>
    </div>
  );
}
