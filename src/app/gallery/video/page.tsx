'use client';
import React from 'react';
import { useState } from 'react';
import { FaPlay, FaShare, FaCalendar, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<null | {id: number, url: string, title: string}>(null);
  const itemsPerPage = 8;

  const videos = [
    {
      id: 1,
      thumbnail: '/images/thumbnail/thumb-1.jpg',
      title: 'CM Dr. Manik Saha Addresses Public Meeting',
      category: 'Public Events',
      date: '2024-01-15',
      url: '/videos/video-1.mp4' // Add actual video URL
    },
    {
      id: 2,
      thumbnail: '/images/thumbnail/thumb-2.jpg', 
      title: 'Development Projects in Tripura',
      category: 'Development',
      date: '2024-01-12',
      url: '/videos/video-2.mp4' // Add actual video URL
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

  const openVideoModal = (video: {id: number, url: string, title: string}) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>
            <video
              src={selectedVideo.url}
              controls
              autoPlay
              className="w-full"
              title={selectedVideo.title}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      
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
                onClick={() => openVideoModal({id: video.id, url: video.url, title: video.title})}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative">
                  <h3 className="absolute top-0 left-0 right-0 z-10 text-base font-bold text-white p-3 bg-gradient-to-b from-black/70 to-transparent line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="relative h-48">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
