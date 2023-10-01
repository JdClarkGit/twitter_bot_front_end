import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ProfilePlaceholder: React.FC = () => (
  <div className="profile-placeholder rounded-full bg-gray-300 flex items-center justify-center w-24 h-24">
    <span className="text-2xl font-semibold text-white">?</span>
  </div>
);

interface ButtonProps {
  label: string;
}

const SettingsButton: React.FC<ButtonProps> = ({ label }) => (
  <button className="settings-button text-black py-3 px-6 bg-blue-200 rounded-full hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
    {label}
  </button>
);

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
}

const InputField: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
}) => (
  <div className="input-field flex flex-row gap-3 items-center mb-4">
    <label className="font-semibold text-white w-1/4">{label}</label>
    <input
      type={type}
      className="flex-grow p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
      placeholder={placeholder}
    />
  </div>
);

export default function SettingsPage() {
  return (
    <div className="settings-page flex flex-row bg-gray-900 h-screen">
      {/* Sidebar */}
      <aside className="sidebar w-1/5 bg-gray-800 p-6 flex flex-col gap-4">
        <h2 className="mt-5 bg-[#1c2029] rounded-md w-3/4 flex flex-col gap-4 p-4 items-start space-y-4 text-center">
          Settings
        </h2>
        <SettingsButton label="Profile" />
        <SettingsButton label="Notifications" />
        <SettingsButton label="Security" />
        <SettingsButton label="Billing" />
        <SettingsButton label="Go Back" />
      </aside>

      {/* Main Content */}
      <main className="content flex-1 p-6">
        <section className="billing-section">
          <div className="bg-gray-700 p-6 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-white">Billing Info</h1>
              <button className="edit-button bg-orange-200 p-2 rounded-md hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-black">
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="text-lg" // Changed from 'text-2lg' to 'text-lg' to fix the size.
                />{" "}
                Edit
              </button>
            </div>

            <InputField label="Card Number" placeholder="1234 5678 9012 3456" />
            <InputField label="Expiry Date" placeholder="MM/YY" />
            <InputField
              label="Security Code"
              type="password"
              placeholder="***"
            />

            <InputField label="Address" placeholder="123 Main St" />
            <InputField label="City" placeholder="Anytown" />
            <InputField label="Country" placeholder="USA" />
            <InputField label="Zip Code" placeholder="12345" />

            <button className="save-changes-button bg-blue-500 text-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700">
              Update Billing
            </button>
            <div className="mt-2 flex gap-2">
              <button className="bg-blue-200 py-2 px-4 rounded-md hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black">
                Save Changes
              </button>
              <button className="bg-green-200 py-2 px-4 rounded-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-black">
                Change Membership
              </button>
              <button className="bg-red-200 py-2 px-4 rounded-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 text-black">
                Cancel Membership
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
