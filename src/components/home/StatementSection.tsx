"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StatementSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      filter: "blur(10px)",
      rotateX: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      className="hidden md:flex relative bg-white w-full min-h-[50vh] lg:min-h-[70vh]
        items-center justify-center py-8 sm:py-10 md:py-14 lg:py-18"
      style={{ zIndex: 1 }}
    >
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32">
        <motion.div
          ref={ref}
          className="max-w-[1920px] mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-[130px] font-title leading-tight
              md:leading-tight lg:leading-[0.9] font-bold
              mb-4 md:mb-5 lg:mb-7"
            variants={textVariants}
          >
            <motion.span
              className="block mb-2 md:mb-3"
              variants={lineVariants}
            >
              Let's create something
            </motion.span>
            <motion.span
              className="block"
              variants={lineVariants}
            >
              extraordinary together.
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-3xl lg:text-[60px]
              font-title font-light
              leading-snug md:leading-snug lg:leading-[1.1]
              max-w-[450px] md:max-w-[600px] lg:max-w-[900px]
              text-gray-500"
            variants={textVariants}
          >
            Learn, create, and push the boundaries of technology.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}