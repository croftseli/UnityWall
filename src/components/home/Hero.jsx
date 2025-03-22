"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="min-h-[600px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <div className="flex flex-col items-center justify-center z-10">
        <h1 className="text-center text-white text-8xl font-bold">Welcome to Unity Wall</h1>

        <p className="text-center text-white font-bold mt-6">
          We are a dedicated web development team focused on designing, developing, and maintaining modern, high-performance websites. 
        </p>
      </div>
    </div>
  );
}
