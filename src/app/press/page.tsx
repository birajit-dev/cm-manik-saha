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
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-2xl font-bold border-2 border-[#f37216] text-[#f37216] inline-block px-6 py-3 rounded-lg mb-4 md:mb-0 font-serif hover:border-[#5DB996] hover:text-[#5DB996] transition-colors duration-300">
            Press Releases
          </h2>
          
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg font-serif ${
                  selectedCategory === category
                    ? 'bg-[#f37216] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-[#5DB996] hover:text-white'
                } transition-colors duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedReleases.map((item) => (
            <div 
              key={item.id}
              className="bg-[#F1F0E8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handlePressClick(item.id)}
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
                <span className="text-sm text-[#f37216] mb-2 inline-block font-serif">
                  {item.category}
                </span>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(item.headline);
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

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-serif ${
                  currentPage === page
                    ? 'bg-[#f37216] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-[#5DB996] hover:text-white'
                } transition-colors duration-300`}
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
