"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Boxes } from "../ui/background-boxes";
import { BoxesCore } from "../ui/boxes-mobile";
import useMediaQuery from "@/lib/useMediaQuery";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Hooks for scroll-triggered animations
  const inViewOptions = {
    triggerOnce: true,
    threshold: 0.3,
  };


  const { ref: refWhat, inView: inViewWhat } = useInView(inViewOptions);
  const { ref: ref1, inView: inView1 } = useInView(inViewOptions);
  const { ref: ref2, inView: inView2 } = useInView(inViewOptions);
  const { ref: ref3, inView: inView3 } = useInView(inViewOptions);
  const { ref: refCta, inView: inViewCta } = useInView(inViewOptions);

  // --- Animation Variants ---
  const heroContainerVariants = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.25,
      },
    },
  };

  const heroChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 40 },
    },
  };

  const buttonFadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, delay: 1.1 } }, // delay for the button
  };

  const unitywallText = "UnityWall".split("");
  const letterContainerVariants = {
    visible: { transition: { staggerChildren: 0.09 } }, // letter cascade timing
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  //Body & CTA Sections (On-Scroll):

  const headingSlideInVariant = {
    hidden: { opacity: 0, x: -250 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 20,
      },
    },
  };

  const sectionContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const imagePopInVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 15,
      },
    },
  };
  const sectionChildVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <>
      {/* BOXES + TITLE */}
      <div className="relative min-h-screen bg-gray-800 text-white overflow-hidden">
        {isDesktop && <Boxes className="!top-1/4" />}
        {isMobile && <BoxesCore className="!top-1/3" />}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 pb-10 pointer-events-none md:items-start md:justify-end md:pl-16 md:pb-32 md:pr-0">
          <div className="w-full max-w-5xl">
            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="box pointer-events-none relative w-full z-10"
            >
              <motion.img
                src="/mainTextShadow.png"
                alt="Background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] md:-translate-y-1/2 z-[-1] w-full h-auto max-w-full max-h-full scale-125 md:scale-200 pointer-events-none"
              />
              <div className="title flex flex-col items-center md:items-start">
                {" "}
                <motion.div
                  variants={heroChildVariants}
                  className="div text-xl md:text-2xl lg:text-3xl"
                >
                  Welcome to
                </motion.div>
                <motion.div
                  variants={letterContainerVariants}
                  className="text-wrapper text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  {unitywallText.map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              <div className="md:flex md:items-center md:space-x-8 mt-6 md:mt-6">
                {" "}
                <motion.div
                  variants={heroChildVariants}
                  className="line hidden md:block"
                />
                <motion.div
                  variants={heroChildVariants}
                  className="p whitespace-normal leading-relaxed text-sm max-w-full mx-auto text-center md:mx-0 md:text-base md:text-left xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[560px]"
                >
                  <span className="hidden md:inline">
                    We are a dedicated web development team focused on
                    <br />
                    designing, developing, and maintaining modern, high-
                    <br />
                    performance websites.
                  </span>
                  <span className="md:hidden">
                    We are a dedicated web development team focused on
                    designing, developing, and maintaining modern,
                    high-performance websites.
                  </span>
                </motion.div>
                {/* Desktop "View Clients" button */}
                <motion.div
                  variants={buttonFadeIn}
                  initial="hidden"
                  animate="visible"
                  className="hidden md:block pointer-events-auto md:ml-auto"
                >
                  <Link href="/clients" passHref>
                    <button className="cta-button hover:scale-105 transition-transform">
                      View Clients
                    </button>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile "View Clients" button */}
              <motion.div variants={buttonFadeIn}>
                <div className="mt-8 mb-6 md:hidden pointer-events-auto">
                  <Link href="/clients" passHref>
                    <button className="cta-button transform scale-90 md:scale-100 hover:scale-95 transition-transform">
                      View Clients
                    </button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 z-[5] bg-gradient-to-t from-gray-700 to-transparent pointer-events-none"></div>
      </div>

      {/* BODY */}

      <div className="bg-gray-700 text-white py-20 px-4 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden">
        <img
          src="/mainBodyShadow.svg"
          alt="Background shadow effect"
          className="absolute inset-0 w-full h-full z-[0] pointer-events-none object-fill opacity-50 transform scale-125"
        />
        <motion.h2
          ref={refWhat}
          variants={headingSlideInVariant}
          initial="hidden"
          animate={inViewWhat ? "visible" : "hidden"}
          className="text-5xl md:text-3xl font-bold mb-16 md:mb-20 text-left"
        >
          What do we do?
        </motion.h2>

        {/* Service Item 1: Website Development */}
        <motion.div
          ref={ref1}
          variants={sectionContainerVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 mb-20 md:mb-24 relative translate-x-4">
            <motion.div
              variants={imagePopInVariant}
              className="md:w-auto flex justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-700/10 blur-3xl rounded-full -z-10 transform -translate-x-3 -translate-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/hero1.jpg"
                  alt="Website Development Service Image"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </motion.div>
            <div className="md:w-2/5 lg:w-[45%] xl:w-2/5 relative md:ml-16 md:translate-x-16">
              <div className="absolute -left-6 -top-6 bg-gray-700/5 blur-2xl rounded-lg -z-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"></div>
              <motion.h3
                variants={sectionChildVariants}
                className="service-title-matched text-5xl lg:text-6xl mb-5"
              >
                Website <br /> Development
              </motion.h3>
              <motion.div
                variants={sectionChildVariants}
                className="flex items-start gap-10"
              >
                <div className="service-line-matched mt-1.5 rounded-full self-stretch min-h-[60px]"></div>
                <p className="leading-relaxed text-base lg:text-lg website-maintenance-body">
                  We create custom, responsive websites tailored to your
                  specific needs <br />
                  and brand identity. Our development process focuses on
                  performance, <br />
                  accessibility, and user experience.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Service Item 2: Website Maintenance */}
        <motion.div
          ref={ref2}
          variants={sectionContainerVariants}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row-reverse items-center justify-end gap-12 md:gap-16 lg:gap-24 mb-20 md:mb-24 relative">
            <motion.div
              variants={imagePopInVariant}
              className="md:w-auto flex justify-center relative md:translate-x-10 lg:translate-x-16 xl:translate-x-38 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-700/10 blur-3xl rounded-full -z-10 transform -translate-x-3 -translate-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-90 md:h-90 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/hero2.jpg"
                  alt="Website Maintenance Service Image"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </motion.div>
            <div className="md:w-2/5 lg:w-[45%] xl:w-2/5 relative text-right">
              <div className="absolute -left-6 -top-6 bg-gray-700/5 blur-2xl rounded-lg -z-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"></div>
              <motion.h3
                variants={sectionChildVariants}
                className="text-5xl lg:text-6xl mb-5 website-maintenance-title"
              >
                Website
                <br /> Maintenance
              </motion.h3>
              <motion.div
                variants={sectionChildVariants}
                className="flex flex-row-reverse items-start gap-10"
              >
                <div className="service-line-matched mt-1.5 rounded-full self-stretch min-h-[60px]"></div>
                <p className="leading-relaxed text-base lg:text-lg website-maintenance-body">
                  Keep your site running smoothly with our comprehensive
                  maintenance
                  <br /> services including security updates, performance
                  optimization, content
                  <br /> updates, and technical support.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Service Item 3: Social Media, Branding */}
        <motion.div
          ref={ref3}
          variants={sectionContainerVariants}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 mb-20 md:mb-24 relative translate-x-4">
            <motion.div
              variants={imagePopInVariant}
              className="md:w-auto flex justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-700/10 blur-3xl rounded-full -z-10 transform -translate-x-3 -translate-y-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-2 border-gray-600">
                <Image
                  src="/hero3.jpg"
                  alt="Social Media and Branding Service Image"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </motion.div>
            <div className="md:w-2/5 lg:w-[45%] xl:w-2/5 relative md:ml-16 md:translate-x-16">
              <div className="absolute -left-6 -top-6 bg-gray-700/5 blur-2xl rounded-lg -z-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)]"></div>
              <motion.h3
                variants={sectionChildVariants}
                className="service-title-matched text-5xl lg:text-6xl font-semibold mb-5 social-media-title"
              >
                Social Media,
                <br /> Branding, and More
              </motion.h3>
              <motion.div
                variants={sectionChildVariants}
                className="flex items-start gap-10"
              >
                <div className="service-line-matched mt-1.5 rounded-full self-stretch min-h-[60px]"></div>
                <p className="leading-relaxed text-base lg:text-lg website-maintenance-body">
                  Transform your social media presence with advice from our
                  experienced
                  <br />
                  social team. Powerful Social media more sales! Need to manage
                  your
                  <br />
                  platform too? Look no further!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section WAS MOVED TO THE FOOTER*/}
      </div>
    </>
  );
}
