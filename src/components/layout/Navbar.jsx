"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SocialMediaIcons from "../ui/linkedin-icon"; 

// Animation constants for FlipLink
const DURATION = 0.25;
const STAGGER = 0.025;

// FlipLink component
const FlipLink = ({ children, href, isActive, onClick }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap font-medium ${
        isActive ? "text-blue-500" : "text-black"
      }`}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 text-blue-500">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Define a custom LinkedIn icon component using our animated version
  const AnimatedLinkedInIcon = () => {
    return (
      <div className="scale-75">
        <SocialMediaIcons />
      </div>
    );
  };


  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm">
      <div className="container mx-auto flex justify-center items-center px-4 py-4 relative">
        {/* Centered Capsule for Desktop */}
        <div className="hidden md:flex bg-white rounded-full px-6 py-3 items-center justify-center">
          {/* Logo */}
          <Link href="/" className="mr-8">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer rounded-full"
            />
          </Link>

          {/* Nav Links with FlipLink animation */}
          <div className="flex items-center">
            {navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                {index > 0 && <div className="h-4 w-px bg-gray-300 mx-4"></div>}
                <FlipLink
                  href={link.href}
                  isActive={pathname === link.href}
                >
                  {link.label}
                </FlipLink>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links - Right Side */}
        <motion.div 
          className="hidden md:flex absolute right-1 items-center"
          whileHover={{ scale: 1.1, rotate: "10deg"}}
        >
          <a
            href="https://linkedin.com/company/unitywall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedLinkedInIcon />
          </a>
        </motion.div>

        {/* Mobile View */}
        <div className="md:hidden w-full">
          <div className="bg-white rounded-full px-5 py-3 flex items-center justify-between">
            <Link href="/">
              <Image
                src="/logo.png"
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
                className="text-black"
              >
                <MenuIcon />
              </button>) : (
              <button 
                onClick={toggleMenu}
                aria-label="close menu"
                className="text-black"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown with FlipLink animation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white mt-2 rounded-b-lg shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <FlipLink
                  key={link.href}
                  href={link.href}
                  isActive={pathname === link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </FlipLink>
              ))}

              {/* Social Links for Mobile */}
              <div className="flex items-center py-2">
                <a
                  href="https://linkedin.com/company/unitywall"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{color:"#0077b5"}}/>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}