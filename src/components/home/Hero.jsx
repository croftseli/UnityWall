"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import {BoxesCore} from "../ui/boxes-mobile"
import { cn } from "@/lib/utils";
import CTA from "../layout/CTA";
import useMediaQuery from "@/lib/useMediaQuery"


export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 767px)"); 

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="min-h-[600px] md:min-h-[800px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        {isDesktop && <Boxes />}
        {isMobile && <BoxesCore />}
        <div className="flex flex-col items-center justify-center z-10 max-w-6xl">
          <motion.h1
            layoutId="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold md:leading-tight"
          >
            Welcome to UnityWall
          </motion.h1>

          <motion.p
            layoutId="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white text-sm sm:text-base md:text-lg font-bold mt-4 md:mt-6 max-w-md sm:max-w-lg md:max-w-2xl"
          >
            We are a dedicated web development team focused on designing,
            developing, and maintaining modern, high-performance websites.
          </motion.p>
        </div>
      </div>

      <CTA />
    </div>
  );
}