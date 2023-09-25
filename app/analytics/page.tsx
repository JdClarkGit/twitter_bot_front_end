// "use client";
// import React, { useState } from "react";
// import Audience from "./audience/page";
// import ConversionRate from "./conversion/page";
// import CustomDataRange from "./customdata/page";
// import Engagement from "./engagement/page";
// import ExportData from "./exportdata/page";
// import HistoryComparison from "./history/page";
// import Impressions from "./impressions/page";
// import IntegrationStats from "./integration/page";
// import DashboardOverview from "./overview/page";
// import PlatformBreakdown from "./platformbreak/page";
// import PostAnalytics from "./postanalytics/page";
// import Recommendations from "./recommendations/page";
// import Sentiment from "./sentiment/page";
// import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from "react-chartjs-2";

// export default function DashboardPage() {
//   const [activePage, setActivePage] = useState(null);

//   const menuItems = [
//     {
//       alt: "Dashboard Overview",
//       src: "/path/to/notes-logo.png",
//       onClick: () => setActivePage("DashboardOverview"),
//     },
//     {
//       alt: "Engagement",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("Engagement"),
//     },
//     {
//       alt: "Impressions",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("Impressions"),
//     },
//     {
//       alt: "Audience",
//       src: "/path/to/notes-logo.png",
//       onClick: () => setActivePage("Audience"),
//     },
//     {
//       alt: "Post Analytics",
//       src: "/path/to/notes-logo.png",
//       onClick: () => setActivePage("PostAnalytics"),
//     },
//     {
//       alt: "Platform Breakdown",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("PlatformBreakdown"),
//     },
//     {
//       alt: "Sentiment Analysis",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("Sentiment"),
//     },
//     {
//       alt: "Conversion %",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("ConversionRate"),
//     },
//     {
//       alt: "Recommendations",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("Recommendations"),
//     },
//     {
//       alt: "Custom Data",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("CustomDataRange"),
//     },
//     {
//       alt: "Export Data",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("ExportData"),
//     },
//     {
//       alt: "Integration Stats",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("IntegrationStats"),
//     },
//     {
//       alt: "History",
//       src: "/path/to/image.png",
//       onClick: () => setActivePage("HistoryComparison"),
//     },
//     { alt: "Go Back", src: "/path/to/image.png", href: "/dashboard" },
//   ];
//   const commonClasses =
//     "w-auto px-4 mt-2 h-12 bg-gray-600 hover:bg-blue-500 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-95 flex items-center justify-center border border-blue-600";

//   return (
//     <div className="flex h-screen w-screen bg-gray-900 text-white flex-col">
//       <nav className="flex flex-wrap justify-center p-4 bg-gray border border-blue-600 rounded-lg shadow-md overflow-x-auto">
//         {menuItems.map((item, index) => (
//           <div key={index} className="mx-2">
//             {item.href ? (
//               <a href={item.href}>
//                 <a className={commonClasses}>{item.alt}</a>
//               </a>
//             ) : (
//               <button
//                 onClick={() => item.onClick && item.onClick()}
//                 className={commonClasses}
//               >
//                 {item.alt}
//               </button>
//             )}
//           </div>
//         ))}
//       </nav>
//       {activePage === "DashboardOverview" && <DashboardOverview />}
//       {activePage === "Engagement" && <Engagement />}
//       {activePage === "Audience" && <Audience />}
//       {activePage === "Sentiment" && <Sentiment />}
//       {activePage === "ConversionRate" && <ConversionRate />}
//       {activePage === "CustomDataRange" && <CustomDataRange />}
//       {activePage === "ExportData" && <ExportData />}
//       {activePage === "HistoryComparison" && <HistoryComparison />}
//       {activePage === "Impressions" && <Impressions />}
//       {activePage === "IntegrationStats" && <IntegrationStats />}
//       {activePage === "PlatformBreakdown" && <PlatformBreakdown />}
//       {activePage === "PostAnalytics" && <PostAnalytics />}
//       {activePage === "Recommendations" && <Recommendations />}
//     </div>
//   );
// }
