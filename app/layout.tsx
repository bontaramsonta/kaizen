import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Splash from "@/components/Splash";

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
      <html lang="en">
        <body className={inter.className}>
          <Splash>{children}</Splash>
        </body>
      </html>
    </ClerkProvider>
  );
}
