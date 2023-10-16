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

  const handleCrm = () => {
    const result = prompt("Write what you would like your thread to be about");
    if (result !== null) {
      setCrm(result);
    }
  };

  return (
    <div className="flex flex-col mt-10 border h-screen bg-white text-black">
      <p className="text-3xl font-semibold mb-5 self-center text-gray-800">
        CRM Platform
      </p>

      <div className="space-x-5 flex flex-row">
        <div className="p-4 flex flex-row space-x-5">
          <label className="flex items-center text-black">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            Select All
          </label>

          <label className="flex items-center text-black">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            Select
          </label>
        </div>

        <button className="btn-primary rounded-lg p-2 text-center bg-blue-600 text-white h-10 hover:bg-[#D1D5DA] hover:text-black border-rounded">
          Auto-DM
        </button>

        <button className="btn-primary rounded-lg p-2 text-center bg-blue-600 text-white h-10 hover:bg-[#D1D5DA] hover:text-black border-rounded">
          Auto-Reply
        </button>
      </div>

      <div className="flex flex-row space-x-4 mb-5 border bg-gray-600">
        <DataTable data={sampleData} />
      </div>

      {crm && <p className="text-xl mt-5 self-center text-gray-800">{crm}</p>}
    </div>
  );
}
