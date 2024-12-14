"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';


const MarqueeRibbons = () => {
  const text1 = "GET IN TOUCH • START A CONVERSATION • JOIN ACM SRM • ";
  const text2 = "INNOVATE • CONNECT • EXCEL • ACM STUDENT CHAPTER • ";
  const ribbonItems = Array(8).fill(text1);
  const ribbonItems2 = Array(8).fill(text2);

  return (
    <div className="absolute -top-[25vh] -left-[100vw] right-[100vw] h-96 pointer-events-none sm:block hidden" style={{ zIndex: 40 }}>
      {/* First Ribbon - Left to Right */}
      <div className="absolute top-0 left-0 right-0 h-14 rotate-[4deg] transform-gpu">
        <div className="animate-marquee-left whitespace-nowrap flex">
          {ribbonItems.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center h-14 bg-black text-white whitespace-nowrap px-8"
            >
              <span className="text-sm tracking-wider font-poly">{item}</span>
            </div>
          ))}
          {ribbonItems.map((item, idx) => (
            <div 
              key={`duplicate-${idx}`}
              className="flex items-center h-14 bg-black text-white whitespace-nowrap px-8"
            >
              <span className="text-sm tracking-wider font-poly">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Ribbon - Right to Left */}
      <div className="absolute top-16 left-0 right-0 h-14 rotate-[-4deg] transform-gpu">
        <div className="animate-marquee-right whitespace-nowrap flex">
          {ribbonItems2.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center h-14 bg-[#C4FCF0] text-black whitespace-nowrap px-8"
            >
              <span className="text-sm tracking-wider font-poly">{item}</span>
            </div>
          ))}
          {ribbonItems2.map((item, idx) => (
            <div 
              key={`duplicate-${idx}`}
              className="flex items-center h-14 bg-[#C4FCF0] text-black whitespace-nowrap px-8"
            >
              <span className="text-sm tracking-wider font-poly">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = useForm<FormData>();

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section className="relative bg-white min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-16 py-16 md:py-32">
        {/* Header with Ribbons */}
        <div className="relative mb-16 md:mb-32">
          <MarqueeRibbons />
          <div className="pt-8 md:pt-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-8xl font-title font-bold leading-none mb-6"
            >
              Let's Connect
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[3px] w-20 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2]"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-title mb-3 md:mb-4">Visit Us</h3>
              <p className="font-poly text-sm md:text-base text-black/60 leading-relaxed">
                SRM Institute of Science and Technology<br />
                Kattankulathur, Tamil Nadu<br />
                India - 603203
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-title mb-3 md:mb-4">Contact</h3>
              <p className="font-poly text-sm md:text-base text-black/60 leading-relaxed">
                Email: acm@srmist.edu.in<br />
                Phone: +91 XXXX XXXX XX
              </p>
            </div>
            <div>
            <h3 className="text-lg md:text-xl font-title mb-3 md:mb-4">Follow Us</h3>
            <div className="flex gap-3 md:gap-4">
              {[
                { name: 'Twitter', icon: Twitter },
                { name: 'LinkedIn', icon: Linkedin },
                { name: 'Instagram', icon: Instagram },
                { name: 'GitHub', icon: Github }
              ].map(({ name, icon: Icon }) => (
                <a 
                  key={name}
                  href="#" 
                  aria-label={name}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/5 hover:bg-black/10 
                    flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-black/40" />
                </a>
              ))}
            </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            {/* Form Fields */}
            {[
              { name: 'name', label: 'Name', type: 'text' },
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'subject', label: 'Subject', type: 'text' },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  {...register(field.name as keyof FormData, { 
                    required: `${field.label} is required` 
                  })}
                  type={field.type}
                  placeholder={field.label}
                  className="w-full px-0 py-3 md:py-4 bg-transparent border-b-2 border-black/10 
                    placeholder:text-black/40 focus:border-black focus:outline-none transition-colors
                    text-sm md:text-base"
                />
                {errors[field.name as keyof FormData] && (
                  <span className="absolute -bottom-5 left-0 text-red-500 text-xs md:text-sm">
                    {errors[field.name as keyof FormData]?.message}
                  </span>
                )}
              </div>
            ))}

            <div className="relative">
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={4}
                placeholder="Your message"
                className="w-full px-0 py-3 md:py-4 bg-transparent border-b-2 border-black/10 
                  placeholder:text-black/40 focus:border-black focus:outline-none transition-colors 
                  resize-none text-sm md:text-base"
              />
              {errors.message && (
                <span className="absolute -bottom-5 left-0 text-red-500 text-xs md:text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Status */}
            {submitStatus.type && (
              <div className={`py-2 md:py-3 px-3 md:px-4 rounded-lg text-xs md:text-sm ${
                submitStatus.type === 'success' 
                  ? 'bg-[#C4FCF0]/20 text-black/80' 
                  : 'bg-red-50 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative bg-black text-white px-6 md:px-8 py-3 md:py-4 mt-4 md:mt-6
                hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base w-full md:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2] 
                opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full px-4 md:px-16 py-8 md:py-12 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex items-center gap-4 md:gap-6">
            <Image
              src="/images/acm-logo.svg"
              alt="ACM Logo"
              width={40}
              height={40}
              className="md:w-[60px] md:h-[60px]"
              priority
            />
            <div className="text-base md:text-lg font-title">
              SRMIST-KTR<br />
              STUDENT CHAPTER
            </div>
          </div>
          <p className="text-xs md:text-sm font-poly text-black/60 text-center md:text-left">
            ACM SRM © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}