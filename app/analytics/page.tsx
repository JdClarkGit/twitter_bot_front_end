"use client";
import React from "react";
import Link from "next/link";

export default function DashboardPage() {
  const menuItems = [
    {
      alt: "Dashboard Overview",
      src: "/path/to/notes-logo.png",
      onClick: null,
    },
    { alt: "Engagement", src: "/path/to/image.png", onClick: null },
    { alt: "Impressions", src: "/path/to/image.png", onClick: null },
    { alt: "Audience", src: "/path/to/notes-logo.png", href: "/audience" },
    { alt: "Post Analytics", src: "/path/to/notes-logo.png", onClick: null },
    { alt: "Platform Breakdown", src: "/path/to/image.png", onClick: null },
    { alt: "Sentiment Analysis", src: "/path/to/image.png", onClick: null },
    { alt: "Conversion %", src: "/path/to/image.png", onClick: null },
    { alt: "Recommendations", src: "/path/to/image.png", onClick: null },
    { alt: "Custom Data", src: "/path/to/image.png", onClick: null },
    { alt: "Export Data", src: "/path/to/image.png", onClick: null },
    { alt: "Integration Stats", src: "/path/to/image.png", onClick: null },
    { alt: "History", src: "/path/to/image.png", onClick: null },
  ];
  const commonClasses =
    "w-auto px-4 mt-2 h-12 bg-black-600 hover:bg-green-500 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-95 flex items-center justify-center border border-green-600";

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white flex-col">
      <nav className="flex flex-wrap justify-center p-4 bg-black border border-green-600 rounded-lg shadow-md overflow-x-auto">
        {menuItems.map((item, index) => (
          <div key={index} className="mx-2">
            {item.href ? (
              <Link href={item.href} className={commonClasses}>
                {item.alt}
              </Link>
            ) : (
              <button onClick={() => item.onClick} className={commonClasses}>
                {item.alt}
              </button>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
