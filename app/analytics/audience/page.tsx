import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function Audience() {
  const [data, setData] = useState({
    labels: ["0-10", "11-20", "21-30", "31-40", "41-50", "51+"],
    datasets: [
      {
        label: "Age Group",
        data: [10, 20, 30, 50, 15, 5],
        // defaultDatasetIdKey: "avc",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-xl font-medium">Audience Demographics</h1>
      <div className="w-3/4 h-3/4 bg-gray-300 rounded shadow-lg p-4">
        <Bar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Audience Demographics",
              },
              legend: {
                display: true,
              },
            },
            scales: {
              x: {
                type: "time", // or try 'time' if your data is time-based
                title: {
                  display: true,
                  text: "Age Group",
                },
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Number of People",
                },
              },
            },
          }}
        />
      </div>
      <div className="flex space-x-8">
        <div className="flex space-x-4">
          <button className="hover:bg-white hover:text-blue-500 cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Age
          </button>
          <button className="hover:bg-white hover:text-blue-500 cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Location
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="hover:bg-white hover:text-blue-500 cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Gender
          </button>
          <button className="hover:bg-white hover:text-blue-500 cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Active Times
          </button>
        </div>
      </div>
    </div>
  );
}
