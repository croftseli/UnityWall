"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import CTA from "../layout/CTA";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="min-h-[600px] md:min-h-[800px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center px-4">
        {/* Code symbol background */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-10">
          <div className="text-white text-[400px] font-bold font-mono transform -rotate-6">
            &lt;/&gt;
          </div>
        </div>
        
        {/* Blur overlay */}
        <div className="absolute inset-0 w-full h-full bg-slate-900/30 backdrop-blur-sm z-10" />
        
        {/* Additional radial mask */}
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <div className="flex flex-col items-center justify-center z-30 max-w-5xl">
          <h1 className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
            Welcome to Unity Wall
          </h1>

          <p className="text-center text-white text-sm sm:text-base md:text-lg font-bold mt-4 md:mt-6 max-w-md sm:max-w-lg md:max-w-2xl">
            We are a dedicated web development team focused on designing,
            developing, and maintaining modern, high-performance websites.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}