"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Navigation from "@/components/global/Navigation";
import Footer from '@/components/global/Footer';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import GlobalImpact from '@/components/about/GlobalImpact';

import { 
  LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Globe } from 'lucide-react';



import img1 from '../../../public/images/grpimg1.png';
import img2 from '../../../public/images/grpimg2.png';
import a1 from '../../../public/images/abt1.png';
import a2 from '../../../public/images/abt2.png';
import ab3 from '../../../public/images/abt3.png';
import ab4 from '../../../public/images/ab4.png';
import a3 from '../../../public/images/ac1.png';
import va from '../../../public/images/v1.png';
import vb from '../../../public/images/v2.png';
import vc from '../../../public/images/v3.png';


import abt1 from '../../../public/images/gallery/abt1.jpeg';
import abt2 from '../../../public/images/gallery/abt2.jpeg';
import abt3 from '../../../public/images/gallery/abt3.jpeg';

const fadeInUpVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};


interface HighlightCardProps {
  title: string;
  description: string;
  color?: string;
}


const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <FiInstagram size={24} />,
      href: "https://www.instagram.com/srm.acm/",
      label: "Instagram"
    },
    {
      icon: <FiLinkedin size={24} />,
      href: "https://www.linkedin.com/company/srmist-acm-student-chapter",
      label: "LinkedIn"
    },
    {
      icon: <SiDiscord size={24} />,
      href: "https://discord.gg/acm-srm",
      label: "Discord"
    },
    {
      icon: <FiGithub size={24} />,
      href: "https://github.com/ACM-SRM-Student-Chapter/",
      label: "GitHub"
    }
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.2, x: 5 }}
          className="text-gray-600 hover:text-black transition-colors duration-300"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};


const HighlightCard: React.FC<HighlightCardProps> = ({ title, description, color = "bg-white" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`${color} rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300`}
  >
    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-title tracking-wider mb-4">
      {title}
    </h3>
    <p className="font-title text-lg md:text-xl tracking-wide opacity-80">
      {description}
    </p>
  </motion.div>
);

// Scroll Progress Indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#FDDC68] 
        transform origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="">
      <ScrollProgress />
      <SocialLinks />
      <Navigation/>
      <main className="pt-24 flex flex-col">
        {/* Hero Section */}
        <div className="bg-[#FDDC68] font-title relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <p className="text-center text-black text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest lg:pt-16 pt-10">
              About Us
            </p>
            <p className="text-xl md:text-3xl lg:text-5xl text-black text-center tracking-widest pb-[60px] md:pb-24 lg:pb-40">
              Dedicated to technical, professional, and personal <br /> 
              development in the context of computer science.
            </p>
          </motion.div>

          {/* Original Decorative elements */}
          <Image
            src={va}
            alt="fig"
            className="absolute hidden md:block lg:block md:w-[18px] md:h-[11px] lg:w-[30px] lg:h-[20px] md:-mt-[243px] md:ml-[480px] lg:-mt-[390px] lg:ml-[890px]"
          />
          <Image
            src={vb}
            alt="fig"
            className="absolute hidden md:block lg:block md:w-[23px] md:h-[13px] lg:w-[35px] lg:h-[18px] -mt-[170px] ml-[240px] md:-mt-[213px] md:ml-[502px] lg:-mt-[325px] lg:ml-[930px]"
          />
          <Image
            src={vc}
            alt="fig"
            className="absolute hidden md:block lg:block md:w-[33px] md:h-[13px] lg:w-[45px] lg:h-[15px] md:-mt-[193px] md:ml-[500px] lg:-mt-[290px] lg:ml-[930px]"
          />
        </div>

{/* Original Image Grid with fixed stretching */}
<div className="flex justify-center items-start relative gap-1 md:gap-4 lg:gap-7">
  {/* First square image */}
  <div className="relative w-[87px] h-[87px] md:w-[137px] md:h-[137px] lg:w-[300px] lg:h-[300px] transform -translate-y-1/2">
    <Image
      src={abt1}
      alt="line"
      fill
      className="rounded-xl lg:rounded-3xl object-cover"
    />
  </div>
  
  {/* Second rectangular image */}
  <div className="relative w-[87px] h-[46px] md:w-[137px] md:h-[96px] lg:w-[275px] lg:h-[157px] transform -translate-y-1/2">
    <Image
      src={abt2}
      alt="line"
      fill
      className="rounded-xl lg:rounded-3xl object-cover"
    />
  </div>
  
  {/* Third square image */}
  <div className="relative w-[87px] h-[87px] md:w-[137px] md:h-[137px] lg:w-[300px] lg:h-[300px] transform -translate-y-1/2">
    <Image
      src={abt3}
      alt="line"
      fill
      className="rounded-xl lg:rounded-3xl object-cover"
    />
  </div>
  
  {/* Fourth rectangular image */}
  <div className="relative w-[87px] h-[46px] md:w-[137px] md:h-[96px] lg:w-[275px] lg:h-[157px] transform -translate-y-1/2">
    <Image
      src={img2}
      alt="line"
      fill
      className="rounded-xl lg:rounded-3xl object-cover"
    />
  </div>
