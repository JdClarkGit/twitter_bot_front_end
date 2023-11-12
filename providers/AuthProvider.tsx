"use client";

import React from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({
  children,
  userId,
}: {
  children: React.ReactNode;
  userId: string;
}) {
  return (
    <AuthContext.Provider value={userId as any}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
