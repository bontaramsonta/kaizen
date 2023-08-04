"use client";
import { motion } from "framer-motion";
import LogoFull from "./LogoFull";

const Hero = () => {
  return (
    <>
      <LogoFull />
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
