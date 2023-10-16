import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import DataTable from "./datatable/datatable";

const sampleData = [
  {
    handle: "@john_doe",
    name: "John Doe",
    bio: "Software developer",
    location: "San Francisco",
    website: "http://johndoe.com",
    followers: 1000,
    following: 500,
  },
];

interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const DarkModeProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export default function PromptCRM() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [crm, setCrm] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-black", "text-white");
    } else {
      document.body.classList.remove("bg-black", "text-white");
      document.body.classList.add("bg-white", "text-black");
    }
  }, [darkMode]);

  const handleCrm = () => {
    const result = prompt("Write what you would like your thread to be about");
    if (result !== null) {
      setCrm(result);
    }
  };

  return (
    <div
      className={`flex flex-col mt-10 border h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button
        className={`p-2 rounded ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        Dark Mode
      </button>

      <p
        className={`text-3xl font-semibold mb-5 self-center ${
          darkMode ? "text-blue-600" : "text-gray-800"
        }`}
      >
        CRM Platform
      </p>

      <div className="space-x-5 flex flex-row">
        <div className="p-4 flex flex-row space-x-5">
          <label
            className={`flex items-center ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            Select All
          </label>

          <label
            className={`flex items-center ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 mr-2"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            Select
          </label>
        </div>

        <button
          className={`btn-primary rounded-lg p-2 text-center ${
            darkMode ? "bg-white text-black" : "bg-blue-600 text-white"
          } h-10 hover:bg-[#D1D5DA] hover:text-black border-rounded`}
        >
          Auto-DM
        </button>

        <button
          className={`btn-primary rounded-lg p-2 text-center ${
            darkMode ? "bg-white text-black" : "bg-blue-600 text-white"
          } h-10 hover:bg-[#D1D5DA] hover:text-black border-rounded`}
        >
          Auto-Reply
        </button>
      </div>

      <div
        className={`flex flex-row space-x-4 mb-5 border ${
          darkMode ? "bg-gray-800" : "bg-gray-600"
        }`}
      >
        <DataTable data={sampleData} darkMode={darkMode} />
      </div>

      {crm && (
        <p
          className={`text-xl mt-5 self-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {crm}
        </p>
      )}
    </div>
  );
}

// // Sample Usage in App or any parent component
// function App() {
//   return (
//     <DarkModeProvider>
//       <PromptCRM />
//       {/* ... other components */}
//     </DarkModeProvider>
//   );
// }
