import React from "react";
import { Permanent_Marker } from "next/font/google";
import { cn } from "@/lib/utils";
import { GoBackButton } from "@/components/GoBackButton";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-[#FFF8E7]">
      <h1 className={cn(marker.className, "px-5 text-center text-2xl")}>
        This page is under development
      </h1>
      <GoBackButton />
    </div>
  );
}
