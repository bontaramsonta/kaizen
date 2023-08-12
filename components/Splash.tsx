"use client";
import React from "react";
import { motion } from "framer-motion";
import LogoFull from "@/components/LogoFull";

const simulatedDelay = 2000;

const Splash = ({ children }: { children: React.ReactNode | null }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, simulatedDelay);
  }, []);
  return isLoaded ? (
    children
  ) : (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-2 bg-[#FFF8E7]">
      <LogoFull />
      <motion.p
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Work in progress
      </motion.p>
    </main>
  );
};
export default Splash;
