"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTA from "@/components/layout/CTA";

// Clients data
const clients = [
  
  {
    id: 1,
    title: "Safayra Saffron",
    description:
      "Based in Europe, Safayra is a premium importer that offers high-quality saffron sourced from the best farms in Iran. This website will showcase the brand's commitment to quality and provides an elegant experience for customers.",
    logo: "/images/Safayralogo.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    bgGradient: "from-gray-600 via-gray-700 to-gray-700",
  },
  {
    id: 2,
    title: "Cossa Embroidery - Franklin, TN",
    description:
      "Embroidery service based in Franklin, TN. Small, single-owner business. This project aims to be the online face of a small, locally owned business. Stay tuned for updates!",
    logo: "/images/lone C.jpeg", 
    technologies: ["Coming Soon"],
    link: "https://cossaembroidery.com",
    bgGradient: "from-gray-600 via-gray-700 to-gray-700", // Brightened from gray-700/800/800
  },
  {
    id: 3,
    title: "Permanent Makeup by Lauren - Michigan",
    description:
      "A modern website for Permanent Makeup by Lauren, a beauty service specializing in permanent makeup solutions. The project focuses on creating an elegant and user-friendly experience to showcase services and attract clients.",
    logo: "/images/ComingSoon.png", // Add your placeholder image
    technologies: ["Coming Soon"],
    bgGradient: "from-gray-600 via-gray-700 to-gray-700", // Brightened from gray-700/800/800
  },

  {
    id: 4,
    title: "Centro Studi Baha'i, Hotel la Panoramica - Acuto, Italy",
    description:
      "A modern website for Centro Studi Baha'i - Hotel Panoramica, a hotel and conference center located in Aculto, Italy. The project aimed to create a user-friendly experience that highlights the hotel's amenities and scenic surroundings.",
    logo: "/images/hotelLaPanoramicaLogo.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://centrostudibahai.it",
    bgGradient: "from-gray-600 via-gray-700 to-gray-700",
  },
];

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  const gradientDirectionClass = isEven
    ? "bg-gradient-to-r"
    : "bg-gradient-to-l";
  const projectBackgroundClasses = `${gradientDirectionClass} ${project.bgGradient}`;

  return (
    <motion.div
      key={project.id}
      className={`relative py-16 overflow-hidden ${projectBackgroundClasses}`}
      // Removed y-axis animation, added x-axis animation for directional fade-in
      initial={{ opacity: 0, x: isEven ? -50 : 50 }} // Fade in from left for even, right for odd
      whileInView={{ opacity: 1, x: 0 }} // Slide to original position
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of element is in view
      transition={{ duration: 1.0, delay: 0.5 + index * 0.3 }} // Slower and later animations
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-white shadow-xl">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed max-w-2xl text-gray-200">
              {project.description}
            </p>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                View Project
              </a>
            ) : (
              <button
                disabled
                className="inline-block px-6 py-3 bg-gray-600 text-gray-300 font-semibold rounded-md cursor-not-allowed opacity-70"
              >
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Clients() {
  return (
    // Main content area, pushed down by the absolute hero section for top padding
    <main className="min-h-screen bg-gray-700 text-gray-200 pt-72">
      {/* Hero Section - Fixed at the top, acting as a header */}
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b to-gray-700 text-white text-center flex flex-col justify-end pb-12">
        <motion.p
          className="text-5xl md:text-6xl font-extrabold mb-4 relative z-10 text-center bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(
      64deg,
      rgba(139, 172, 223, 1) 0%,
      rgba(177, 211, 233, 1) 50%,
      rgb(251, 246, 156) 90%
    )`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Our Projects
        </motion.p>
        <motion.p
          className="text-lg max-w-2xl mx-auto px-4 text-gray-300 relative z-10 pb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore our featured projects and see how we've helped businesses
          establish their digital presence.
        </motion.p>
      </div>

      {/* Clients Section - Contains the ProjectCard components with spacing */}
      <section className="pb-12">
        {" "}
        {/* Added padding-bottom for space before CTA */}
        <div className="w-full flex flex-col gap-y-8">
          {" "}
          {/* Added gap-y for space between project cards */}
          {clients.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
