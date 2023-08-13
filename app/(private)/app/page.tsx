import React from "react";
import { cn } from "@/lib/utils";
import TaskList from "@/components/task/TaskList";
import { Permanent_Marker } from "next/font/google";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

function Quote() {
  return (
    <p
      className={cn(
        marker.className,
        "text-branded-text dark:text-branded-text-dark",
      )}
    >
      You&apos;re doing great
    </p>
  );
}

function App() {
  return (
    <div className="container mt-1 flex flex-col items-center space-y-4">
      <Quote />
      <TaskList />
    </div>
  );
}

export default App;
