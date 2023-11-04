import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

function InAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div className="flex flex-col bg-blue-500 min-h-screen w-full justify-center items-center">
        {children}
      </div>
    </ClerkProvider>
  );
}

export default InAppLayout;
