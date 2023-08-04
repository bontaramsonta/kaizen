import React from "react";
import { cn } from "@/lib/utils";
import { Permanent_Marker } from "next/font/google";

const marker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  weight: "400",
});

type LogoFullProps = {
  variant?: "large" | "small";
};

function LogoFull({ variant = "large" }: LogoFullProps) {
  return (
    <h1
      className={cn(marker.className, {
        "text-7xl md:text-8xl": variant === "large",
        "text-4xl md:text-5xl": variant === "small",
      })}
    >
      Kaizen
    </h1>
  );
}

export default LogoFull;
