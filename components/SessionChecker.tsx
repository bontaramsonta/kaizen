"use client";
import React from "react";
import { useAuth, RedirectToSignIn } from "@clerk/nextjs";

function SessionChecker() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded || !isSignedIn) {
    return <RedirectToSignIn />;
  }

  return null;
}

export default SessionChecker;
