"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const sectionContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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

  // Cool floating animation for sections
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Stagger animation for links
  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Glow effect on hover
  const glowVariants = {
    initial: { filter: "brightness(1)" },
    hover: { 
      filter: "brightness(1.2)",
      textShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="relative text-white overflow-hidden pt-16 bg-transparent -mt-12">     
          {/* SVG Background - Fixed to maintain height while scaling width */}
          <div className="absolute bottom-0 left-0 w-full hidden md:block" style={{ height: '600px' }}>
            <img
              src="/Footer/footer.svg"
              alt="Decorative background overlay"
              className="absolute bottom-0 left-0 w-full object-cover object-bottom z-0"
              style={{ 
                height: '600px',
                objectFit: 'cover',
                objectPosition: 'bottom'
              }}
            />
          </div>
          
          {/* Content container with proper z-index */}
          <div className="relative z-10" style={{ transform: 'translateY(-64px)' }}>
            {/* CTA Section */}
            <motion.div
              variants={sectionContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center pb-12 md:pb-16 pt-8"
            >
              {/* Desktop CTA */}
              <div className="hidden md:block">
                <motion.h3 
                  variants={sectionChildVariants} 
                  className="cta-title"
                  animate={floatingAnimation}
                >
                  Ready to Start Your Project?
                </motion.h3>
                <motion.p variants={sectionChildVariants} className="cta-body-text px-4">
                  Let's discuss how we can help bring your vision to life. Contact us
                  today to get started.
                </motion.p>
                <motion.div
                  variants={sectionChildVariants}
                  className="pointer-events-auto"
                >
                  <Link href="/contact" passHref>
                    <motion.button 
                      className="cta-button"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 40px rgba(59, 130, 246, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile CTA - Two Columns */}
              {/* Mobile CTA - Two Columns */}
    <div className="md:hidden grid grid-cols-2 gap-4 px-4 items-center">
      <motion.div 
        variants={sectionChildVariants}
        className="text-left"
      >
        <motion.h3 
          className="text-xl font-bold mb-3"
        >
          Ready to Start Your Project?
        </motion.h3>
        <motion.p className="text-sm mb-4">
          Let's discuss how we can help bring your vision to life. Contact us
          today to get started.
        </motion.p>
        <motion.div className="pointer-events-auto">
          <Link href="/contact" passHref>
            <motion.button 
              className="cta-button text-sm py-2 px-4"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 40px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        variants={sectionChildVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.15 }}
      >
        <Image
          src="/unitywall logos/Icon Logo Transparent.png"
          alt="UnityWall Logo"
          width={200}
          height={96}
          className="rounded-lg"
        />
      </motion.div>
    </div>
        </motion.div>

        <div className="container mx-auto px-6 md:px-10 py-4 md:py-8">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-12">
            {/* About Section */}
            <motion.div 
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              >
                <Image
                  src="/unitywall logos/Icon Logo Transparent.png"
                  alt="UnityWall Logo"
                  width={250}
                  height={120}
                  className="mb-4 rounded-lg"
                />
              </motion.div>
              <motion.p 
                className="text-lg font-bold mb-6 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                UnityWall is a dedicated team focused on designing, developing,
                and maintaining modern, high-performance websites.
              </motion.p>
            </motion.div>
            
            {/* Contact Us */}
            <motion.div 
              className="flex flex-col items-center md:items-start mt-60"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h3 
                className="text-lg font-bold mb-6 text-white" 
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
              >
                Contact Us
              </motion.h3>
              <motion.div 
                className="space-y-3 text-gray-300"
                variants={linkContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p variants={linkItemVariants}>
                  <span className="font-semibold">Email: </span>
                  <motion.a
                    href="mailto:support@unitywall.co"
                    className="text-blue-500 hover:underline"
                    whileHover={{ scale: 1.05, color: "#60a5fa" }}
                  >
                    support@unitywall.co
                  </motion.a>
                </motion.p>
                <motion.p 
                  variants={linkItemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-semibold">Phone: +1 (615)-424-3176</span>
                </motion.p>
              </motion.div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div 
              className="flex flex-col items-center md:items-end md:ml-8 mt-48"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h3 
                className="text-lg font-bold mb-6 text-white" 
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
              >
                Quick Links
              </motion.h3>
              <motion.ul 
                className="space-y-3"
                variants={linkContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { href: "/", text: "Home" },
                  { href: "/clients", text: "Clients" },
                  { href: "/team", text: "About" },
                  { href: "/contact", text: "Contact Us" },
                ].map((link) => (
                  <motion.li
                    key={link.href}
                    variants={linkItemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors relative group"
                    >
                      <span className="relative z-10">{link.text}</span>
                      <motion.span
                        className="absolute inset-0 bg-blue-500 opacity-0 rounded-md -z-10"
                        whileHover={{ opacity: 0.2, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Mobile Layout - Compact */}
          <div className="md:hidden space-y-3">
            {/* Two Column Layout for Contact and Quick Links */}
            <div className="grid grid-cols-[1.2fr_1fr] gap-6 px-2">
              {/* Contact Us Column */}
              <motion.div 
                className="flex flex-col items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.h3 
                  className="text-base font-bold mb-3 text-white" 
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Contact Us
                </motion.h3>
                <motion.div 
                  className="space-y-2 text-gray-300 text-sm"
                  variants={linkContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.p variants={linkItemVariants} className="break-words">
                    <span className="font-semibold block mb-1">Email:</span>
                    <motion.a
                      href="mailto:support@unitywall.co"
                      className="text-blue-400 hover:underline break-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      support@unitywall.co
                    </motion.a>
                  </motion.p>
                  <motion.p 
                    variants={linkItemVariants}
                    className="break-words"
                  >
                    <span className="font-semibold block mb-1">Phone:</span>
                    <span className="text-gray-300">+1 (615)-424-3176</span>
                  </motion.p>
                </motion.div>
              </motion.div>
              
              {/* Quick Links Column */}
              <motion.div 
                className="flex flex-col items-start"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.h3 
                  className="text-base font-bold mb-3 text-white" 
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Quick Links
                </motion.h3>
                <motion.ul 
                  className="space-y-2 text-sm"
                  variants={linkContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { href: "/", text: "Home" },
                    { href: "/clients", text: "Clients" },
                    { href: "/team", text: "About" },
                    { href: "/contact", text: "Contact Us" },
                  ].map((link) => (
                    <motion.li
                      key={link.href}
                      variants={linkItemVariants}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.text}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            {/* Logo and Description - Below the columns */}
            <motion.div 
              className="flex flex-col items-center pt-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-sm font-bold text-white text-center px-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                UnityWall is a dedicated team focused on designing, developing,
                and maintaining modern, high-performance websites.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
        
      {/* Copyright */}
      <div className="bg-zinc-800/80 py-4 backdrop-blur-sm mt-6 md:mt-0 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          UnityWall. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}