"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative text-white overflow-hidden pt-16 bg-transparent -mt-12">
      {/* SVG Background */}
      <div
        className="absolute bottom-0 left-0 w-full hidden md:block"
        style={{ height: "600px" }}
      >
        <img
          src="/Footer/footer.svg"
          alt="Decorative background overlay"
          className="absolute bottom-0 left-0 w-full object-cover object-bottom z-0"
          style={{
            height: "600px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
      </div>

      <div className="relative z-10" style={{ transform: "translateY(-64px)" }}>
        {/* CTA Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center pb-12 md:pb-16 pt-8"
        >
          {/* Desktop CTA */}
          <div className="hidden md:block p-16">
            <motion.h3 variants={fadeIn} className="cta-title">
              Ready to Start Your Project?
            </motion.h3>
            <motion.p variants={fadeIn} className="cta-body-text px-4">
              Let's discuss how we can help bring your vision to life. Contact us
              today to get started.
            </motion.p>
            <motion.div variants={fadeIn} className="pointer-events-auto">
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

          {/* Mobile CTA */}
          <div className="md:hidden grid grid-cols-2 gap-4 px-4 items-center">
            <motion.div variants={fadeIn} className="text-left">
              <motion.h3 className="text-l text-center font-bold mb-4 pt-14">
                Ready to Start Your Project?
              </motion.h3>
              <motion.p className="text-sm text-center mb-8">
                Let's discuss how we can help bring your vision to life. Contact
                us now to get started.
              </motion.p>
              <motion.div className="pointer-events-auto text-center">
                <Link href="/contact" passHref>
                  <motion.button
                    className="cta-button text-center py-2 px-4"
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
            <motion.div variants={fadeIn}>
              <Image
                src="/unitywall logos/Icon Logo Transparent.png"
                alt="UnityWall Logo"
                width={300}
                height={64}
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
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/unitywall logos/Icon Logo Transparent.png"
                alt="UnityWall Logo"
                width={300}
                height={144}
                className="mb-4 rounded-lg translate-y-8 translate-x-[-12px]"
              />
              <p className="text-xl translate-y-[-24px] translate-x-[-64px] relative left-8 mb-6 text-white">
                <span className="font-bold">UnityWall.co</span> is a dedicated team focused on <br /> designing,
                developing, and maintaining <br /> modern, high-performance
                websites.
              </p>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              className="flex flex-col items-center md:items-start mt-60"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-1 text-white pt-13">Contact Us</h3>
              <div className="space-y-1 mb-1 text-white">
                <p>
                  <span className="font-semibold">Email: </span>
                  <a
                    href="mailto:support@unitywall.co"
                    className="text-white hover:underline underline"
                  >
                    support@unitywall.co
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone: +1 (615)-424-3176</span>
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-col items-center md:ml-8 mt-48"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3 text-center">
                {[
                  { href: "/", text: "Home" },
                  { href: "/clients", text: "Clients" },
                  { href: "/team", text: "About" },
                  { href: "/contact", text: "Contact Us" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>







          {/* Mobile Layout */}
          <div className="md:hidden space-y-3">
            <div className="grid grid-cols-[1.2fr_1fr] gap-6 px-2">
              {/* Contact Us */}
              <motion.div
                className="flex flex-col items-start"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="translate-x-12 text-base font-bold mb-3 text-white">
                  Contact Us
                </h3>
                <div className="translate-x-16 space-y-2 text-white text-sm">
                  <p className="break-words">
                    <span className="font-semibold block mb-1">Email:</span>
                    <a
                      href="mailto:support@unitywall.co"
                      className="text-white hover:underline underline break-all"
                    >
                      support@unitywall.co
                    </a>
                  </p>
                  <p className="break-words">
                    <span className="font-semibold block mb-1">Phone:</span>
                    <span className="text-white">+1 (615)-424-3176</span>
                  </p>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                className="flex flex-col items-start"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-center font-bold mb-2 translate-x-[-8px] text-white">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm text-center">
                  {[
                    { href: "/", text: "Home" },
                    { href: "/clients", text: "Clients" },
                    { href: "/team", text: "About" },
                    { href: "/contact", text: "Contact Us" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Logo and Description */}
            <motion.div
              className="flex flex-col items-center pt-3"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-center text-white text-center pt-6">
                <span className="font-bold">UnityWall.co</span> is a dedicated team focused on designing, developing,
                and maintaining modern, high-performance websites.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-zinc-800/80 py-4 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          UnityWall. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}