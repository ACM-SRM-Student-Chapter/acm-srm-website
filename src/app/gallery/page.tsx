// app/gallery/page.tsx
"use client";
import Navigation from "@/components/global/Navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Camera, Filter, Users, Calendar, Award } from "lucide-react";
import Footer from '@/components/global/Footer';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  size: 'small' | 'medium' | 'large';
}

const GalleryImage: React.FC<{ image: GalleryImage }> = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sizeClasses = {
    small: 'h-[200px] md:h-[250px]',
    medium: 'h-[300px] md:h-[400px]',
    large: 'h-[400px] md:h-[500px] md:col-span-2'
  }[image.size];

  return (
    <>
      <div className={`relative group ${sizeClasses} transition-all duration-300 ease-in-out`}>
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {!imageError ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setIsLoading(false)}
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Image not found</span>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 
            transition-all duration-300 flex items-center justify-center opacity-0 
            group-hover:opacity-100 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <Camera className="text-white w-8 h-8 transform scale-95 group-hover:scale-100 transition-all duration-300" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-contain max-h-full"
              width={1200}
              height={800}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
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
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const filters = ['All', 'Events', 'Workshops', 'Team'];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        setImages(data);
        setFilteredImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(image => image.category === activeFilter));
    }
  }, [activeFilter, images]);

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
            <GalleryStats totalImages={images.length} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex bg-[#FFCBB0] justify-center items-center lg:h-[28rem] md:h-[20rem] sm:h-[16rem] h-[16rem]">
        <h1 className="text-black text-center font-bold lg:text-7xl md:text-5xl sm:text-4xl text-3xl leading-tight sm:mt-12 mt-[80px] sm:px-4 px-8 md:mt-12">
          Welcome to the<br />Gallery of ACM
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
              <Calendar className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-semibold">Technical Events</h3>
            </div>
            <p className="text-gray-600">
              Discover our hackathons, coding competitions, and technical workshops that 
              bring together brilliant minds and foster innovation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-purple-500" />
              <h3 className="text-xl font-semibold">Community Building</h3>
            </div>
            <p className="text-gray-600">
              Experience the collaborative spirit of our chapter through networking events, 
              team activities, and community outreach programs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-8 h-8 text-yellow-500" />
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
      <main className="max-w-[90%] mx-auto mt-8 pb-16">
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

        {isLoading ? (
          // Loading State
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-[300px] bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          // Gallery Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <GalleryImage key={image.id} image={image} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredImages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <Camera className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">No images found for this category</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}