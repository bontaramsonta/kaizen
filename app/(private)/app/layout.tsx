import React from "react";
import { cn } from "@/lib/utils";
import { Permanent_Marker } from "next/font/google";
import Link from "next/link";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

function SearchBar() {
  return (
    <div className="mx-3 flex flex-1 items-center">
      <input
        className="w-full rounded-full border-2 border-slate-200 px-4 py-2"
        type="text"
        placeholder="ctrl + k to search"
      />
    </div>
  );
}

function Profile() {
  return (
    <Link
      href={"/work-in-progress"}
      prefetch={false}
      className="h-10 w-10 rounded-full bg-blue-100"
    ></Link>
  );
}

function Navbar() {
  return (
    <div className="flex items-center justify-between px-5 pb-2 pt-4">
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
      <SearchBar />
      <Profile />
    </div>
  );
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Navbar />
      <main className="flex flex-col items-center justify-center space-y-2">
        {children}
      </main>
    </div>
  );
}
