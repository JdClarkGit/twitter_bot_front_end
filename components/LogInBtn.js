"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function LogInBtn({ textVal }) {
  return (
    <Link href={textVal === "Sign up" ? "/signup" : "/dashboard"}>
      <button className="transition-all duration-200 transform active:scale-90 w-[190px] bg-slate-900 text-white py-3 my-2 rounded-[80px] text-center hover:bg-slate-700">
        {textVal}
      </button>
    </Link>
  );
}
