"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useInView } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRef } from "react";

// Team members
const team = [
  {
    name: "Elijah Crofts",
    title: "Managing Director & Founder",
    image: "/images/team/Elijah.png",
    contact: "elijah@unitywall.co",
    linkedin: "https://linkedin.com/in/elijahcrofts",
  },
  {
    name: "Iman Motlagh",
    title: "Technical Architect & Team Lead",
    image: "/images/team/Iman.png",
    contact: "iman@unitywall.co",
    linkedin: "https://linkedin.com/in/iman-motlagh",
  },
  {
    name: "Michael Sanei",
    title: "Integration Engineer & Full-Stack",
    image: "/images/team/Michael.png",
    contact: "michael@unitywall.co",
    linkedin: "https://linkedin.com/in/michael-sanei",
  },
  {
    name: "Simeon Checherin",
    title: "Database Engineer & Full-Stack",
    image: "/images/team/Simeon.png",
    contact: "simeon@unitywall.co",
    linkedin: "https://linkedin.com/in/simon-checherin-b06796218",
  },
  {
    name: "Jalen M. Johnson",
    title: "Social Media Manager",
    image: "/images/team/Jalen.png",
    contact: "jalen@unitywall.co",
    linkedin: "https://linkedin.com/in/jalen-m-johnson-120510251",
  },
  {
    name: "Mey Spiegel",
    title: "UX and Design",
    image: "/images/team/mey.png",
    contact: "mey@unitywall.co",
    linkedin: "https://linkedin.com/in/mey-spiegel-708ba9225",
  },
  {
    name: "Nassim Akbari",
    title: "Visual Design and Social Media",
    image: "/images/team/nassim.png",
    contact: "nassim@unitywall.co",
    linkedin: "https://linkedin.com/",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 py-10 px-4 md:px-8 text-gray-200">
      {/* Title */}
      <div className="text-center mb-10">
        {(() => {
          const titleRef = useRef(null);
          const isTitleInView = useInView(titleRef, {
            once: true,
            amount: 0.6,
          });

          return (
            <motion.h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold text-blue-600"
              initial={{ opacity: 0, y: -20 }}
              animate={
                isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
              }
              transition={{ duration: 0.8 }}
            >
              Meet the Team
            </motion.h1>
          );
        })()}
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { once: true, amount: 0.3 });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{
                  duration: 0.7,
                  delay: isInView ? index * 0.2 : 0,
                }}
              >
                <CardContainer className="w-full" containerClassName="py-4">
                  <CardBody className="bg-gray-800 border border-gray-600 rounded-xl h-auto w-full p-6 shadow-xl">
                    <CardItem
                      translateZ={50}
                      className="w-full flex justify-center"
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
                    </CardItem>

                    <CardItem
                      translateZ={60}
                      className="mt-4 text-center w-full"
                    >
                      <h2 className="text-2xl font-bold text-blue-300">
                        {member.name}
                      </h2>
                    </CardItem>

                    <CardItem
                      translateZ={50}
                      className="text-gray-400 text-center w-full"
                    >
                      <p className="mt-2">{member.title}</p>
                    </CardItem>

                    <CardItem
                      translateZ={80}
                      className="text-center mt-4 w-full"
                    >
                      <p className="text-gray-300 text-sm">{member.contact}</p>
                    </CardItem>

                    <CardItem
                      translateZ={100}
                      className="mt-6 w-full flex justify-center"
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <LinkedInIcon style={{ fontSize: 28 }} />
                      </a>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-300 mb-8 text-center">
            Get in Touch
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
