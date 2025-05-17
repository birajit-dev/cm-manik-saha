'use client';
import { useState } from 'react';
import { FaPlay, FaShare, FaCalendar, FaHome } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const videos = [
    {
      id: 1,
      thumbnail: '/images/thumbnail/thumb-1.jpg',
      title: 'CM Dr. Manik Saha Addresses Public Meeting',
      category: 'Public Events',
      date: '2024-01-15'
    },
    {
      id: 2,
      thumbnail: '/images/thumbnail/thumb-2.jpg', 
      title: 'Development Projects in Tripura',
      category: 'Development',
      date: '2024-01-12'
    },
    // Add more video items as needed
  ];

  const categories = ['All', 'Public Events', 'Development', 'Interviews', 'Cultural'];

  const filteredVideos = selectedCategory === 'All'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVideos = filteredVideos.slice(startIndex, startIndex + itemsPerPage);

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
    <>
      
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-2xl font-bold border-2 border-[#f37216] text-[#f37216] inline-block px-6 py-3 rounded-lg mb-4 md:mb-0 font-serif hover:border-[#5DB996] hover:text-[#5DB996] transition-colors duration-300">
              VIDEO GALLERY
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
            {paginatedVideos.map((video) => (
              <div 
                key={video.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <h3 className="absolute top-0 left-0 right-0 z-10 text-base font-bold text-white p-3 bg-gradient-to-b from-black/70 to-transparent line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="relative h-48">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#f37216] flex items-center justify-center">
                        <FaPlay className="text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 flex items-center gap-2">
                      <div className="flex items-center text-white text-sm bg-black/70 px-2 py-1 rounded">
                        <FaCalendar className="mr-1" />
                        {new Date(video.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(video.title);
                        }}
                        className="p-2 bg-black/70 rounded-full hover:bg-black/80 transition-colors duration-300"
                        aria-label="Share"
                      >
                        <FaShare size={14} className="text-white" />
                      </button>
                    </div>
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
    </>
  );
}
