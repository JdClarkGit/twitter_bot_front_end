"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ProfilePlaceholder = ({ size = 50 }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    backgroundColor: "#ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: `${size * 0.5}px`,
    color: "white",
  };

  return (
    <div style={style}>
      <span>?</span>
    </div>
  );
};

function SettingsComponent() {
  return (
    <div className="mt-5 bg-[#1c2029] rounded-md w-3/4 flex flex-col gap-4 p-4 items-start space-y-4 text-center">
      <h2 className="text-3xl text-[#e0e0e0] text-center">Settings</h2>

      <button
        className="inline-flex items-center
            justify-center text-sm
            font-medium transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
            focus-visible:ring-offset-2  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
            text-black h-12 py-4 px-8 w-[160px]
            bg-blue-200 rounded-full hover:bg-white hover:text-[#3B81F6]"
      >
        Settings
      </button>

      <button
        className="inline-flex items-center
            justify-center text-sm
            font-medium transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
            focus-visible:ring-offset-2  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
            text-black h-12 py-4 px-8 w-[160px]
            bg-blue-200 rounded-full hover:bg-white hover:text-[#3B81F6]"
      >
        Notification
      </button>

      <button
        className="inline-flex items-center
            justify-center text-sm
            font-medium transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
            focus-visible:ring-offset-2  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
            text-black h-12 py-4 px-8 w-[160px]
            bg-blue-200 rounded-full hover:bg-white hover:text-[#3B81F6]"
      >
        Edit Profile
      </button>

      <button
        className="inline-flex items-center
            justify-center text-sm
            font-medium transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
            focus-visible:ring-offset-2  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
            text-black h-12 py-4 px-8 w-[160px]
            bg-blue-200 rounded-full hover:bg-white hover:text-[#3B81F6]"
      >
        Password
      </button>

      <div className="mr-2">
        <button
          className="inline-flex items-center
            justify-center text-sm
            font-medium transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
            focus-visible:ring-offset-2  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
            text-black h-12 py-4 px-8 w-[160px]
            bg-blue-200 rounded-full hover:bg-white hover:text-[#3B81F6]"
        >
          {"   "}
          Go Back
        </button>
      </div>
    </div>
  );
}

function CreditCardInput() {
  const [cardNumber, setCardNumber] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value.replace(/[^\d]/g, "").substring(0, 16);
    setCardNumber(formattedValue);
  };

  return (
    <div className="flex flex-col gap-2 h-screen">
      <form>
        <label>
          <h2 className="font-semibold text-[#e0e0e0]">Card Number:</h2>
        </label>
        <input
          type="text"
          className="w-1/4 p-2 rounded bg-gray-800 text-white"
          value={cardNumber}
          onChange={handleInputChange}
          maxLength={19}
          placeholder="1234 5678 9012 3456"
        />
      </form>
      <h2 className="font-semibold text-[#e0e0e0]">Expiry Date:</h2>
      <input
        type="text"
        className="w-1/4 p-2 rounded bg-gray-800 text-white"
        placeholder="MM/YY"
      />

      <h2 className="font-semibold text-[#e0e0e0]">Sec. Code:</h2>
      <input
        type="text"
        className="w-1/4 p-2 rounded bg-gray-800 text-white"
        maxLength={3}
        placeholder="000"
      />
    </div>
  );
}

export default function ProfilePage() {
  // placeholder for fetching data from the database

  return (
    <div className="flex bg-[#1c2029] min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#1c2029] p-4">
        <SettingsComponent />
      </div>

      {/* Main Content */}
      <div className="bg-[#1c2029] flex-1 flex flex-col items-center border border-gray-200 shadow-sm rounded p-4">
        <ProfilePlaceholder size={100} />

        {/* Account Info */}
        <div className="mt-5 bg-[#374151] border border-gray-300 shadow-sm rounded-md p-4 w-3/4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#e0e0e0]">Account Info</h1>
            <button className="bg-orange-200 p-2 text-black rounded-md hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400">
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="text-lg"
                size="xs"
              />{" "}
              Edit
            </button>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <h2 className="font-semibold text-[#e0e0e0] w-32">First Name</h2>
            <input
              type="text"
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="First Name"
            />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <h2 className="font-semibold text-[#e0e0e0] w-32">Last Name</h2>
            <input
              type="text"
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Last Name"
            />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <h2 className="font-semibold text-[#e0e0e0] w-32">Email</h2>
            <input
              type="email"
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter email"
            />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <h2 className="font-semibold text-[#e0e0e0] w-32">Phone Number</h2>
            <input
              type="tel"
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Phone Number"
            />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <h2 className="font-semibold text-[#e0e0e0] w-32">Twitter</h2>
            <input
              type="text"
              className="w-full p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter Twitter @"
            />
          </div>

          <div className="mt-2">
            <div className="mt-2 flex gap-2">
              <button className="bg-blue-200 hover:bg-white hover:text-blue-600 text-black py-2 px-4 rounded-xl  focus:outline-none focus:ring-2 focus:ring-blue-400">
                Save Changes
              </button>
              <button className="bg-green-200 hover:bg-white hover:text-green-600 text-black py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400">
                Change Membership
              </button>
              <button className="bg-red-200 hover:bg-white hover:text-red-600 text-black py-2 px-4 rounded-xl  focus:outline-none focus:ring-2 focus:ring-red-400">
                Cancel Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
