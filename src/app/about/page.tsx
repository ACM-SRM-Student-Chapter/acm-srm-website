"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/global/Navigation";


import img1 from '../../../public/images/grpimg1.png';
import img2 from '../../../public/images/grpimg2.png';
import a1 from '../../../public/images/abt1.png';
import a2 from '../../../public/images/abt2.png';
import a3 from '../../../public/images/abt3.png';
import va from '../../../public/images/v1.png';
import vb from '../../../public/images/v2.png';
import vc from '../../../public/images/v3.png';


interface HighlightCardProps {
  title: string;
  description: string;
  color?: string;
}

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

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="">
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

          {/* Decorative elements */}
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

        {/* Image Grid */}
        <div className="flex justify-center items-start relative gap-1 md:gap-4 lg:gap-7">
          <Image
            src={img1}
            alt="line"
            className="w-[87px] h-[87px] md:w-[137px] md:h-[137px] lg:w-[300px] lg:h-[300px] rounded-xl lg:rounded-3xl transform -translate-y-1/2"
          />
          <Image
            src={img2}
            alt="line"
            className="w-[87px] h-[46px] md:w-[137px] md:h-[96px] lg:w-[275px] lg:h-[157px] rounded-xl lg:rounded-3xl transform -translate-y-1/2"
          />
          <Image
            src={img1}
            alt="line"
            className="w-[87px] h-[87px] md:w-[137px] md:h-[137px] lg:w-[300px] lg:h-[300px] rounded-xl lg:rounded-3xl transform -translate-y-1/2"
          />
          <Image
            src={img2}
            alt="line"
            className="w-[87px] h-[46px] md:w-[137px] md:h-[96px] lg:w-[275px] lg:h-[157px] rounded-xl lg:rounded-3xl transform -translate-y-1/2"
          />
        </div>

        {/* Achievement Stats Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0]/20 via-[#FCE7E2]/20 to-[#FDDC68]/20" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#C4FCF0]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FCE7E2]/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Stats Content */}
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-title mb-4">
                Our Impact
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#C4FCF0] to-[#FCE7E2] mx-auto" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Events Stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4FCF0]/10 to-[#FCE7E2]/10 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300" />
                <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-title mb-2 bg-gradient-to-r from-[#C4FCF0] to-[#FCE7E2] bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-lg md:text-xl font-title tracking-wider text-gray-700">
                    Events Organized
                  </div>
                </div>
              </motion.div>

              {/* Members Stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCE7E2]/10 to-[#FDDC68]/10 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300" />
                <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-title mb-2 bg-gradient-to-r from-[#FCE7E2] to-[#FDDC68] bg-clip-text text-transparent">
                    1000+
                  </div>
                  <div className="text-lg md:text-xl font-title tracking-wider text-gray-700">
                    Active Members
                  </div>
                </div>
              </motion.div>

              {/* Projects Stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FDDC68]/10 to-[#C4FCF0]/10 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300" />
                <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-title mb-2 bg-gradient-to-r from-[#FDDC68] to-[#C4FCF0] bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-lg md:text-xl font-title tracking-wider text-gray-700">
                    Projects Completed
                  </div>
                </div>
              </motion.div>

              {/* Partners Stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCE7E2]/10 to-[#C4FCF0]/10 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300" />
                <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-title mb-2 bg-gradient-to-r from-[#FCE7E2] to-[#C4FCF0] bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-lg md:text-xl font-title tracking-wider text-gray-700">
                    Industry Partners
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
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
                src={a3}
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

          {/* Technical Domains Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-title text-center mb-16"
              >
                Technical Domains
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <HighlightCard
                  title="AI & Machine Learning"
                  description="Exploring cutting-edge AI technologies and applications"
                  color="bg-[#C4FCF0]"
                />
                <HighlightCard
                  title="Web Development"
                  description="Building modern web applications and services"
                  color="bg-[#FCE7E2]"
                />
                <HighlightCard
                  title="Blockchain"
                  description="Innovating with distributed ledger technologies"
                  color="bg-[#FDDC68]"
                />
                <HighlightCard
                  title="Cloud Computing"
                  description="Leveraging cloud platforms and services"
                  color="bg-[#0A95DA]/20"
                />
                <HighlightCard
                  title="Cybersecurity"
                  description="Securing digital assets and infrastructure"
                  color="bg-[#FCE7E2]/40"
                />
                <HighlightCard
                  title="IoT & Robotics"
                  description="Creating smart and connected systems"
                  color="bg-[#C4FCF0]/30"
                />
              </div>
            </div>
          </section>

          {/* Join Us Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-[#C4FCF0]/20 to-[#FCE7E2]/20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-title mb-8"
              >
                Join the Journey
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-title mb-12"
              >
                Be part of a community that's shaping the future of technology
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-black text-white font-title text-xl md:text-2xl px-12 py-4 rounded-full
                  hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                Join ACM SRM
              </motion.button>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full px-4 md:px-32 py-16 border-t border-gray-200">
            <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6">
                <Image
                  src="/images/acm-logo.svg"
                  alt="ACM Logo"
                  width={80}
                  height={80}
                  priority
                />
                <div className="text-xl font-title">
                  SRMIST-KTR
                  <br />
                  STUDENT CHAPTER
                </div>
              </div>
              <p className="text-sm font-poly">
                ACM SRM © {new Date().getFullYear()}. All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}