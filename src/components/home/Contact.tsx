"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Twitter, Linkedin, Instagram, Github, Send, Loader2, ArrowRight, 
  Mail, Phone, MapPin, Users, Book, Calendar, Search, ArrowUpRight 
} from 'lucide-react';

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
    <section className="relative min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background Pattern - Lower z-index */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(196,252,240,0.1),rgba(255,255,255,0)_50%)]" style={{ zIndex: 0 }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{ zIndex: 1 }}>
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Container - Higher z-index */}
      <div
  className="relative max-w-[1400px] mx-auto px-4 md:px-16 py-16 md:py-32"
  style={{ zIndex: 20, paddingTop: '20rem' }}
>

        {/* Header Section with Ribbons */}
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black/60 text-lg md:text-xl font-poly max-w-2xl mb-8"
            >
              Join SRM's vibrant tech community. Whether you're a student, mentor, or industry partner,
              we'd love to hear from you.
            </motion.p>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[3px] w-20 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2]"
            />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 relative" style={{ zIndex: 30 }}>
          {[
            {
              title: "Join ACM",
              description: "Become a member of our thriving tech community",
              icon: Users,
              gradient: "from-[#C4FCF0]/10"
            },
            {
              title: "Resources",
              description: "Access learning materials and technical guides",
              icon: Book,
              gradient: "from-[#FCE7E2]/10"
            },
            {
              title: "Events",
              description: "Discover upcoming workshops and meetups",
              icon: Calendar,
              gradient: "from-[#F9DEC2]/10"
            },
            {
              title: "Research",
              description: "Explore cutting-edge tech research opportunities",
              icon: Search,
              gradient: "from-[#C4FCF0]/10"
            }
          ].map((item, idx) => (
            <motion.a
              href="#"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group p-6 bg-gradient-to-br ${item.gradient} to-white rounded-2xl border border-black/5 
                hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0]/20 via-[#FCE7E2]/20 to-[#F9DEC2]/20 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-black/5 rounded-xl">
                    <item.icon className="w-6 h-6 text-black/70" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-black/40 group-hover:text-black/70 transform 
                    group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-title font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-black/60 font-poly">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative" style={{ zIndex: 30 }}>
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "SRM Institute of Science and Technology\nKattankulathur, Tamil Nadu\nIndia - 603203"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "acmsrmktr@gmail.com"
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 9840775825"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="relative z-10 bg-white/50 backdrop-blur-xl p-6 rounded-2xl border border-black/5">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-black/5 text-black/70">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-title mb-2">{item.title}</h3>
                        <p className="font-poly text-black/60 whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0]/20 via-[#FCE7E2]/20 to-[#F9DEC2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-title mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'Twitter', icon: Twitter },
                  { name: 'LinkedIn', icon: Linkedin },
                  { name: 'Instagram', icon: Instagram },
                  { name: 'GitHub', icon: Github }
                ].map((social, idx) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    href="#"
                    className="group relative p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6 text-black/70 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0]/20 via-[#FCE7E2]/20 to-[#F9DEC2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="relative">
              <div className="relative p-8 md:p-12 bg-white/50 backdrop-blur-xl rounded-2xl border border-black/5">
                <div className="space-y-6">
                  {[
                    { name: 'name', label: 'Your Name', type: 'text' },
                    { name: 'email', label: 'Email Address', type: 'email' },
                    { name: 'subject', label: 'Subject', type: 'text' }
                  ].map((field, idx) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative"
                    >
                      <input
                        {...register(field.name as keyof FormData, { required: true })}
                        type={field.type}
                        placeholder={field.label}
                        className="w-full px-6 py-4 bg-black/5 rounded-xl placeholder:text-black/30
                          focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-300
                          hover:bg-black/[0.07]"
                      />
                      {errors[field.name as keyof FormData] && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute -bottom-5 left-0 text-red-500 text-sm"
                        >
                          This field is required
                        </motion.span>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <textarea
                      {...register('message', { required: true })}
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-6 py-4 bg-black/5 rounded-xl placeholder:text-black/30
                        focus:outline-none focus:ring-2 focus:ring-black/10 transition-all duration-300
                        hover:bg-black/[0.07] resize-none"
                    />
                    {errors.message && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute -bottom-5 left-0 text-red-500 text-sm"
                      >
                        This field is required
                      </motion.span>
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`p-4 rounded-xl text-sm ${
                          submitStatus.type === 'success' 
                            ? 'bg-[#C4FCF0]/20 text-black/80' 
                            : 'bg-red-50 text-red-800'
                        }`}
                      >
                        {submitStatus.message}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-black text-white p-6 rounded-xl
                      hover:-translate-y-1 transition-all duration-300 disabled:opacity-50
                      disabled:hover:translate-y-0 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span className="font-medium">Send Message</span>
                          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 inset-0 blur-3xl">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#C4FCF0]/30 rounded-full mix-blend-multiply" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#FCE7E2]/30 rounded-full mix-blend-multiply" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F9DEC2]/30 rounded-full mix-blend-multiply" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}