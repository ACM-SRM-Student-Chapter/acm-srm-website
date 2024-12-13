"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [showBoxes, setShowBoxes] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {

    setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Delay for expanding containers
    setTimeout(() => {
      setShowBoxes(true);
    }, 1500);

    const video1 = videoRef1.current;
    const video2 = videoRef2.current;

    if (video1 && video2) {
      video1.muted = true;
      video2.muted = true;

      const playVideos = () => {
        video1.play().catch(e => console.log("Video 1 autoplay prevented:", e));
        video2.play().catch(e => console.log("Video 2 autoplay prevented:", e));
      };

      video1.addEventListener('canplay', playVideos);
      video2.addEventListener('canplay', playVideos);

      return () => {
        video1.removeEventListener('canplay', playVideos);
        video2.removeEventListener('canplay', playVideos);
      };
    }
  }, []);

  return (
    <div className="min-h-screen w-full px-4 md:px-32 py-32 flex flex-col items-center justify-center">
      {/* First row with ACM and STUDENT */}
      <div className="flex items-center justify-center max-w-[1920px] w-full">
        <div className="relative">
          <h1 className="text-7xl md:text-[220px] font-title leading-none font-bold mt-[30px]">
            ACM
          </h1>
          <div className="absolute -top-6 -left-14">
            <Image
              src="/images/innovate.svg"
              alt="Innovate"
              width={150}
              height={60}
            />
          </div>
        </div>
        <div 
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
                autoPlay
                loop
                playsInline
                style={{
                  top: '0',
                  objectPosition: 'center top'
                }}
              >
                <source src="/ACMVIDEO.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="relative">
          <h1 className="text-7xl md:text-[220px] font-title leading-none font-bold mt-[30px]">
            STUDENT
          </h1>
          <div className="absolute -top-6 -right-14">
            <Image
              src="/images/connect.svg"
              alt="Connect"
              width={150}
              height={60}
            />
          </div>
        </div>
      </div>

      {/* Second row with CHAPTER */}
      <div className="flex items-center justify-center max-w-[1920px] w-full -mt-8">
        <div 
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
                autoPlay
                loop
                playsInline
                style={{
                  bottom: '0',
                  objectPosition: 'center bottom'
                }}
              >
                <source src="ACMVIDEO.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="relative">
          <h1 className="text-7xl md:text-[180px] font-title leading-none font-bold mt-[30px]">
            CHAPTER
          </h1>
          <div className="absolute -bottom-1 -right-9">
            <Image
              src="/images/excel.svg"
              alt="Excel"
              width={150}
              height={60}
            />
          </div>
        </div>
      </div>

 
      <div 
        className={`
          flex items-start justify-between max-w-[1920px] w-full mt-8 px-8
          transition-opacity duration-500 ease-out
          ${showContent ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="max-w-xl">
          <p className="text-lg text-gray-700">
            Daring companies come to us to craft ideas, products and experiences that redefine industries and defy possibilities.
          </p>
        </div>
        <Link 
          href="/events" 
          className="group flex items-center bg-black text-white px-8 py-4 text-xl hover:bg-gray-900 transition-colors"
        >
          EVENTS
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}