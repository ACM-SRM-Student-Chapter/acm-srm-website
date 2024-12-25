"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/global/Navigation";
import Footer from '@/components/global/Footer';

// Student Body Images
import sb1 from "../../../public/images/teams/sb1.png";
import sb2 from "../../../public/images/teams/sb2.png";
import sb3 from "../../../public/images/teams/sb3.png";
import sb4 from "../../../public/images/teams/sb4.png";
import sb5 from "../../../public/images/teams/sb5.png";
import sb6 from "../../../public/images/teams/sb6.png";

// Technical Team Images
import t1 from "../../../public/images/teams/t1.png";
import t2 from "../../../public/images/teams/t2.png";

// Creative Team Images
import c1 from "../../../public/images/teams/c1.png";
import c2 from "../../../public/images/teams/c2.png";

// Corporate Team Images
import co1 from "../../../public/images/teams/co1.png";
import co2 from "../../../public/images/teams/co2.png";

// Event Management Image
import ev1 from "../../../public/images/teams/ev1.png";

// Image groupings
const sbImages = [sb1, sb2, sb3, sb4, sb5, sb6];
const techImages = [t1, t2];
const creativeImages = [c1, c2];
const corpImages = [co1, co2];
const eventImages = [ev1];

// Types
interface TeamMemberProps {
  image: any;
  className?: string;
  index?: number;
}

const TeamMemberCard = React.memo(({ 
  image, 
  className = "",
  index = 0 
}: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 h-[85%] bg-gradient-to-r from-[#C4FCF0]/20 to-[#FCE7E2]/20 
        rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1" />
      
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt="Team member"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index < 2}
            loading={index < 2 ? "eager" : "lazy"}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#C4FCF0]/30 to-transparent 
            opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';

const SectionTitle = React.memo(({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative mb-20"
  >
    <div className="flex items-center gap-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[3px] flex-1 origin-left bg-gradient-to-r from-transparent via-[#C4FCF0] to-transparent"
      />
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-title font-bold tracking-wider whitespace-nowrap">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[3px] flex-1 origin-right bg-gradient-to-r from-transparent via-[#FCE7E2] to-transparent"
      />
    </div>
  </motion.div>
));

SectionTitle.displayName = 'SectionTitle';

const DomainConnector = React.memo(({ 
  title, 
  description
}: { 
  title: string; 
  description: string;
}) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative py-24"
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-center space-y-6">
        <h3 className="text-3xl md:text-4xl font-title font-bold">{description}</h3>
      </div>
    </div>
    
    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]
      bg-gradient-to-r from-transparent via-[#C4FCF0]/50 to-transparent" />
  </motion.div>
));

DomainConnector.displayName = 'DomainConnector';

const BackgroundElements = React.memo(({ y1, y2, y3 }: { y1: any; y2: any; y3: any }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]">
      <svg width="100%" height="100%">
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="black" strokeWidth="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <motion.div style={{ y: y1 }} className="absolute -top-20 left-0 w-[700px] h-[700px]">
      <div className="absolute inset-0 bg-[#C4FCF0] rounded-full blur-[120px] opacity-20" />
    </motion.div>
    <motion.div style={{ y: y2 }} className="absolute top-[40%] right-0 w-[600px] h-[600px]">
      <div className="absolute inset-0 bg-[#FCE7E2] rounded-full blur-[120px] opacity-20" />
    </motion.div>
    <motion.div style={{ y: y3 }} className="absolute bottom-0 left-[30%] w-[800px] h-[800px]">
      <div className="absolute inset-0 bg-[#F9DEC2] rounded-full blur-[120px] opacity-20" />
    </motion.div>
  </div>
));

BackgroundElements.displayName = 'BackgroundElements';

export default function TeamsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100], {
    clamp: false
  });
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150], {
    clamp: false
  });
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200], {
    clamp: false
  });

  return (
    <main className="relative min-h-screen bg-white will-change-transform" ref={containerRef}>
      <Navigation />
      <BackgroundElements y1={y1} y2={y2} y3={y3} />

      {/* Main Content */}
      <div className="relative pt-32 px-6 md:px-32">
        <div className="max-w-[2000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-40"
          >
            <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-title font-bold tracking-wider mb-8 
              bg-gradient-to-r from-black via-black/80 to-black bg-clip-text text-transparent will-change-transform">
              Meet the Minds
            </h1>
            <p className="text-2xl md:text-4xl lg:text-5xl font-title tracking-wider text-black/60 max-w-5xl mx-auto">
              A dynamic team shaping the future of technology, innovation, and collaboration
            </p>
          </motion.div>

          {/* Student Body Section */}
          <section className="mb-40">
            <SectionTitle title="Student Body" />
            <DomainConnector
              title="Student Body"
              description="Our student body is a talented group of vibrant, curious individuals, driven by the spirit of exploration and innovation."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {sbImages.map((image, index) => (
                <TeamMemberCard
                  key={index}
                  image={image}
                  index={index}
                  className="w-full aspect-[4/5]"
                />
              ))}
            </div>
          </section>

          {/* Technical Section */}
          <section className="mb-40">
            <SectionTitle title="Technical" />
            <DomainConnector
              title="Shaping the Tech Leaders of Tomorrow"
              description="Our dynamic team unites the future leaders of tech, collaborating to craft innovative solutions."
            />
            <div className="flex flex-wrap justify-center gap-24">
              {techImages.map((image, index) => (
                <TeamMemberCard
                  key={index}
                  image={image}
                  index={index}
                  className="w-[500px] aspect-[4/5]"
                />
              ))}
            </div>
          </section>

          {/* Creatives Section */}
          <section className="mb-40">
            <SectionTitle title="Creatives" />
            <DomainConnector
              title="Bringing Vision to Life"
              description="The creatives team blends imagination with strategy, crafting designs that communicate ideas clearly."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {creativeImages.map((image, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'mt-16' : ''}`}>
                  <TeamMemberCard
                    image={image}
                    index={index}
                    className="w-full aspect-[4/5]"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Corporate Section */}
          <section className="mb-40">
            <SectionTitle title="Corporate" />
            <DomainConnector
              title="Building Bridges, Driving Progress"
              description="The corporate team fuels our success by forging strategic partnerships and ensuring smooth operations."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              {corpImages.map((image, index) => (
                <TeamMemberCard
                  key={index}
                  image={image}
                  index={index}
                  className="w-full aspect-[4/5]"
                />
              ))}
            </div>
          </section>

          {/* Event Management Section */}
          <section className="mb-40">
            <SectionTitle title="Event Management" />
            <DomainConnector
              title="Architects of Unforgettable Experiences"
              description="Our Event Management team excels at turning ideas into reality and executing engaging events."
            />
            <div className="flex justify-center">
              <TeamMemberCard
                image={eventImages[0]}
                className="w-[600px] aspect-[4/5]"
              />
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}