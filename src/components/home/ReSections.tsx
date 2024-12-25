"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ReSections() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [reRef, reInView] = useInView({ 
    triggerOnce: false, 
    threshold: 0.5,
    initialInView: false 
  });
  
  const [section1Ref, section1InView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.3,
    initialInView: false 
  });
  
  const [section2Ref, section2InView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.3,
    initialInView: false 
  });
  
  const [section3Ref, section3InView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.3,
    initialInView: false 
  });
  
  const [section4Ref, section4InView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.3,
    initialInView: false 
  });

  const stickyVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(15px)" },
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

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -12,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.3
      }
    }
  };

  const illustrationVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full relative flex">
      <motion.div 
        ref={reRef}
        initial="hidden"
        animate={reInView ? "visible" : "hidden"}
        variants={stickyVariants}
        className="sticky top-0 h-screen flex items-center
                   w-[80px] sm:w-[120px] md:w-[200px] lg:w-[300px]
                   bg-[#FF6F00]"
      >
        <h1 className="text-[80px] sm:text-[120px] md:text-[200px] lg:text-[400px] 
                      font-title font-bold leading-none text-white text-center w-full">
          RE
        </h1>
      </motion.div>

      <div className="flex-1">
        {[
          {
            ref: section1Ref,
            inView: section1InView,
            title: "IMAGINING",
            bgColor: "bg-[#F9DEC2]",
            icon: "/images/creativity.svg",
            illustration: "/images/ilu1.svg",
            text: "Crafting impactful visuals and experiences that inspire, communicate, and resonate with the audience.",
            iconPosition: "right-4 sm:right-8 md:right-16 lg:right-36 -top-2"
          },
          {
            ref: section2Ref,
            inView: section2InView,
            title: "LINKING",
            bgColor: "bg-[#C4FCF0]",
            icon: "/images/networks.svg",
            illustration: "/images/ilu2.svg",
            text: "Building meaningful relationships and bridges between individuals, ideas, and opportunities for growth.",
            iconPosition: "right-8 sm:right-16 md:right-32 lg:right-64 top-4"
          },
          {
            ref: section3Ref,
            inView: section3InView,
            title: "MAKING",
            bgColor: "bg-[#FCE7E2]",
            icon: "/images/innovation.svg",
            illustration: "/images/ilu3.svg",
            text: "Transforming ideas into groundbreaking solutions that define the future of technology and progress.",
            iconPosition: "right-4 sm:right-8 md:right-16 lg:right-[100px] top-6"
          },
          {
            ref: section4Ref,
            inView: section4InView,
            title: "EXECUTING",
            bgColor: "bg-[#F9DEC2]",
            icon: "/images/precision.svg",
            illustration: "/images/ilu4.svg",
            text: "Bringing visions to life through seamless planning, coordination, and flawless execution of events.",
            iconPosition: "right-4 sm:right-8 md:right-16 lg:right-32 -top-2"
          }
        ].map((section, index) => (
          <motion.div 
            key={index}
            ref={section.ref}
            initial="hidden"
            animate={section.inView ? "visible" : "hidden"}
            variants={sectionVariants}
            className={`${section.bgColor} min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen
                       flex flex-col lg:flex-row items-center justify-center
                       p-4 sm:p-6 md:p-8 lg:p-12 gap-6 lg:gap-12`}
          >
            <div className="flex flex-col w-full lg:max-w-2xl">
              <div className="relative">
                <motion.h2 
                  variants={titleVariants}
                  className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[200px] 
                             font-title font-bold leading-none mb-4"
                >
                  {section.title}
                </motion.h2>
                <motion.div
                  variants={iconVariants}
                  className={`absolute ${section.iconPosition}`}
                >
                  <Image
                    src={section.icon}
                    alt={section.title}
                    width={100}
                    height={40}
                    className="-rotate-12 w-[30px] sm:w-[40px] md:w-[60px] lg:w-[100px]"
                  />
                </motion.div>
              </div>
              <motion.p 
                variants={paragraphVariants}
                className="text-sm sm:text-base md:text-lg lg:text-xl 
                          max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
              >
                {section.text}
              </motion.p>
            </div>
            <motion.div 
              variants={illustrationVariants}
              className="relative w-[80px] sm:w-[120px] md:w-[180px] lg:w-[250px] 
                         h-[80px] sm:h-[120px] md:h-[180px] lg:h-[250px]"
            >
              <Image
                src={section.illustration}
                alt={`${section.title} Icon`}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}