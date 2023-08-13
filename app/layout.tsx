import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Splash from "@/components/Splash";
import ThemeProvider from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaizen",
  description: "Your goal, Your self-respect, Your life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <html lang="en">
          <body className={cn(inter.className)}>
            <Splash>{children}</Splash>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
