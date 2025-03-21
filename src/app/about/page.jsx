"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Team members
const team = [
  {
    name: "Elijah Crofts",
    title: "Managing Director & Founder",
    image: "/images/team/Elijah.png",
    contact: "elijah@unitywall.co",
  },
  {
    name: "Iman Motlagh",
    title: "Technical Architect & Team Lead",
    image: "/images/team/Iman.png",
    contact: "iman@unitywall.co",
  },
  {
    name: "Michael Sanei",
    title: "Integration Engineer & Full-Stack",
    image: "/images/team/Michael.png",
    contact: "michael@unitywall.co",
  },
  {
    name: "Simeon Checherin",
    title: "Database Engineer & Full-Stack",
    image: "/images/team/Simeon.png",
    contact: "simeon@unitywall.co",
  },
  {
    name: "Jalen M. Johnson",
    title: "Social Media Manager",
    image: "/images/team/Jalen.png",
    contact: "jalen@unitywall.co",
  },
  {
    name: "Mey Spiegel",
    title: "UX and Design",
    image: "/images/team/mey.png",
    contact: "mey@unitywall.co",
  },
  {
    name: "Nassim Akbari",
    title: "Visual Design and Social Media",
    image: "/images/team/nassim.png",
    contact: "nassim@unitywall.co",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 py-10 px-4 md:px-8 text-gray-200">
      {/* Title */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet the Team
        </motion.h1>
      </div>

      {/* Team Members */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center w-full p-4 group border border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-2xl font-bold text-blue-300">
                  {member.name}
                </h2>
                <p className="text-gray-400 mt-2">{member.title}</p>
                <p className="text-gray-000 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.contact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
