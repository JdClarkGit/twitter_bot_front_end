"use client";
import React, { useState } from "react";
import PromptThread from "./thread/page";
import PromptTweet from "./tweet/page";

export default function CreateContent() {
  const [activePage, setActivePage] = useState<
    null | "PromptTweet" | "PromptThread"
  >(null);

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      {activePage === null && (
        <div className="flex flex-col space-y-4 shadow-2xl rounded-lg bg-gray-300 m-8 p-6">
          <h1 className="text-3xl font-bold mb-4">
            What would you like to create?
          </h1>

          <button
            onClick={() => setActivePage("PromptTweet")}
            className="btn-primary bg-blue-600 text-white h-10 hover:bg-[#D1D5DA] hover:text-black"
          >
            Tweet
          </button>

          <button
            onClick={() => setActivePage("PromptThread")}
            className="btn-primary bg-blue-600 text-white h-10 hover:bg-[#D1D5DA] hover:text-black"
          >
            Thread
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

// "use client";
// import React, { useState } from "react";
// import PromptThread from "./thread/page";
// import PromptTweet from "./tweet/page";

// export default function CreateContent() {
//   const [activePage, setActivePage] = useState<
//     null | "PromptTweet" | "PromptThread"
//   >(null);

//   return (
//     <div className="flex flex-col justify-center items-center h-screen space-y-8">
//       {activePage === null && (
//         <div className=" flex flex-col space-y-4 shadow-2xl rounded-lg bg-gray-300 m-8">
//           <h1 className="text-4xl font-bold">What would you like to create?</h1>
//           <button
//             onClick={() => setActivePage("PromptTweet")}
//             className="inline-flex items-center
//                 justify-center text-xl
//                 font-medium transition-colors
//                 focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2
//                 disabled:opacity-50  disabled:pointer-events-none
//                 ring-offset-background
//                 text-white h-12 w-100 py-4 px-8
//                 bg-[#3B81F6] rounded-half hover:bg-white hover:text-[#3B81F6]"
//           >
//             Tweet
//           </button>
//           <button
//             onClick={() => setActivePage("PromptThread")}
//             className="inline-flex items-center
//                 justify-center text-xl
//                 font-medium transition-colors
//                 focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  ring-offset-background
//                 text-white h-12 py-4 px-8
//                 bg-[#3B81F6] rounded-half hover:bg-white hover:text-[#3B81F6]"
//           >
//             Thread
//           </button>
//           <button
//             className="cursor-pointer
//                 w-[100px] h-8 bg-blue-500 text-white
//                 rounded-lg shadow-md
//                 transition-all duration-200
//                 transform active:scale-90 flex items-center
//                 justify-center hover:bg-white hover:text-[#3B81F6]"
//           >
//             <div className="mr-2"></div>
//             Go Back
//           </button>
//         </div>
//       )}

//       {activePage === "PromptTweet" && <PromptTweet />}
//       {activePage === "PromptThread" && <PromptThread />}
//     </div>
//   );
// }
