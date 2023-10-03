import React from "react";
import DemoButton from "@/components/BookDemoBtn";

export default function BaseDemoVideo() {
  return (
    <div className="w-full h-full flex justify-center items-center text-[#3B81F6]">
      <div className="mr-10">
        <DemoButton />
      </div>
      <div>
        <div className="mt-10 max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-justify">
          Autopilot Social Media Manager for your
        </div>
        <div className="mt-10 max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-justify">
          tweets, threads, and brand building
        </div>
      </div>
    </div>
  );
}
