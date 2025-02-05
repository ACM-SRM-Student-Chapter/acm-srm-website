'use client';

import React, { useRef, useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navigation from '@/components/global/Navigation';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';


interface GalleryItem {
  type: 'image' | 'video';
  source: string;
  caption: string;
  thumbnail?: string; 
}

interface EventDetails {
  venue: string;
  time?: string;
  duration?: string;
  schedule?: string[];
  speakers?: string[];
  highlights?: string[];
  industrialPartners?: string[];
  prizes?: string[];
  achievements?: string[];
  themes?: string[];
  perks?: string[];
  topics?: string[];
  benefits?: string[];
  format?: string[];
  requirements?: string[];
  tracks?: string[];
  takeaways?: string[];
  interviewers?: string[];
  winners?: string[];
  outcomes?: string[];
  vision?: string[];
  fullDescription?: string;
}

interface Event {
  date: string;
  month: string;
  title: string;
  description: string;
  lottieUrl: string;
  gallery: GalleryItem[];
  details: EventDetails;
}

const EventsTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedEventIndex, setExpandedEventIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  const handleScroll = (e: TouchEvent | WheelEvent) => {
    if (isModalOpen) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
    document.addEventListener('wheel', handleScroll as EventListener, { passive: false });
    document.addEventListener('touchmove', handleScroll as EventListener, { passive: false });
  } else {
    document.body.style.overflow = 'unset';
    document.removeEventListener('wheel', handleScroll as EventListener);
    document.removeEventListener('touchmove', handleScroll as EventListener);
  }

  return () => {
    document.body.style.overflow = 'unset';
    document.removeEventListener('wheel', handleScroll as EventListener);
    document.removeEventListener('touchmove', handleScroll as EventListener);
  };
}, [isModalOpen]);


  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    
    if (!container || !scrollContainer) return;

    const handleHorizontalScroll = () => {
      if (!scrollContainer || isModalOpen) return;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      scrollContainer.scrollLeft = maxScroll * scrollProgress;
    };

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    if (mediaQuery.matches) {
      window.addEventListener('scroll', handleHorizontalScroll);
      
      const totalScrollWidth = scrollContainer.scrollWidth;
      const viewportWidth = scrollContainer.clientWidth;
      const requiredHeight = `${Math.max(100, ((totalScrollWidth / viewportWidth) * 100))}vh`;
      container.style.height = requiredHeight;
    } else {
      container.style.height = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleHorizontalScroll);
    };
  }, [isModalOpen]);
  const events: Event[] = [
    {
      date: "03",
      month: "April",
      title: "Ideaforge",
      description: "A vibrant platform for individuals to tackle real-world challenges through innovative solutions, bringing together bright minds to collaborate and create.",
      lottieUrl: "https://lottie.host/dd4f6546-dffb-468f-9256-66feb4ba61d4/x0x1tHIqYF.lottie",
      gallery: [
        {
          type: "image",
          source: "/images/gallery/ev2-5.jpeg",
          caption: "Teams brainstorming solutions"
        },
        {
          type: "image",
          source: "/images/gallery/ev2-2.jpeg",
          caption: "Team Presentations",
        },
        {
          type: "image",
          source: "/images/gallery/ev2-1.jpeg",
          caption: "Team Maverick - Winners"
        },
        {
          type: "image",
          source: "/images/gallery/ev2-3.jpeg",
          caption: "Team 29 - Runners Up"
        },
        {
            type: "image",
            source: "/images/gallery/ev2-4.jpeg",
            caption: "Networking Opportunities"
        },
        {
            type: "image",
            source: "/images/gallery/ev2-6.jpeg",
            caption: "Mentorship Sessions"
        }
      ],
      details: {
        venue: "IMAC LAB, 14th Floor, Tech Park, SRMIST",
        time: "9:00 AM - 5:00 PM",
        highlights: [
          "Networking Opportunities"
        ],
        perks: [
          "Mentorship Sessions"
        ],
        achievements: [
          "15 teams participated",
          "Team Maverick - Winners",
          "Team 29 - Runners Up"
        ],
        outcomes: [
          "Innovative solutions for real-world problems",
          "Collaborative innovation environment",
          "Diverse range of ideas presented"
        ],
        fullDescription: 
          "Idea Forge was a resounding success, providing a dynamic platform for 15 teams to tackle real-world challenges with innovative solutions. Participants showcased remarkable creativity and problem-solving skills through brainstorming, refining, and presenting their ideas. The event highlighted the power of collaboration and ingenuity, and we extend our gratitude to all participants for their enthusiasm and dedication. Idea Forge marks the beginning of exciting possibilities, and we look forward to seeing these ideas evolve and create an impact."
      }

    },
    {
      date: "15",
      month: "April",
      title: "Orientation",
      description: "An engaging and inspiring start marking the revival of the chapter, featuring insights from Prof. Venkatesh Raman, President of ACM India.",
      lottieUrl: "https://lottie.host/221793c1-d004-4106-8a13-68fdd539d821/OH73UVRfC8.lottie",
      gallery: [
        {
          type: "image",
          source: "/images/gallery/ev3-1.JPG",
          caption: "Welcome Address"
        },
        {
          type: "image",
          source: "/images/gallery/ev3-2.JPG",
          caption: "Prof. Venkatesh Raman's Keynote",
        },
        {
          type: "image",
          source: "/images/gallery/ev3-3.JPG",
          caption: "Interactive Session"
        },
        {
          type: "image",
          source: "/images/gallery/ev3-4.JPG",
          caption: "Community Introduction"
        },
        {
          type: "image",
          source: "/images/gallery/ev3-5.JPG",
          caption: "Networking Break"
        }
      ],
      details: {
        venue: "IMAC Lab, 14th Floor, Tech Park, SRMIST",
        time: "9:00 AM - 11:30 AM",
        highlights: [
          "ACM India DSP Programme"
        ],
        perks: [
          "Membership works"
        ],
        speakers: [
          "Prof. Venkatesh Raman, President of ACM India",
          "Dr. M. Suchithra, Faculty Sponsor SRM ACM Student Chapter",
          "S Sembon Surakshitha"
        ],
        fullDescription: "The Orientation Session marked a vibrant restart for our community, setting an inspiring tone for the year ahead. Led by Prof. Venkatesh Raman, President of ACM India, the session highlighted key tech trends, the importance of innovation, and the transformative role of collaboration. Prof. Raman’s insights on leveraging technology and fostering growth captivated attendees, motivating them to embrace excellence. Participants were introduced to the chapter’s resources, events, and initiatives aimed at skill-building and impactful contributions. The session laid the groundwork for a year of growth, collaboration, and meaningful achievements in the tech space."
      }
    },
    {
      date: "01",
      month: "August",
      title: "Pair Programming",
      description: "A dynamic hackathon collaboration with JA Assure, Singapore, offering internship opportunities for winners alongside cash prizes.",
      lottieUrl: "https://lottie.host/63596568-196a-43e2-8487-03e8dd0b4876/rojqpKfNM6.lottie",
      gallery: [
        {
          type: "image",
          source: "/images/gallery/ev4-1.JPG",
          caption: "Teams at work"
        },
        {
          type: "image",
          source: "/images/gallery/ev4-2.JPG",
          caption: "Prize Distribution Ceremony",
        },

    {
        type: "image",
        source: "/images/gallery/ev4-3.JPG",
        caption: "Teams at work"
      },
      {
        type: "image",
        source: "/images/gallery/ev4-4.jpeg",
        caption: "Winning Teams"
      },
      ],
      details: {
        venue: "4th Floor, Tech Park, SRMIST",
        time: "9:00 AM - 5:00 PM",
        highlights: [
          "Special Cash prizes"
        ],
        perks: [
          "Internships from JA ASSURE"
        ],
        speakers: [
          "Dr. M. Pushpalatha",
          "Dr. M. Suchithra",
          "Dr. Revathi Venkataraman",
          "Dr. D. Vinod",
          "Ms. S. Sathyapriya",
          "Mr. Prabhushankar"
        ],
        industrialPartners: [
          "Mr. Wasim - JA Assure",
          "Mr. Vinoth - JA Assure",
          "Mr. Arshdeep - JA Assure"
        ],
        winners: [
          "1st Place: Team BBSx2 (Rs 15,000)",
          "2nd Place: Team NEO (Rs 10,000)",
          "3rd Place: Team In Ctrl (Rs 5000)"
        ],
        fullDescription:"In collaboration with Singapore-based JA Assure, our latest Hackathon brought together 88 teams to tackle complex challenges and develop innovative solutions in a high-energy, collaborative environment. Participants formed teams to brainstorm, prototype, and present their ideas, with the top three teams earning cash prizes and guaranteed internship opportunities at JA Assure, providing valuable industry exposure. The event showcased exceptional creativity and problem-solving skills, bridging academic talent with real-world industry applications."
      }
    },
    {
      date: "05",
      month: "September",
      title: "Health Conclave",
      description: "A comprehensive exploration of healthcare and next-generation computing technologies, featuring expert talks and interactive sessions.",
      lottieUrl: "https://lottie.host/fe04eef6-c74a-41aa-af23-491afe2cffd4/V4s0LgY8qt.lottie",
      gallery: [
        {
          type: "image",
          source: "/images/gallery/ev1-2.png",
          caption: "Opening Ceremony"
        },
        {
          type: "image",
          source: "/images/gallery/ev1-5.png",
          caption: "Expert Panel Discussion",
        },
        {
          type: "image",
          source: "/images/gallery/ev1-3.png",
          caption: "Idea Pitching Session"
        },
        {
          type: "image",
          source: "/images/gallery/ev1-1.png",
          caption: "Awards Ceremony"
        },
        {
          type: "image",
          source: "/images/gallery/ev1-4.png",
          caption: "Opening Ceremony"
        },
      ],
      details: {
        venue: "IMAC Lab, 14th Floor, Tech Park, SRMIST",
        time: "9:00 AM - 5:00 PM",
        duration: "2 days (5-6 September)",
        highlights: [
          "Networking Opportunities"
        ],
        perks: [
          "Mentorship Sessions"
        ],
        speakers: [
          "Dr. Subalalitha C.N. – Associate Professor, Computing Technologies",
          "Dr. M. Pushpalatha – Head of Department",
          "Mr. Hari S. – CEO, Bootstrappers' Research Council",
          "Mr. Ananth Kumar – Associate Director, Entrepreneurship",
          "Mr. Senthil Nayagam – Founder, Muonium AI",
          "Dr. Madhanraj Kalyanasundaram – Scientist, ICMR",
          "Mr. Anoop Menon – Assistant Professor of Architecture",
          "Dr. Vadivelan – Professor of Pediatric Physiotherapy",
          "Dr. Shantanu Patil – Director of Entrepreneurship"
        ],
        fullDescription:"The SRM ACM Health Conclave 2024 was a highly successful event that brought together over 55 participants from academia and industry to explore the transformative intersection of healthcare and next-generation computing technologies. Featuring thought-provoking talks by renowned experts, the conclave delved into topics like generative AI, deepfake detection, and innovations in the startup ecosystem, highlighting their potential to revolutionize healthcare delivery and public health research. The event also fostered creativity and collaboration through an interactive idea-pitching session, where students presented innovative solutions evaluated for their impact and feasibility. Concluding with awards for outstanding contributions, the conclave showcased the power of technology to drive progress in healthcare while inspiring participants to push the boundaries of innovation and entrepreneurship."
      }
    },
    {
      date: "25",
      month: "November",
      title: "Refresher Course on Generative AI",
      description: "A comprehensive Faculty Development Program exploring Generative AI applications across various domains, featuring international experts.",
      lottieUrl: "https://lottie.host/2465cf5b-0238-4a6c-9e76-d798850fa8ec/HljClNC1Ip.lottie",
      gallery: [
        {
          type: "image",
          source: "/images/gallery/ev5-1.jpg",
          caption: "Day 1: Fundamentals Session"
        },
        {
          type: "image",
          source: "/images/gallery/ev5-2.jpg",
          caption: "International Speaker Sessions",
        },
        {
          type: "image",
          source: "/images/gallery/ev5-3.png",
          caption: "Hands-on Workshops"
        },
        {
          type: "image",
          source: "/images/gallery/ev5-4.png",
          caption: "Group Activities"
        },
        {
          type: "image",
          source: "/images/gallery/ev5-6.png",
          caption: "Group Activities"
        },
      ],
      details: {
        venue: "IMAC Lab, 14th Floor, Tech Park, SRMIST",
        time: "9:00 AM - 5:00 PM",
        duration: "5 days (25-29 November)",
        highlights: [
          "Special Workshop"
        ],
        perks: [
          "Internship Opportunities"
        ],
        schedule: [
          "Day 1: Introduction and Fundamentals - Dr. Rajeswaran V",
          "Day 2: Healthcare Projects - Dr. Tahir Mahmood",
          "Day 3: Applications and Ethics - Mrs. Sharmila Devi & Dr. Bhargav Sagiraju",
          "Day 4: Medical Sensors - Dr. Shahzad Ahmed",
          "Day 5: Future Trends - Dr. Ganesh Neelakanta Iyer & Mr. S. Gunasekaran"
        ],
        speakers: [
          "Dr. Rajeswaran V - Senior Director, Capgemini",
          "Dr. Tahir Mahmood - Assistant Professor, Dongguk University",
          "Mrs. Sharmila Devi - Senior Technical Lead, USA",
          "Dr. Bhargav Sagiraju - AI Researcher, NUS",
          "Dr. Shahzad Ahmed - Research Assistant Professor, Hanyang University",
          "Dr. Ganesh Neelakanta Iyer - Lecturer, NUS",
          "Mr. S. Gunasekaran - Director, Pixibit Pvt. Ltd."
        ],
        fullDescription:"The Faculty Development Program (FDP), themed “Unleashing Creativity: Harnessing Generative AI for Next-Gen Innovation,” was held from 25th to 29th November 2024 at SRMIST, drawing over 100 participants to explore Generative AI applications. The sessions covered fundamentals, advanced topics, and ethical considerations, with notable speakers including Dr. Rajeswaran V from Capgemini, Dr. Tahir Mahmood from Dongguk University, and Dr. Bhargav Sagiraju from NUS. Highlights included discussions on AI applications in healthcare, media, fashion, and medical sensors, along with future directions in software engineering and personalized user experiences. The program provided valuable insights and hands-on experience, empowering participants to integrate Generative AI into their fields."
      }
    },
    {
      date: "21",
      month: "August",
      title: "Recruitment Drive 2024",
      description: "A pivotal moment marking the evolution of our chapter as we welcome a new wave of dynamic talent and diverse expertise, strengthening our foundation for future innovations.",
      lottieUrl: "https://lottie.host/d425cd5a-3c68-4d1f-945b-f3b5e9d3458b/o1SuKIRQIz.lottie",
      gallery: [
        {
          type: "image",
          source: "/images/gallery/ev6-1.jpeg",
          caption: "Interview Session"
        },
        {
          type: "image",
          source: "/images/gallery/ev6-2.jpeg",
          caption: "Technical Round"
        },
        {
          type: "image",
          source: "/images/gallery/ev6-3.jpeg",
          caption: "Group Discussion"
        },
        {
          type: "image",
          source: "/images/gallery/ev6-4.jpeg",
          caption: "Team Interaction"
        }
      ],
      details: {
        venue: "1st Floor, Tech Park, SRMIST",
        time: "5:00PM",
        duration: "21 August - 28 October 2024",
        interviewers: [
          "Nihal Sivapuram",
          "TVNSK Mohan",
          "Grahisha S",
          "Krishna P",
          "Alen Varghese"
        ],
        highlights: [
          "Multi-round selection process",
          "Technical and soft skills assessment",
          "Interactive team discussions",
          "One-on-one interviews"
        ],
        outcomes: [
          "Exceptional response from talented candidates",
          "Diverse skill set integration",
          "Enhanced chapter capabilities",
          "Strengthened innovation potential"
        ],
        vision: [
          "Foster innovation and collaboration",
          "Drive transformative initiatives",
          "Cultivate professionalism and inclusivity",
          "Achieve unprecedented milestones"
        ],
        fullDescription:"The conclusion of our recent recruitment drive marks a transformative chapter, welcoming dynamic talent and diverse expertise that align perfectly with our mission of fostering innovation and collaboration. With an exceptional pool of new members bringing unique skills and fresh perspectives, we are strategically positioned to tackle challenges, achieve milestones, and drive impactful initiatives. Their creativity and commitment to excellence promise to redefine our benchmarks, enable meaningful contributions to the community, and strengthen our legacy as a platform for innovation and growth. Together, we are poised for unprecedented accomplishments and a future of inclusivity, professionalism, and success."
      }
    }
  ];

  // Helper Components
  const LottieAnimation = ({ lottieUrl }: { lottieUrl: string }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '200px 0px',
    });

    return (
      <div ref={ref} className="w-full h-[300px] md:h-[400px]">
        {inView && (
          <DotLottieReact
            src={lottieUrl}
            autoplay
            loop
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
    );
  };
  // ImageViewer Component for full-screen gallery
  const ImageViewer = ({ 
    images, 
    currentIndex, 
    onClose, 
    onNext, 
    onPrevious 
  }: { 
    images: GalleryItem[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white z-50
            w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40
            transition-all duration-200"
        >
          <X size={24} />
        </button>

        <button
          onClick={onPrevious}
          className="absolute left-4 text-white/60 hover:text-white z-50
            w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40
            transition-all duration-200"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 text-white/60 hover:text-white z-50
            w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40
            transition-all duration-200"
        >
          <ChevronRight size={24} />
        </button>

        <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full h-full"
            >
              {images[currentIndex].type === 'image' ? (
                <Image
                  src={images[currentIndex].source}
                  alt={images[currentIndex].caption}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-full aspect-video max-h-full">
                    <iframe
                      src={images[currentIndex].source}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-center text-lg font-poly"
            >
              {images[currentIndex].caption}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const DetailsModal = ({ event, onClose }: { event: Event; onClose: () => void }) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState('overview');
    const modalContentRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      setIsModalOpen(true);
      return () => setIsModalOpen(false);
    }, []);

    const handleNext = () => {
      if (selectedImage === null) return;
      setSelectedImage((selectedImage + 1) % event.gallery.length);
    };

    const handlePrevious = () => {
      if (selectedImage === null) return;
      setSelectedImage(selectedImage === 0 ? event.gallery.length - 1 : selectedImage - 1);
    };

    const sections = [
      { id: 'overview', label: 'Overview' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'details', label: 'Event Details' },
      { id: 'highlights', label: 'Highlights & Outcomes' }
    ];

    return (
      <>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
          
          <motion.div 
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl overflow-hidden" 
            ref={modalContentRef}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-100 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-4xl font-title font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="font-poly">{event.date} {event.month}</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                    <span className="font-poly">{event.details.venue}</span>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex gap-6 border-b border-gray-100">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`pb-3 px-1 relative font-poly ${
                      activeSection === section.id 
                        ? 'text-black font-semibold' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {section.label}
                    {activeSection === section.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 180px)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Overview Section */}
                  {activeSection === 'overview' && (
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold mb-4 font-title">About the Event</h4>
                        <p className="text-gray-600 leading-relaxed font-poly">
                          {event.details.fullDescription || event.description}
                        </p>
                      </div>
                      {event.details.schedule && (
                        <div>
                          <h4 className="text-xl font-semibold mb-4 font-title">Schedule</h4>
                          <div className="space-y-3">
                            {event.details.schedule.map((item, idx) => (
                              <div key={idx} className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                                <p className="text-gray-600 font-poly">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {event.details.speakers && (
                        <div>
                          <h4 className="text-xl font-semibold mb-4 font-title">Speakers</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {event.details.speakers.map((speaker, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                                <p className="text-gray-600 font-poly">{speaker}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Gallery Section */}
                  {activeSection === 'gallery' && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {event.gallery.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          onClick={() => setSelectedImage(idx)}
                          className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                        >
                          <Image
                            src={item.source}
                            alt={item.caption}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                          />
                          <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-poly
                            transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            {item.caption}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Details Section */}
                  {activeSection === 'details' && (
                    <div className="space-y-8">
                      {Object.entries(event.details).map(([key, value]) => {
                        if (Array.isArray(value) && value.length > 0 && 
                            !['schedule', 'highlights', 'outcomes', 'vision'].includes(key)) {
                          return (
                            <div key={key}>
                              <h4 className="text-xl font-semibold mb-4 font-title capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {value.map((item, idx) => (
                                  <div key={idx} className="flex items-center gap-3 text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0" />
                                    <span className="font-poly">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}

{/* Highlights Section */}
{activeSection === 'highlights' && (
  <div className="space-y-8">
    {event.details.highlights && event.details.highlights.length > 0 && (
      <div>
        <h4 className="text-xl font-semibold mb-4 font-title">Event Highlights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {event.details.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3 text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                <span className="font-poly">{highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
    
    {event.details.outcomes && event.details.outcomes.length > 0 && (
      <div>
        <h4 className="text-xl font-semibold mb-4 font-title">Outcomes</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {event.details.outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3 text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                <span className="font-poly">{outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
)}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Full-screen Image Viewer */}
        <AnimatePresence>
          {selectedImage !== null && (
            <ImageViewer
              images={event.gallery}
              currentIndex={selectedImage}
              onClose={() => setSelectedImage(null)}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
        </AnimatePresence>
      </>
    );
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <Navigation />
      
      <div className="md:fixed relative top-24 left-0 right-0 md:h-[calc(100vh-6rem)] overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="h-full w-full md:overflow-x-hidden"
        >
          <div className="md:inline-flex flex flex-col md:flex-row md:gap-32 gap-16 p-4 md:p-16 h-full items-start">
            {/* Intro text with animation */}
            <div className="md:flex-none w-full md:w-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-mango text-lg md:text-xl whitespace-normal mb-8">
                  Unite creativity and technology as we shape the future through transformative events, ideas, connections, and a thriving community.
                </p>
                <div className="w-full h-[300px] md:h-[400px]">
                  <DotLottieReact
                    src="https://lottie.host/538b50c1-d48b-4407-9e32-2fe5a1ee17b4/qWB4zoEFhY.lottie"
                    autoplay
                    loop
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Events with alternating layout */}
            {events.map((event, index) => (
              <div key={index} className="relative md:flex-none w-full md:w-[600px]">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col gap-8"
                >
                  {/* Date and Content with responsive layout */}
                  <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex flex-col items-center">
                      <span className="font-mango text-[80px] md:text-[120px] leading-[0.8] font-bold tracking-tighter">
                        {event.date}
                      </span>
                      <span className="font-mango text-xl md:text-2xl mt-2">{event.month}</span>
                    </div>

                    <div className="pt-4">
                      <h3 className="font-mango text-4xl md:text-5xl font-bold mb-4 whitespace-normal">
                        {event.title}
                      </h3>
                      <p className="font-mango text-lg md:text-xl max-w-lg leading-relaxed whitespace-normal mb-6">
                        {event.description}
                      </p>
                      <button
                        onClick={() => setExpandedEventIndex(index)}
                        className="group relative bg-black text-white px-6 py-3 text-sm md:text-base
                          hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Know More
                          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#C4FCF0] via-[#FCE7E2] to-[#F9DEC2] 
                          opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Lottie Animation */}
                  <LottieAnimation lottieUrl={event.lottieUrl} />
                </motion.div>

                {/* Responsive Connectors */}
                {index < events.length - 1 && (
                  <>
                    {/* Desktop connector (horizontal) */}
                    <img 
                      src={`/images/curl${(index % 6) + 1}.svg`}
                      alt="connector"
                      className="absolute -right-20 top-1/4 transform -translate-y-1/2 w-40 h-12 hidden md:block"
                    />
                    {/* Mobile connector (vertical) */}
                    <img 
                      src={`/images/mcurl${(index % 6) + 1}.svg`}
                      alt="mobile connector"
                      className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 w-12 h-40 md:hidden"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {expandedEventIndex !== null && (
          <DetailsModal 
            event={events[expandedEventIndex]} 
            onClose={() => setExpandedEventIndex(null)} 
          />
        )}
      </AnimatePresence>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Accents */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div
          className="absolute top-0 left-0 w-[120vw] h-[120vh] opacity-30"
          style={{
            background: 'radial-gradient(circle at 25% 25%, #C4FCF0 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[120vw] h-[120vh] opacity-30"
          style={{
            background: 'radial-gradient(circle at 75% 75%, #FCE7E2 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default EventsTimeline;