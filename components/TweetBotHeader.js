"use client";
import React, { useState } from "react";

export default function TweetBotHeader() {
  return (
    <div className="text-right flex flex-col items-end">
      <h1 className="text-[30px] my-2">SocialSkyrocket</h1>
      <div className="w-1/2">
        <h3 className="text-[17px] italic">
          Build your entire social media brand and audience autonomously
        </h3>
      </div>
    </div>
  );
}
