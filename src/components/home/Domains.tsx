"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Domains() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const domainItems = [
    {
      icon: "/images/corporate.svg",
      name: "Corporate",
      width: 909,
      height: 610,
      mobileWidth: 270, 
      mobileHeight: 181 
    },
    {
      icon: "/images/design.svg",
      name: "Design",
      width: 554,
      height: 523,
      mobileWidth: 165,
      mobileHeight: 156  
    },
    {
      icon: "/images/technical.svg",
      name: "Technical",
      width: 713,
      height: 533,
      mobileWidth: 212, 
      mobileHeight: 159  
    },
    {
      icon: "/images/event.svg",
      name: "Event Management",
      width: 790,
      height: 526,
      mobileWidth: 235,
      mobileHeight: 156  
    }
  ];

  const lines = ["/images/line.svg", "images/line2.svg", "/images/line3.svg"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
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
        ease: "easeOut"
      }
    }
  };

  const domainVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { 
      opacity: 0,
      scaleX: 0
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-16 lg:px-32 py-8 md:py-16" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full flex flex-col items-center"
      >
        <motion.p 
          variants={titleVariants} 
          className="mb-2 md:mb-4 text-lg md:text-[24px]"
        >
          Together, we excel in
        </motion.p>
        
        <motion.h2 
          variants={titleVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[150px] font-title font-bold text-center leading-tight mb-12 md:mb-24"
        >
          OUR DOMAINS
        </motion.h2>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center space-y-16">
          {domainItems.map((domain, index) => (
            <motion.div 
              key={domain.name}
              className="flex flex-col items-center relative"
              variants={domainVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                variants={hoverVariants}
                className="flex items-center justify-center mb-[40px]"
              >
                <Image
                  src={domain.icon}
                  alt={domain.name}
                  width={domain.mobileWidth}
                  height={domain.mobileHeight}
                  className="object-contain"
                />
              </motion.div>
              <motion.span 
                variants={hoverVariants}
                className="text-2xl font-poly font-bold absolute bottom-0"
              >
                {domain.name}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center w-full max-w-[1600px] overflow-x-auto">
          {domainItems.map((domain, index) => (
            <div key={domain.name} className="flex items-center">
              <motion.div 
                className="flex flex-col items-center gap-6 cursor-pointer"
                variants={domainVariants}
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                <motion.div
                  variants={hoverVariants}
                  className="transition-transform relative flex items-center justify-center"
                >
                  <Image
                    src={domain.icon}
                    alt={domain.name}
                    width={domain.width}
                    height={domain.height}
                    className="object-contain"
                  />
                </motion.div>
                <motion.span 
                  variants={hoverVariants}
                  className="text-xl lg:text-2xl font-poly font-bold"
                >
                  {domain.name}
                </motion.span>
              </motion.div>
              
              {index < domainItems.length - 1 && (
                <motion.div 
                  className="flex items-center mx-4 lg:mx-6"
                  variants={lineVariants}
                >
                  <Image
                    src={lines[index]}
                    alt="connecting line"
                    width={80}
                    height={120}
                    className="object-contain lg:w-[120px]"
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}