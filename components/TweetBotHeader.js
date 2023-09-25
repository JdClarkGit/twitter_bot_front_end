"use client";
import React, { useState } from "react";
import LogInBtn from "@/components/LogInBtn";

export default function TweetBotHeader() {
  return (
    <div className="text-right flex flex-row items-end">
      <h1 className="text-[30px] my-2 text-[#3B81F6]">SocialSkyrocket</h1>
      {/* <LogInBtn textVal="Log In" />
      <LogInBtn textVal="Sign Up" />
      <LogInBtn textVal="Contact Us" /> */}
    </div>
  );
}
