"use client";
import React from "react";
import Link from "next/link";

export default function DashboardPage() {
  const menuItems = [
    { alt: "Home", src: "/path/to/notes-logo.png", onClick: null },
    { alt: "Create", src: "/path/to/image.png", href: "/create" },
    { alt: "Analytics", src: "/path/to/image.png", href: "/analytics" },
    { alt: "Notes", src: "/path/to/notes-logo.png", href: "/notes" },
    { alt: "Profile", src: "/path/to/notes-logo.png", href: "/profile" },
    { alt: "Settings", src: "/path/to/image.png", href: "/settings" },
    { alt: "Log Out", src: "/path/to/image.png", href: "/" },
  ];

  return (
    <div className="flex h-screen w-screen bg-white">
      <div className=" flex flex-col justify-between h-screen w-[110px]  border-gray-800 border-r-2 bg-gray-200 py-5">
        {menuItems.map((item, index) => (
          <div key={index} className="w-fit">
            {item.href ? (
              <Link href={item.href}>
                <div className="cursor-pointer w-[100px] h-12 bg-blue-500 rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
                  {item.alt}
                </div>
              </Link>
            ) : (
              <button
                onClick={() => item.onClick}
                className="cursor-pointer w-[100px] h-12 bg-blue-500 rounded-lg shadow-md transition-all duration-200 transform active:scale-90 items-center justify-center"
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
