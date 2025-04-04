"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Team members
const engineersTeam = [
  {
    name: "Elijah Crofts",
    title: "Managing Director & Founder",
    image: "/images/team/Elijah.png",
    contact: "elijah@unitywall.co",
    linkedin: "https://linkedin.com/in/elijahcrofts",
    isFoundingMember: true, // founding member 
  },
  {
    name: "Iman Motlagh",
    title: "Technical Architect & Team Lead",
    image: "/images/team/Iman.png",
    contact: "iman@unitywall.co",
    linkedin: "https://linkedin.com/in/iman-motlagh",
    isFoundingMember: true,
  },
  {
    name: "Michael Sanei",
    title: "Integration Engineer & Full-Stack",
    image: "/images/team/Michael.png",
    contact: "michael@unitywall.co",
    linkedin: "https://linkedin.com/in/michael-sanei",
    isFoundingMember: true,
  },
  {
    name: "Simeon Checherin",
    title: "Database Engineer & Full-Stack",
    image: "/images/team/Simeon.png",
    contact: "simeon@unitywall.co",
    linkedin: "https://linkedin.com/in/simon-checherin-b06796218",
    isFoundingMember: true,
  },
];

const designersTeam = [
  {
    name: "Elijah Crofts",
    title: "Managing Director & Founder",
    image: "/images/team/Elijah.png",
    contact: "elijah@unitywall.co",
    linkedin: "https://linkedin.com/in/elijahcrofts",
    isFoundingMember: true, // founding member 
  },
  {
    name: "Jalen M. Johnson",
    title: "Social Media Manager",
    image: "/images/team/Jalen.png",
    contact: "jalen@unitywall.co",
    linkedin: "https://linkedin.com/in/jalen-m-johnson-120510251",
    isFoundingMember: true,
  },
  {
    name: "Mey Spiegel",
    title: "UX & Design",
    image: "/images/team/mey.png",
    contact: "mey@unitywall.co",
    linkedin: "https://linkedin.com/in/mey-spiegel-708ba9225",
  },
  {
    name: "Nassim Akbari",
    title: "Graphic Design & Social Media",
    image: "/images/team/nassim.png",
    contact: "nassim@unitywall.co",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Saoirse Kane",
    title: "Social Media Consultant",
    image: "/images/team/saoirse.jpg",
    contact: "saoirse@unitywall.co",
    linkedin: "https://www.linkedin.com/in/saoirse-kane/",
  },
];

// Reusable team section component
const TeamSection = ({ title, description, members }) => {
  return (
    <div className="mb-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto px-4">
          {description}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => {
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
                      {/* Always render this span with a fixed min-height to reserve space */}
                      <span className="mt-2 block text-xs font-medium text-yellow-400 min-h-[1.5rem]">
                        {member.isFoundingMember ? "Founding Member" : "\u00A0"}
                      </span>
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
    </div>
  );
};

export default function About() {
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
            Meet the <span className="text-blue-400">Team</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get to know the talented individuals behind our success and discover
            what makes our team exceptional.
          </motion.p>
        </div>
      </section>

      {/* Engineering Team Section */}
      <section className="pt-16">
        <TeamSection
          title="Engineering Team"
          description="Our expert engineers build robust, scalable solutions that drive innovation and deliver results."
          members={engineersTeam}
        />
      </section>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gray-900 px-6">
            <motion.div
              className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: 0 }}
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Design Team Section */}
      <section className="pt-16">
        <TeamSection
          title="Design & Marketing Team"
          description="Our creative designers and marketers craft beautiful experiences and compelling narratives that connect with audiences."
          members={designersTeam}
        />
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
