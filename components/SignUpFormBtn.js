// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Clerk } from "@clerk/nextjs/dist/types/server";

// export default function SignUpFormBtn({ textVal }) {
//   const router = useRouter();
//   return (
//     <ClerkProvider>
//       <div
//         className="inline-flex items-center
//       justify-center text-sm
//       font-medium transition-colors
//       focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  ring-offset-background text-white h-12 py-4 px-4  bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
//         onClick={() =>
//           router.push(textVal === "Sign Up" ? "/signup" : "/dashboard")
//         }
//       >
//         <button className="text-white">{textVal}</button>
//       </div>
//     </ClerkProvider>
//   );
// }
