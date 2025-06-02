"use client";

import Link from "next/link";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="bg-zinc-700 text-white">
      <div className="container mx-auto px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/unitywall logos/Full Logo.jpg"
              alt="UnityWall Logo"
              width={150}
              height={70}
              className="mb-4 rounded-lg"
            />
            <p className="text-gray-300 mb-6 text-center md:text-left">
              UnityWall is a dedicated team focused on designing, developing,
              and maintaining modern, high-performance websites.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
            
              <li>
                <Link
                  href="/clients"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-blue-300">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:support@unitywall.co"
                  className="text-blue-500 hover:underline"
                >
                  support@unitywall.co
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone: +1 (615)-424-3176</span>
              </p>
              <p className="pt-4">
                <Link
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors inline-block mt-2"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-zinc-800 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} UnityWall. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
