import React from "react";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import DashboardBody from "./DashboardTutorialBtn";

export default function Header() {
  return (
    <div className="flex items-center space-x-4">
      <AiOutlineSearch size={24} />
      <AiOutlineBell size={24} />
      <BsPersonCircle size={24} />
      <DashboardBody />
      {/* If you have the user profile image URL, you can add it here like this: */}
      {/* <img className="h-8 w-8 rounded-full" src="https://example.com/profile.jpg" alt="User profile" /> */}
    </div>
  );
}
