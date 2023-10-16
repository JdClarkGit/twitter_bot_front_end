import React, { useState } from "react";
import DataTable from "./datatable/datatable";

const sampleData = [
  {
    handle: "@john_doe",
    name: "John Doe",
    bio: "Software developer",
    location: "San Francisco",
    website: "http://johndoe.com",
    followers: 1000,
    following: 500,
  },
];

export default function PromptCRM() {
  const [crm, setCrm] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isListDropdownOpen, setIsListDropdownOpen] = useState(false);
  const [isAutoDMDropdownOpen, setIsAutoDMDropdownOpen] = useState(false);
  const [isAutoReplyDropdownOpen, setIsAutoReplyDropdownOpen] = useState(false);
  const [isImportDropdownOpen, setIsImportDropdownOpen] = useState(false);

  const handleCrm = () => {
    const result = prompt("Write what you would like your thread to be about");
    if (result !== null) {
      setCrm(result);
    }
  };

  return (
    <div className="flex h-screen bg-[#1B2538] text-[#97DAD2] w-screen">
      <div className="flex-none w-56 p-4">
        {" "}
        {/* Adjusted width from w-64 to w-56 */}
        <p className="text-xl font-bold mb-4">Sidebar Title</p>{" "}
        {/* Adjusted font size */}
        <ul>
          <li className="mb-3 hover:text-white cursor-pointer">
            {" "}
            {/* Adjusted margin */}
            Sidebar Item 1
          </li>
          <li className="mb-3 hover:text-white cursor-pointer">
            {" "}
            {/* Adjusted margin */}
            Sidebar Item 2
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-10 border w-screen h-screen bg-[#1B2538] text-[#97DAD2] border-[#dddede] border-x-4 border-y-4">
        <div className="space-x-5 flex flex-row">
          <div className="p-4 flex flex-row space-x-5">
            <label className="flex items-center text-[#97DAD2]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Select All
            </label>
            <label className="flex items-center text-[#97DAD2]">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Select
            </label>
          </div>

          <div className="relative">
            <button
              onMouseEnter={() => setIsAutoDMDropdownOpen(true)}
              className="btn-primary rounded-lg p-2 text-center bg-[#91D8CF] text-white h-10 hover:bg-[#D1D5DA] hover:text-black"
            >
              Auto-DM
            </button>
            {isAutoDMDropdownOpen && (
              <div
                onMouseLeave={() => setIsAutoDMDropdownOpen(false)}
                className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white"
              >
                <div className="rounded-md ring-1 ring-black ring-opacity-5">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    DM Campaigns
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    One-Time DM
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onMouseEnter={() => setIsAutoReplyDropdownOpen(true)}
              className="btn-primary rounded-lg p-2 text-center bg-[#91D8CF] text-white h-10 hover:bg-[#D1D5DA] hover:text-black"
            >
              Auto-Reply
            </button>
            {isAutoReplyDropdownOpen && (
              <div
                onMouseLeave={() => setIsAutoReplyDropdownOpen(false)}
                className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white"
              >
                <div className="rounded-md ring-1 ring-black ring-opacity-5">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Reply
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Reply All
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onMouseEnter={() => setIsListDropdownOpen(true)}
              className="btn-primary hover:cursor-pointer rounded-lg p-2 text-center bg-[#97DAD2] text-white h-10 hover:bg-[#D1D5DA] hover:text-black"
            >
              Lists
            </button>
            {isListDropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white">
                <div className="rounded-md ring-1 ring-black ring-opacity-5">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-[#97DAD2] hover:bg-gray-100"
                  >
                    List Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    List Item 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    List Item 3
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onMouseEnter={() => setIsImportDropdownOpen(true)}
              className="btn-primary rounded-lg p-2 text-center bg-[#91D8CF] text-white h-10 hover:bg-[#D1D5DA] hover:text-black"
            >
              Import
            </button>
            {isImportDropdownOpen && (
              <div
                onMouseLeave={() => setIsImportDropdownOpen(false)}
                className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white"
              >
                <div className="rounded-md ring-1 ring-black ring-opacity-5">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Import Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Import Item 2
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="flex-grow p-4">
            {crm && <div className="mt-4 text-white">{crm}</div>}
          </div>
        </div>
        <DataTable data={sampleData} />
      </div>
    </div>
  );
}
