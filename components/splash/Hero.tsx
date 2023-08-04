"use client";
import { motion } from "framer-motion";
import { NextFont } from "next/dist/compiled/@next/font";
import { cn } from "@/lib/utils";

type HeroProps = {
  permanentMarkerFont: NextFont;
};

const Hero = ({ permanentMarkerFont }: HeroProps) => {
  return (
    <>
      <h1 className={cn(permanentMarkerFont.className, "text-7xl md:text-8xl")}>
        Kaizen
      </h1>
      <motion.p
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Work in progress
      </motion.p>
    </>
  );
};
export default Hero;
