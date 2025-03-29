"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="min-h-[600px] md:min-h-[800px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="flex flex-col items-center justify-center z-10 max-w-5xl">
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
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-900 to-blue-700 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-extrabold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how we can help bring your vision to life. Contact us
            today to get started.
          </motion.p>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg shadow-blue-500/50 transform hover:scale-105 transition duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
