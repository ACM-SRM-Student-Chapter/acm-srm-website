"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// GlassCard Component with animation support
const GlassCard = ({ children, className = "", variants = null, ...props }: { 
  children: React.ReactNode; 
  className?: string;
  variants?: any;
}) => {
  return (
    <motion.div 
      variants={variants}
      className={`
        relative p-8 rounded-2xl
        bg-white/90
        border border-[#C4FCF0]/30
        shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
        hover:shadow-[0_8px_32px_0_rgba(196,252,240,0.2)]
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const BackgroundPattern = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
    <svg width="100%" height="100%">
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export default function AboutSection() {

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [initiativesRef, initiativesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation variants
  const fadeInUpVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative bg-white pt-40 pb-20 overflow-hidden">
      {/* Background Elements */}
      <BackgroundPattern />
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-[120vw] h-[120vh] opacity-30"
          style={{
            background: 'radial-gradient(circle at 25% 25%, #C4FCF0 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-[20%] right-[-50%] w-[120vw] h-[120vh] opacity-30"
          style={{
            background: 'radial-gradient(circle at 75% 75%, #FCE7E2 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-[-20%] left-[30%] w-[120vw] h-[120vh] opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #F9DEC2 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40" ref={heroRef}>
          <motion.div
            className="relative z-10"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.span 
              variants={fadeInUpVariants}
              className="block text-sm font-poly mb-4 tracking-wide text-black/60"
            >
              ACM SRM STUDENT CHAPTER
            </motion.span>
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-6xl md:text-7xl font-title font-bold leading-none mb-8"
            >
              Fostering Innovation in Computing
            </motion.h2>
            <motion.div 
              variants={fadeInUpVariants}
              className="h-[3px] w-20 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2] mb-8" 
            />
            <motion.p 
              variants={fadeInUpVariants}
              className="text-xl font-poly leading-relaxed mb-8 max-w-xl text-black/70"
            >
              Join the world's largest computing society's student chapter at SRM Institute of Technology, 
              where we nurture future tech leaders and innovators.
            </motion.p>
            <motion.button 
              variants={fadeInUpVariants}
              className="bg-black text-white px-8 py-4 rounded-full text-lg
                hover:bg-black/90 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10">Join ACM SRM</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2] 
                opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative h-[600px]"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-[#C4FCF0]/10 rounded-2xl transform rotate-3" />
            <GlassCard className="h-full p-0 overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/gal2.jpeg"
                alt="ACM SRM Overview"
                fill
                className="object-cover rounded-xl"
              />
            </GlassCard>
            <div className="absolute -bottom-10 -right-10 w-60 h-60">
              <div className="absolute inset-0 bg-[#FCE7E2]/10 rounded-2xl transform -rotate-6" />
              <GlassCard className="h-full p-0 overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/gal1.jpeg"
                  alt="ACM Event"
                  fill
                  className="object-cover"
                />
              </GlassCard>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40"
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {[
            { number: "500+", label: "Active Members", color: "#C4FCF0" },
            { number: "50+", label: "Events per Year", color: "#FCE7E2" },
            { number: "20+", label: "Industry Partners", color: "#F9DEC2" },
            { number: "100%", label: "Learning Opportunity", color: "#C4FCF0" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              custom={index}
              variants={cardVariants}
            >
              <div 
                className="absolute inset-0 rounded-2xl transform translate-x-2 translate-y-2 transition-transform duration-300"
                style={{ backgroundColor: `${stat.color}20` }}
              />
              <GlassCard className="relative bg-white hover:-translate-y-1 transition-all duration-300">
                <div className="text-center">
                  <span className="block text-5xl font-title font-bold mb-2 text-black">
                    {stat.number}
                  </span>
                  <span className="text-sm font-poly tracking-wide text-black/60">
                    {stat.label}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Initiatives Section */}
        <div className="mb-40" ref={initiativesRef}>
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            animate={initiativesInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
          >
            <h3 className="text-5xl font-title font-bold mb-6">Our Initiatives</h3>
            <p className="text-xl font-poly leading-relaxed max-w-2xl mx-auto text-black/60">
              Driving innovation and learning through diverse technical and professional development programs.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={initiativesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {[
              {
                image: "/images/icons8-greentech-100.png",
                title: "Technical Excellence",
                description: "Workshops, hackathons, and coding competitions to enhance technical skills.",
                color: "#C4FCF0"
              },
              {
                image: "/images/icons8-circuit-100.png",
                title: "Research & Development",
                description: "Collaborative projects with industry partners and research opportunities.",
                color: "#FCE7E2"
              },
              {
                image: "/images/icons8-engineering-100.png",
                title: "Professional Growth",
                description: "Networking events, mentorship programs, and career development sessions.",
                color: "#F9DEC2"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className="relative group"
              >
                <div 
                  className="absolute inset-0 rounded-2xl transform translate-x-2 translate-y-2"
                  style={{ backgroundColor: `${item.color}30` }}
                />
                <GlassCard className="relative bg-white hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative">
                    <div 
                      className="w-16 h-16 mb-6 rounded-xl p-3 relative overflow-hidden"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{ 
                          backgroundImage: `linear-gradient(45deg, ${item.color}40, transparent)` 
                        }} 
                      />
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-contain relative z-10"
                      />
                    </div>

                    <h4 className="text-2xl font-title font-bold mb-4">{item.title}</h4>
                    <p className="text-lg font-poly leading-relaxed text-black/60">
                      {item.description}
                    </p>

                    <div 
                      className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          ref={visionRef}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="relative rounded-3xl overflow-hidden bg-black p-[1px]">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(45deg, #C4FCF0, #FCE7E2, #F9DEC2)`
              }}
            />

            <div className="relative rounded-3xl overflow-hidden bg-black">
              <div className="absolute inset-0">
                <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100">
                  <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                  <rect x="0" y="0" width="100" height="100" fill="url(#grid-pattern)"/>
                </svg>
              </div>

              <div 
                className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20"
                style={{
                  background: `radial-gradient(circle at center, #FCE7E2 0%, transparent 70%)`,
                  filter: 'blur(60px)'
                }}
              />

              {/* Content */}
              <div className="relative px-8 py-32">
                <motion.div 
                  className="max-w-3xl mx-auto text-center"
                  initial="hidden"
                  animate={visionInView ? "visible" : "hidden"}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.2
                      }
                    }
                  }}
                >
                  {/* Decorative line */}
                  <motion.div 
                    className="w-20 h-[2px] mx-auto mb-8 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2]"
                    variants={{
                      hidden: { scaleX: 0, opacity: 0 },
                      visible: { 
                        scaleX: 1, 
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }
                    }}
                  />
                  
                  <motion.h3 
                    className="text-5xl font-title font-bold mb-8 text-white"
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        y: 20,
                        filter: "blur(10px)"
                      },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.8,
                          ease: [0.16, 1, 0.3, 1]
                        }
                      }
                    }}
                  >
                    Our Vision
                  </motion.h3>

                  <motion.p 
                    className="text-xl font-poly leading-relaxed mb-12 text-white/80"
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        y: 20,
                        filter: "blur(5px)"
                      },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.2
                        }
                      }
                    }}
                  >
                    To be the premier student organization at SRM, fostering technical excellence, 
                    professional growth, and innovative thinking. We aim to create a community of 
                    future tech leaders who drive positive change through computing.
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-center gap-8 flex-wrap"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.4
                        }
                      }
                    }}
                  >
                    {/* Primary Button */}
                    <div className="relative group">
                      {/* Button Glow Effect */}
                      <div 
                        className="absolute -inset-1 rounded-full blur-md transition-all duration-300 opacity-0 group-hover:opacity-50"
                        style={{
                          background: `linear-gradient(45deg, #C4FCF0, #FCE7E2, #F9DEC2)`
                        }}
                      />
                      <button className="relative bg-white text-black px-8 py-4 rounded-full text-lg font-poly 
                        hover:-translate-y-0.5 transition-all duration-300">
                        Join Our Community
                      </button>
                    </div>

                    {/* Secondary Button */}
                    <button className="text-white/80 hover:text-white transition-colors duration-300 
                      flex items-center gap-2 group font-poly">
                      Learn More
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </motion.div>

                  {/* Bottom Decoration */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px]"
                    variants={{
                      hidden: { scaleX: 0, opacity: 0 },
                      visible: { 
                        scaleX: 1, 
                        opacity: 0.3,
                        transition: {
                          duration: 0.8,
                          delay: 0.6,
                          ease: "easeOut"
                        }
                      }
                    }}
                    style={{
                      background: `linear-gradient(90deg, 
                        transparent 0%, 
                        #C4FCF0 30%, 
                        #FCE7E2 50%, 
                        #F9DEC2 70%, 
                        transparent 100%
                      )`
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Spacing */}
        <div className="h-20" />
      </div>
    </section>
  );
}