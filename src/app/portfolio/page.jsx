"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Portfolio projects data
const projects = [
  {
    id: 1,
    title: "MochiNut SpringHill",
    description:
      "A vibrant website for MochiNut SpringHill, a specialty dessert shop known for their unique mochi donuts and innovative flavor combinations. The project focused on creating an engaging online presence that showcases their colorful products and streamlines the ordering process.",
    logo: "/images/mochiNutLogo.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://mochinutspringhill.com",
  },
  {
    id: 2,
    title: "Centro Studi Baha'i - Hotel Panoramica",
    description:
      "A modern website for Centro Studi Baha'i - Hotel Panoramica, a hotel and conference center located in the Italian Alps. The project aimed to create a user-friendly experience that highlights the hotel's amenities and scenic surroundings.",
    logo: "/images/hotelLaPanoramicaLogo.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900"></div>

        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-blue-400">Portfolio</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our featured projects and see how we've helped businesses
            establish their digital presence.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="p-8 md:p-12">
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
                      <div className="flex flex-wrap gap-2">
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
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-900 to-blue-700 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-extrabold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how we can help bring your vision to life. Contact us
            today to get started.
          </motion.p>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg shadow-blue-500/50 transform hover:scale-105 transition duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
