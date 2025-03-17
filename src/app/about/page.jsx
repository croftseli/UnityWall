'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Team members
const team = [
  {
    name: "Elijah Crofts",
    title: "Project Manager",
    image: "/images/team/elijah.jpg",
    contact: "elijah@unitywall.co",
    bio: "Elijah is a full-stack developer with a passion for dick.",
  },
  {
    name: "Iman Motlagh",
    title: "Full-Stack Developer",
    image: "/images/team/iman.jpg",
    contact: "iman@unitywall.co",
    bio: "Communist Safron Sniffer.",
  },
  {
    name: "Michael Sanei",
    title: "Full-Stack Developer",
    image: "/images/team/michael.jpg",
    contact: "michael@unitywall.co",
    bio: "Michael is a full-stack developer with a passion for building beautiful and functional web applications.",
  },
  {
    name: "Simeon Checherin",
    title: "Full-Stack Developer",
    image: "/images/team/simeon.jpg",
    contact: "simeon@unitywall.co",
    bio: "Simeon is also a commie and his passport says Semen.",
  },
  {
    name: "Jalen M. Johnson",
    title: "Social Media Manager",
    image: "/images/team/jalen.jpg",
    contact: "jalen@unitywall.co",
    bio: "Jalen is an upstanding citizen of the black community.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
      {/* Title */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-amber-700"
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
          {team.slice().map((member, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={300}
                layout="responsive"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-amber-700">{member.name}</h2>
                <p className="text-gray-600 mt-2">{member.title}</p>
                <p className="text-gray-500 text-sm mt-2">{member.contact}</p>
                <p className="text-gray-700 mt-4 flex-grow">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
