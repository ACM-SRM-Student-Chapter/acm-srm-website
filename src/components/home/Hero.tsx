"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [showBoxes, setShowBoxes] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500);

    setTimeout(() => {
      setShowBoxes(true);
    }, 1500);

    const initVideo = (video: HTMLVideoElement) => {
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.load();
      
      const attemptPlay = () => {
        video.play().catch(() => {
          const playOnInteraction = () => {
            video.play();
            ['click', 'touchstart'].forEach(event => 
              document.removeEventListener(event, playOnInteraction)
            );
          };
          
          ['click', 'touchstart'].forEach(event => 
            document.addEventListener(event, playOnInteraction)
          );
        });
      };

      video.addEventListener('loadedmetadata', attemptPlay);
      video.addEventListener('canplay', attemptPlay);
      
      if (video.readyState >= 2) {
        attemptPlay();
      }
    };

    if (videoRef1.current) initVideo(videoRef1.current);
    if (videoRef2.current) initVideo(videoRef2.current);

  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      rotateX: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-32 py-16 md:py-32 flex flex-col items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center justify-center space-y-4">
        <motion.div 
          className="relative"
          variants={textVariants}
        >
          <motion.div 
            className="absolute -top-6 -left-12 scale-50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Image
              src="/images/innovate.svg"
              alt="Innovate"
              width={120}
              height={48}
            />
          </motion.div>
          <h1 className="text-8xl font-title leading-none font-bold text-center">ACM</h1>
        </motion.div>

        <motion.div 
          className="relative"
          variants={textVariants}
        >
          <h1 className="text-8xl font-title leading-none font-bold text-center">STUDENT</h1>
          <motion.div 
            className="absolute -top-8 -right-14 scale-55"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Image
              src="/images/connect.svg"
              alt="Connect"
              width={120}
              height={48}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative mt-4"
          variants={textVariants}
        >
          <h1 className="text-8xl font-title leading-none font-bold text-center">CHAPTER</h1>
          <motion.div 
            className="absolute -bottom-4 -right-6 scale-50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Image
              src="/images/excel.svg"
              alt="Excel"
              width={120}
              height={48}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* First row with ACM and STUDENT */}
        <div className="flex items-center justify-center max-w-[1920px] w-full space-y-0" ref={ref1}>
          <motion.div 
            className="relative"
            variants={textVariants}
          >
            <h1 className="text-7xl lg:text-[220px] font-title leading-none font-bold">
              ACM
            </h1>
            <motion.div 
              className="absolute -top-6 -left-14"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Image
                src="/images/innovate.svg"
                alt="Innovate"
                width={150}
                height={60}
              />
            </motion.div>
          </motion.div>

          {/* Video section */}
          <motion.div 
            className={`
              transition-all duration-1000 ease-out mx-8 relative
              ${showContent ? 'opacity-100' : 'opacity-0'} 
              ${showBoxes ? 'w-[400px]' : 'w-0'}
            `}
          >
            <div className="h-[150px] overflow-hidden bg-black">
              <div className="relative w-full h-full">
                <video
                  ref={videoRef1}
                  className="absolute w-full h-[300px] object-cover"
                  style={{ top: '0', objectPosition: 'center top' }}
                  playsInline
                  loop
                  preload="auto"
                  muted
                >
                  <source src="/ACMVIDEO.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={textVariants}
          >
            <h1 className="text-7xl lg:text-[220px] font-title leading-none font-bold">
              STUDENT
            </h1>
            <motion.div 
              className="absolute -top-6 -right-14"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Image
                src="/images/connect.svg"
                alt="Connect"
                width={150}
                height={60}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Second row with CHAPTER */}
        <div className="flex items-center justify-center max-w-[1920px] w-full -mt-8" ref={ref2}>
          <motion.div 
            className={`
              transition-all duration-1000 ease-out mx-8 relative
              ${showContent ? 'opacity-100' : 'opacity-0'} 
              ${showBoxes ? 'w-[600px]' : 'w-0'}
            `}
          >
            <div className="h-[150px] overflow-hidden bg-black">
              <div className="relative w-full h-full">
                <video
                  ref={videoRef2}
                  className="absolute w-full h-[300px] object-cover"
                  style={{ bottom: '0', objectPosition: 'center bottom' }}
                  playsInline
                  loop
                  preload="auto"
                  muted
                >
                  <source src="/ACMVIDEO.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={textVariants}
          >
            <h1 className="text-7xl lg:text-[180px] font-title leading-none font-bold">
              CHAPTER
            </h1>
            <motion.div 
              className="absolute -bottom-1 -right-9"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Image
                src="/images/excel.svg"
                alt="Excel"
                width={150}
                height={60}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className={`
          flex flex-col sm:flex-row items-center sm:items-start justify-between 
          max-w-[1920px] w-full mt-12 px-4 sm:px-8
          space-y-6 sm:space-y-0
          transition-opacity duration-500 ease-out
        `}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="max-w-xl text-center sm:text-left">
          <p className="text-base sm:text-lg text-gray-700">
            Daring companies come to us to craft ideas, products and experiences that redefine industries and defy possibilities.
          </p>
        </div>
        <Link 
          href="/events" 
          className="group flex items-center bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl hover:bg-gray-900 transition-colors"
        >
          EVENTS
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}