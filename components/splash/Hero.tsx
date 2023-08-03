"use client";
import React from "react";
import { motion } from "framer-motion";
import { NextFont } from "next/dist/compiled/@next/font";
import { cn } from "@/lib/utils";

type HeroProps = {
  permanentMarkerFont: NextFont;
};

const Hero = ({ permanentMarkerFont }: HeroProps) => {
  return (
    <>
      <h1 className={cn(permanentMarkerFont.className, "text-6xl")}>Kaizen</h1>
      <motion.h2
        initial={{
          transform: "translateY(-10px)",
          opacity: 0,
        }}
        animate={{
          transform: "translateY(0px)",
          opacity: 1,
        }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Work in progress
      </motion.h2>
    </>
  );
};
export default Hero;
