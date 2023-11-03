import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { auth } from "@clerk/nextjs";

function BaseClerkProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const { userId } = auth();

  // Render children even if there's no userId. You can adjust this logic
  // based on your requirements. But ensure consistency between server and client.
  if (!userId) {
    return <>{children}</>;
  }

  return <ClerkProvider>{children}</ClerkProvider>;
}

export default BaseClerkProvider;
