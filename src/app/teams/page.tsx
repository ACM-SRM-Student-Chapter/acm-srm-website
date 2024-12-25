"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/global/Navigation";
import Footer from '@/components/global/Footer';

// Imports remain the same
import p1 from "../../../public/images/picone.png";
import evpic from "../../../public/images/evepic.png";
import corpic from "../../../public/images/corppic.png";
import techpic from "../../../public/images/techpic.png";
import crtv from "../../../public/images/crtvpic.png";

import sb1 from "../../../public/images/teams/sb1.svg";
import sb2 from "../../../public/images/teams/sb2.svg";
import sb3 from "../../../public/images/teams/sb3.svg";
import sb4 from "../../../public/images/teams/sb4.svg";
import sb5 from "../../../public/images/teams/sb5.svg";
import sb6 from "../../../public/images/teams/sb6.svg";

const sbImages = [sb1, sb2, sb3, sb4, sb5, sb6];

// Types
interface TeamMemberProps {
  image: any;
  className?: string;
  index?: number;
}

// TeamMemberCard component remains the same
const TeamMemberCard = ({ 
  image, 
  className = "",
  index = 0 
}: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 h-[98%] bg-gradient-to-r from-[#C4FCF0]/20 to-[#FCE7E2]/20 
        rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1" />
      
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt="Team member"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#C4FCF0]/30 to-transparent 
            opacity-0 group-hover:opacity-100 transition-all duration-300" />

          <div className="absolute top-0 right-0 w-24 h-24 transform rotate-45 translate-x-12 -translate-y-12
            bg-gradient-to-br from-[#C4FCF0] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

// SectionTitle component remains the same
const SectionTitle = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="relative mb-20"
  >
    <div className="flex items-center gap-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-[3px] flex-1 origin-left bg-gradient-to-r from-transparent via-[#C4FCF0] to-transparent"
      />
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-title font-bold tracking-wider whitespace-nowrap">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-[3px] flex-1 origin-right bg-gradient-to-r from-transparent via-[#FCE7E2] to-transparent"
      />
    </div>
  </motion.div>
);

// Updated DomainConnector without stats
const DomainConnector = ({ 
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
);

export default function TeamsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <main className="relative min-h-screen bg-white" ref={containerRef}>
      <Navigation />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Gradient Blobs */}
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
              bg-gradient-to-r from-black via-black/80 to-black bg-clip-text text-transparent">
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
              description="Our student body is a talented group of vibrant, curious individuals, driven by the spirit of exploration and innovation. Together, we build a community of sophisticated learners and aim to spread excellence."
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
              description="Our dynamic team unites the future leaders of tech, currently passionate individuals from diverse fields, collaborating to craft innovative solutions and drive the latest technological advancements."
            />
            <div className="space-y-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#C4FCF0] to-[#FCE7E2] opacity-20 rounded-2xl blur-lg" />
                  <TeamMemberCard
                    image={techpic}
                    className="w-[500px] aspect-[4/5] relative z-10"
                  />
                </div>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-24">
                {[...Array(2)].map((_, index) => (
                  <TeamMemberCard
                    key={index}
                    image={techpic}
                    index={index}
                    className="w-[450px] aspect-[4/5]"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Creatives Section */}
          <section className="mb-40">
            <SectionTitle title="Creatives" />
            <DomainConnector
              title="Bringing Vision to Life"
              description="The creatives team blends imagination with strategy, crafting designs that communicate ideas clearly while captivating and engaging audiences through every visual element."
            />
            <div className="grid grid-cols-2 gap-x-24 gap-y-16">
              {[...Array(4)].map((_, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'mt-24' : ''} relative group`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-4 top-0 w-[2px] h-0 bg-gradient-to-b from-[#C4FCF0] to-[#FCE7E2] 
                      group-hover:h-full transition-all duration-500" />
                    <TeamMemberCard
                      image={crtv}
                      index={index}
                      className="w-full aspect-[4/5]"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </section>

          {/* Corporate Section */}
          <section className="mb-40">
            <SectionTitle title="Corporate" />
            <DomainConnector
              title="Building Bridges, Driving Progress"
              description="The corporate team fuels our success by forging strategic partnerships, securing opportunities, and ensuring the smooth operation of our initiatives."
            />
            <div className="grid grid-cols-2 gap-24">
              {[...Array(2)].map((_, index) => (
                <TeamMemberCard
                  key={index}
                  image={corpic}
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
              description="Our Event Management team excels at turning ideas into reality and executing engaging events that are sure to foster innovation and spark inspiration while leaving behind a lasting impact."
            />
            <div className="grid grid-cols-2 gap-24">
              {[...Array(2)].map((_, index) => (
                <TeamMemberCard
                  key={index}
                  image={evpic}
                  index={index}
                  className="w-full aspect-[4/5]"
                />
              ))}
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}