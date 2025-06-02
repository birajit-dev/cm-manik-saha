'use client';

import Image from 'next/image';
import { FaShare, FaCalendar } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface PressRelease {
  _id: string;
  title: string;
  date: string;
  thumbnail: string;
  content: string;
  source: string;
  author: string;
  tags: string[];
  link: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export default function Press() {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const response = await fetch('http://localhost:3002/api/v1/press');
        const data = await response.json();
        setPressReleases(data);
      } catch (error) {
        console.error('Error fetching press releases:', error);
      }
    };

    fetchPressReleases();
  }, []);

  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: title,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing:', error));
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <a href="/press" className="text-2xl md:text-2xl font-bold border-2 border-[#f37216] text-[#f37216] inline-block px-6 py-3 rounded-lg mb-8 text-centre font-serif hover:border-[#5DB996] hover:text-[#5DB996] transition-colors duration-300">
          Press Releases
        </a>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressReleases.map((item) => (
            <div 
              key={item._id}
              className="bg-[#F1F0E8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => window.location.href = `/press/${item._id}`}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={`http://localhost:3002${item.thumbnail}`}
                  alt={item.title}
                  fill
                  quality={100}
                  priority
                  style={{ objectFit: 'cover', height: '100%' }}
                  className="transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4WFiMeGCMhHh4hMSIeHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 font-serif">
                  {item.title}
                </h3>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-gray-600">
                    <FaCalendar className="mr-2" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(item.title);
                    }}
                    className="text-[#f37216] hover:text-[#5DB996] transition-colors duration-300"
                    aria-label="Share"
                  >
                    <FaShare size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
