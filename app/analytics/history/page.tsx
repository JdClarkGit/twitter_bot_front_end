import React from "react";
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";

export default function HistoryComparison() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-xl font-medium mb-8">Growth and Change</h1>
      <div className="w-3/4 h-3/4 bg-gray-300 rounded shadow-lg mb-0">
        Graph
      </div>
    </div>
  );
}
