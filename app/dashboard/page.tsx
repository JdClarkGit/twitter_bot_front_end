"use client";
import React from "react";
import Link from "next/link";

export default function DashboardPage() {
  const menuItems = [
    { alt: "Home", src: "/path/to/notes-logo.png", onClick: null },
    { alt: "Create", src: "/path/to/image.png", href: "/create" },
    // { alt: "Analytics", src: "/path/to/image.png", href: "/analytics" },
    { alt: "Notes", src: "/path/to/notes-logo.png", href: "/notes" },
    { alt: "Profile", src: "/path/to/notes-logo.png", href: "/profile" },
    { alt: "Settings", src: "/path/to/image.png", href: "/settings" },
    { alt: "Log Out", src: "/path/to/image.png", href: "/" },
  ];

  return (
    <div className="flex flex-row h-screen w-screen bg-white">
      <div className=" flex flex-row justify-between h-screen w-full  border-gray-800 border-r-2 bg-gray-200 py-5">
        {menuItems.map((item, index) => (
          <div key={index} className="w-fit">
            {item.href ? (
              <Link href={item.href}>
                <div
                  className="inline-flex items-center 
      justify-center text-sm  
      font-medium transition-colors 
      focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  ring-offset-background
       text-white h-12 py-4 px-8  
       bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
                >
                  {item.alt}
                </div>
              </Link>
            ) : (
              <button
                onClick={() => item.onClick}
                className="inline-flex items-center 
                justify-center text-sm  
                font-medium transition-colors 
                focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  ring-offset-background text-white h-12 py-4 px-8  bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
              >
                {item.alt}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
