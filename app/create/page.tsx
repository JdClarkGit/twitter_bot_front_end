"use client";
import React, { useState } from "react";
import PromptThread from "./thread/page";
import PromptTweet from "./tweet/page";
import PromptCRM from "./crm/crm";

export default function CreateContent() {
  const [activePage, setActivePage] = useState<
    null | "PromptTweet" | "PromptThread" | "PromptCrm"
  >(null);

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      {activePage === null && (
        <div className="flex flex-col space-y-4 shadow-2xl shadow-white rounded-lg bg-gray-300 m-8 p-6">
          <h1 className="text-3xl font-bold mb-4">
            What would you like to create?
          </h1>

          <button
            onClick={() => setActivePage("PromptTweet")}
            className="btn-primary bg-[#256861] text-white h-10 hover:bg-[#D1D5DA] hover:text-black hover:border hover:border-[#D1D5DA]"
          >
            Tweet
          </button>

          <button
            onClick={() => setActivePage("PromptThread")}
            className="btn-primary bg-[#256861] text-white h-10 hover:bg-[#D1D5DA] hover:text-black hover:border hover:border-[#D1D5DA]"
          >
            Thread
          </button>
          <button
            onClick={() => setActivePage("PromptCrm")}
            className="btn-primary bg-[#256861] text-white h-10 hover:bg-[#D1D5DA] hover:border hover:border-[#D1D5DA] hover:text-black"
          >
            CRM
          </button>

          {/* Removed the Go Back button as it's not functional in this view. You can re-add with functionality later. */}
        </div>
      )}

      {activePage !== null && (
        <button
          onClick={() => setActivePage(null)}
          className="btn-secondary mb-4"
        >
          Go Back
        </button>
      )}

      {activePage === "PromptTweet" && <PromptTweet />}
      {activePage === "PromptThread" && <PromptThread />}
      {activePage === "PromptCrm" && <PromptCRM />}
    </div>
  );
}

const buttonBase = `
  inline-flex items-center justify-center text-xl font-medium transition-colors 
  h-12 py-2 px-6 rounded-lg focus:ring-2 focus:ring-offset-2 disabled:opacity-50 
  disabled:pointer-events-none hover:text-white
`;

const btnPrimary = `
  ${buttonBase} bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700
`;

const btnSecondary = `
  ${buttonBase} bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white
`;

export const styles = { btnPrimary, btnSecondary };
