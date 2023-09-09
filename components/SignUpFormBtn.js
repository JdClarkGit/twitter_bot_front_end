import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpFormBtn({ textVal }) {
  const navigate = useNavigate();
  return (
    <div
      className="transition-all duration-200 transform active:scale-90 cursor-pointer w-full bg-[#7C0002] text-white py-3 my-2 rounded-[80px] text-center"
      onClick={() => navigate(textVal === "Sign Up" ? "/signup" : "/dashboard")}
    >
      <button className="text-white">{(textVal = "Sign Up")}</button>
    </div>
  );
}
