import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpFormBtn({ textVal }) {
  const navigate = useNavigate();
  return (
    <div
      className="inline-flex items-center 
      justify-center text-sm  
      font-medium transition-colors 
      focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  ring-offset-background text-white h-12 py-4 px-4  bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
      onClick={() => navigate(textVal === "Sign Up" ? "/signup" : "/dashboard")}
    >
      <button className="text-white">{(textVal = "Sign Up")}</button>
    </div>
  );
}
