"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SocialMediaIcons from "/src/components/ui/linkedin-icon.jsx";

// Animation constants for FlipLink
const DURATION = 0.25;
const STAGGER = 0.025;

// FlipLink component
const FlipLink = ({ children, href, isActive, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    initial="initial"
    whileHover="hovered"
    className={`relative block overflow-hidden whitespace-nowrap font-medium ${
      isActive ? "text-white" : "text-gray-300"
    }`}
  >
    {/* bottom (exiting) letters */}
    <div>
      {children.split("").map((l, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
          className="inline-block"
        >
          {l}
        </motion.span>
      ))}
    </div>
    {/* top (incoming) letters */}
    <div className="absolute inset-0 text-white">
      {children.split("").map((l, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
          className="inline-block"
        >
          {l}
        </motion.span>
      ))}
    </div>
  </motion.a>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/clients", label: "Clients" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "About\u00A0us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 p-4">
      <div className="container mx-auto relative flex items-center">
        <Link href="/">
          <div className="hidden lg:flex w-16 h-16 items-center justify-center hover:scale-110 transition-transform">
            {" "}
            <Image
              src="/icons/Unitywall.png"
              alt="UW"
              width={58}
              height={58}
              className="rounded-full"
            />
          </div>
        </Link>
        <div className="flex-1 hidden lg:block" />

        {/* CAPSULE NAV */}
        <div
          className="
            hidden lg:flex
            absolute left-1/2 transform -translate-x-1/2
            items-center
            bg-gradient-to-r from-lime-200 via-gray-600 to-sky-200
            p-1 rounded-full
          "
        >
          <div className="bg-gray-800 rounded-full flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-2 space-x-8 lg:space-x-16 xl:space-x-24">
            {navLinks.map((link) => (
              <FlipLink
                key={link.href}
                href={link.href}
                isActive={pathname === link.href}
                onClick={() => {}}
              >
                {link.label}
              </FlipLink>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center">
          <a
            href="https://linkedin.com/company/unitywall"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <SocialMediaIcons />
          </a>
        </div>
      </div>

      {/* Mobile View*/}
      <div className="lg:hidden w-full">
        <div className="navbar-gradient navbar-border rounded-full px-5 py-3 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/unitywall logos/Icon Logo Full Background.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer rounded-full"
            />
          </Link>
          {!isMenuOpen ? (
            <button
              onClick={toggleMenu}
              aria-label="toggle menu"
              className="text-white"
            >
              <MenuIcon />
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              aria-label="close menu"
              className="text-white"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown*/}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white mt-2 rounded-b-lg shadow-lg">
          <div className="container mx-auto px-4 flex flex-col divide-y divide-gray-200">
            {navLinks.map((link) => (
              <div key={link.href} className="text-right py-3">
                <Link
                  href={link.href}
                  className={`font-medium text-lg ${
                    pathname === link.href ? "text-blue-500" : "text-black"
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </div>
            ))}

            {/* Social Links for Mobile - will also get a divider line above it */}
            <div className="text-right py-3">
              <a
                href="https://linkedin.com/company/unitywall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <LinkedInIcon sx={{ color: "#0077b5", fontSize: "1.75rem" }} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}