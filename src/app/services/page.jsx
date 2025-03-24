"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Services data
const services = [
  {
    id: 1,
    title: "Website Development",
    description:
      "We create custom, responsive websites tailored to your specific needs and brand identity. Our development process focuses on performance, accessibility, and user experience.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Website Maintenance",
    description:
      "Keep your site running smoothly with our comprehensive maintenance services including security updates, performance optimization, content updates, and technical support.",
    icon: "🔧",
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    description:
      "Transform your business with our powerful e-commerce solutions featuring secure payment processing, inventory management, and streamlined checkout experiences.",
    icon: "🛒",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="relative h-80 sm:h-96 flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-blue-400">Services</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We develop stunning websites and maintain them with care, helping
            your business thrive online.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 sm:gap-8 items-center`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 aspect-square bg-gray-800 rounded-full flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl border-4 border-blue-500 mx-auto md:mx-0">
                  {service.icon}
                </div>
                <div className="w-full md:w-2/3 mt-4 md:mt-0 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-300 mb-2 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-base sm:text-lg">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact us below for more information about our services and how we
            can help your business grow online.
          </motion.p>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}