import React from "react";
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";

export default function DashboardOverview() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-xl font-medium mb-0">Dashboard Overview</h1>

      <div className="w-3/4 h-3/4 bg-gray-300 rounded shadow-lg mb-8">
        Graph
      </div>

      <div className="flex space-x-8">
        <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white hover:bg-white hover:text-blue-500 rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
          Total Posts
        </button>

        <button className="cursor-pointer hover:bg-white hover:text-blue-500 w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
          Engagement Metrics
        </button>

        <button className="cursor-pointer hover:bg-white hover:text-blue-500 w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
          Top-performing Posts
        </button>
      </div>
    </div>
  );
}
