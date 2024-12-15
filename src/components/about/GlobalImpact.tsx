// components/sections/GlobalImpact.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

// Types
interface StatCardProps {
  icon: string;
  number: string;
  label: string;
  color: string;
  delay?: number;
}

interface TechCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

// Animation variants
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

// Subcomponents
const StatCard: React.FC<StatCardProps> = ({ icon, number, label, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative group"
  >
    <div 
      className="absolute inset-0 rounded-2xl transform rotate-6 transition-transform duration-300"
      style={{ backgroundColor: `${color}20` }}
    />
    <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg 
      transform -rotate-3 group-hover:rotate-0 transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-4xl font-bold font-title mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  </motion.div>
);

const TechCard: React.FC<TechCardProps> = ({ icon, title, description, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50
      hover:shadow-lg transition-all duration-300"
    style={{ backgroundColor: `${color}20` }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const GlobalImpact: React.FC = () => {
  // Stats data
  const stats = [
    {
      icon: <img src="/images/icons8-globe-96.png" alt="Global Connections" className="w-8 h-8" />,
      number: '150+',
      label: 'Global Connections',
      color: '#C4FCF0'
    },
    {
      icon: <img src="/images/icons8-bookmark-96.png" alt="Research Projects" className="w-8 h-8" />,
      number: '50+',
      label: 'Research Projects',
      color: '#FCE7E2'
    },
    {
      icon: <img src="/images/icons8-award-96.png" alt="Awards Won" className="w-8 h-8" />, 
      number: '25+',
      label: 'Awards Won',
      color: '#FDDC68'
    }
  ];
  // Tech radar data
  const techRadarData = [
    { subject: 'Web Dev', A: 120, fullMark: 150 },
    { subject: 'AI/ML', A: 110, fullMark: 150 },
    { subject: 'App Dev', A: 98, fullMark: 150 },
    { subject: 'Cloud', A: 85, fullMark: 150 },
    { subject: 'Blockchain', A: 65, fullMark: 150 },
  ];

  // Tech areas data
  const techAreas = [
    {
      icon: <img src="/images/icons8-web-96.png" alt="Web Development" className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building modern web applications with Next.js, React, and cutting-edge frameworks',
      color: '#C4FCF0'
    },
    {
      icon: <img src="/images/icons8-ai-96.png" alt="Artificial Intelligence" className="w-8 h-8" />,
      title: 'Artificial Intelligence',
      description: 'Exploring machine learning, deep learning, and advanced neural networks',
      color: '#FCE7E2'
    },
    {
      icon: <img src="/images/icons8-app-96.png" alt="App Development" className="w-8 h-8" />,
      title: 'App Development',
      description: 'Creating innovative mobile solutions for iOS and Android platforms', 
      color: '#FDDC68'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0]/20 via-transparent to-[#FCE7E2]/20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-title mb-6 
              bg-clip-text text-transparent bg-gradient-to-r from-[#0A95DA] to-[#C4FCF0]">
              Global Impact & Innovation
            </h2>
          </motion.div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving technological advancement through collaboration, research, and innovation
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 0.2} />
          ))}
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left side: Stats and Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6">Technology Focus</h3>
            <p className="text-gray-600 mb-8">
              Our expertise spans across multiple domains, with a strong focus on 
              web development, AI/ML, and mobile applications.
            </p>
            
            {/* Tech Radar Chart */}
            <div className="h-[300px] w-full">
              <ResponsiveContainer>
                <RadarChart outerRadius={90} data={techRadarData}>
                  <PolarGrid stroke="#C4FCF0" />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} />
                  <Radar
                    name="Tech Focus"
                    dataKey="A"
                    stroke="#0A95DA"
                    fill="#C4FCF0"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Right side: Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C4FCF0]/20 to-[#FCE7E2]/20 
              rounded-full animate-spin-slow" />
            <DotLottieReact
              src="https://lottie.host/d0dea81b-0903-46eb-82cf-94beb308e6eb/pJrN3v4uSo.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </motion.div>
        </div>

        {/* Tech Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-20"
        >
          <h3 className="text-2xl font-bold mb-6">Technology Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techAreas.map((tech, index) => (
              <TechCard key={index} {...tech} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0]/20 via-[#FCE7E2]/20 
            to-[#FDDC68]/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold
                hover:bg-gray-800 transition-all duration-300 group"
            >
              <span className="relative z-10">Join Our Innovation Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] 
                to-[#FDDC68] opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalImpact;