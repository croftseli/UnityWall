"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProfileCard from "./ProfileCard";

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

      <div className="max-w-7xl mx-auto px-4 md:px-8 justify-center">
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
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
                <ProfileCard
                  name={member.name}
                  title={member.title}
                  handle={member.handle}
                  status={member.status || ""}
                  contactText={member.contactText || "Contact Me"}
                  avatarUrl={member.image}
                  showUserInfo={true}
                  enableTilt={true}
                  onContactClick={() => window.open(member.linkedin, "_blank")}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
