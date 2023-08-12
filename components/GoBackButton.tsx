"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function GoBackButton() {
  const router = useRouter();
  return (
    <Button className="flex space-x-2" onClick={() => router.back()}>
      <ChevronLeft size={24} />
      <span>Go back</span>
    </Button>
  );
}
