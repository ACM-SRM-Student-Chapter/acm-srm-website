"use client";
import React from 'react';

export default function StatementSection() {
  return (
    <section className="relative bg-white z-40 w-full min-h-screen flex items-center">
      <div className="w-full px-4 md:px-32">
        <div className="max-w-[1920px] mx-auto">
          {/* Main statement text */}
          <h2 className="text-5xl md:text-[130px] font-title leading-[0.9] font-bold mb-16">
            Let's create something
            <br />
            extraordinary together.
          </h2>

          {/* Subtitle text */}
          <p className="text-xl md:text-[60px] font-title font-light leading-[1.1] max-w-[900px] text-gray-500">
            We drive innovation through design, no matter the vision or goal you bring to the table
          </p>
        </div>
      </div>
    </section>
  );
}