</div>
        {/* Main Content - Original Empowering Minds Section */}
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-title font-semibold text-3xl md:text-5xl lg:text-7xl tracking-widest text-center"
          >
            Empowering Minds, <br />Shaping the Future of Computing.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-title text-xs md:text-xl lg:text-4xl tracking-widest text-center pt-3 lg:pt-10"
          >
            At ACM SRM, we empower students with hands-on learning and exposure to the latest tech. <br />
            By fostering collaboration and working on impactful projects based on AI and Blockchain, <br />
            we inspire members to lead and innovate. Together, we're building tomorrow's tech <br />
            leaders and changemakers.
          </motion.p>

          {/* Original Vision Boxes Section */}
          <div className="px-2">
            {/* Vision Section */}
            <div className="flex flex-row justify-center items-center gap-2 md:gap-5 lg:gap-10 pt-4 md:pt-6 lg:pt-10">
              <Image
                src={a1}
                alt="line"
                className="w-[181px] h-[146px] md:w-[251px] md:h-[206px] lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl"
              />
              
              <div className="bg-[#FF6F00] w-[181px] h-[146px] md:w-[251px] md:h-[206px] lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl py-3 px-1 md:py-5 md:px-2 lg:py-10 lg:px-8">
                <h1 className="text-black text-center font-bold font-title tracking-widest text-2xl md:text-4xl lg:text-6xl">Our Vision</h1>
                <p className="font-title text-black text-center text-[9px] md:text-[12px] lg:text-[16px] text-nowrap tracking-widest pt-2 lg:pt-4">
                  We aim to build a vibrant tech community that bridges <br />
                  the gap between theory and application. By hosting <br />
                  workshops, hackathons, and seminars, we empower <br />
                  members with industry-relevant skills, foster <br />
                  innovation, and provide a platform to thrive. Together, <br />
                  we push boundaries and shape future tech leaders.
                </p>
              </div>
            </div>

            {/* What We Do Section */}
            <div className="flex flex-row justify-center items-center gap-2 md:gap-5 lg:gap-10 pt-4 md:pt-6 lg:pt-10">
              <div className="bg-[#0A95DA] w-[181px] h-[146px] md:w-[251px] md:h-[206px] lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl py-1 px-2 md:py-5 md:px-2 lg:py-10 lg:px-8">
                <h1 className="text-black text-center font-bold font-title tracking-widest text-2xl md:text-4xl lg:text-6xl">What We Do</h1>
                <p className="font-title text-black text-center text-[9px] md:text-[12px] lg:text-[16px] text-wrap md:text-wrap tracking-widest pt-1 lg:pt-4">
                  The ACM SRM Content Team creates impactful content to engage and educate:
                </p>
                <p className="font-title text-black text-start text-[9px] md:text-[12px] lg:text-[16px] text-nowrap tracking-widest pt-1 lg:pt-4">
                  <b>Articles & Blogs:</b> Insights on tech trends and innovations. <br />
                  <b>Tutorials & Guides:</b> Learning resources for all levels. <br />
                  <b>Event Coverage:</b> Promoting and documenting club events. <br />
                  <b>Social Media:</b> Engaging posts and updates. <br />
                  <b>Newsletters:</b> Keeping members informed and connected.
                </p>
              </div>

              <Image
                src={a2}
                alt="line"
                className="w-[181px] h-[146px] md:w-[251px] md:h-[206px] lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl"
              />
            </div>

            {/* Why We Do Section */}
            <div className="flex flex-row justify-center items-center gap-2 md:gap-5 lg:gap-10 pt-4 md:pt-6 lg:pt-10 pb-10">
              <Image
                src={ab3}
                alt="line"
                className="w-[181px] h-[146px] md:w-[251px] md:h-[206px] lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl"
              />

              <div className="bg-[#FFCBB0] w-[181px] h-[146px] md:w-[251px] md:h-[206px] lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl py-1 px-2 md:py-5 md:px-4 lg:py-10 lg:px-8">
                <h1 className="text-black text-center font-bold font-title tracking-widest text-2xl md:text-4xl lg:text-6xl">Why We Do</h1>
                <p className="font-title text-black text-start text-[12px] md:text-[17px] lg:text-[28px] text-wrap md:text-nowrap tracking-widest pt-1 lg:pt-4">
                  We create content to:
                </p>
                <p className="font-title text-black text-start text-[9px] md:text-[12px] lg:text-[16px] text-nowrap tracking-widest pt-1 lg:pt-4">
                  <b>Educate:</b> Share tech insights and learning resources. <br />
                  <b>Promote:</b> Boost participation in events. <br />
                  <b>Engage:</b> Build a collaborative online community. <br />
                  <b>Showcase Talent:</b> Celebrate achievements and excellence. <br />
                  <b>Build Community:</b> Unite tech enthusiasts to learn and grow.
                </p>
              </div>
            </div>
          </div>

          {/* ACM India Section */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#C4FCF0]/10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
              className="max-w-7xl mx-auto"
            >
              <motion.h2 
                variants={fadeInUpVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-title text-center mb-16"
              >
                About ACM India
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                  variants={fadeInUpVariants}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C4FCF0] to-[#FCE7E2] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
                    <div className="relative bg-white p-8 rounded-2xl">
                      <p className="text-lg leading-relaxed mb-6">
                        ACM India is pioneering the advancement of computing as a science and profession 
                        throughout India. With a vast network of professionals and students, we're at the 
                        forefront of technological innovation and education.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                        Our mission encompasses organizing computing education activities, supporting 
                        research, and fostering collaborations between academia and industry.
                      </p>
                      <Link 
                        href="https://india.acm.org/" 
                        target="_blank"
                        className="inline-flex items-center gap-2 text-black font-semibold hover:text-[#0A95DA] transition-colors duration-300 group"
                      >
                        Learn more about ACM India 
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUpVariants}
                  className="relative h-[400px] rounded-3xl overflow-hidden group"
                >
                  <Image
                    src={a1}
                    alt="ACM India"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-4"
                    >
                      <p className="text-sm font-medium text-gray-600">
                        Join India's largest computing society and be part of the technological revolution
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* SRM Section */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#C4FCF0]/10 to-[#FCE7E2]/10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
              className="max-w-7xl mx-auto"
            >
              <motion.h2 
                variants={fadeInUpVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-title text-center mb-16"
              >
                About SRM
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                  variants={fadeInUpVariants}
                  className="relative h-[400px] rounded-3xl overflow-hidden group order-2 md:order-1"
                >
                  <Image
                    src={a2}
                    alt="SRM Campus"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-4"
                    >
                      <p className="text-sm font-medium text-gray-600">
                        A world-class institution fostering excellence in education and research
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={fadeInUpVariants}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg group hover:shadow-xl 
                    transition-all duration-300 order-1 md:order-2"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FCE7E2] to-[#C4FCF0] rounded-3xl 
                      blur opacity-20 group-hover:opacity-30 transition duration-300" />
                    <div className="relative bg-white p-8 rounded-2xl">
                      <p className="text-lg leading-relaxed mb-6">
                        SRM Institute of Science and Technology stands as a beacon of academic excellence 
                        and innovation. Our institution has consistently ranked among India's top universities, 
                        known for its cutting-edge research facilities and industry-aligned curriculum.
                      </p>
                      <Link 
                        href="https://www.srmist.edu.in/" 
                        target="_blank"
                        className="inline-flex items-center gap-2 text-black font-semibold hover:text-[#0A95DA] 
                          transition-colors duration-300 group"
                      >
                        Learn more about SRM 
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

{/* Achievements Section */}
<section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#FCE7E2]/10 to-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
              className="max-w-7xl mx-auto"
            >
              <motion.h2 
                variants={fadeInUpVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-title text-center mb-16"
              >
                Our Achievements
              </motion.h2>

              {/* Ambassador Achievement Card */}
              <motion.div
                variants={fadeInUpVariants}
                className="mb-12 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0]/20 to-[#FCE7E2]/20 rounded-3xl 
                  transform rotate-2 transition-transform duration-300 group-hover:rotate-0" />
                <div className="relative bg-white/90 p-8 rounded-3xl shadow-lg transform -rotate-1 
                  transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-48 h-48 relative overflow-hidden rounded-2xl">
                      <Image 
                        src={a3}
                        alt="Dr. M. Suchithra"
                        fill
                        className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl font-bold font-title">ACM Ambassador 2023-2024</h3>
                        <motion.div
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-3xl"
                        >
                          🏆
                        </motion.div>
                      </div>
                      <p className="text-xl text-gray-600 mb-4 font-title">Dr. M. Suchithra</p>
                      <p className="text-gray-700 leading-relaxed">
                        SRM ACM Student Chapter Faculty Sponsor & Associate Professor, C. Tech, SCO, SRMIST. 
                        Awarded for outstanding contributions and leadership in ACM. Her dedication has been 
                        instrumental in elevating our chapter's achievements and fostering a culture of excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>


              <motion.div
                  variants={fadeInUpVariants}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-3xl transform rotate-2 transition-transform duration-300 group-hover:rotate-0" />
                  <div className="relative bg-white/90 p-8 rounded-3xl shadow-lg transform -rotate-1 transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-48 h-48 relative overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-100 to-purple-100">
                        <Image
                          src={ab4}
                          alt="Ayushi Gupta"
                          fill
                          className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold font-title mb-2">ACM Winter School 2024</h3>
                        <p className="text-xl text-gray-600 mb-4 font-title">Ayushi Gupta</p>
                        <p className="text-gray-700 leading-relaxed">
                          Selected for the prestigious ACM Winter School 2024 at DA-IICT, Gandhinagar, focusing on "Algorithms for Big Data and Machine Learning". This recognition celebrates Ayushi's dedication to advancing her knowledge in cutting-edge technology and marks an exciting milestone in her academic journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
            </motion.div>
          </section>
          <GlobalImpact />
          {/* Video Section - SRM ACM Wrapped */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#C4FCF0]/10">
          
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainerVariants}
              className="max-w-7xl mx-auto"
            >
              <motion.h2 
                variants={fadeInUpVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-title text-center mb-16"
              >
                SRM ACM Wrapped
              </motion.h2>
              
              <motion.div 
                variants={fadeInUpVariants}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-black"
              >
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.youtube.com/embed/xxflPg-T0Y4"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                className="mt-8 text-center"
              >
                <p className="text-xl text-gray-600">
                  Relive our journey through the year's most impactful moments
                </p>
              </motion.div>
            </motion.div>
          </section>

          {/* Enhanced Call to Action Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0]/20 via-[#FCE7E2]/20 to-[#FDDC68]/20" />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-0 right-0 w-96 h-96 bg-[#C4FCF0]/30 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-[#FCE7E2]/30 rounded-full blur-3xl"
              />
            </motion.div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainerVariants}
              >
                <motion.h2
                  variants={fadeInUpVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-title mb-8"
                >
                  Join Our Community
                </motion.h2>
                <motion.p
                  variants={fadeInUpVariants}
                  className="text-xl md:text-2xl lg:text-3xl font-title mb-12"
                >
                  Be part of a vibrant tech community shaping the future
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  variants={fadeInUpVariants}
                  className="flex flex-wrap justify-center gap-6"
                >
                  {/* Primary CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#FDDC68] 
                      rounded-full opacity-70 group-hover:opacity-100 blur transition duration-1000 
                      group-hover:duration-200" />
                    <Link 
                      href="/join"
                      className="relative bg-black text-white font-title text-xl md:text-2xl px-12 py-4 
                        rounded-full inline-block transition-all duration-300"
                    >
                      Join ACM SRM
                    </Link>
                  </motion.div>

                  {/* Discord CTA */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="https://discord.gg/acm-srm"
                      target="_blank"
                      className="bg-[#5865F2] text-white font-title text-xl md:text-2xl px-12 py-4 
                        rounded-full inline-flex items-center gap-3 hover:bg-[#4752C4] transition-colors duration-300"
                    >
                      <SiDiscord className="text-2xl" />
                      Join Discord
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  variants={fadeInUpVariants}
                  className="mt-12 flex flex-wrap justify-center gap-8"
                >
                  {[
                    { icon: <FiInstagram size={24} />, label: "Instagram", href: "https://instagram.com/acm.srm" },
                    { icon: <FiLinkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/company/srmist-acm-student-chapter" },
                    { icon: <FiGithub size={24} />, label: "GitHub", href: "https://github.com/ACM-SRM-Student-Chapter/" }
                  ].map((social, index) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}