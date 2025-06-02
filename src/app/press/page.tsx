'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaShare, FaCalendar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

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
}

export default function Press() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const itemsPerPage = 8;

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

  const categories = ['All', ...Array.from(new Set(pressReleases.map(item => item.tags).flat()))];

  const filteredReleases = selectedCategory === 'All' 
    ? pressReleases
    : pressReleases.filter(item => item.tags.includes(selectedCategory));

  const totalPages = Math.ceil(filteredReleases.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedReleases = filteredReleases.slice(startIndex, startIndex + itemsPerPage);

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

  const handlePressClick = (id: string) => {
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
              key={item._id}
              className="bg-[#F1F0E8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handlePressClick(item._id)}
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
                <span className="text-sm text-[#f37216] mb-2 inline-block font-serif">
                  {item.source}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 font-serif">
                  {item.title}
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
