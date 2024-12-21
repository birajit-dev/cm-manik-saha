'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaShare, FaCalendar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Press() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const itemsPerPage = 8;

  const pressReleases = [
    {
      id: 1,
      image: '/images/press/press-1.png',
      headline: 'CM Dr. Manik Saha Inaugurates New Healthcare Facility',
      date: '2024-01-15',
      category: 'News'
    },
    {
      id: 2, 
      image: '/images/press/press-1.png',
      headline: 'Education Reform Initiative Launched in Tripura',
      date: '2024-01-12',
      category: 'Press Release'
    },
    {
      id: 3,
      image: '/images/press/press-1.png', 
      headline: 'Infrastructure Development Project Announced',
      date: '2024-01-10',
      category: 'News'
    },
    {
      id: 4,
      image: '/images/press/press-1.png',
      headline: 'Cultural Program Celebrates Tripuras Heritage',
      date: '2024-01-08',
      category: 'Editorial'
    },
    {
        id: 5,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 6,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 7,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 8,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 9,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 10,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 11,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 12,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 13,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 14,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 15,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      },
      {
        id: 16,
        image: '/images/press/press-1.png',
        headline: 'Cultural Program Celebrates Tripuras Heritage',
        date: '2024-01-08',
        category: 'Editorial'
      }
  ];

  const categories = ['All', 'Editorial', 'News', 'Interview', 'Press Release'];

  const filteredReleases = selectedCategory === 'All' 
    ? pressReleases
    : pressReleases.filter(item => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredReleases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedReleases = filteredReleases.slice(startIndex, startIndex + itemsPerPage);

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

  const handlePressClick = (id: number) => {
    router.push(`/press/${id}`);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-0 font-serif relative">
            Press Releases
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#f37216]"></span>
          </h2>
          
          <div className="flex gap-3 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#f37216] text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-[#5DB996] hover:text-white shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedReleases.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => handlePressClick(item.id)}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.headline}
                  fill
                  quality={100}
                  priority
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4WFiMeGCMhHh4hMSIeHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-4 py-1 bg-[#f37216]/10 text-[#f37216] rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendar className="mr-2" />
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-[#f37216] transition-colors duration-300">
                  {item.headline}
                </h3>
                
                <div className="flex justify-between items-center">
                  <button className="text-[#5DB996] font-medium group-hover:text-[#f37216] transition-colors duration-300">
                    Read More →
                  </button>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(item.headline);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                    aria-label="Share"
                  >
                    <FaShare size={18} className="text-gray-600 hover:text-[#f37216]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-[#f37216] text-white shadow-lg transform scale-110'
                    : 'bg-white text-gray-600 hover:bg-[#5DB996] hover:text-white shadow-md'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
