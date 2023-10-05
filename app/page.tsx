import BaseDemoVideo from "@/components/BaseDemoVideo";
import TweetBotHeader from "@/components/TweetBotHeader";
import LogInBtn from "@/components/LogInBtn";

export default function Home() {
  return (
    <div className="w-full h-screen text-sm bg-white flex flex-col justify-start items-center">
      {/* Top Section - TweetBotHeader and Buttons */}
      <div className="w-full flex justify-between items-center px-4 py-2">
        <TweetBotHeader />
        <div className="flex flex-row space-x-4">
          <LogInBtn textVal="Log In" />
          <LogInBtn textVal="Sign Up" />
          <LogInBtn textVal="Contact Us" />
          {/* <DemoButton /> */}
        </div>
      </div>

      {/* Middle Section - BaseDemoVideo */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-1/2">
          <BaseDemoVideo />
          {/* <DemoButton /> */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-blue-500 font-bold text-white tracking-tight text-center p-7">
        <p className="text-4xl tracking-tight">
          In the vast tapestry of the social media universe, patterns emerge...
          We've decoded that rhythm. Enter SocialSkyrocket: your autopilot for
          tweets, threads, and brand brilliance. Dive deeper, post efficiently,
          and radiate even more.
        </p>
      </footer>
    </div>
  );
}
