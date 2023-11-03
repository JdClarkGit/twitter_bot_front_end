import React from "react";

function InAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-blue-500 min-h-screen w-full justify-center items-center">
      {children}
    </div>
  );
}

export default InAppLayout;
