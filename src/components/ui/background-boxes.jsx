"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BoxesCore = ({
  className,
  ...rest
}) => {
  const rows = new Array(100).fill(1);
  const cols = new Array(50).fill(1);
  
  // Changed to brick colors
  let colors = [
  "#3B82F6", // blue-500 (Your CTA button color)
  "#60A5FA", // blue-400 (A lighter, vibrant blue)
  "#2563EB", // blue-600 (Your CTA button hover color)
  "#93C5FD", // blue-300 (A softer, lighter blue)

  // Whites and Grays
  // "#FFFFFF", // White (Matches text and lines)
  // "#E5E7EB", // gray-200 (A light gray, provides subtle contrast)
  // "#D1D5DB", // gray-300 (Matches some of your paragraph text)
  // "#9CA3AF", // gray-400 (Matches your dimmer CTA text)
  ];
  
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}>
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="relative h-8 w-16 border-l border-slate-700">
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-slate-700">
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);