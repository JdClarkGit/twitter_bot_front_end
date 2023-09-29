"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import PromptNote from "./createnote/page";
import PromptTodo from "./todolists/page";
import PromptEdit from "./editnote/page";
import PromptSaved from "./savednotes/page";

export default function CreateContent() {
  const [activePage, setActivePage] = useState<
    null | "PromptNote" | "PromptTodo" | "PromptEdit" | "PromptSaved"
  >(null);
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-xl font-medium mb-8"></h1>

      <div className="flex space-x-8">
        <div className="flex flex-col space-y-4">
          <button
            className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg 
            shadow-md transition-all duration-200 
            transform active:scale-90 flex items-center 
            justify-center hover:bg-white hover:text-[#3B81F6]"
            onClick={() => setActivePage("PromptNote")}
          >
            + Create Note
          </button>
          <button
            className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg 
            shadow-md transition-all duration-200 
            transform active:scale-90 flex items-center 
            justify-center hover:bg-white hover:text-[#3B81F6]"
            onClick={() => setActivePage("PromptEdit")}
          >
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="mr-2 text-2xl"
              size="xs"
            />
            Edit Note
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <button
            className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white 
            rounded-lg shadow-md transition-all duration-200 
            transform active:scale-90 flex items-center 
            justify-center hover:bg-white hover:text-[#3B81F6]"
            onClick={() => setActivePage("PromptTodo")}
          >
            To Do Lists
          </button>
          <button
            className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white 
            rounded-lg shadow-md transition-all duration-200 
            transform active:scale-90 flex items-center 
            justify-center hover:bg-white hover:text-[#3B81F6]"
            onClick={() => setActivePage("PromptSaved")}
          >
            Saved Notes
          </button>
        </div>
      </div>
      <button
        className="cursor-pointer w-[100px] h-12 bg-blue-500 text-white 
        rounded-lg shadow-md transition-all duration-200 
        transform active:scale-90 flex items-center 
        justify-center hover:bg-white hover:text-[#3B81F6]"
      >
        <div className="mr-2">
          <span aria-hidden="true">←</span>
        </div>
        Go Back
      </button>
      {activePage === "PromptNote" && <PromptNote />}
      {activePage === "PromptTodo" && <PromptTodo />}
      {activePage === "PromptEdit" && <PromptEdit />}
      {activePage === "PromptSaved" && <PromptSaved />}
    </div>
  );
}
