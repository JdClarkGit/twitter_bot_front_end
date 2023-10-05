import React from "react";
import DemoButton from "@/components/BookDemoBtn";

export default function BaseDemoVideo() {
  return (
    <div className="w-full h-full flex justify-center items-center text-[#3B81F6]">
      <div className="flex flex-col items-start">
        <h1 className="text-6xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
          Amplify your audience 1000x with just 1/1000th of the effort, all
          while staying unmistakably you.
        </h1>
        <div className="mt-5">
          <DemoButton />
        </div>
      </div>
    </div>
  );
}
