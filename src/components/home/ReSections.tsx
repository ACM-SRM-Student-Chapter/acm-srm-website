"use client";

import React from 'react';
import Image from 'next/image';

export default function ReSections() {
  return (
    <div className="services-flex_wrapper">
      {/* RE sticky container */}
      <div className="services-absolute">
        <div className="w-[300px] h-[460px] bg-[#FF6F00] flex items-center justify-center">
          <h1 className="text-[400px] font-title font-bold leading-none text-white mt-12">RE</h1>
        </div>
      </div>

      {/* Content sections */}
      <div className="services-block_wrapper">
        {/* IMAGINING Section */}
        <div className="services-block bg-[#F9DEC2]">
          <div className="flex flex-col max-w-2xl ml-2">
            <div className="relative">
              <h2 className="text-[200px] font-title font-bold leading-none mb-4">
                IMAGINING
              </h2>
              <Image
                src="/images/creativity.svg"
                alt="Creativity"
                width={100}
                height={40}
                className="absolute right-36 -top-6 -rotate-12"
              />
            </div>
            <p className="text-xl max-w-[400px]">
              Crafting impactful visuals and experiences that inspire, communicate, and resonate with the audience.
            </p>
          </div>
          <div className="relative w-[250px] h-[250px] -ml-16">
            <Image
              src="/images/ilu1.svg"
              alt="Design Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* LINKING Section */}
        <div className="services-block bg-[#C4FCF0]">
          <div className="flex flex-col max-w-2xl ml-2">
            <div className="relative">
              <h2 className="text-[200px] font-title font-bold leading-none mb-4">
                LINKING
              </h2>
              <Image
                src="/images/networks.svg"
                alt="Networks"
                width={100}
                height={40}
                className="absolute right-64 top-24 -rotate-12"
              />
            </div>
            <p className="text-xl max-w-[400px]">
              Building meaningful relationships and bridges between individuals, ideas, and opportunities for growth.
            </p>
          </div>
          <div className="relative w-[250px] h-[250px] -ml-16">
            <Image
              src="/images/ilu2.svg"
              alt="Corporate Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* MAKING Section */}
        <div className="services-block bg-[#FCE7E2]">
          <div className="flex flex-col max-w-2xl ml-2">
            <div className="relative">
              <h2 className="text-[200px] font-title font-bold leading-none mb-4">
                MAKING
              </h2>
              <Image
                src="/images/innovation.svg"
                alt="Innovation"
                width={100}
                height={40}
                className="absolute right-[100] top-28 -rotate-12"
              />
            </div>
            <p className="text-xl max-w-[400px]">
              Transforming ideas into groundbreaking solutions that define the future of technology and progress.
            </p>
          </div>
          <div className="relative w-[250px] h-[250px] -ml-16">
            <Image
              src="/images/ilu3.svg"
              alt="Technical Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* EXECUTING Section */}
        <div className="services-block bg-[#F9DEC2]">
          <div className="flex flex-col max-w-2xl ml-2">
            <div className="relative">
              <h2 className="text-[200px] font-title font-bold leading-none mb-4">
                EXECUTING
              </h2>
              <Image
                src="/images/precision.svg"
                alt="Precision"
                width={100}
                height={40}
                className="absolute right-32 -top-6 -rotate-12"
              />
            </div>
            <p className="text-xl max-w-[400px]">
              Bringing visions to life through seamless planning, coordination, and flawless execution of events.
            </p>
          </div>
          <div className="relative w-[250px] h-[250px] -ml-16">
            <Image
              src="/images/ilu4.svg"
              alt="Event Management Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

