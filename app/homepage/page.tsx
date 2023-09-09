import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

export default function HomePage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex">
      <div className="block">
        <h1 className="cursor-pointer text-3xl font-bold text-indigo-700 hover:text-indigo-900 transition-all duration-200">
          Log In
        </h1>
        <div>
          <form>
            <label className="cursor-pointer text-xl font-bold text-indigo-700 hover:text-indigo-900 transition-all duration-200">
              Bot username
              <input
                type="text"
                placeholder="Enter the bot username"
                className="px-6 py-3 text-lg mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
              />
            </label>
          </form>
          <form>
            <label className="cursor-pointer text-xl font-bold text-indigo-700 hover:text-indigo-900 transition-all duration-200">
              Password
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="px-6 py-3 text-lg mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
                />
                <span
                  className="absolute right-2 top-3.5 cursor-pointer"
                  onClick={handleToggle}
                >
                  {showPassword ? <FiEyeOff size={25} /> : <FiEye size={25} />}
                </span>
              </div>
            </label>
            <a href="/" className="italic text-xl">
              forgot your password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
