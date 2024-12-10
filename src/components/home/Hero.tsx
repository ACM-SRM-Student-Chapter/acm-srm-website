"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [showBoxes, setShowBoxes] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoxes(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full px-4 md:px-32 py-32 flex flex-col items-center justify-center">
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

        <div className={`transition-all duration-1000 ease-out mx-8 ${showBoxes ? 'w-[450px]' : 'w-[50px]'}`}>
          <div className="h-[150px]">
            <div className="w-full h-full bg-gray-200" />
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

      <div className="flex items-center justify-center max-w-[1920px] w-full -mt-8">
        <div className={`transition-all duration-1000 ease-out mx-8 ${showBoxes ? 'w-[650px]' : 'w-0'}`}>
          <div className="h-[150px]">
            <div className="w-full h-full bg-gray-200" />
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
    </div>
  );
}
