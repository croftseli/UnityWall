"use client";

import TeamSection from "@/components/team/TeamSection";

// Team members
const engineersTeam = [
  {
    name: "Elijah Crofts",
    title: "Managing Director & Founder",
    image: "/images/teamNoBg/eli.png",
    contact: "elijah@unitywall.co",
    linkedin: "https://linkedin.com/in/elijahcrofts",
    handle: "elijahcrofts",
    status: "Founding Member",
  },
  {
    name: "Iman Motlagh",
    title: "Technical Architect & Dev Team Lead",
    image: "/images/teamNoBg/iman1.png",
    contact: "iman@unitywall.co",
    linkedin: "https://linkedin.com/in/iman-motlagh",
    handle: "iman-motlagh",
    status: "Founding Member",
  },
  {
    name: "Michael Sanei",
    title: "Integration Engineer & Full-Stack",
    image: "/images/teamNoBg/michael.png",
    contact: "michael@unitywall.co",
    linkedin: "https://linkedin.com/in/michael-sanei",
    handle: "michael-sanei",
    status: "Founding Member",
  },
  {
    name: "Simeon Checherin",
    title: "Database Engineer & Full-Stack",
    image: "/images/teamNoBg/simeon.png",
    contact: "simeon@unitywall.co",
    linkedin: "https://linkedin.com/in/simon-checherin-b06796218",
    handle: "simeon-checherin",
    status: "Founding Member",
  },
  {
    name: "Jason Terjenian",
    title: "Outreach Coordinator & Full-Stack",
    image: "/images/teamNoBg/jason.png",
    contact: "jason@unitywall.co",
    linkedin: "https://linkedin.com/in/jasonterjenian",
    handle: "jasonterjenian",
  },
];

const designersTeam = [
  {
    name: "Elijah Crofts",
    title: "Managing Director & Founder",
    image: "/images/teamNoBg/eli.png",
    contact: "elijah@unitywall.co",
    linkedin: "https://linkedin.com/in/elijahcrofts",
    handle: "elijahcrofts",
    status: "Founding Member",
  },
  {
    name: "Jalen M. Johnson",
    title: "Social Media Manager",
    image: "/images/teamNoBg/jalen.png",
    contact: "jalen@unitywall.co",
    linkedin: "https://linkedin.com/in/jalen-m-johnson-120510251",
    handle: "jalen-m-johnson",
  },
  {
    name: "Saoirse Kane",
    title: "Social Media Consultant",
    image: "/images/teamNoBg/saoirse.png",
    contact: "saoirse@unitywall.co",
    linkedin: "https://www.linkedin.com/in/saoirse-kane/",
    handle: "saoirse-kane",
  },
  {
    name: "Zimeng Cheng",
    title: "Brand Unity & Design Lead",
    image: "/images/teamNoBg/elizabeth.png",
    contact: "zimeng@unitywall.co",
    linkedin: "https://www.linkedin.com/in/zimeng-elizabeth-cheng/",
    handle: "zimeng-cheng",
  },
  {
    name: "Mey Spiegel",
    title: "Graphic Design & UX",
    image: "/images/teamNoBg/mey.png",
    contact: "mey@unitywall.co",
    linkedin: "https://linkedin.com/in/mey-spiegel-708ba9225",
    handle: "mey-spiegel",
  },
  {
    name: "Ashley Dowd",
    title: "Client Relations & Social Media",
    image: "/images/teamNoBg/ashley.png",
    contact: "ashley@unitywall.co",
    linkedin: "https://www.linkedin.com/in/ashley-dowd-411973303",
    handle: "ashley-dowd",
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
    </div>
  );
};

export default TeamPage;
