import React from "react";
import SessionChecker from "@/components/SessionChecker";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionChecker>{children}</SessionChecker>
    </>
  );
}
