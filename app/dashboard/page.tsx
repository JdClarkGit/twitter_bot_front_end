import React from "react";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faSearch); // Adds the search icon to the library

export default function DashboardPage() {
  const menuItems = [
    { alt: "Home", src: "/path/to/notes-logo.png", href: null },
    { alt: "Create", src: "/path/to/image.png", href: "/create" },
    { alt: "Notes", src: "/path/to/notes-logo.png", href: "/notes" },
    { alt: "Profile", src: "/path/to/notes-logo.png", href: "/profile" },
    { alt: "Settings", src: "/path/to/image.png", href: "/settings" },
    { alt: "Log Out", src: "/path/to/image.png", href: "/" },
  ];

  return (
    <div className="flex h-screen w-screen bg-white">
      {/* Sidebar Menu */}
      <div className="flex flex-col space-y-12 p-5 border-gray-300 border-r-2 bg-gray-800">
        {menuItems.map((item, index) => (
          <div key={index} className="w-full">
            {item.href ? (
              <Link href={item.href}>
                <div
                  className="inline-flex items-center
                  justify-center text-sm font-medium transition-colors
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-offset-2 disabled:opacity-50
                  disabled:pointer-events-none ring-offset-background
                  text-white h-12 py-4 px-8 bg-[#256861] rounded-full
                  hover:bg-gray-800"
                >
                  {item.alt}
                </div>
              </Link>
            ) : (
              <button
                onClick={item.onClick}
                className="inline-flex items-center
                  justify-center text-sm font-medium transition-colors
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-offset-2 disabled:opacity-50
                  disabled:pointer-events-none ring-offset-background
                  text-white h-12 py-4 px-8 bg-blue-600 rounded-full
                  hover:bg-gray-800"
              >
                {item.alt}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Dashboard Content */}
      <div className="flex flex-col flex-1 p-5 overflow-y-auto bg-white text-black">
        {/* Header Area */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="flex space-x-4 relative">
            <button>🔔</button>{" "}
            {/* Notification Icon (replace with a real icon) */}
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg pl-10 p-2 w-full"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon="search" />
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/create"
            className="p-2 w-1/3 border rounded shadow text-center h-12 hover:cursor-pointer hover:bg-white hover:text-[#256861] bg-[#256861] text-white"
          >
            CRM
          </Link>
          {/* Recent Notes Card */}
          <div className="p-2 w-1/3 border rounded shadow text-center h-20 hover:cursor-pointer hover:bg-white hover:text-[#256861] bg-[#256861] text-white">
            <h3 className="text-xl mb-4">Recent Notes</h3>
            <Link href="/notes" className="underline">
              View All
            </Link>
            {/* ... list of recent notes ... */}
          </div>

          {/* Tasks for Today Card */}
          <div className="p-2 w-1/3 border rounded shadow text-center h-12 hover:cursor-pointer hover:bg-white hover:text-[#256861] bg-[#256861] text-white">
            <h3 className="text-xl mb-4">Tasks for Today</h3>
            {/* ... list of tasks ... */}
          </div>

          {/* Quick Stats Card */}
          <div className="p-2 w-1/3 border rounded shadow text-center h-12 hover:cursor-pointer hover:bg-white hover:text-[#256861] bg-[#256861] text-white">
            <h3 className="text-xl mb-4">Quick Stats</h3>
            {/* ... some stats ... */}
          </div>
          <div className="p-2 w-1/3 border rounded shadow text-center h-12 hover:cursor-pointer hover:bg-white hover:text-[#256861] bg-[#256861] text-white">
            <Link href="/faq">FAQ</Link>
            {/* ... other links ... */}
          </div>
        </div>

        {/* Footer Area */}
      </div>
    </div>
  );
}
