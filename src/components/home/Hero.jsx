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
    <>
{/* BOXES + TITLE */}
<div className="relative min-h-screen bg-gray-800 text-white overflow-hidden">
  <Boxes className="!top-1/3" />

  {/* Mobile adjustments: center content and add responsive padding */}
  <div className="relative z-10 flex items-end justify-center md:justify-start h-screen px-4 md:pl-16 pb-10 md:pb-32 md:pr-0 pointer-events-none">
    <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-16 w-full max-w-5xl">
      <div className="box pointer-events-none relative text-center md:text-left w-full">
        {/* Shadow image with responsive scaling */}
        <img
          src="/mainTextShadow.png"
          alt="Background"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-full h-auto max-w-full max-h-full scale-125 md:scale-200"
        />

        <div className="title flex flex-col items-center md:block">
          <div className="div text-xl md:text-2xl lg:text-3xl">Welcome to</div>
          {/* MODIFIED: Added mt-2 for mobile to lower the title slightly */}
          <div className="text-wrapper !top-[40px] mt-2 md:mt-0 md:!top-[60px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            UnityWall
          </div>
        </div>

        {/* Mobile button positioned between title and body */}
        <div className="mt-8 mb-6 md:hidden">
          <Link href="/projects" passHref>
            <button className="cta-button pointer-events-auto transform scale-90 md:scale-100 hover:scale-95 transition-transform">
              VIEW PROJECTS
            </button>
          </Link>
        </div>

        {/* Line hidden on mobile */}
        <div className="line hidden md:block" />

        {/* Responsive paragraph with mobile-specific styling */}
        <div className="p whitespace-normal leading-relaxed text-sm md:text-base max-w-full xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[560px] mx-auto md:mx-0 mt-4 md:mt-0">
          <span className="hidden md:inline">
            We are a dedicated web development team focused on<br />
            designing, developing, and maintaining modern, high-<br />
            performance websites.
          </span>
          <span className="md:hidden">
            We are a dedicated web development team focused on designing, developing,
            and maintaining modern, high-performance websites.
          </span>
        </div>
      </div>

      {/* Desktop button */}
      {/* MODIFIED: Added md:ml-8 (or md:ml-auto for far right) to push it more to the right on desktop */}
      <div className="hidden md:block pointer-events-auto md:ml-8"> {/* You can also try md:ml-auto */}
        <Link href="/projects" passHref>
          <button className="cta-button hover:scale-105 transition-transform">
            VIEW PROJECTS
          </button>
        </Link>
      </div>
    </div>
  </div>

    
        {/* Gradient divider*/}
       <div className="absolute bottom-0 left-0 right-0 h-32 z-[5] bg-gradient-to-t from-gray-700 to-transparent pointer-events-none"></div>

      </div>


   {/* BODY */}
      <div className="bg-gray-700 text-white py-20 px-4 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden"> 
      {/* "What do we do?" Title */}
      <img
        src="/mainBodyShadow.svg"
        alt="Background shadow effect"
        className="absolute inset-0 w-full h-full z-[0] pointer-events-none object-fill opacity-50 transform scale-125"
      />
        <h2 className="text-5xl md:text-3xl font-bold mb-16 md:mb-20 text-left">What do we do?</h2>

        {/* Service Item 1: Website Development */}
<div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 mb-20 md:mb-24 relative translate-x-4">
    <div className="md:w-auto flex justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-700/10 blur-3xl rounded-full -z-10 transform -translate-x-3 -translate-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"></div>
      {/* Image container */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
        <Image
          src="/hero1.jpg"
          alt="Website Development Service Image"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
    <div className="md:w-2/5 lg:w-[45%] xl:w-2/5 relative md:ml-16 md:translate-x-16"> 
      <div className="absolute -left-6 -top-6 bg-gray-700/5 blur-2xl rounded-lg -z-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"></div>
      <h3 className="service-title-matched text-5xl lg:text-6xl mb-5">
        Website <br /> Development
      </h3>
      <div className="flex items-start gap-10">
        <div className="service-line-matched mt-1.5 rounded-full self-stretch min-h-[60px]"></div>
        <p className="leading-relaxed text-base lg:text-lg website-maintenance-body">
          We create custom, responsive websites tailored to your specific needs <br />
          and brand identity. Our development process focuses on performance, <br />
          accessibility, and user experience.
        </p>
      </div>
    </div>
  </div>



       {/* Service Item 2: Website Maintenance */}
    {/* Tailwind classes for layout are kept, but text styling classes are for styles.css */}
<div className="flex flex-col md:flex-row-reverse items-center justify-end gap-12 md:gap-16 lg:gap-24 mb-20 md:mb-24 relative">
      {/* Image container */}
<div className="md:w-auto flex justify-center relative md:translate-x-10 lg:translate-x-16 xl:translate-x-38 overflow-hidden">        <div className="absolute inset-0 bg-gray-700/10 blur-3xl rounded-full -z-10 transform translate-x-3 -translate-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"></div>
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-90 md:h-90 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/hero2.jpg" 
            alt="Website Maintenance Service Image"
            layout="fill"
   
          />
        </div>
      </div>
      {/* Text container */}
      <div className="md:w-2/5 lg:w-[45%] xl:w-2/5 relative text-right"> {/* text-right from Tailwind for alignment */}
        <div className="absolute -left-6 -top-6 bg-gray-700/5 blur-2xl rounded-lg -z-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"></div>
        {/* Title */}
        <h3 className="text-5xl lg:text-6xl mb-5 website-maintenance-title">
        Website<br /> Maintenance
        </h3>
        {/* Body text container */}
        <div className="flex flex-row-reverse items-start gap-10">
          <div className="service-line-matched mt-1.5 rounded-full self-stretch min-h-[60px]"></div>
          {/* Body text */}
          <p className="leading-relaxed text-base lg:text-lg website-maintenance-body">
            Keep your site running smoothly with our comprehensive maintenance
            <br /> services including security updates, performance optimization, content
            <br /> updates, and technical support.
          </p>
        </div>
      </div>
    </div>

        {/* Service Item 3: Social Media, Branding */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 mb-20 md:mb-24 relative translate-x-4">
          {/* Image container */}
        <div className="md:w-auto flex justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-700/10 blur-3xl rounded-full -z-10 transform -translate-x-3 -translate-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"></div>
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-2 border-gray-600">
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
        <div className="md:w-2/5 lg:w-[45%] xl:w-2/5 relative md:ml-16 md:translate-x-16">
          <div className="absolute -left-6 -top-6 bg-gray-700/5 blur-2xl rounded-lg -z-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"></div>
          <h3 className="service-title-matched text-5xl lg:text-6xl font-semibold mb-5 social-media-title">Social Media,<br /> Branding Solutions,<br /> and More.</h3>
          <div className="flex items-start gap-10">
          <div className="service-line-matched mt-1.5 rounded-full self-stretch min-h-[60px]"></div>
            <p className="leading-relaxed text-base lg:text-lg website-maintenance-body">
              Transform your social media presence with advice from our experienced<br />
              social team. Powerful Social media more sales! Need to manage your<br />
              platform too? Look no further!
            </p>
          </div>
        </div>
      </div>

        {/* CTA Section */}
      <div className="text-center pb-10 pt-8">
      <h3 className="cta-title">Ready to Start Your Project?</h3>
      <p className="cta-body-text">
        Let's discuss how we can help bring your vision to life. Contact us today to get started.
      </p>
      <Link href="/contact" passHref>
        <button className="cta-button">
          Contact Us
        </button>
      </Link>
    </div>
      </div>
    </>
  );
}