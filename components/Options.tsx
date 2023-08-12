"use client";
import React from "react";
import * as SheetUI from "@/components/ui/sheet";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Settings2, MoonStar, Sun } from "lucide-react";

function getDarkMode() {
  // get dark mode from local storage
  let darkMode = localStorage.getItem("darkMode");
  if (!darkMode) {
    // get system dark mode
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return darkMode === "dark" ? "dark" : "light";
}

export default function Options() {
  const [darkMode, setDarkMode] = React.useState<"dark" | "light">(getDarkMode);

  return (
    <SheetUI.SheetContent side={"left"}>
      <div className="flex h-full flex-col space-y-4">
        <SheetUI.SheetHeader>
          <SheetUI.SheetTitle>Options</SheetUI.SheetTitle>
          <SheetUI.SheetDescription>
            Customize your experience
          </SheetUI.SheetDescription>
        </SheetUI.SheetHeader>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col space-y-2">
            <Button variant={"ghost"}>
              <Settings2 className="mr-2" />
              <span>preferences</span>
            </Button>
            {darkMode === "dark" ? (
              <Button variant={"ghost"} onClick={() => setDarkMode("light")}>
                <Sun className="mr-2" />
                <span>switch to light mode</span>
              </Button>
            ) : (
              <Button variant={"ghost"} onClick={() => setDarkMode("dark")}>
                <MoonStar className="mr-2" />
                <span>switch to dark mode</span>
              </Button>
            )}
          </div>
          <Button asChild>
            <SignOutButton />
          </Button>
        </div>
      </div>
    </SheetUI.SheetContent>
  );
}
