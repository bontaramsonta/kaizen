"use client";
import React from "react";
import { useAuth, RedirectToSignIn } from "@clerk/nextjs";

function SessionChecker({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded || !isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <>{children}</>;
}

export default SessionChecker;
