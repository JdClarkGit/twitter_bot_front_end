import React, { useState } from "react";
import Link from "next/link";

export default function PromptCRM() {
  const [crm, setCrm] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCrm = () => {
    const result = prompt("Write what you would like your thread to be about");
    if (result != null) {
      setCrm(result);
    }
  };

  return (
    <div className="flex flex-col mt-10 border border-black">
      <p className="text-3xl font-semibold text-gray-800 mb-5 self-center">
        CRM Platform
      </p>
      <div className="space-x-5 flex flex-row">
        <div className="p-4 flex flex-row space-x-5">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            Select All
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            Select Page
          </label>
        </div>
        <button className="btn-primary rounded-lg p-2 text-center bg-blue-600 text-white h-10 hover:bg-[#D1D5DA] hover:text-black border-rounded">
          Auto-DM
        </button>
        <button className="btn-primary rounded-lg p-2 text-center bg-blue-600 text-white h-10 hover:bg-[#D1D5DA] hover:text-black border-rounded">
          Auto-Reply
        </button>
      </div>

      <div className="flex flex-row space-x-4 mb-5 border border-black bg-gray-600">
        <p
          className="hover:cursor-pointer underline text-white px-4 py-2 rounded-md"
          onClick={handleCrm}
        >
          Handle
        </p>
        <p
          className="hover:cursor-pointer underline text-white px-4 py-2 rounded-md"
          onClick={handleCrm}
        >
          Name
        </p>
        <p
          className="hover:cursor-pointer underline text-white px-4 py-2 rounded-md"
          onClick={handleCrm}
        >
          Bio
        </p>
        <p
          className="hover:cursor-pointer underline text-white px-4 py-2 rounded-md"
          onClick={handleCrm}
        >
          Location
        </p>
        <p
          className="hover:cursor-pointer underline text-white px-4 py-2 rounded-md"
          onClick={handleCrm}
        >
          Website
        </p>
        <p
          className="hover:cursor-pointer underline text-white px-4 py-2 rounded-md"
          onClick={handleCrm}
        >
          Followers
        </p>
        <p
          className="hover:cursor-pointer underline text-white px-4 py-2 rounded-md"
          onClick={handleCrm}
        >
          Following
        </p>
      </div>

      <div className="flex flex-row space-x-4 mb-5">
        <p className="hover:cursor-pointer underline text-black px-4 py-2 rounded-md">
          1
        </p>
        <p className="hover:cursor-pointer underline text-black px-4 py-2 rounded-md">
          2
        </p>
        <p className="hover:cursor-pointer underline text-black px-4 py-2 rounded-md">
          3
        </p>
        <p className="hover:cursor-pointer underline text-black px-4 py-2 rounded-md">
          4
        </p>
        <p className="hover:cursor-pointer underline text-black px-4 py-2 rounded-md">
          5
        </p>
        <p className="hover:cursor-pointer underline text-black px-4 py-2 rounded-md">
          6
        </p>
        <p className="hover:cursor-pointer underline text-black px-4 py-2 rounded-md">
          7
        </p>
      </div>

      <div className="flex flex-row space-x-4 mb-5">
        <p className="hover:cursor-pointer underline text-black px-4 py-2 rounded-md">
          Even More Info 1
        </p>
        <p className="hover:cursor-pointer underline text-black px-4 py-2 rounded-md">
          Even More Info 2
        </p>
        {/* You can add more p tags or other elements here for this row */}
      </div>

      {crm && <p className="text-xl mt-5 self-center">{crm}</p>}
    </div>
  );
}
