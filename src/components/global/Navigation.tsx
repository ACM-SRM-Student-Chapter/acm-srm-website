'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Teams', path: '/teams' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' }
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: { duration: 0.6, ease: [0.32, 0, 0.67, 0] }
    },
    open: {
      x: 0,
      transition: { duration: 0.6, ease: [0.32, 0, 0.67, 0] }
    }
  };

  const menuItemVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  const leftSideVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.3, duration: 0.4 }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-4 md:px-12 py-4 bg-white z-40">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          <Link href="/" className="relative w-16 h-16">
            <Image
              src="/images/acm-logo.svg"
              alt="ACM Logo"
              fill
              className="object-contain"
            />
          </Link>

          <div className="hidden md:block">
            <div className="relative">
              <div
                className="absolute inset-0 bg-black transition-[width] duration-300 ease-out"
                style={{
                  width: `${scrollProgress}%`,
                  height: 'calc(100% - 1px)'
                }}
              />
              
              <div className="flex justify-center relative z-10">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className={`relative group ${
                      index === 0
                        ? 'pr-8 pl-[32px]'
                        : index === navItems.length - 1
                        ? 'pl-8 pr-[32px]'
                        : 'px-8'
                    }`}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center h-10 transition-colors duration-75 text-sm font-poly font-light text-center ${
                        scrollProgress > (index / navItems.length) * 100 
                          ? 'text-white' 
                          : 'text-black hover:opacity-70'
                      }`}
                    >
                      <span className="block">{item.name}</span>
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className={`absolute right-0 top-0 w-[1px] h-full transition-colors duration-75 ${
                        scrollProgress > ((index + 1) / navItems.length) * 100 
                          ? 'bg-white' 
                          : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300" />
            </div>
          </div>

          <button 
            className="flex items-center gap-3 group z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`text-sm font-poly font-light ${isMenuOpen ? 'text-white' : 'text-black'}`}>
              {isMenuOpen ? 'Close' : 'Menu'}
            </span>
            <Image
              src="/images/menu-icon.svg"
              alt="Menu"
              width={40}
              height={40}
              className={`object-contain hover:opacity-70 transition-opacity ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-30 overflow-hidden"
          >
            <div className="h-full w-full flex flex-col md:flex-row">
              {/* Left side content - Desktop only */}
              <motion.div 
                variants={leftSideVariants}
                className="hidden md:flex flex-col justify-between w-[400px] h-full p-16 border-r border-white/10"
              >
                <div>
                  <Image
                    src="/images/acm-logo-white.svg"
                    alt="ACM Logo"
                    width={80}
                    height={80}
                    className="mb-8"
                  />
                  <p className="text-white/60 text-sm leading-relaxed">
                    Student Chapter of ACM at SRM Institute of Science and Technology
                  </p>
                </div>
                <div className="bg-[#37A06F] p-8 rounded-lg">
                  <p className="text-white font-poly text-lg">
                    We craft experiences people resonate with through empathy and imagination
                  </p>
                </div>
              </motion.div>

              {/* Navigation items */}
              <div className="flex-1 p-6 pt-32">
                <div className="h-full flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-16">
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.name}
                        custom={i}
                        variants={menuItemVariants}
                        onHoverStart={() => setHoveredItem(item.name)}
                        onHoverEnd={() => setHoveredItem(null)}
                        className="overflow-hidden"
                      >
                        <Link 
                          href={item.path}
                          className="group flex items-center gap-4"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="relative">
                            <span className="text-white font-mango text-4xl md:text-7xl tracking-tighter transition-transform duration-300 block group-hover:-translate-y-1">
                              {item.name}
                            </span>
                            {hoveredItem === item.name && (
                              <motion.div 
                                layoutId="underline"
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                              />
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}