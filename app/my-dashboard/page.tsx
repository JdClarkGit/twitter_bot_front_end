import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";


const DashboardShit = () => {

    return <>

<SignedIn>
  <>
   <h1 className="text-2xl">
    Signed in
   </h1>
   
  </>
  </SignedIn>
  <SignedOut>
  <p className="text-2xl text-white">
   You are not logged in nigger
  </p>
  </SignedOut>

</>;
   };
export default DashboardShit;