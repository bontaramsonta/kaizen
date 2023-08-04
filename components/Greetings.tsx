"use client";
import React from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";

function Greetings() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <h1 className="text-2xl">Hi, {user?.username}</h1>;
}

export default Greetings;
