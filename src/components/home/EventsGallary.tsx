"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface EventCard {
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

export default function EventsGallery() {
  const events: EventCard[] = [
    {
      title: "IdeaForge",
      date: "March 15-16, 2024",
      category: "Innovation",
      image: "/images/event2.jpeg",
      description: "48-hour ideation challenge to forge innovative solutions"
    },
    {
      title: "Hack Pair",
      date: "Ongoing",
      category: "Hackathon",
      image: "/images/event1.jpeg",
      description: "Collaborative coding challenge for innovative solutions"
    },
  ];

  return (
    <section className="relative bg-black pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative">
        <div className="text-center mb-20">
          <span className="text-sm font-poly tracking-wide text-white/60 mb-4 block">
            UPCOMING & ONGOING
          </span>
          <h2 className="text-6xl font-title font-bold mb-6 text-white">
            Events & Activities
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial="initial"
              whileHover="hover"
            >
              <div 
                className="absolute inset-0 rounded-2xl transform translate-x-2 translate-y-2"
                style={{ 
                  backgroundColor: index % 2 === 0 ? '#C4FCF020' : '#F9DEC220',
                }}
              />

              <motion.div 
                className="relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
                variants={{
                  initial: { height: '300px' },
                  hover: { height: '400px' }
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div 
                  className="relative w-full h-full"
                  variants={{
                    initial: { height: '300px' },
                    hover: { height: '400px' }
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6"
                  variants={{
                    initial: { y: '45%' },
                    hover: { y: 0 }
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-poly text-white/90">
                      {event.date}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/90 backdrop-blur-sm">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-title font-bold mb-2 text-white">
                    {event.title}
                  </h3>
                  <motion.div
                    variants={{
                      initial: { opacity: 0, y: 10 },
                      hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    className="h-auto"
                  >
                    <p className="text-white/80 mb-4 font-poly">
                      {event.description}
                    </p>
                    <Link 
                      href="/events"
                      className="inline-flex items-center gap-2 text-white font-poly group/link"
                    >
                      Learn More 
                      <span className="transform group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link 
            href="/events"
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg hover:bg-white/90 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">View All Events</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}