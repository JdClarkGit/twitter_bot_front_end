import React from "react";

export default function BaseDemoVideo() {
  return (
    <div className="w-[700px] h-[450px] flex justify-center items-center bg-[#7C0002] text-white">
      <div
        className="w-full h-full rounded-lg shadow-1l p-2"
        style={{
          background: "rgba(124, 124, 124, 0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <video className="w-full h-full rounded-lg shadow-1l p-1" controls>
          <source src="https://youtu.be/-SB4tJ5zmY4" type="video/mp4" />
          <p className="text-white text-3xl">Demo Video</p>
        </video>
        <div className="w-full text-center my-8">
          <p className="mb-2 font-bold text-5xl whitespace-nowrap">
            Welcome to SocialSkyrocket!
          </p>
          <p className="mb-2 text-2xl">Build Your Audience Effortlessly</p>
          <h3 className="text-md">Social Media Automation Demo</h3>
        </div>
      </div>
    </div>
  );
}
