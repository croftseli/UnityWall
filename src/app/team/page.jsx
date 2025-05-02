"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CTA from "@/components/layout/CTA";

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
    name: "Saoirse Kane",
    title: "Social Media Consultant",
    image: "/images/team/saoirse.jpg",
    contact: "saoirse@unitywall.co",
    linkedin: "https://www.linkedin.com/in/saoirse-kane/",
  },
  {
    name: "Zimeng Cheng",
    title: "Brand Unity & UI Designer",
    image: "/images/team/Zimeng profile.jpeg",
    contact: "zimeng@unitywall.co",
    linkedin: "https://www.linkedin.com/in/zimeng-elizabeth-cheng/",
  },
  {
    name: "Mey Spiegel",
    title: "Graphic Design",
    image: "/images/team/mey.png",
    contact: "mey@unitywall.co",
    linkedin: "https://linkedin.com/in/mey-spiegel-708ba9225",
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
            const isInView = useInView(cardRef, { once: true, amount: 0.01 });

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
                  duration: 0.4,
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

// Main Team Page component that uses the TeamSection component
const TeamPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-32">
      <TeamSection
        title="Our Engineering Team"
        description="Meet the skilled engineers who build our robust solutions and ensure technical excellence in everything we do."
        members={engineersTeam}
      />

      <TeamSection
        title="Our Design & Media Team"
        description="The creative minds behind our visual identity, user experience, and social media presence."
        members={designersTeam}
      />

      {/* Single CTA section at the bottom of the page */}
      <div className="mt-24">
        <CTA />
      </div>
    </div>
  );
};

export default TeamPage;
