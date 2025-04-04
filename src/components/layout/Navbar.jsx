"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Import Material UI icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className= "fixed top-0 w-full z-50 shadow-sm"
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
      }}
    >
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

          {/* Nav Links */}
          <div className="flex items-center">
            {navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                {index > 0 && <div className="h-4 w-px bg-gray-300 mx-4"></div>}
                <Link
                  href={link.href}
                  className={`font-medium transition-colors hover:text-blue-500 ${
                    pathname === link.href ? "text-blue-500" : "text-black"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links - Right Side */}
        <motion.div 
          className="hidden md:flex absolute right-6 items-center space-x-6"
          whileHover={{ scale: 1.1, rotate: "10deg"}}
        >
          <a
            href="https://linkedin.com/company/unitywall"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <LinkedInIcon />
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white mt-2 rounded-b-lg shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium py-2 transition-colors hover:text-blue-500 ${
                    pathname === link.href ? "text-blue-500" : "text-black"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Social Links for Mobile */}
              <div className="flex items-center py-2">
                <a
                  href="https://linkedin.com/company/unitywall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}