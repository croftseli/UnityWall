"use client";

import TeamSection from "@/components/team/TeamSection";
import CTA from "@/components/layout/CTA";

// Team members
const engineersTeam = [
  {
    name: "Elijah Crofts",
    title: "Managing Director & Founder",
    image: "/images/team/Elijah.png",
    contact: "elijah@unitywall.co",
    linkedin: "https://linkedin.com/in/elijahcrofts",
    isFoundingMember: true,
  },
  {
    name: "Iman Motlagh",
    title: "Technical Architect & Dev Team Lead",
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
  {
    name: "Jason Terjenian",
    title: "Outreach Coordinator & Full-Stack",
    image: "/images/team/Jason.png",
    contact: "jason@unitywall.co",
    linkedin: "https://linkedin.com/in/jasonterjenian",
    isFoundingMember: false,
  },
];

const designersTeam = [
  {
    name: "Elijah Crofts",
    title: "Managing Director & Founder",
    image: "/images/team/Elijah.png",
    contact: "elijah@unitywall.co",
    linkedin: "https://linkedin.com/in/elijahcrofts",
    isFoundingMember: true,
  },
  {
    name: "Jalen M. Johnson",
    title: "Social Media Manager",
    image: "/images/team/Jalen.png",
    contact: "jalen@unitywall.co",
    linkedin: "https://linkedin.com/in/jalen-m-johnson-120510251",
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
    title: "Brand Unity & Design Lead",
    image: "/images/team/Zimeng profile.jpeg",
    contact: "zimeng@unitywall.co",
    linkedin: "https://www.linkedin.com/in/zimeng-elizabeth-cheng/",
  },
  {
    name: "Mey Spiegel",
    title: "Graphic Design & UX",
    image: "/images/team/mey.png",
    contact: "mey@unitywall.co",
    linkedin: "https://linkedin.com/in/mey-spiegel-708ba9225",
  },
];

const TeamPage = () => {
  return (
    <div className="bg-gray-700 min-h-screen py-32">
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

      <div className="mt-24">
        <CTA />
      </div>
    </div>
  );
};

export default TeamPage;
