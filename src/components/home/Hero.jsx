"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import CTA from "../layout/CTA";
export default function Hero() {
  return (
<div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
  <Boxes className="!top-1/3" />

  {/* only this wrapper changes */}
  <div className="relative z-10 flex items-end justify-start h-screen pl-16 pr-0 pb-32 pointer-events-none">
    <div className="flex items-center space-x-16">
      <div className="box pointer-events-none">
        <div className="title">
          <div className="div">Welcome to</div>
          <div className="text-wrapper !top-[60px]">UnityWall</div>
        </div>
        <div className="line" />

        {/* tightened up wrapping + relaxed line-height */}
        <div className="p whitespace-normal leading-relaxed max-w-[560px]">
          We are a dedicated web development team focused on<br />
          designing, developing, and maintaining modern, high-<br />
          performance websites.
        </div>
      </div>
          {/* right button; re-enable events here */}
          <div>
            <Link href="/projects" passHref>
              <button
                className="
                  pointer-events-auto      /* <<< catch clicks again */
                  inline-block px-6 py-3 
                  border border-white 
                  rounded-md uppercase tracking-wider 
                  font-semibold transition
                  hover:bg-white hover:text-gray-900
                "
              >
                VIEW PROJECTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}