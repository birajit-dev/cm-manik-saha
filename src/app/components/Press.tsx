'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaShare, FaCalendar } from 'react-icons/fa';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      image: '/images/press/press-1.png',
      headline: 'CM Dr. Manik Saha Inaugurates New Healthcare Facility',
      date: '2024-01-15',
    },
    {
      id: 2, 
      image: '/images/press/press-1.png',
      headline: 'Education Reform Initiative Launched in Tripura',
      date: '2024-01-12',
    },
    {
      id: 3,
      image: '/images/press/press-1.png', 
      headline: 'Infrastructure Development Project Announced',
      date: '2024-01-10',
    },
    {
      id: 4,
      image: '/images/press/press-1.png',
      headline: 'Cultural Program Celebrates Tripuras Heritage',
      date: '2024-01-08',
    }
  ];

  const handleShare = (headline: string) => {
    if (navigator.share) {
      navigator.share({
        title: headline,
        text: headline,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing:', error));
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-2xl font-bold border-2 border-[#f37216] text-[#f37216] inline-block px-6 py-3 rounded-lg mb-8 text-centre font-serif hover:border-[#5DB996] hover:text-[#5DB996] transition-colors duration-300">
          Press Releases
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressReleases.map((item) => (
            <div 
              key={item.id}
              className="bg-[#F1F0E8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.headline}
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
                  {item.headline}
                </h3>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-gray-600">
                    <FaCalendar className="mr-2" />
                    <span className="text-sm">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => handleShare(item.headline)}
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
