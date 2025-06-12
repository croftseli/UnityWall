// /components/team/TeamSection.jsx

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamSection = ({ title, description, members }) => {
  return (
    <div className="mb-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8baced] via-[#b1d3e9] to-[#fbf69c] bg-clip-text text-transparent leading-tight"
          style={{
            backgroundImage: `linear-gradient(
              64deg,
              rgba(139, 172, 223, 1) 0%,
              rgba(177, 211, 233, 1) 50%,
              rgb(251, 246, 156) 90%
            )`,
          }}
        >
          {title}
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto px-4">
          {description}
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member, index) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { once: true, amount: 0.01 });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                className="w-full sm:w-[300px] md:w-[320px] lg:w-[340px]"
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

export default TeamSection;
