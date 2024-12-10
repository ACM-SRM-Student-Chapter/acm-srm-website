"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function IntroSection() {
  const [isFixed, setIsFixed] = useState(false);
  const [shouldSwap, setShouldSwap] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('intro-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsFixed(rect.top <= 0);
        if (rect.top <= 0) {
          setShouldSwap(window.scrollY > rect.height + section.offsetTop);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="intro-section"
      className={`relative bg-white z-50 ${isFixed ? 'fixed top-0 left-0 right-0' : ''}`}
    >
      <div className="w-full min-h-screen relative">
        <div className="absolute inset-0 px-4 md:px-32">
          <div className="relative w-full h-full">
            <div className="absolute top-[10%] left-[10%]">
              <h2 className="text-7xl md:text-[220px] font-title font-bold leading-none text-black">
                ACM
              </h2>
            </div>
            <div className="absolute top-[40%] left-[30%]">
              <h2 className="text-7xl md:text-[220px] font-title font-bold leading-none text-gray-500">
                STUDENT
              </h2>
            </div>
            <div className="absolute top-[65%] right-[5%]">
              <h2 className="text-7xl md:text-[220px] font-title font-bold leading-none text-gray-500">
                CHAPTER
              </h2>
            </div>
            <div className="absolute top-10 right-0 w-[400px] h-[300px] transition-opacity duration-500">
              {!shouldSwap ? (
                <div className="relative w-full h-full">
                  <Image
                    src="/images/image.png"
                    alt="ACM Student Chapter"
                    width={400}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                  <div
                    className="absolute top-0 right-0 w-[150px] h-[150px] z-10"
                    style={{
                      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                      backgroundColor: 'var(--orange)'
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-[150px] h-[150px] z-10"
                    style={{
                      clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                      backgroundColor: 'var(--yellow)'
                    }}
                  />
                </div>
              ) : (
                <div className="p-6 bg-gray-50 rounded-lg h-full">
                  <h3 className="text-2xl font-title font-bold mb-4">Our Mission</h3>
                  <p className="text-lg font-poly leading-relaxed">
                    Empowering students through technology, innovation, and collaboration to build a better future.
                  </p>
                </div>
              )}
            </div>
            <div className="absolute bottom-20 -left-16 max-w-[500px] transition-opacity duration-500">
              {!shouldSwap ? (
                <p className="text-xl font-poly leading-relaxed">
                  Welcome to ACM, a renowned educational and computing society, where innovation meets creativity and collaboration. Be a part of our Student Chapter and connect with a global community of techies, professionals, and visionaries!
                </p>
              ) : (
                <div className="relative w-[400px] h-[300px]">
                  <Image
                    src="/images/image.png"
                    alt="ACM Student Chapter"
                    width={400}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                  <div
                    className="absolute top-0 right-0 w-[150px] h-[150px] z-10"
                    style={{
                      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                      backgroundColor: 'var(--orange)'
                    }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-[150px] h-[150px] z-10"
                    style={{
                      clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                      backgroundColor: 'var(--yellow)'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
