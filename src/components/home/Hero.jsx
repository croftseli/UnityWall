"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import CTA from "../layout/CTA";

const PlaceholderImage = ({ className }) => (
  <div
    className={cn(
      "bg-gray-700 rounded-full w-64 h-64 flex items-center justify-center border-2 border-gray-500", // Adjust size w-64 h-64 as needed
      className
    )}
  >
    {/* Optional: text inside placeholder */}
    {/* <span className="text-gray-400 text-sm">Image Placeholder</span> */}
  </div>
);

export default function Hero() {
  return (
    <>
    {/* BOXES + TITLE */}
      <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
        <Boxes className="!top-1/3" />

        <div className="relative z-10 flex items-end justify-start h-screen pl-16 pr-0 pb-32 pointer-events-none">
          <div className="flex items-center space-x-16">
            <div className="box pointer-events-none">
              <div className="title">
                <div className="div">Welcome to</div>
                <div className="text-wrapper !top-[60px]">UnityWall</div>
              </div>
              <div className="line" />
              <div className="p whitespace-normal leading-relaxed max-w-[560px]">
                We are a dedicated web development team focused on<br />
                designing, developing, and maintaining modern, high-<br />
                performance websites.
              </div>
            </div>
            <div>
              <Link href="/projects" passHref>
                <button
                  className="
                    pointer-events-auto
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
    
        {/* Gradient divider*/}
       <div className="absolute bottom-0 left-0 right-0 h-32 z-[5] bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>

      </div>


   {/* BODY */}
      <div className="bg-gray-800 text-white py-20 px-4 sm:px-8 lg:px-16 xl:px-24"> {/* Added xl:px-24 for more space on larger screens */}
        {/* "What do we do?" Title - Aligned Left */}
        <h2 className="text-5xl md:text-3xl font-bold mb-16 md:mb-20 text-left">What do we do?</h2>

        {/* Service Item 1: Website Development */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 mb-20 md:mb-24 relative">
          {/* Image container */}
          <div className="md:w-auto flex justify-center relative">
            <div className="absolute inset-0 bg-gray-700/10 blur-3xl rounded-full -z-10 transform -translate-x-3 -translate-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"></div>
            {/* Actual Image 1 */}
            <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-2 border-gray-600">
              <Image
                src="/hero1.jpg" // Ensure hero1.jpg is in your /public folder
                alt="Website Development Service Image"
                layout="fill"
                objectFit="cover"
                className="rounded-full" // The image itself can also have rounded-full if needed, but overflow-hidden on parent is key
              />
            </div>
          </div>
          {/* Text container */}
          <div className="md:w-2/5 lg:w-[45%] xl:w-2/5 relative">
            <div className="absolute -left-6 -top-6 bg-gray-700/5 blur-2xl rounded-lg -z-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"></div>
            <h3 className="text-5xl lg:text-6xl font-semibold mb-5">Website Development</h3>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 w-1 bg-white rounded-full self-stretch min-h-[60px]"></div>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                We create custom, responsive websites tailored to your specific needs
                and brand identity. Our development process focuses on performance,
                accessibility, and user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Service Item 2: Website Maintenance */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-16 lg:gap-24 mb-20 md:mb-24 relative">
          {/* Image container */}
          <div className="md:w-auto flex justify-center relative">
            <div className="absolute inset-0 bg-gray-700/10 blur-3xl rounded-full -z-10 transform translate-x-3 -translate-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"></div>
            {/* Actual Image 2 */}
            <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-2 border-gray-600">
              <Image
                src="/hero2.jpg" // Ensure hero2.jpg is in your /public folder
                alt="Website Maintenance Service Image"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          {/* Text container */}
          <div className="md:w-2/5 lg:w-[45%] xl:w-2/5 relative">
            <div className="absolute -right-6 -top-6 bg-gray-700/5 blur-2xl rounded-lg -z-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"></div>
            <h3 className="text-5xl lg:text-6xl font-semibold mb-5">Website Maintenance</h3>
            <div className="flex items-start gap-3">
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                Keep your site running smoothly with our comprehensive maintenance
                services including security updates, performance optimization, content
                updates, and technical support.
              </p>
              <div className="mt-1.5 w-1 bg-white rounded-full self-stretch min-h-[60px]"></div>
            </div>
          </div>
        </div>

        {/* Service Item 3: Social Media, Branding */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 mb-24 md:mb-32 relative">
           {/* Image container */}
          <div className="md:w-auto flex justify-center relative">
            <div className="absolute inset-0 bg-gray-700/10 blur-3xl rounded-full -z-10 transform -translate-x-3 -translate-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"></div>
            {/* Actual Image 3 */}
            <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-2 border-gray-600">
              <Image
                src="/hero3.jpg" // Ensure hero3.jpg is in your /public folder
                alt="Social Media and Branding Service Image"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          {/* Text container */}
          <div className="md:w-2/5 lg:w-[45%] xl:w-2/5 relative">
            <div className="absolute -left-6 -top-6 bg-gray-700/5 blur-2xl rounded-lg -z-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"></div>
            <h3 className="text-5xl lg:text-6xl font-semibold mb-5">Social Media, Branding Solutions, and More.</h3>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 w-1 bg-white rounded-full self-stretch min-h-[60px]"></div>
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                Transform your social media presence with advice from our experienced
                social team. Powerful Social media more sales! Need to manage your
                platform too? Look no further!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pb-10 pt-8">
          <h3 className="text-3xl lg:text-4xl font-semibold mb-5">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-8 max-w-lg lg:max-w-xl mx-auto text-base lg:text-lg">
            Let's discuss how we can help bring your vision to life. Contact us today to get started.
          </p>
          <Link href="/contact" passHref>
            <button
              className="
                px-10 py-4
                bg-blue-500
                text-white
                rounded-md uppercase tracking-wider
                font-semibold transition text-base lg:text-lg
                hover:bg-blue-600
              "
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}