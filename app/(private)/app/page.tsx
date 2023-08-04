import Greetings from "@/components/Greetings";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

function App() {
  return (
    <div className="container flex flex-col min-h-screen justify-center space-y-2 items-center">
      <Greetings />
      <SignOutButton />
    </div>
  );
}

export default App;
