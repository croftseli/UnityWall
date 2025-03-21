"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Image carousel */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Developing and maintaining websites"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Businesses with{" "}
            <span className="text-blue-600">UnityWall</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We are a dedicated team focused on designing, developing, and
            maintaining modern, high-performance websites.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/services">
              <span className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Our Services
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
