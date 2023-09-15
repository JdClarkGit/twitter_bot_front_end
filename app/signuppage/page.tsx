// @jsxImportSource @vite/client
import React, { useState, createContext } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import SignUpFormBtn from "../../components/SignUpFormBtn";

// const Context = createContext();

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-full w-full justify-center text-center">
      <div className="block bg-white">
        <h1 className="text-3xl">Sign Up</h1>
        <div className="border border-blue shadow-lg rounded-lg p-4">
          <form>
            <label className="block my-3 text-gray-700">
              First Name
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
              />
            </label>
            <label className="block my-3 text-gray-700">
              Last Name
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
              />
            </label>
            <label className="block my-3 text-gray-700">
              Email Address
              <input
                type="text"
                placeholder="Email Address"
                className="px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
              />
            </label>
            <label className="block my-3 text-gray-700">
              Phone Number
              <input
                type="text"
                placeholder="Phone Number"
                className="px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
              />
            </label>
            <label className="block text-gray-700">
              Password
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
                />
                <span
                  className="cursor-pointer absolute top-3.5 right-2"
                  onClick={handleToggle}
                >
                  {showPassword ? <FiEyeOff size={25} /> : <FiEye size={25} />}
                </span>
              </div>
            </label>
            <a href="/" className="italic">
              forgot your password?
            </a>
          </form>
          <div className="mt-4 justify-center">
            <SignUpFormBtn textVal="Text" />
          </div>
        </div>
      </div>
    </div>
  );
}
