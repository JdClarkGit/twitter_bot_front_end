import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import CreateContent from "../create/page";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/create" component={CreateContent} />
      </Switch>
    </Router>
  );
}

function DashboardPage() {
  const history = useHistory(); // useHistory hook for navigation

  const menuItems = [
    { alt: "Home", src: "/path/to/image.png", onClick: null },
    {
      alt: "Create",
      src: "/path/to/image.png",
      onClick: () => history.push("/create"),
    },
    { alt: "Analytics", src: "/path/to/notes-logo.png", onClick: null },
    { alt: "Notes", src: "/path/to/notes-logo.png", onClick: null },
    { alt: "Profile", src: "/path/to/notes-logo.png", onClick: null },
    { alt: "Settings", src: "/path/to/notes-logo.png", onClick: null },
    { alt: "Log Out", src: "/path/to/notes-logo.png", onClick: null },
  ];

  return (
    <div className="border-b-2 border-solid border-custom-red flex flex-col justify-between h-screen bg-white border-r-2 border-gray-300">
      {menuItems.map((item, index) => (
        <div key={index} className="flex-grow">
          <button
            onClick={item.onClick}
            className="cursor-pointer w-[100px] h-12 bg-blue-500 rounded-lg shadow-md transition-all duration-200 transform active:scale-90"
          >
            <img className="text-white" src={item.src} alt={item.alt} />
          </button>
        </div>
      ))}
    </div>
  );
}
