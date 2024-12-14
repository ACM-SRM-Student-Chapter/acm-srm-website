
"use client";
import Navigation from "@/components/global/Navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Camera, Filter, Users, Calendar, Award } from "lucide-react";


interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
  date?: string;
}

interface GalleryImageProps {
  src: string;
  alt: string;
}


const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery-1.png", alt: "Gallery Image 1", category: "Events", date: "2024-01" },
  { id: 2, src: "/images/gallery-3.png", alt: "Gallery Image 2", category: "Workshops", date: "2024-01" },
  { id: 3, src: "/images/gallery-2.png", alt: "Gallery Image 3", category: "Team", date: "2024-02" },
  { id: 4, src: "/images/gallery-4.png", alt: "Gallery Image 4", category: "Events", date: "2024-02" },
  { id: 5, src: "/images/gallery-5.png", alt: "Gallery Image 5", category: "Workshops", date: "2024-02" },
  { id: 6, src: "/images/gallery-6.png", alt: "Gallery Image 6", category: "Team", date: "2024-03" },
  { id: 7, src: "/images/gallery-7.png", alt: "Gallery Image 7", category: "Events", date: "2024-03" },
  { id: 8, src: "/images/gallery-8.png", alt: "Gallery Image 8", category: "Workshops", date: "2024-03" },
  { id: 9, src: "/images/gallery-9.png", alt: "Gallery Image 9", category: "Team", date: "2024-03" },
  { id: 10, src: "/images/gallery-10.png", alt: "Gallery Image 10", category: "Events", date: "2024-04" },
  { id: 11, src: "/images/gallery-11.png", alt: "Gallery Image 11", category: "Workshops", date: "2024-04" },
  { id: 12, src: "/images/gallery-5.png", alt: "Gallery Image 12", category: "Team", date: "2024-04" },
];


const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="mb-4 break-inside-avoid group relative">
      <div 
        className={`relative rounded-lg overflow-hidden ${
          isLoading ? 'bg-gray-200 animate-pulse' : ''
        }`}
      >
        {!imageError ? (
          <Image
            className="rounded-lg object-cover w-full h-auto transition-all duration-300 hover:brightness-75"
            src={src}
            alt={alt}
            width={500}
            height={500}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Failed to load image</span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black bg-opacity-50 p-2 rounded-full">
            <Camera className="text-white w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};


const GalleryStats: React.FC<{ totalImages: number }> = ({ totalImages }) => (
  <div className="animate-slide-right hidden sm:block">
    <div className="flex items-center gap-2">
      <Camera className="w-6 h-6" />
      <span className="text-sm font-medium">{totalImages} Photos</span>
    </div>
  </div>
);


export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const filters = ['All', 'Events', 'Workshops', 'Team'];


  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Interactive Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="animate-slide-left">
              <p className="text-lg font-semibold">Capturing Moments</p>
              <p className="text-sm opacity-80">Explore our journey through pictures</p>
            </div>
            <GalleryStats totalImages={galleryImages.length} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex bg-[#FFCBB0] justify-center items-center lg:h-[28rem] md:h-[20rem] sm:h-[16rem] h-[16rem]">
        <h1 className="text-black text-center font-bold lg:text-7xl md:text-5xl sm:text-4xl text-3xl leading-tight sm:mt-12 mt-[80px] sm:px-4 px-8 md:mt-12">
          Welcome to the
          <br />
          Gallery of ACM
        </h1>
      </div>

{/* Description Section */}
<div className="max-w-[90%] mx-auto mt-16 mb-12">
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl font-bold mb-6">Capturing Our Journey</h2>
    <p className="text-gray-600 mb-8">
      Step into ACM SRMIST KTR Chapter's visual chronicle - where every image tells a story 
      of innovation, learning, and community. From technical workshops to team celebrations, 
      explore the moments that shape our vibrant tech community.
    </p>
  </div>

  {/* Stats Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img src="images/icons8-calendar-60.png" alt="Calendar" className="w-8 h-8 text-blue-500" />
        <h3 className="text-xl font-semibold">Technical Events</h3>
      </div>
      <p className="text-gray-600">
        Discover our hackathons, coding competitions, and technical workshops that 
        bring together brilliant minds and foster innovation.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img src="images/icons8-investment-60.png" alt="Users" className="w-8 h-8 text-purple-500" />
        <h3 className="text-xl font-semibold">Community Building</h3>
      </div>
      <p className="text-gray-600">
        Experience the collaborative spirit of our chapter through networking events, 
        team activities, and community outreach programs.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img src="images/icons8-instantsend-60.png" alt="Award" className="w-8 h-8 text-yellow-500" />
        <h3 className="text-xl font-semibold">Chapter Milestones</h3>
      </div>
      <p className="text-gray-600">
        Celebrate our achievements, awards, and recognition that showcase our 
        commitment to excellence in technology and education.
      </p>
    </div>
  </div>
</div>
      {/* Gallery Section */}
      <main className="max-w-[90%] mx-auto mt-8">
        {/* Filters */}
        <div className="sticky top-0 z-10 bg-white py-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            <Filter className="w-5 h-5 text-gray-500" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-4">
          {filteredImages.map((image) => (
            <GalleryImage key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <Camera className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">No images found for this category</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full px-4 py-8 border-t border-gray-200 mt-8">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/acm-logo.svg"
              alt="ACM Logo"
              width={140}
              height={140}
              priority
            />
            <div className="text-3xl font-bold tracking-wide">
              <hr className="border-2 border-black w-full mb-2" />
              <div className="flex flex-col">
                SRMIST-KTR
                <br />
                <span className="text-sm font-bold self-end">
                  STUDENT CHAPTER
                </span>
              </div>
              <hr className="border-2 border-black w-full mt-2" />
            </div>
          </div>
          <div className="flex flex-col">
            <hr className="border-2 border-black w-[328px] mb-3" />
            <p className="text-sm">
              ACM SRM © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}