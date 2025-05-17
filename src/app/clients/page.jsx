"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTA from "@/components/layout/CTA";

// Clients data
const clients = [
  {
    id: 1,
    title: "Mochinut Spring Hill",
    description:
      "A vibrant website for Mochinut Spring Hill, a specialty dessert shop known for their unique mochi donuts and innovative flavor combinations. The project aims to create an engaging online presence that showcases their colorful, creative menu offerings in a fun and interactive manner.",
    logo: "/images/mochiNutLogo.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://mochinutspringhill.com",
  },
  {
    id: 2,
    title: "Centro Studi Baha'i - Hotel la Panoramica",
    description:
      "A modern website for Centro Studi Baha'i - Hotel Panoramica, a hotel and conference center located in Aculto, Italy. The project aimed to create a user-friendly experience that highlights the hotel's amenities and scenic surroundings.",
    logo: "/images/hotelLaPanoramicaLogo.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://centrostudibahai.it",
  },
  {
    id: 3,
    title: "Client website in the works...",
    description:
      "This is a non-profit project that is currently in the works. More information and details about this project will be available soon. Stay tuned for updates!",
    logo: "",
    technologies: ["Coming Soon"],
  },
  {
    id: 4,
    title: "Client website in the works...",
    description:
      "This is a project that is currently in the works. More information and details about this project will be available soon. Stay tuned for updates!",
    logo: "",
    technologies: ["Coming Soon"],
  },
];

export default function Clients() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900"></div>

        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-blue-400">Clients</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Take a look at some of our current and past clients! Explore how we
            have helped businesses and organizations establish their digital
            presence (note: for privacy reasons, not all clients are listed).
          </motion.p>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 px-4 md:px-8">
        {" "}
        {/* Reduced vertical padding */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {clients.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="p-6 md:p-8">
                  {" "}
                  {/* Reduced padding inside the card */}
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 flex justify-center">
                      <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center border-4 border-blue-500 overflow-hidden">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          width={150}
                          height={150}
                          className="object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-3xl font-bold text-blue-300 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-700 text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          className="inline-block px-8 py-4 mt-2 mb-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
                        >
                          View Project
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-block px-8 py-4 mt-2 mb-2 bg-gray-500 text-gray-300 font-medium rounded-lg cursor-not-allowed opacity-70"
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* More Coming Soon Section */}
            <motion.div
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl p-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-blue-300 mb-6">
                More Coming Soon
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We're constantly working on new and exciting projects. Check
                back soon to see our growing portfolio of web development work.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  );
}
