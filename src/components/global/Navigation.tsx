"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Teams', path: '/teams' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/about' }
  ];

  return (
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

        <button className="flex items-center gap-3 group">
          <span className="text-sm font-poly font-light">Menu</span>
          <Image
            src="/images/menu-icon.svg"
            alt="Menu"
            width={40}
            height={40}
            className="object-contain hover:opacity-70 transition-opacity"
          />
        </button>
      </div>
    </nav>
  );
}