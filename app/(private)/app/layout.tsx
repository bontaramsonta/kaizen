import React from "react";
import { cn } from "@/lib/utils";
import { Permanent_Marker } from "next/font/google";
import * as SheetUI from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import Options from "@/components/Options";
import { Search } from "lucide-react";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

function SearchBar() {
  return (
    <div className="relative mx-3 flex flex-1 items-center">
      <input
        id="search"
        className="w-full rounded-full border-2 border-slate-200 px-4 py-2 dark:border-slate-700 dark:bg-black"
        type="text"
        placeholder="ctrl + k to search"
      />
      <label htmlFor="search">
        <Search className="absolute right-0 top-[50%] mr-1 translate-x-[-50%] translate-y-[-50%]" />
      </label>
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <SheetUI.SheetTrigger className={cn(className)}>
      <div
        about="logo mobile"
        className={cn(
          marker.className,
          "scale-x-[-1] text-4xl leading-none md:hidden",
        )}
      >
        K
      </div>
      <div
        about="logo mobile"
        className={cn(
          marker.className,
          "hidden pb-1 text-4xl leading-none md:block",
        )}
      >
        kaizen
      </div>
    </SheetUI.SheetTrigger>
  );
}

function Navbar() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pb-2 pt-4">
      <Logo />
      <Options />
      <SearchBar />
      <UserButton />
    </div>
  );
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-branded-bg min-h-screen dark:bg-black">
      <SheetUI.Sheet>
        <Navbar />
        <main className="flex flex-col items-center justify-center space-y-2">
          {children}
        </main>
      </SheetUI.Sheet>
    </div>
  );
}
