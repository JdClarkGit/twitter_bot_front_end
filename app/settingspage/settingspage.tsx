import React, { useState, useEffect } from "react";

export default function SettingsPage() {
  // need to fetch data from database

  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 bg-gray-100 rounded-md w-3/4 flex flex-col gap-4 p-4">
        <h1 className="font-bold">Account Info</h1>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Email</h2> <h2>email@gmail.com</h2>
        </div>
      </div>
      <div className="mt-5 bg-gray-100 rounded-md w-3/4 flex flex-col gap-4 p-4">
        <h1 className="font-bold">Billing Info</h1>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold">Plan</h2> <h2>Example Plan Name</h2>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <h2 className="font-semibold">Cancel</h2>{" "}
          <button className="bg-red-200 py-1 px-2 rounded-md hover:bg-red-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
