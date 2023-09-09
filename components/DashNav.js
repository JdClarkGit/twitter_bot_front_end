import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import BaseCreateBtn from "./BaseCreateBtn";
import DashboardTutorialBtn from "./DashNavLogos";

export default function DashNav() {
  const location = useLocation();

  useEffect(() => {
    // This code will run whenever location changes
    console.log("The current route is:", location.pathname);
  }, [location]);

  return (
    <>
      {location.pathname !== "/" && (
        <div className="flex justify-between">
          <div className="flex flex-row">
            <BaseCreateBtn />
            <Link
              to="/signup"
              className="text-center transition-all duration-200 transform active:scale-90 space-x-4 w-[190px] bg-[#019773] text-white py-3 my-2 rounded-[80px]"
            >
              Get Started
            </Link>
            <Link
              to="/dashboard"
              className="text-center transition-all duration-200 transform active:scale-90 w-[190px] bg-[#257EB3] text-white py-3 my-2 rounded-[80px]"
            >
              Dashboard
            </Link>
          </div>
          <DashboardTutorialBtn />
        </div>
      )}
    </>
  );
}
