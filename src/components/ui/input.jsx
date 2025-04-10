"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const radius = 100; // change this to increase the radius of the hover effect
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        #3b82f6,
        transparent 80%
      )
    `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-lg p-[2px] transition duration-300">
      <input
        type={type}
        className={cn(
          `w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props} />
    </motion.div>
  );
});
Input.displayName = "Input";

export { Input };