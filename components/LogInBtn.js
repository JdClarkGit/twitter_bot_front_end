// import React from "react";
// import Link from "next/link";
// import { ClerkProvider } from "@clerk/nextjs";
// import { useRouter } from "next/router";

// export default function LogInBtn({ textVal }) {
//   const router = useRouter();
//   return (
//     <ClerkProvider>
//       <div
//         className="inline-flex items-center
//       justify-center text-sm
//       font-medium transition-colors
//       focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  ring-offset-background text-white h-12 py-4 px-4  bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
//       >
//         <Link
//           className="inline-flex items-center
//         justify-center text-sm
//         font-medium transition-colors
//         focus-visible:outline-none  focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50  disabled:pointer-events-none  ring-offset-background text-white h-12 py-4 px-4  bg-[#3B81F6] rounded-full hover:bg-white hover:text-[#3B81F6]"
//           href={textVal === "Sign Up" ? "/signup" : "/dashboard"}
//           passHref
//         >
//           {textVal}
//         </Link>
//       </div>
//     </ClerkProvider>
//   );
// }
