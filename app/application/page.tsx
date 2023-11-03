import InAppLayout from "@/layouts/in-app.layout";
import React from "react";

function page() {
  return (
    <InAppLayout>
      <div className="bg-red-100 p-10 w-full">
        <div>Tweets</div>
        <div>Page Content</div>
      </div>
    </InAppLayout>
  );
}

export default page;
