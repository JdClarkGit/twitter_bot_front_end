import React from "react";

type User = {
  handle: string;
  name: string;
  bio: string;
  location: string;
  website: string;
  followers: number;
  following: number;
};

type DataTableProps = {
  data: User[];
  darkMode: boolean;
};

const DataTable: React.FC<DataTableProps> = ({ data, darkMode }) => {
  const borderColor = darkMode ? "border-blue-400" : "border-black";
  const textColor = darkMode ? "text-blue" : "";

  return (
    <table className={`min-w-full ${borderColor} ${textColor}`}>
      <thead>
        <tr>
          <th className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
            Handle
          </th>
          <th className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
            Name
          </th>
          <th className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
            Bio
          </th>
          <th className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
            Location
          </th>
          <th className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
            Website
          </th>
          <th className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
            Followers
          </th>
          <th className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
            Following
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
              {user.handle}
            </td>
            <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
              {user.name}
            </td>
            <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
              {user.bio}
            </td>
            <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
              {user.location}
            </td>
            <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
              <a href={user.website} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            </td>
            <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
              {user.followers}
            </td>
            <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>
              {user.following}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
