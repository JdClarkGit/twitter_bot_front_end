"use client";
import React from "react";
import LogInBtn from "@/components/LogInBtn";
// import image from "./images";

export default function TweetBotHeader() {
  return (
    <div className="text-right font-bold flex flex-row items-end">
      <h1 className="text-[30px] my-2 text-blue-600">
        <img className="mr-2" />
        SocialSkyrocket
      </h1>
    </div>
  );
}
