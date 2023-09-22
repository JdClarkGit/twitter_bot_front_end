import Image from "next/image";
import BaseDemoVideo from "@/components/BaseDemoVideo";
import BaseDemoVideoText from "@/components/BaseDemoVideoText";
import TweetBotHeader from "@/components/TweetBotHeader";
import LogInBtn from "@/components/LogInBtn";
// import HomePage from "@/components/HomePage";
export default function Home() {
  return (
    <div className="flex w-full h-screen text-sm cursor-pointer">
      <div className="bg-[#3B81F6] flex flex-col justify-center items-center w-1/2 h-full">
        <div className="flex justify-center h-1/2 w-full mb-4">
          <BaseDemoVideo />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 h-full cursor-default">
        <TweetBotHeader />
        <LogInBtn textVal="Log In" />
        <LogInBtn textVal="Sign Up" />
      </div>
    </div>
  );
}
